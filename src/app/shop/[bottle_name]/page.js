import React from "react"
import Image from "next/image"
import Link from "next/link"
import ImageGallery from "./ImageGallery"
import { AllBottles } from "@/components/productArticleArray"

export async function generateMetadata({ params }) {
	const { bottle_name } = await params;
	const bottle = AllBottles.find((product) => product.slug === bottle_name)

	if (bottle) {
		return {
			title: "Shop - " + bottle.name,
			description: bottle.descriptions,
		}
	}
}

const page = async ({ params }) => {
	const { bottle_name } = params
	const bottle = AllBottles.find((product) => product.slug === bottle_name)

	return (
		<article className="py-4 sm:py-12 px-2 sm:px-44 flex flex-col sm:flex-row gap-8">
			<ImageGallery images={bottle.images} name={bottle.name} />
			<section className="flex-1 flex flex-col items-start justify-between">
				<h1 className="text-xl font-semibold mb-4">{bottle.name}</h1>
				<p>{bottle.descriptions}</p>
				<section className="flex-1">
					<h2 className="text-lg font-semibold mt-4 mb-2">Features:</h2>
					<ul className="list-disc list-inside">
						{bottle.features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</section>
				<div>
					<h3 className="mt-2">
						<span className="font-bold">${bottle.price}</span>
					</h3>
					<Link
						href={bottle.aff_link}
						target="_blank"
						rel=""
						className="cursor-pointer"
					>
						<button className="mt-2 px-4 py-2 bg-slate-950 text-white rounded hover:bg-slate-800 transition pointer-events-none">
							Buy on Amazon
						</button>
					</Link>
					<p className="text-xs text-gray-500 mt-2">
						As an Amazon Associate, I earn from qualifying purchases
						at no extra cost to you.
					</p>
				</div>
			</section>
		</article>
	)
}

export default page
