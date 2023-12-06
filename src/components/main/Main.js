import React from "react";
import StatisticsFC from './Statistics.js'
import AnalyticsFC from "./analys/Analitics.js";

export default function MainFC() {
	return (
		<main className="pl-6">
			<section>
				<StatisticsFC />
			</section>
			<section><AnalyticsFC /></section>
			<section></section>
		</main>
	)
}