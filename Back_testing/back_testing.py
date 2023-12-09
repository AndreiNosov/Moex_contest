import pandas as pd
import numpy as np
import time
from backtesting import Strategy
from backtesting.lib import dateutils

class SimpleStrategy(Strategy):
    def __init__(self):
        super().__init__()
        self.tradestats = None

    def init(self):
        # method to download and store trade statistics data
        self.tradestats = pd.read_csv('path_to_tradestats.csv')  # Load the pre-downloaded trade statistics data
        # Perform any necessary data preprocessing or initialization

    def next(self):
        # Calculate indicators based on the trade statistics data
        if len(self.tradestats) > 0:
            # Example 1: Calculate simple moving average (SMA) of closing prices
            window = 20
            if len(self.tradestats) >= window:
                self.tradestats['SMA'] = self.tradestats['pr_close'].rolling(window=window).mean()
        
            # Example 2: Calculate the relative strength index (RSI) of the price data
            delta = self.tradestats['pr_close'].diff()
            gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
            loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
            RS = gain / loss
            self.tradestats['RSI'] = 100 - (100 / (1 + RS))

    def stop(self, order):
        # Define exit conditions based on the calculated indicators or other criteria
        if len(self.tradestats) > 0:
            last_entry = self.tradestats.iloc[-1]
            # Example 1: Exit condition based on the SMA crossover
            if last_entry['pr_close'] < last_entry['SMA']:
                self.sell()

            # Example 2: Condition based on the RSI crossing over 70 from above
            if last_entry['RSI'] > 70:
                self.sell()

# Create an instance of the strategy and run backtesting
if __name__ == "__main__":
    strategy = SimpleStrategy()
    backtesting.run(strategy, start_date='2023-01-01', end_date='2023-12-09', initial_capital=10000)
