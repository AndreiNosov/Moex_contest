import React from "react";
import StatisticsFC from './Statistics.js'
import AnalyticsFC from "./analys/Analitics.js";
import LastEventsFC from "./last_events/LastEvents.js";
import OpenBankFC from './bank_account/OpenBank.js'
import LastInvestFC from './last_invest/Investment.js';

export default function MainFC() {
	return (
		<main className="pl-6 ">
			<div className="top_reference">
				<a href="#">Назад к портфелю</a>
			</div>

			{ /* Main page  главная страница 
			Чтоб видеть "Выберите тип счета" 
				- вставьте класс "<div id="root" class="openk_bank">"
				- ниже раскоментировать "Выберите тип счета" 


				- Страница "Последние инвестиции" 
				- "<div id="root" class=" last_invest">"


				- Страница "Последние события"
				- "<div id="root" class="last_events_page">"

		
				- Окно "Модальное"
				- Смю "App.js"
				- Расскоментировать "	<ModelFC />" строку
			
			
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



			{/* Окно "Модальное"*/}
			<section className="events rounded-2xl bg-white rounded-2xl min-h-[476px] grow pt-6">

				<LastEventsFC />
			</section> 

		</main>
	)
} 