import React from "react";
import StatisticsFC from './Statistics.js'
import AnalyticsFC from "./analys/Analitics.js";
import LastEventsFC from "./last_events/LastEvents.js";
import OpenBankFC from './bank_account/OpenBank.js'

export default function MainFC() {
	return (
		<main className="pl-6">
			{ /* Main page  главная страница 
			Чтоб видеть "Выберите тип счета" 
				- вставьте класс "<main className="pl-6 openk_bank">"
				- ниже раскоментировать "Выберите тип счета" 
			
			
			*/}
			<section className=" rounded-2xl mb-6">
				<StatisticsFC />
			</section>
			<section className="analytics mb-4 ">
				<AnalyticsFC />
			</section>
			<section className="events rounded-2xl bg-white rounded-2xl min-h-[476px] grow pt-6">

				<LastEventsFC />
			</section>


			{ /* "Выберите тип счета"  */}
			{/* <section className=" rounded-2xl mb-6">
				<OpenBankFC />
			</section> */}

		</main>
	)
}