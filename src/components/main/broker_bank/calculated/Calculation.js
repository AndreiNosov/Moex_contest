import React from "react";

import HeadingFC from "../../../../pages/Heading.js";
import LastInvestFC from "../../last_invest/Investment.js";
import CarouselFC from "../../../../pages/Carousel.js";
import circule from '../img/circule_icon.svg';
import pensile from '../img/icon_pencil.svg';
import reports from '../img/icon_reports.svg';
import note from '../img/note.svg'
import icon_withdraw_money from '../img/icon_withdraw_money.svg';

/**
 * Брокерский счёт
 * src\components\main\broker_bank\calculated\Calculation.js
 * @returns 
 */
export default function CalculationFC() {
	return (

		<div className="broker calculation">

			<div className="">
				<HeadingFC title="Брокерский счет" />


			</div>
			<div className="slider">
				<CarouselFC />
			</div>
			<div className="child_header">
				<HeadingFC title="Действия" />
				<span>Свернуть</span>
			</div>
			<div className="info_calculate">
				<div className="to-do">
					<ul className="to-do-menu">
						<li> <spam>Попонить счет</spam> <img src={circule} /></li>
						<li> <spam>Вывести деньги</spam><img src={icon_withdraw_money} /></li>
						<li> <spam>Справки и отчеты</spam><img src={reports} /></li>
						<li> <spam>Переименовать счет</spam><img src={pensile} /></li>
						<li> <spam>О счете</spam><img src={note} /></li>
					</ul>
				</div>
				<HeadingFC title='Акции' />
				<LastInvestFC />

			</div>

		</div>)
}