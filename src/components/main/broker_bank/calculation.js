import React from "react";
import CarouselFC from "../../../pages/Carousel.js";
import HeadingFC from "../../../pages/Heading.js";
import LastInvestFC from "../last_invest/Investment.js";

export default function CalculationFC() {
	return (

		<div className="broker calculation">
			<HeadingFC title="Брокерский счет" />
		<div className="info_sum">
			<span>200 890.98</span>
		</div>
		<div className="info_calculate">
				<p>dddddddddddddddddddddddddddd</p>
				<CarouselFC />
				<LastInvestFC />
		</div>

		</div>)
}