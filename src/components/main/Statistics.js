import React from "react";
import HeadingFC from "./Heading";


export default function StatisticsFC() {
	return (
		<>
			<div className="total_sum  bg-white pt-8 pb-8 rounded-2xl flex flex-col flex-grow">
				<HeadingFC title="Стоимость портыеля" />
				<div className="total_money pl-10 pt-2 grow pи-8 text-base text-[#13161C]">
					<span className="text-5xl min-w-min pr-7 ">500000.37</span>
				</div>
				<div className="charf pt-5 bg-white ">

				</div>
			</div>

		</>
	)
}