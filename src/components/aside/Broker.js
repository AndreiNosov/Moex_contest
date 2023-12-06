import React from "react";

export default function BrokerFC(prop) {
	return (
		<section className="broker pl-4">
			<div className="case  pt-3 flex">
				<div className="case_preview"></div>
				<div className="case_total pt-1.5 grid grid-cols-3 flex-row text-xs">
					<div className="title grow grid-cols-2 row-span-1 col-span-3">
						<h5>Брокерский счет</h5>
					</div>
					<div className="grow col-span-3 row-span-1">
						<span className="case_counter w-fit pr-2 font-sans text-sm pt-3 text-base text-black font-normal">102899,78</span>
					</div>
					<div className=" maney counter_money row-span-1 col-span-1 w-min  font-sans">
						<span className="text-[#7DD14A] font-normal text-sm pr-3">+478</span>
					</div>
					<div className="percerntiles ml-1 pl-1.5 w-[48px] flex row-span-1 col-span-2 justify-start  font-sans" >
						<span className="counter_money__percerntiles  text-[#7DD14A] text-sm pr-[1.75rem]">0.89</span>

					</div>
				</div>
			</div>
		</section>
	)
}