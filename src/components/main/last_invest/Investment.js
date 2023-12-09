import React from "react";
import HeadingFC from "../../../pages/Heading.js";
import RowFC from './Row.js';

import black from './img/black.svg';
import gray from './img/gray.svg';
import green from './img/green.svg';
import red from './img/red.svg';
const dataInvest = [
	{ ind: 1, img: black, name: 'Мечел', subname: 'MTLR', price: 287.8, date: '15.12.2023', totalPrice: 2870.7, dynamic: 20.78, percerntiles: 20.8 },
	{ ind: 2, img: green, name: 'Сбер Банк', subname: 'MTLR', price: 300.7, date: '1.11.2023', totalPrice: 10087.7, dynamic: 20.78, percerntiles: 20.8 },
	{ ind: 3, img: gray, name: 'Мечел', subname: 'MTLR', price: 150.98, date: '26.10.2023', totalPrice: 2870.7, dynamic: 10.7, percerntiles: 1.7 },
	{ ind: 4, img: red, name: 'Лукойл', subname: 'MTLR', price: 1500.0, date: '20.10.2023', totalPrice: 3987.7, dynamic: -2.78, percerntiles: 2.8 },
	{ ind: 5, img: black, name: 'Мечел', subname: 'MTLR', price: 478.7, date: '20.10.2023', totalPrice: 487.7, dynamic: -14.78, percerntiles: 15.8 },
	{ ind: 6, img: green, name: 'Мечел', subname: 'MTLR', price: 287.8, date: '15.12.2023', totalPrice: 2870.7, dynamic: 20.78, percerntiles: 20.8 },
	{ ind: 7, img: black, name: 'Сбер Банк', subname: 'MTLR', price: 300.7, date: '1.11.2023', totalPrice: 10087.7, dynamic: 20.78, percerntiles: 20.8 },
	{ ind: 8, img: red, name: 'Мечел', subname: 'MTLR', price: 150.98, date: '26.10.2023', totalPrice: 2870.7, dynamic: 10.7, percerntiles: 1.7 },
	{ ind: 9, img: gray, name: 'Лукойл', subname: 'MTLR', price: 1500.0, date: '20.10.2023', totalPrice: 3987.7, dynamic: -2.78, percerntiles: 2.8 },
	{ ind: 10, img: black, name: 'Мечел', subname: 'MTLR', price: 478.7, date: '20.10.2023', totalPrice: 487.7, dynamic: -14.78, percerntiles: 15.8 },
	{ ind: 11, img: red, name: 'Мечел', subname: 'MTLR', price: 478.7, date: '20.10.2023', totalPrice: 487.7, dynamic: -14.78, percerntiles: 15.8 }
];

export default function LastInvestFC() {
	return (
		<section className="last_invest table_last_invest min-h-[476px] ml-6 grow pt-6 bg-white rounded-2xl">
			<HeadingFC title='Последнии инвестиции' />
			<div className="invest_table pl-10 ">
				<table className="w-full table ">
					<thead>
					<tr >
						<th >Название</th>
						<th>Цена (1 лот)</th>
						<th>Дата покупки</th>
						<th>Общая стоимость</th>
						<th>Динамика</th>
					</tr>
					</thead>
					<tbody>
					<RowFC invest={dataInvest} />
					</tbody>
				</table>
			</div>
		</section>
	)
}
