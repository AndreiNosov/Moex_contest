import React from "react";
import StatisticsFC from './Statistics.js'
import AnalyticsFC from "./analys/Analitics.js";

export default function MainFC() {
	return (
		<main className="pl-6">
			<section className="rounded-2xl mb-6">
				<StatisticsFC />
			</section>
			<section><AnalyticsFC /></section>
			<section></section>
		</main>
	)
}