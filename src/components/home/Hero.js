import React from "react"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
	return (
		<article
			className="p-4 sm:p-4 sm:px-44 flex  justify-center relative w-full
		bg-[url('/Hero-image.webp')] bg-cover bg-center  min-h-[65vh]
		"
		>
			<div className="absolute inset-0 bg-black/60"></div>

			<div className="relative z-10 flex flex-col-reverse sm:flex-row  sm:gap-10">
				{/* Left section: text */}
				<section className="flex-1 flex flex-col justify-center gap-4">
					<h1 className="text-2xl lg:text-4xl font-bold text-white">
						Hydrate Smart, Live Better.
					</h1>
					<p className="text-base   text-white">
						From high-tech bottles with smart trackers to a variety
						of stylish bottles for every lifestyle, stay hydrated
						and consistent all day, and experience the ultimate in
						convenience and performance with our featured smart
						tracker bottle.
					</p>

					<div className="flex gap-6 mt-1 sm:mt-4">
						<Link href="https://amzn.to/3XrFlYH" target="_blank">
							<button className="bg-slate-950 px-6 py-3  rounded-lg text-white font-semibold w-fit pointer-events-none">
								Get Now
							</button>
						</Link>
						<Link href="/shop">
							<button className="outline-2 p-2.5 rounded-lg text-white font-semibold w-fit pointer-events-none">
								Discover More
							</button>
						</Link>
					</div>
				</section>

				{/* Right section: image */}
				<section className="flex-1 flex justify-center items-center">
					<div className="w-64 sm:w-80 md:w-96 lg:w-[350px] h-auto">
						<Image
							src="/hero-image.png"
							alt="Owala water bottle"
							width={350} // max width for large screens
							height={350} // approximate height for aspect ratio
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
							}}
						/>
					</div>
				</section>
			</div>
		</article>
	)
}

export default Hero
