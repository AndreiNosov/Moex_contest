import React from "react";
export default function StatisticMenuFC(prop) {
	const menu = prop.menu;
	return (
		<div className="analys_menu">
			<ul className="menu flex flex-nowrap menu-horizontal ">
				{
					menu.map(item => (
						<li key={item.ind} className="flex-1"><span>{item.title}</span></li>
					))
				}

			</ul>
		</div>
	)
}
