import React from "react";


export default function RowFC(prop) {
	const invest = prop.invest;
	// { ind, img, name, subname, price, date, totalPrice, dynamic, percerntiles }
	return (

		invest.map(item => (

			<>



				<tr key={item.ind}>
					<td>
						<img src={item.img} />
						<div>
							<span className="name">{item.name}</span>
							<span>{item.subname}</span>
						</div>
					</td>
					<td className="counter_money ">
						<span>{item.price}</span>
					</td>
					<td>
						{item.date}
					</td>
					<td className="case_counter pr-3">
						{item.totalPrice}
					</td>
					<td className="flex  items-start  " >
						{

							item.dynamic > 0 ? (
								<>
									<div className="maney counter_moneyfont-sans counter_money">
										<span className="text-[#7DD14A] font-normal text-sm pl-2 pr-3" >{item.dynamic}</span>
									</div>
									<div className="font-sans percerntile ml-1 flex items-start">
										<span className="counter_money__percerntiles  text-[#7DD14A] text-sm ">{item.percerntiles}</span>
									</div>
								</>
							) : (
								<>
									<div className="maney counter_moneyfont-sans counter_money">
										<span className="text-[#EC595B] font-normal text-sm pl-2 pr-3" >{item.dynamic}</span>
									</div>
									<div className="font-sans percerntile ml-1 flex items-start">
										<span className="counter_money__percerntiles  text-[#EC595B] text-sm ">{item.percerntiles}</span>
									</div>
								</>
							)


						}
					</td>
				</tr>

			</>

		))


	)
}
