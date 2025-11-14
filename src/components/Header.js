"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const menuList = [
	{
		title: "Shop",
		href: "/shop",
	},
	{
		title: "Explore",
		href: "/explore",
	},
	{
		title: "About",
		href: "/about",
	},
]

const Header = () => {
	const [mobileOpen, setIsMobileOpen] = useState(false)
	return (
		<header className="text fixed top-0  w-full px-2 md:px-40 py-2 bg-white font-poppins border-1 z-20">
			<nav className="hidden md:flex flex-row justify-between items-center">
				<ul>
					{menuList.map((menu, index) => (
						<li key={index} className="inline-block mx-4">
							<Link href={menu.href} className="text-sm ">
								{menu.title}
							</Link>
						</li>
					))}
				</ul>

				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={55} height={55} />
				</Link>

				<Link
					href="https://www.instagram.com/lucrativedealsforyou/"
					target="_blank"
				>
					<Image
						src="/instagram-logo.svg"
						alt="Cart Icon"
						width={50}
						height={25}
					/>
				</Link>
			</nav>

			{/* Mobile Menu */}
			<nav className="flex justify-between items-center md:hidden">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={45} height={45} />
				</Link>

				<button onClick={() => setIsMobileOpen(!mobileOpen)}>
					<Image
						src={mobileOpen ? "/close.png" : "/menu.png"}
						alt="Menu Icon"
						width={35}
						height={30}
					/>
				</button>
			</nav>
		</header>
	)
}

export default Header
