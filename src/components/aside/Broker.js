import React from 'react';



export default function BrokerFC() {
	const broker_arr = [
		{ id: 1, name: 'Брокерский счет', sum: 102899.78, counter: +4.78, percerntiles: 0.89 },
		{ id: 2, name: 'Бот счет 1', sum: 30899.78, counter: -14.78, percerntiles: 15.8 },
		{ id: 3, name: 'Бот счет 2', sum: 200890.98, counter: -20.78, percerntiles: 20.8 }

	]

	return (
		<section className="broker pl-4">


			{broker_arr.map((item) => (


			// <BrokerContent item={item} />

				<div className="case  pt-3 flex">

					{
						item.name.includes('Брокер') ? (
							<div className="case_preview"></div>
						) : (
							<div className="case_preview bot"></div>
						)

					}
					<div className="case_total pt-1.5 grid grid-cols-3 flex-row text-xs">
						<div className="title grow grid-cols-2 row-span-1 col-span-3">
							<h5>{item.name}</h5>

						</div>
						<div className="grow col-span-3 row-span-1">
							<span className="case_counter w-fit pr-2 font-sans text-sm pt-3 text-base text-black font-normal">{item.sum}</span>
						</div>
						{item.counter > 0 ? (
							<>
						<div className="maney counter_money row-span-1 col-span-1 w-min font-sans">

									<span className="text-[#7DD14A] font-normal text-sm pr-3">+{item.counter}</span>
								</div>
								<div className="percerntiles ml-1 pl-1.5 w-[48px] flex row-span-1 col-span-2 justify-start  font-sans">
									<span className="counter_money__percerntiles  text-[#7DD14A] text-sm pr-[1.75rem]">{item.percerntiles}</span> {/*EC595B*/}
								</div>
							</>
						) : (
							<>
								<div className="maney counter_money row-span-1 col-span-1 w-min font-sans">
									<span className="text-[#EC595B] font-normal text-sm  pr-3">{item.counter}</span>
								</div>
								<div className="percerntiles ml-1 pl-1.5 w-[48px] flex row-span-1 col-span-2 justify-start  font-sans">
									<span className="counter_money__percerntiles  text-[#EC595B] text-sm pr-[1.75rem]">{item.percerntiles}</span> {/*EC595B*/}
								</div>
							</>
						)}
						{/*EC595B*/}
						{/* </div> */}

					</div>
				</div >

			))}

		</section>
	);
}
