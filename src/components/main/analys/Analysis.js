import React from "react";
import StatisticListFC from './StatisticList.js';
import StatisticMenuFC from './StatisticMenu.js';
import graph from '../img/graph_statis.png';
import HeadingFC from "../Heading.js";


export default function AnalysisFC() {
	const position = [
		{ ind: 1, title: "Активы" },
		{ ind: 2, title: 'Компании' },
		{ ind: 3, title: 'Отрасли' },
		{ ind: 4, title: 'Валюта' }
	];
	return (
		<section className=" pt-6 analysis w-[432px] min-h-[476px] bg-white rounded-2xl" >
			<HeadingFC title='Аналитика' />
			<div className="total_money pl-10 pt-4 grow pи-8 text-base text-[#13161C]">
				<span className="text-[34px] min-w-min pr-7 ">500000.37</span>
			</div>
			<StatisticMenuFC menu={position} />
			<div className="analys_graph pt-16 pl-10 max-w-full flex flex-row flex-wrap">
				<span>3 актива</span>
				<div>
					<img src={graph} />
				</div>
				<StatisticListFC />
			</div>
		</section>
	)
}