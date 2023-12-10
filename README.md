# ML

 # utils
 Содержит интерфейсы для получения данных (tradestats, orderstats, candles) за нужный промежуток времения в нужной гранулярности как в рамках одной компании, так и рынка в целом

 # models
 Содержит Интерфейсы для обучения и дообучения модели предсказания целевой переменной (по умолчанию это цена закрытия), выполнения предсказания, выполнения и визуализации backtesta, а также оценку значимости признаков для приниятия решения моделью и поиска аномалий во временном ряде.
 
 
 Интерфейсы позволяют анализировать не только свечи, но и статистику по сделкам / заявкам, тем самым полность
 Пример использования в ```usage.ipynb```