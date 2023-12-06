import React from "react";
import graph from '../img/graph_statis.png';
import gray from '../img/gray.png';
import black from '../img/black.png';
import red from '../img/red.png';

export default function AnalysisFC() {
	return (
		<section className="bg-white pt-6 analysis w-[432px] min-h-[476px] bg-white rounded-2xl" >
			<div className="name grow pl-10 font-normal  text-base text-[#727272]">
				<h6>Аналитика</h6>
			</div>
			<div className="total_money pl-10 pt-4 grow pи-8 text-base text-[#13161C]">
				<span className="text-[34px] min-w-min pr-7 ">500000.37</span>
			</div>
			<div className="analys_menu">
				<ul className="menu flex flex-nowrap menu-horizontal ">
					<li className="flex-1">
						<a href="/">Активы</a></li>
					<li className="flex-1"><a href="/">Компании</a></li>
					<li className="flex-1"><a href="/">Отрасли</a></li>
					<li className="flex-1"><a href="/">Валюта</a></li>
				</ul>
			</div>
			<div className="analys_graph pt-16 pl-10 max-w-full flex flex-row flex-wrap">
				<span>3 актива</span>
				<div>
					<img src={graph} />
				</div>
				<div className=" grow flex flex-col ">
					<ul className="list_investment">
						<li className=" grow flex-nowrap flex">
							<img src={gray} />
							<span>Акции</span>
						</li>
						<li className=" grow flex-nowrap flex">
							<img src={black} />
							<span>Облигации</span>
						</li>
						<li className=" grow flex-nowrap flex">
							<img src={red} />
							<span>Валюта и металы</span>
						</li>
					</ul>

				</div>
			</div>
		</section>
	)
}