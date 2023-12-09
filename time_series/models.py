from copy import deepcopy
import warnings
import pandas as pd
from typing import List

warnings.filterwarnings(action="ignore")

from etna.ensembles import StackingEnsemble

from etna.datasets import TSDataset

from etna.analysis import (
    get_anomalies_median,
    get_anomalies_density,
    get_anomalies_prediction_interval,
    get_anomalies_hist,
)


from etna.models import CatBoostMultiSegmentModel
from etna.analysis import ModelRelevanceTable, RelevanceTable, StatisticsRelevanceTable
from etna.analysis import get_model_relevance_table, get_statistics_relevance_table
from etna.analysis import plot_backtest

from etna.core import load
model = CatBoostMultiSegmentModel(thread_count=8)

# transforms
from etna.transforms import LagTransform
from etna.transforms import MeanTransform
from etna.transforms import DateFlagsTransform
from etna.transforms import LogTransform, LinearTrendTransform, TimeSeriesImputerTransform


# feature selectors
from sklearn.tree import DecisionTreeRegressor
from etna.transforms import TreeFeatureSelectionTransform, FilterFeaturesTransform, GaleShapleyFeatureSelectionTransform, MRMRFeatureSelectionTransform

model_feature_selection = DecisionTreeRegressor(random_state=42)
feature_selector_transform = TreeFeatureSelectionTransform(model=model_feature_selection, top_k=5)

from etna.metrics import SMAPE, MAE






def split_data(ts, test_size):
    return ts.train_test_split(test_size=test_size)

def get_feature_importance():
    pass

catboost_pipe = {'model': CatBoostMultiSegmentModel(thread_count=8),
                 'transforms': []}
from etna.pipeline import Pipeline

class Trainer:
    def __init__(self,
                 target_col = 'close',
                 features_to_remove = ['1'],
                 pipe_kwargs = catboost_pipe,
                 feature_selector = None) -> None:
        
        if feature_selector:
            pipe_kwargs['transforms'] += [feature_selector]

        self.pipe = Pipeline(**pipe_kwargs)
        self.target_col = target_col
        self.features_to_remove = features_to_remove
        # print(self.pipe)

    def convert_df_to_ts(self, df, freq='10 min'):
        df = TSDataset.to_dataset(df=df)
        ts = TSDataset(df, freq=freq)
        return ts
    
    def prepare_df(self, 
                   df: pd.DataFrame,
                   target_col: str,
                   columns_to_drop: List = [''],
                   timestamp_column_name='begin',
                   segment_period='Y',
                   merge_timestamps = True):
        
        # df['']
        
        df.drop(columns=columns_to_drop, inplace=True)

        start_timestamp = df.iloc[0][timestamp_column_name]
        df['segment'] = df[timestamp_column_name].dt.to_period(segment_period)
        if merge_timestamps:
            df['timestamp'] = start_timestamp + pd.TimedeltaIndex(df.index * 10, 'min') # 10 min
            # todo: add true date as feature
        else:
            df['timestamp'] = df[timestamp_column_name]

        df.rename(columns={target_col: 'target'}, inplace=True)
        df.set_index(timestamp_column_name, inplace=True)

        return self.convert_df_to_ts(df)
    def fit(self, train_ts):
        self.pipe = self.pipe.fit(ts=train_ts, save_ts=False)

    def forecast(self, ts):
        preds = self.pipe.forecast(ts=ts)

        return preds
    

    def do_backtest(self, ts, metrics, **backtest_kwargs):
        metrics_df, forecast_df, fold_info_df = self.pipe.backtest(ts=ts, metrics=metrics, **backtest_kwargs)
        return metrics_df, forecast_df, fold_info_df

    def plot_backtest(self, ts, forecast_df, history_len, segments):
        plot_backtest(forecast_df, ts, history_len=100, segments=ts.segments[:4])

    def save_pipeline(self, path = 'pipeline.zip'):
        self.pipe.save(path)

    def load_pipeline(self, path):
        return load(path)


# pip(**catboost_pipe)
if __name__ == "__main__":
    from utils import CompanyStats
    df = CompanyStats().get_tradestats(('2023-12-04', '2023-12-05'))


    tr = Trainer(pipe_kwargs=catboost_pipe)
    ts = tr.prepare_df(df=df,
                  target_col='pr_close',
                  columns_to_drop=['secid'],
                  timestamp_column_name='ts')
    
    train_ts, test_ts = split_data(ts, test_size=50)
    tr.fit(train_ts=train_ts)

    backtest_res = tr.do_backtest(test_ts, metrics=[SMAPE(), MAE()])
    print(backtest_res[0])
    # print(ts.df.index)