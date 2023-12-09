import React from "react";
import HeadingFC from "../../../pages/Heading.js";
import RowEventsFC from './EventsRows.js';

import black from '../last_invest/img/black.svg';
import gray from '../last_invest/img/gray.svg';
import green from '../last_invest/img/green.svg';
import red from '../last_invest/img/red.svg';

export default function LastEventsFC() {
	const dataEvents = [
		{ ind: 1, date: '15.12.2023', img: black, name: 'Удержание налога по купонам', subname: 'Брокерский счет', quantity: 1, sum: -2870.7 },
		{ ind: 2, date: '15.12.2023', img: green, name: 'Удержание налога', subname: 'Бот счет 1', quantity: 10, sum: 10087.7 },
		{ ind: 3, date: '15.12.2023', img: gray, name: 'Вывод с брокерского счета', subname: 'Брокерский счет', quantity: 0, sum: 28700.7 },
		{ ind: 4, date: '15.12.2023', img: red, name: 'Выплата купонов по облигациям М.Видео выпуск 4', subname: 'RU030940294029402, Брокерский счет', quantity: 0, sum: -3987.7 },
		{ ind: 5, date: '15.12.2023', img: black, name: 'Удержание налога по купонам', subname: 'Брокерский счет', quantity: 1, sum: -2870.7 },
		{ ind: 6, date: '15.12.2023', img: green, name: 'Удержание налога', subname: 'Бот счет 1', quantity: 10, sum: 10087.7 },
		{ ind: 7, date: '15.12.2023', img: gray, name: 'Вывод с брокерского счета', subname: 'Брокерский счет', quantity: 0, sum: 28700.7 },
		{ ind: 8, date: '15.12.2023', img: red, name: 'Выплата купонов по облигациям М.Видео выпуск 4', subname: 'RU030940294029402, Брокерский счет', quantity: 0, sum: -3987.7 },
		{ ind: 9, date: '15.12.2023', img: black, name: 'Удержание налога по купонам', subname: 'Брокерский счет', quantity: 1, sum: -2870.7 },
		{ ind: 10, date: '15.12.2023', img: green, name: 'Удержание налога', subname: 'Бот счет 1', quantity: 10, sum: 10087.7 },
		{ ind: 11, date: '15.12.2023', img: gray, name: 'Вывод с брокерского счета', subname: 'Брокерский счет', quantity: 0, sum: 28700.7 },
		{ ind: 12, date: '15.12.2023', img: red, name: 'Выплата купонов по облигациям М.Видео выпуск 4', subname: 'RU030940294029402, Брокерский счет', quantity: 0, sum: -3987.7 }
	]
	return (
		<>
			<HeadingFC title="Последние события" />
			<div className="last_events  pl-10 ">
				<table className=" table_last_invest w-full">
					<tr >
						<th >Дата и время</th>
						<th>События</th>
						<th></th>
						<th>Количество</th>
						<th>Сумма</th>
					</tr>
					<RowEventsFC events={dataEvents} />

				</table>
			</div>
		</>
	)
}

{/*  */ }