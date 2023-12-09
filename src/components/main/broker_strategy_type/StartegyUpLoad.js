import React from "react";
import ButtonFC from "../../../pages/Buttons.js";
import UploadFormFC from "../../../pages/UploadForm";

/**
 * src\components\main\broker_strategy_type\StartegyUpLoad.js
 *  This is the yourself  uploading a file.
 * 
 * @returns Page is 
 */

export default function UpLoadFileFC() {

	return (
		<>
			<div className="content">

				<h4>
					Загрузите собственный файл со стратегией и начните торговать прямо сейчас.
				</h4>
				<section className="upload_file">
					<UploadFormFC />

				</section>
				<div name="trash" className="trash_file" ></div>
			</div>

			<ButtonFC title="Запустить стратегию" />
		</>
	)
}