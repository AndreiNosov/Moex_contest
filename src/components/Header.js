import React from "react";

export default function HeaderFC(props) {
	return (
		<header className="flex flex-row pt-[30px] bg-white h-[88px] basis-full">
			<div className="toolbar flex flex-row">
				<div className='nav flex-none flex flex-row basis-[933px]'>
					<nav className="flex basis-full">
						<ul className="flex basis-full flex-row flex-nowrap">
							<li className="flex-none flex "><a className="pt-[13px] pr-4 pl-4 link link-neutral" hfre="/briefcase">Портфель</a></li>
							<li className="flex-none flex"><a className="pt-[13px]  pr-4  pl-4 link link-neutral" hfre="/catalog">Каталог</a></li>
							<li className="flex-none flex"><a className="pt-[13px]  pr-4  pl-4 link link-neutral" hfre="/analytics">Аналитика</a></li>
							<li className="flex-none flex"><a className="pt-[13px]  pr-4 pl-4 link link-neutral" hfre="/news">Новости</a></li>
						</ul>

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