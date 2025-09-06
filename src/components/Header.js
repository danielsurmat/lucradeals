"use client"
import { useState } from "react"
import Link from "next/link"

const menuList = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "products",
		href: "/products",
	},
	{
		title: "blogs",
		href: "/blogs",
	},
	{
		title: "affiliate-disclaimer",
		href: "/affiliate-disclaimer",
	},
]

const Header = () => {
	const [mobileOpen, setIsMobileOpen] = useState(false)
	return (
		<header className="fixed top-0  w-full p-2 bg-slate-900 z-50">
			<nav className="relative flex items-center justify-between">
				<div className="text-xl md:text-2xl font-bold">
					Lucra
					<span className="font-[cursive] text-gray-300">Deals</span>
				</div>
				<button
					className="lg:hidden"
					onClick={() => setIsMobileOpen(!mobileOpen)}
				>
					<img
						src={mobileOpen ? "/close.png" : "/menu.png"}
						className="size-5"
						alt=""
					/>
				</button>
				{/* Mobile menu */}
				<ul
					className={`absolute top-9 -left-2 flex flex-col gap-6 bg-gray-800 
					text-gray-300 h-fit p-2 py-2 transition-all duration-300 ease-in-out rounded-br-xl ${
						mobileOpen ? "block" : "hidden"
					} lg:hidden`}
				>
					{menuList.map((li, i) => (
						<li
							key={i}
							className="text-center hover:bg-slate-700 hover:text-gray-50  rounded-md px-6 py-2"
							onClick={() => setIsMobileOpen(false)}
						>
							<Link href={li.href}>
								{li.title}
							</Link>
						</li>
					))}
				</ul>

				{/** Large devices menu */}

				<ul className="hidden lg:flex">
					{menuList.map((li, i) => (
						<li key={i}>
							<Link
								className=" hover:bg-slate-800 hover:text-white px-6 py-1 rounded-md"
								href={li.href}
							>
								{li.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
