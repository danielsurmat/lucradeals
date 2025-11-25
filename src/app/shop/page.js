"use client"
import { useState } from "react"
import ProductGrid from "@/components/ProductGrid"
import { AllBottles} from "@/components/productArticleArray"

const Page = () => {
	const [category, selectCategory] = useState("all")
	const filteredProducts = category === "all" ? AllBottles : AllBottles.filter(p => p.category === category)
	const categories = [
		"all",
		"travellers",
		"fitness",
		"adults",
		"kids",
		"office",
		"outdoor",
	]
	return (
		<article className="pt-12 px-2 sm:px-44">
			{/* <div className="w-full flex overflow-x-auto ">
				{categories.map((cat, index) => (
					<button
						key={index}
						onClick={() => selectCategory(cat)}
						className={`
							mr-4 mb-4 px-4 py-2 rounded-full border shrink-0
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
			<p className="border-b border-gray-300 pb-2 ml-2 mb-4">{`shop / category / ${category}`}</p> */}
			<ProductGrid startIndex={0} productsNo={AllBottles.length} />
		</article>
	)
}

export default Page
