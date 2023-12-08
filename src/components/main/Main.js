import React from "react";
import StatisticsFC from './Statistics.js'
import AnalyticsFC from "./analys/Analitics.js";
import LastEventsFC from "./last_events/LastEvents.js";
import OpenBankFC from './bank_account/OpenBank.js'
import LastInvestFC from './last_invest/Investment.js';
import BrokerPageFC from './broker_strategy_type/StrategyPage.js';
export default function MainFC() {
	return (
		<main className="pl-6 ">
			<div className="top_reference">
				<a href="#">Назад к портфелю</a>
			</div>

			{ /* Main page - главная страница
			Чтоб видеть "Выберите тип счета"
				- вставьте класс (afqk App.js)"<div className='content pt-6 flex openk_bank">"
				- ниже раскоментировать "Выберите тип счета"


				- Страница "Последние инвестиции"
				- "<div className='content pt-6 flex  last_invest">"


				- Страница "Последние события"
				- "<div className='content pt-6 flex last_events_page">"


				- Окно "Модальное"
				- См. "App.js"
				- Расскоментировать "	<ModelFC />" строку


				
				- "Самостоятельно" вкладка для ЗАГРУЗКИ файла
					Читать ниже + 
					"StrategyPage.js" - расскоментиироваро код в файле .


			*/}
			{ /* " Main page  главная страница "  */}
			{/* <section className=" rounded-2xl mb-6">
				<StatisticsFC />
			</section>
			<section className="analytics mb-4 ">
				<AnalyticsFC />
			</section>
			<section className="events rounded-2xl bg-white rounded-2xl min-h-[476px] grow pt-6">

				<LastEventsFC />
			</section> */}


			{ /* "Выберите тип счета"  */}
			{/* <section className=" rounded-2xl mb-6">
				<OpenBankFC />
			</section> */}


			{ /* "Последние инвестиции"  */}
			{/* <section className=" rounded-2xl mb-6">
				<div className=" flex grow">

					<LastInvestFC />
				</div>
			</section> */}



			{/* Окно "Модальное"
				Страницв выбрать 
				"Выберите тип стратегии" - bg-image - событие отпускаем клик - при открытом выподающем меню
				  стрелка возвращется в баpовое положение


					Меню:
					- Создать бота
					- Через брокера
					- Самостоятельно, активная вкладка владеет классом ".active"



					"Самостоятельно" вкладка для ЗАГРУЗКИ файла
					- добавляется class="upload" - main> section[class="events"] > div "<div className="broker upload">"
			*/}

			<section className="events rounded-2xl bg-white rounded-2xl min-h-[476px] grow pt-6">
				{/* <ModelFC /> */}
				<BrokerPageFC />  {/** - "Выберите тип стратегии" вкладка "Через брокера" */}
				{/**"StrategyPage.js" - расскоментиироваро код в файле . */}
			</section> 

		</main>
	)
} 