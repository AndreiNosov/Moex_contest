import React from "react";
import AnalysisFC from './Analysis.js'
import LastInvestFC from "../last_invest/Investment.js";
export default function AnalyticsFC() {

	return (
		<div className=" flex grow">
			<AnalysisFC />
			<LastInvestFC />
		</div>
	)
}