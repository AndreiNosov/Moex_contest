import React from "react";
import HeadingFC from "../../Heading.js";
import StrategyTypyFC from "./StrategyTypeList.js";


import SelectFC from "../../SelectMenu.js";

export default function BrokerPageFC() {
	const list = [{ ind: 1, title: 'Эксперт', name: 'expert' }, { ind: 2, name: 'prof', title: 'Профессионал' },
	{ ind: 3, name: 'many360', title: 'Финансы 360' }]
	return (
		<div className="broker upload">
			<HeadingFC title='Выберите тип стратегии' />
			<StrategyTypyFC />
			{/* <SelectFC list={list} /> */}
			{/* <div className="content">
				<h3>Финансовый эксперт</h3>
				<p>
					"Финансовый Эксперт" — ведущий финансовый дом, специализирующийся на консультировании клиентов по инвестициям, управлению портфелем и финансовому планированию. Компания предлагает широкий спектр услуг, включая торговлю акциями, облигациями, фондами и деривативами. Их команда экспертов постоянно отслеживает рынок и предоставляет клиентам высококачественные финансовые решения.
				</p>
			</div>
			<div className="button" >

				<span>Назад</span>
				<button className="btn btn-wide">Продолжить</button>
			</div> */}

			<div className="content">

				<h4>
					Загрузите собственный файл со стратегией и начните торговать прямо сейчас.
				</h4>
				<section className="upload_file">
					<div >
						<div className="text_preview__upload">
							<p><span>Click to upload</span> or drag and drop</p>
							<p>SVG, PNG, JPG or GIF (max. 3MB)</p>
						</div>
					</div>
					<div className="form_file__upload">

					</div>
				</section>
			</div>

			<div className="button" >

				<span>Назад</span>
				<button className="btn btn-wide">Продолжить</button>
			</div>
		</div>


	)
}




