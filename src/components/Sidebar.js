import React from "react";

export default function SidebarFC(prop) {
	return (
		<sidebar className="bg-white rounded-2xl">
			<div className="title">
				<h1>Брокерские счета</h1>
			</div>
			<div className="counter">
				<div className="counter counter_money">
					<span ></span>
				</div>
				<div className="counter counter_money">
					<span className="counter_money__today"></span>
					<span className="counter_money__percerntiles"></span>

				</div>
			</div>
		</sidebar>
	)
}