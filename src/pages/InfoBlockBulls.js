import React from "react";
import bulls from '../pic/bull.png';

export default function InfoBlockBullFC() {
	return (
		<div className="info info_buuls" >
			<ImgFC img={bill} />
			{/* <div className="preview_img">
				<img src={bulls} />
			</div> */}
			<div className="preview_info_text">
				<h4>Быки</h4>
				<p>Lorem ipsum dolor sit amet consectetur. Quisque turpis nam urna sit non. Integer mi consectetur semper bibendum nisl ut congue. Nam convallis in ipsum tincidunt. Venenatis malesuada vel fames mauris.</p>

			</div>

		</div>
	)
}