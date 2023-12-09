import React from "react";
import HeadingFC from "../../../pages/Heading.js";
import StrategyTypyFC from "./StrategyTypeList.js";
import UpLoadFileFC from "./StartegyUpLoad.js";
import InfoBlockBullFC from "../../../pages/InfoBlockBulls.js";
import ButtonFC from "../../../pages/Buttons.js";
import SelectFC from "../../SelectMenu.js";

export default function BrokerPageFC() {
	const list = [{ ind: 1, title: 'Эксперт', name: 'expert' }, { ind: 2, name: 'prof', title: 'Профессионал' },
	{ ind: 3, name: 'many360', title: 'Финансы 360' }]
	return (
		<div className="broker upload">
			<HeadingFC title='Выберите тип стратегии' />
			<StrategyTypyFC />
			{/* НЕ УДАЛЯТЬ !!! расскоментировать/ Вкладка "Через ,рокера" */}
			<SelectFC list={list} />
			{/* <div className="content">
				<h3>Финансовый эксперт</h3>
				<p>
					"Финансовый Эксперт" — ведущий финансовый дом, специализирующийся на консультировании клиентов по инвестициям, управлению портфелем и финансовому планированию. Компания предлагает широкий спектр услуг, включая торговлю акциями, облигациями, фондами и деривативами. Их команда экспертов постоянно отслеживает рынок и предоставляет клиентам высококачественные финансовые решения.
				</p>
			</div> */}


			{ /** "InfoBlockBulls.js" Вкладка "Создать бота" 
			 * 
			 * Files: < src\pic >
			 * - bears.svg
			 * - drakon.svg
			 * - bull.png
			 * 
			*/}

			<InfoBlockBullFC />
			<ButtonFC title="Продолжить" />
			{ /** !! ниже код для вкладки "Самостоятельно" - загрузка файла
			 * См. "UpLoadFileFC" -> "StartegyUpLoad.js"

			src\components\main\broker_strategy_type\StartegyUpLoad.js

			*/}




		</div>


	)
}




