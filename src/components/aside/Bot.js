import React from "react";
import ButtonFC from "../../pages/Buttons.js";
import {Link} from "react-router-dom";
export default function BotFC() {
	return (
		<section className="bot pt-3 pl-4 ">
			<div className="flex pb-3 flex-col  w-[234px]">
				<div className="bot_preview"></div>
				<div className="text-center pb-6 pt-5 leading-5">
					<h5>Создайте своего собственного бота для торгов на бирже</h5>

					<Link to={'create-account'} >
						<ButtonFC title="Создать бота"/>
					</Link>

					<a className="link link-hover text-[#13161C] font-sans text-sm font-normal">Написать брокеру</a>
				</div>
			</div>

		</section>
	)
}
