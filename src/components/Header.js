import React from "react";
import MenuFC from "../pages/Menu";

export default function HeaderFC() {

	const refers = [
		{ ind: 1, ref: "/", title: "Портфель" },
		{ ind: 2, ref: "/catalog", title: "Каталог" },
		{ ind: 3, ref: "/analytics", title: "Аналитика" },
		{ ind: 4, ref: "/news", title: "Новости" }
	]
	return (
		<header className="flex flex-row pt-[30px] bg-white h-[88px] basis-full">
			<div className="toolbar flex flex-row">
				<div className='nav flex-none flex flex-row basis-[933px]'>
					<nav className="flex basis-full">
						<MenuFC refers={refers} />

					</nav>
				</div>
				<div className='grow '></div>
				<div className='profile flex-none flex flex-row basis-[218px] avatar placeholder'>
					<div className="profile_preview flex-none w-[40px] h-[40px] bg-neutral text-neutral-content rounded-full w-24">
						<span className="text-3xl flex-initial"></span>
					</div>
					<div className="profile_name pt-1 text-left ml-[16px]">
						Иванов Иван
						<div className="vector flex">
							<span></span>
						</div>
					</div>

				</div>
			</div>
		</header>
	)
}
