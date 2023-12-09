import React from "react";
import MyTimeFC from "./MyTime";
/**
 * 
 * @param {string} prop.title - title wich we look on the page's button
 *
 * @returns '<div className="button" >

			<span>Назад</span>
			<button className="btn btn-wide">{title it my button's name }</button>
		</div>'
 */
export default function ButtonFC(prop) {
	const title = prop.title;
	const ind = <MyTimeFC />
	return (
		<>
			<div key={ind} className="button" >

				{console.log('ID-button', ind)}
			<span>Назад</span>
			<button className="btn btn-wide">{title}</button>
			</div>
		</>
	)
}