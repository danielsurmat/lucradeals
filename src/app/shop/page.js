"use client"
import { useState } from "react"
import ProductGrid from "@/components/ProductGrid"
import { productsArray } from "@/components/productArticleArray"

const page = () => {
	const [category, selectCategory] = useState("all")
	const categories = [
		"all",
		"travellers",
		"fitness",
		"kids",
		"office",
		"outdoor",
	]
	return (
		<article className="pt-12 sm:px-44">
			<div className="mb-2 px-1 sm:px-0 flex">
				{categories.map((cat, index) => (
					<button
						key={index}
						onClick={() => selectCategory(cat)}
						className={`
							mr-4 mb-4 px-4 py-2 rounded-full border 
							${
								category === cat
									? "bg-slate-950 text-white border-black"
									: "bg-white text-black border-gray-300"
							}
						`}
					>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</button>
				))}
			</div>
			<p className="border-b border-gray-300 pb-2 ml-2 mb-4">{`shop / category / ${category}`}</p>
			<ProductGrid productsNo={productsArray.length} />
		</article>
	)
}

export default page
