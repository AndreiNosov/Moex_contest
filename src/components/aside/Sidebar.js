import React from "react";
import BrokerFC from "./Broker.js";
import BankFC from './Bank.js';
import BothFC from './Bot.js'
export default function SidebarFC() {

	return (
		<aside className="sidebar pt-5 pb-4 h-min bg-white rounded-2xl">
			<div className="title text-2xl font-medium font-sans pl-4 text-black ">
				<h1>Брокерские счета</h1>
			</div>
			<div className="money text-2xl   pt-6 pl-4 font-medium text-black font-sans">
				<span className=" text-2xl pr-3.5 min-w-min w-[88px]">389089,34 </span>
			</div>
			<div className="counter flex pt-1.5 pb-4 text-2xl pl-4 border-b-[1px] ">
				<div className=" maney counter_money min-w-fit  font-sans">
					<span className="text-[#EC595B] font-normal pr-3 pl-1.5 text-sm">1890</span>
				</div>
				<div className="percerntiles ml-1 pl-1.5 w-[48px] flex pr-[1.75rem] font-sans">
					<span className="counter_money__percerntiles  text-[#EC595B] text-sm">890</span>

				</div>
			</div>
			<BrokerFC />
			<BankFC />
			<BothFC />
		</aside>
	)
}