import React from "react";
import AnalysMenuFC from './AnalysMenu.js';
import gray from '../img/gray.png';
import black from '../img/black.png';
import red from '../img/red.png';

export default function StatisticListFC() {
	const list = [
		{ ind: 1, color: gray, name: 'Акции' },
		{ ind: 2, color: black, name: 'Облигации' },
		{ ind: 3, color: red, name: 'Валюта и металы' }
	]
	return (
		<div className=" grow flex flex-col ">
			<AnalysMenuFC elem={list} />
		</div>
	)
}