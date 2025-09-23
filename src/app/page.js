import Hero from "@/components/home/Hero"
import ProductGrid from "@/components/home/productGrid"
import { productsArray } from "@/components/productArticleArray"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col  h-screen items-start lg:ml-48">
			<Hero />
			<h1 className="text-xl text-gray-800 font-bold mt-4">
				Top picks for you
			</h1>
			<ProductGrid products={productsArray.slice(0, 4)} />
			<Link
				href={"/products"}
				className="mt-4 mb-7 bg-orange-500 text-white font-semibold p-2 rounded-md w-full sm:w-[20%] text-center"
			>
				View all products
			</Link>
		</div>
	)
}
