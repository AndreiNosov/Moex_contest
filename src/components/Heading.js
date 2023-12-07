import React from "react";

export default function HeadingFC(prop) {
	const title = prop.title;
	return (
		<div className="name grow pl-10 font-normal  text-base text-[#727272]">
			<h6>{title}</h6>
		</div>
	)
}