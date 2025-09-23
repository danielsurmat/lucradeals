import React from "react"
import Image from "next/image"
import { productsArray } from "@/components/productArticleArray"
import Link from "next/link"

export const metadata = {
	title: "Water Bottles Blogs",
	description:
		"Read the latest articles on water bottles — stainless steel, insulated, eco-friendly, and hydration tips from Lucradeals.",
	authors: [{ name: "Daniel Surmat" }],
}


const Page = () => {
	return (
		<article className="text-black md:p-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
			{productsArray.map((product, index) => {
				// Show only first 30 words of description
				const descriptionWords = product.descriptions?.split(" ") || [];
				const shortDescription = descriptionWords.slice(0, 30).join(" ") + (descriptionWords.length > 30 ? "..." : "");

				return (
					<section
						key={product.id || index}
						className="grid grid-cols-1 md:grid-cols-2  mb-4 bg-white p-2 rounded-lg"
					>
						<div className="flex flex-col gap-2 items-start">
							<div className="relative w-full h-80">
								<Image
									src={product.images?.[0]}
									alt={product.name || "Product image"}
									fill
									className="object-contain"
								/>
							</div>
						</div>
						<div className="flex flex-col justify-between p-2 sm:border-none">
							<header>
								<h1 className="text-xl font-bold">
									{product.name}
								</h1>
							</header>
							<section className="text md:max-w-[70%]">
								<p>{shortDescription}</p>
							</section>
							<div>
								<Link
									href={`/blogs/${product.blogLink}`}
									className="w-full sm:w-[50%]"
								>
									<button className="bg-orange-500 text-white font-semibold p-2 rounded-md w-full">
										Read More
									</button>
								</Link>
							</div>
						</div>
					</section>
				);
			})}
		</article>
	)
}

export default Page
