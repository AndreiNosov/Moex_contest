import React from "react";

/**
 * Inputs data is the 'bull' from the 'mport bulls from '../pic/bull.png';'
 * This's simply a sinply file. Its a file's format: (png|jpe?g|svg)  *.j
 * @param {object} prop 
 * @returns  '<div className="preview_img"> <img src={img} /></div>'
 */
export default function ImgFC(prop) {
	const img = prop.img;
	return (
		<div className="preview_img">
			<img src={img} />
		</div>)
}