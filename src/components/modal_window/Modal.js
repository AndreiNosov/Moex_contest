import React from "react";
import HeadingFC from "../../pages/Heading";
import close from "../main/img/сlose.svg";

export default function ModelFC() {
	return (
		<div className="modal-overlay">
			<div className="modal_">
				<div className="closed">
					<img src={close} />
				</div>
				<div className="date">
					<span>12.12.2023 г., 18:03</span>
				</div>
				<div className="avatar online placeholder">
					<div className="bg-[#727272] text-neutral-content rounded-full w-14">
						<span className="text-xl"></span>
					</div>
				</div>
				<div className="profit flex ">
					<HeadingFC title="Пoкупка акций" />
					<div className="money text-2xl   pt-6 pl-4 font-medium text-black font-sans">
						<span className=" ">-2870.7 </span>
					</div>
				</div>


				<div className="modal-header flex">
					<div className="preview">

					</div>
					<HeadingFC title="Брокерский счет" />

				</div>
				<div className="modal-content">
					<table>
						<header>
							<tr>
								<th className="title" colspan="2"><span>Детали</span></th>
							</tr>
						</header>
						<tr>
							<td>
								Цена покупки
							</td>
							<td>
								- 2870.7
							</td>
						</tr>
						<tr>
							<td>
								Количество
							</td>
							<td>
								+ 1087.7
							</td>
						</tr>
						<tr>
							<td>
								Комиссия
							</td>
							<td>
								-28700.7
							</td>
						</tr>
						<tr>
							<th className="title" colspan="2"><span>1 сделка</span></th>
						</tr>
						<tr>
							<td>
								12.12.2023
							</td>
							<td>
								<span>10</span>
								<span className="case_counter">200.7</span>
							</td>
						</tr>

					</table>
				</div>
			</div>
		</div>
	)
}