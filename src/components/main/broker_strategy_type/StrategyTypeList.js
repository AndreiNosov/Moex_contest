import React from "react";

import WaitingWayFC from "../../../pages/WaitingWay";


export default function StrategyTypyFC(props) {

	return (
		<>
			<div className="broker_strategy_menu">
				<ul className="menu menu-vertical lg:menu-horizontal rounded-box">
					<li>
						<span onClick={() => { props.handleClick(1)}}>Создать робота</span>
						<div className="preview">
						</div>
					</li>
					<li className="preview">
						<span onClick={() => { props.handleClick(2)}}>Через брокера</span>
						<div className="preview">
						</div>
					</li>
					<li>
						<span onClick={() => { props.handleClick(3)}}>Самостоятельно</span>
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
