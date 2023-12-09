import React from "react";

import WaitingWayFC from "../../../pages/WaitingWay";


export default function StrategyTypyFC() {

	return (

		<>
			<div className="broker_strategy_menu">
				<ul className="menu menu-vertical lg:menu-horizontal rounded-box">
					<li>
						<span>Создать робота</span>
						<div className="preview">
						</div>
					</li>
					<li className="active">
						<span>Через брокера</span>
						<div className="preview">
						</div>
					</li>
					<li>
						<span>Самостоятельно</span>
						<div className="preview">
						</div>
					</li>
				</ul>

			</div>
			<div className="waiting">
				{/** This's only the info block  */}
				<WaitingWayFC />
			</div>
		</>

	)
}