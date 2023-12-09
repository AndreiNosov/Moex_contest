import React from "react"
import vector_white from './img/vector_white.svg';


/**
 *  src\pages\WaitingWay.js
 * Thi's a info block below the menu from  a page broker's types strategies. Looks to - src\pages\StrategyTypeList.js
 * @returns 
 */
export default function WaitingWayFC() {


	return (
		<ul className="">
			<li>
				<span>Выбор финансового дома</span>
				<div className="preview">
					<img src={vector_white} />
				</div>
			</li>
			<li>
				<span>Подключитесь к брокеру</span>
				<div className="preview">
					2
				</div>
			</li>
			<li>
				<span>Подключитесь к брокеру</span>
				<div className="preview">
					3
				</div>
			</li>
		</ul>
	)
}