import React from "react";
import vector_white from '../img/vector_white.svg';

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
			<div className="broker_strategy_preview">
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

			</div>
		</>

	)
}