import React from "react";

export default function AnalysMenuFC(prop) {
	const position = prop.elem;
	return (

		<ul className="list_investment">
			{
				position.map((item, ind) => (
					<li key={item.ind} className=" grow flex-nowrap flex">
						<img src={item.color} />
						<span>{item.name}</span>
					</li >
				))
			}
		</ul >
	)
}