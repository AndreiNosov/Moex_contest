import React from "react";

/**
	* https://daisyui.com/components/select/
	*
	*	DOTO: This's code for a select menu.
	*	Routing only through a JS-code or react.
	* 
	* @param {Array} props.list:array -  for a distructurization.
	* Hi has a templete is ' [(ind:1, name: < my_name_position >, title: < my_title_position >)]'
	
	* @param {string} name:string - it's "<option name={item.name}>....</option>"
	* @param {string} title:string - it's a position's title  for user "<option name='....'>my title position 2</option>" 
	*	
	* @returns 		a html-code
			<select className="select select-bordered w-full max-w-xs">
			<option name='my_name_position' disabled selected> my title position</option>
			<option name='my_name_position 1'>my title position 2</option>
			<option name='my_name_position_2'>my title position 3</option>
			<option name='my_name_position_3'>my title position 4</option>
		</select>
 */
export default function SelectFC(props) {
	const list = props.list;
	return (
		<div className="select_menu">
			<select className="select select-bordered w-full max-w-xs">

				<>{

					list.map(item => (

						item.ind === 1 ? (
							<option key={item.id} disabled selected name={item.name}>{item.title}</option>
						) : (

							< option key={item.id} name={item.name} > {item.title}</option>
						)
					))

				}
				</>
			</select>
		</div >
	)
}



{/* sm */ }