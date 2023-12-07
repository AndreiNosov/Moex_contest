import React from "react";

export default function OpenBankFC() {
	return (

		<>
			<div className="name grow font-normal text-[34px]   text-[#13161C]">
				<h2>Выберите тип счета</h2>
			</div>
			<section className="bank_type flex">
				<div className="flex">
					<div>
						<input type="radio" name="radio-1" className="radio" checked />
					</div>
					<div>
						<h3>Брокерский счет</h3>
						<p>Счет для торговли ценными бумагами без ограничений на пополнение и вывод средств</p>
					</div>
				</div>
				<div className="flex">
					<div>
						<input type="radio" name="radio-1" className="radio" />
					</div>
					<div>
						<h3>ИИС</h3>
						<p>Дополнительная выгода до 52 000 ₽ в год помимо дохода от сделок. Максимум пополнений - 1 000 000 ₽ в год.</p>
					</div>
				</div>
				<div>
					<button className="btn no-animation">Подписать заявление</button>
					<p>
						Нажимая «Подписать заявление», вы подтверждаете согласие с <a href="#">условиями обслуживания</a>
					</p>
				</div>
			</section>
		</>
	)
}