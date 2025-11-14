"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const audience_segments = [
	{
		key_message: "Keep your kids hydrated on the go.",
		description:
			"No child should spend the day thirsty. With HydroJug Kids, hydration goes everywhere — light, leak-proof, and perfectly designed for little hands. It's the ideal companion for school, play, and family trips, keeping kids refreshed wherever they go.",
		affiliate_link: "https://amzn.to/4oK86fw",
		image_url:
			"https://m.media-amazon.com/images/I/61VCPC07R2L._AC_SL1000_.jpg",
	},
	{
		key_message: "Stay Hydrated Wherever You Travel.",
		description:
			"Traveling can make it easy to forget hydration or deal with warm, messy bottles. This 24oz insulated stainless-steel bottle solves that with a FreeSip spout, secure push-button lid, and double-wall insulation that keeps drinks cold for up to 24 hours, so you stay refreshed wherever you travel.",
		affiliate_link: "https://amzn.to/43rhxYz",
		image_url:
			"https://m.media-amazon.com/images/I/71DAOpETAnL._AC_SL1080_.jpg",
	},
	{
		key_message: "Stay Hydrated, Crush Every Workout.",
		description:
			"Leaking bottles, sweaty exteriors, and missed sips make staying hydrated during workouts tough. Hydracy solves it all — 100% leakproof, zero condensation, BPA-free, and equipped with a motivational time marker and spill-proof lid so you can hydrate smart and crush every gym session.",
		affiliate_link: "https://amzn.to/3JUabpK",
		image_url:
			"https://m.media-amazon.com/images/I/819APg+W6wL._AC_SL1500_.jpg",
	},
]
const Audience = () => {
	return (
		<article className="p-2 sm:px-44 mt-2 mx-auto flex flex-col  gap-6 ">
			{audience_segments.map((segment, index) => (
				<section
					key={index}
					className={`flex flex-col  ${ index === 1 ? "sm:flex-row-reverse justify-end" : "sm:flex-row"} gap-4 w-full border-b sm:border-0 pb-2`}
				>
					<div className="">
						<Image
							src={segment.image_url}
							alt="kids water bottle"
							width={300}
							height={300}
							className="w-full h-auto sm:w-90 mx-auto"
							style={{ borderRadius: "15px" }}
						/>
					</div>

					<div className="sm:max-w-[35%] flex flex-col items-start justify-center gap-2 sm:gap-8">
						<h2 className="text-md sm:text-xl font-bold mt-1 text-center">
							{segment.key_message}
						</h2>

						<p>{segment.description}</p>

						<Link
							href={segment.affiliate_link}
							target="_blank"
							rel="noopener noreferrer"
							className="w-[50%] sm:w-[30%] cursor-pointer bg-slate-950 px-4 py-2 text-white font-poppins rounded-lg"
						>
							<button className="pointer-events-none">
								Shop Now
							</button>
						</Link>
					</div>
				</section>
			))}
		</article>
	)
}

export default Audience
