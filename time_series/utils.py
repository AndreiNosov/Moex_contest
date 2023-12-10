from moexalgo import Market, Ticker
from typing import Tuple, Optional
from pathlib import Path
import pandas as pd
import datetime

default_starttime = '2023-10-10'
now_datetime = datetime.datetime.now().strftime("%Y-%m-%d")

VALID_PERIODS = ['1m', '10m', '1h', 'D', 'W', 'M', 'Q']
TIMES_MAP = {}
TIMES_MAP['1m'] = 1
TIMES_MAP['10m'] = TIMES_MAP['1m'] * 10
TIMES_MAP['1h'] = TIMES_MAP['10m'] * 6
TIMES_MAP['D'] = TIMES_MAP['1h'] * 24
TIMES_MAP['W'] = TIMES_MAP['D'] * 7
TIMES_MAP['M'] = TIMES_MAP['W'] * 4
TIMES_MAP['Q'] = TIMES_MAP['M'] * 4


### For all companies
class StatsBase:
      """
      Базовый класс для работы со статистикой рынка
      market_name, board_id аналогичны market_name, board_id из moexalgo

      dataframes: словарь датафреймов с ключами, являющимися датами вида yyyy-mm-dd
      secs: множество всех доступных компаний на рынке 
      """
      def __init__(self, market_name = 'stocks', board_id = None) -> None:
            self.market_name, self.board_id = market_name, board_id
            self.market = Market(market_name, board_id)

            self.dataframes = {}
            self.secs = set()

            # TODO: Market -> Share
      
      def __from_csv__(self, filepath):
            return pd.read_csv(filepath)
      

      def add_new_date(self, name: str, date: str, csv_filepath: str | Path):
            """
            Добавляет к статистике tradestats/orderstats данные за еще один день
            Чтение данных ведется через API Algopack / загруженный csv
            """
            new_stats, new_secs = self.get_stats(name,date, csv_filepath)
            self.dataframes[date] = new_stats
            self.secs.update(new_secs)


      def get_stats(self, name: str, date: str, csv_filepath: str | Path):
            """
            Возвращает конкретный вид статистики по рынку (tradestats/orderstats)
            """
            if csv_filepath is None:
                  df = getattr(self.market, name)(date=date)
                  df = pd.DataFrame(df)
            else:
                  df = self.__from_csv__(csv_filepath)
            # print(df.columns)
            unique_secs = df['secid'].unique().tolist()

            return df, set(unique_secs)

class Tradestats(StatsBase):
      """
      Tradestats для всех компаний на рынке
      Метод добавления новой даты использует тот же интерфейс, что и у базового класса
      """
      def __init__(self, 
                   market_name,
                   board_id,
                   date,
                   csv_filepath=None,
                   **kwargs) -> None:
            super().__init__(market_name, board_id, **kwargs)

            self.name = 'tradestats'
            self.dataframes[date], self.secs = super().get_stats(name=self.name,
                                                date=date,
                                                csv_filepath=csv_filepath)
            

      def add_new_date(self, new_date, csv_filepath=None):
            super().add_new_date(name=self.name, date=new_date, csv_filepath=csv_filepath)


class OrderStats(StatsBase):
      """
      OrderStats для всех компаний на рынке
      Метод добавления новой даты использует тот же интерфейс, что и у базового класса
      """
      def __init__(self, 
                   market_name: str,
                   board_id: str,
                   date: str,
                   csv_filepath=None,
                   **kwargs) -> None:
            super().__init__(market_name, board_id, **kwargs)
            self.name = 'orderstats'
            self.dataframes[date], self.secs = super().get_stats(name=self.name,
                                                date=date,
                                                csv_filepath=csv_filepath)
            
      def add_new_date(self, new_date, csv_filepath=None):
            
            super().add_new_date(name=self.name, date=new_date, csv_filepath=csv_filepath)
            
### For single company

class CompanyStats:
      """
      Класс для работы со статистикой коннкретной компании
      name, period аналогичны name, period из Algopack API
      """
      def __init__(self, name = "SBER", default_period = '10m') -> None:
            self.name = name
            self.default_period = default_period
            self.ticker = Ticker(name)


      def get_candles(self, dates, period = None):
            date, till_date = dates
            # period = self.default_period if period is None else period
            period = period or self.default_period

            candles = self.ticker.candles(date=date, till_date=till_date, period=period)
            candles = pd.DataFrame(candles)
            candles.drop(columns=['end'], inplace=True)
            return candles
      
      def get_tradestats(self, dates):
            date, till_date = dates
            tradestats = self.ticker.tradestats(date=date, till_date=till_date)
            return pd.DataFrame(tradestats)

      def get_orderstats(self, dates):
            date, till_date = dates
            orderstats = self.ticker.orderstats(date=date, till_date=till_date)
            return pd.DataFrame(orderstats)
      
      

if __name__ == "__main__":
    

      sber_stats = CompanyStats()
      stats_kwargs = dict(
            dates=('2023-10-11', '2023-10-12'),
            # period='1h'
      )
      candles = sber_stats.get_tradestats(**stats_kwargs)
      print(candles)


