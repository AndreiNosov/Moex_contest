
import React from "react";



export default function RowEventsFC(prop) {
	const events = prop.events;
	// { ind: 4, date: '15.12.2023', img: red, name: 'Выплата купонов по облигациям М.Видео выпуск 4',
	// subname: 'RU030940294029402, Брокерский счет', quantity: 0, sum: 3987.7}



	return (
		<>
			{events.map(item => (

				<tr key={item.ind}>
					<td>
						{item.date}
					</td>
					<td>
						<img src={item.img} />
						<div>
							<span className="name">{item.name}</span>
							<span className="text-xs ">{item.subname}</span>
						</div>
					</td>
					<td></td>
					{

						<td className=" ">
							{item.quantity > 0 ? (
								<span>{item.quantity}</span>
							) : (
								'-'
							)}


						</td>

					}

					{
						item.sum > 0 ? (
							<td className="case_counter pr-3 text-[#7DD14A]">
								{item.sum}
							</td>
						) : (
							<td className="case_counter pr-3 ">
								{item.sum}
							</td>
						)

					}

				</tr>
			))
			}
		</>
	)

}
