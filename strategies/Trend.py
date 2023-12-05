import pandas as pd
import numpy as np
from typing import Optional
import datetime
from moexalgo import Market, Ticker

class ADXStrategy:
    def __init__(self,
                 threshold = 25,
                 lookback = 14) -> None:
        
        self.threshold = threshold
        self.lookback = lookback
    def get_adx(self, high: pd.Series, low: pd.Series, close: pd.Series, lookback):
        """
        """
        plus_dm = high.diff()
        minus_dm = low.diff()
        plus_dm[plus_dm < 0] = 0
        minus_dm[minus_dm > 0] = 0
        
        tr1 = pd.DataFrame(high - low)
        tr2 = pd.DataFrame(abs(high - close.shift(1)))
        tr3 = pd.DataFrame(abs(low - close.shift(1)))
        frames = [tr1, tr2, tr3]
        tr = pd.concat(frames, axis = 1, join = 'inner').max(axis = 1)
        atr = tr.rolling(lookback).mean()
        
        plus_di = 100 * (plus_dm.ewm(alpha = 1/lookback).mean() / atr)
        minus_di = abs(100 * (minus_dm.ewm(alpha = 1/lookback).mean() / atr))
        dx = (abs(plus_di - minus_di) / abs(plus_di + minus_di)) * 100
        adx = ((dx.shift(1) * (lookback - 1)) + dx) / lookback
        adx_smooth = adx.ewm(alpha = 1/lookback).mean()
        return plus_di, minus_di, adx_smooth
    
    def implement_adx_strategy(self, prices, pdi, ndi, adx):
        """
        """
        buy_price = []
        sell_price = []
        adx_signal = []
        signal = 0
        
        # print(f"{prices=}")
        for i in range(0, len(prices)):
            # print(f"{i=}")
            if adx[i-1] < self.threshold and adx[i] > self.threshold and pdi[i] > ndi[i]:
                if signal != 1:
                    buy_price.append(prices[i])
                    sell_price.append(np.nan)
                    signal = 1
                    adx_signal.append(signal)
                else:
                    buy_price.append(np.nan)
                    sell_price.append(np.nan)
                    adx_signal.append(0)
            elif adx[i-1] < self.threshold and adx[i] > self.threshold and ndi[i] > pdi[i]:
                if signal != -1:
                    buy_price.append(np.nan)
                    sell_price.append(prices[i])
                    signal = -1
                    adx_signal.append(signal)
                else:
                    buy_price.append(np.nan)
                    sell_price.append(np.nan)
                    adx_signal.append(0)
            else:
                buy_price.append(np.nan)
                sell_price.append(np.nan)
                adx_signal.append(0)
        return buy_price, sell_price, adx_signal

    def prepare_df(self, df: pd.DataFrame, lookback: Optional[int] = None):
        
        """
        df : tradestats df
        """
        lookback = self.lookback if lookback is None else lookback

        df['plus_di'] = pd.DataFrame(self.get_adx(df['high'], df['low'], df['close'], lookback)[0]).rename(columns = {0:'plus_di'})
        df['minus_di'] = pd.DataFrame(self.get_adx(df['high'], df['low'], df['close'], lookback)[1]).rename(columns = {0:'minus_di'})
        df['adx'] = pd.DataFrame(self.get_adx(df['high'], df['low'], df['close'], lookback)[2]).rename(columns = {0:'adx'})
        df = df.dropna()
        return df
    
    def run(self, df):
        prices = df['close'].tolist()
        pdi = df['plus_di'].tolist()
        ndi = df['minus_di'].tolist()
        adx = df['adx'].tolist()

        buy_price, sell_price, adx_signal = self.implement_adx_strategy(prices, pdi, ndi, adx)

        # return buy_price, sell_price, adx_signal
        position = []
        for i in range(len(adx_signal)):
            if adx_signal[i] > 1:
                position.append(0)
            else:
                position.append(1)
        
        for i in range(0, len(df['close'])):
            print(f'{i=}')
            if adx_signal[i] == 1:
                position[i] = 1
            elif adx_signal[i] == -1:
                position[i] = 0
            else:
                position[i] = position[i-1]
                
        close_price = df['close']
        plus_di = df['plus_di']
        minus_di = df['minus_di']
        adx = df['adx']
        adx_signal = pd.DataFrame(adx_signal).rename(columns = {0:'adx_signal'}).set_index(df.index)
        position = pd.DataFrame(position).rename(columns = {0:'adx_position'}).set_index(df.index)

        frames = [close_price, plus_di, minus_di, adx, adx_signal, position]
        strategy = pd.concat(frames, join = 'inner', axis = 1)
        strategy = strategy.to_json(orient='records')
        return buy_price, sell_price, strategy
    

if __name__ == "__main__":
    strategy = ADXStrategy()

    now_datetime = datetime.datetime.now().strftime("%Y-%m-%d")

    sber = Ticker('SBER')
    sber_candles = sber.candles(date='2023-10-10', till_date=now_datetime, period='10m')
    sber_candles = pd.DataFrame(sber_candles)
    
    sber_candles = strategy.prepare_df(sber_candles)
    print(sber_candles.to_csv('sber_prepared.csv'))
    res = strategy.run(sber_candles)

    print(res[0])



