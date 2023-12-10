import React from "react";
import bull from '../../../../pic/bull.png';
import ImgFC from '../../../../pages/Img'
export default function BankFC(prop) {
	return (
		<div className="calculated_bank">
			<div >
				<ImgFC img={bull} />
			</div>

			<div className=" ">
				<span className="case_counter sum pr-2">200890,98&nbsp;₽</span>
			</div>

			<div className="bank-total_sum maney counter_money"><span className="pr-2">+20,78&nbsp;₽</span></div>
			<div className="bank-total_statis percerntiles pr-2 counter_money__percerntiles"><span >20,8</span></div>
		</div>
	)
}
