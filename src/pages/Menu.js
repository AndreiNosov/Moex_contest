import React from "react";

/**
 * This's a top menu on the pages
 * @param {Array} prop.refers it's has a templete - "[{ ind: 1, ref: "/contact", title: "Контакты" },]""
 * 
 * @returns - <ul className="...."> <li class="flex-none flex"> <a class="pt-[13px] pr-4 pl-4 link link-neutral" hfre="...">...</a> </li> </ul>}
 * 
 */
export default function MenuFC(prop) {
	const refers = prop.refers;
	return (
		<ul className="flex basis-full flex-row flex-nowrap">
			{
				refers.map(item => (
					<li key={item.ind} className="flex-none flex">
						<a className="pt-[13px] pr-4 pl-4 link link-neutral" hfre={item.ref}>{item.title}</a>
					</li>
				))
			}
		</ul>
	)
}