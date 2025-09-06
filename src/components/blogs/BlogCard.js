"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ product }) => {
	const [imageIndex, setImageIndex] = React.useState(0)
	return (
		<article className="text-black  bg-white md:p-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="flex flex-col gap-2 items-start">
				<div className="relative  w-full h-96">
					<Image
						src={product.images[imageIndex]}
						alt={product.name}
						fill
						className="object-contain"
					/>
				</div>

				<div className="flex gap-2 mt-2 overflow-x-auto ">
					{product.images.map((img, index) => (
						<button
							className="w-24 h-24 p-1 relative"
							key={index}
							onClick={() => setImageIndex(index)}
						>
							<Image
								key={index}
								src={img}
								alt={product.name}
								fill
								className="rounded-lg object-contain"
							/>
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-between  p-2 border-t-1 sm:border-none">
				<header>
					<h1 className="text-2xl font-bold">{product.name}</h1>
				</header>
				<section className="text md:max-w-[70%]">
					<p>{product.descriptions}</p>
				</section>
				<div className="">
					<Link
						href={product.aff_link}
						target="_blank"
						className="w-full sm:w-[50%]"
					>
						<button className="bg-orange-500 text-white font-semibold p-2 rounded-md w-full">
							Shop now
						</button>
					</Link>
					<p className="italic" >
						This post contains affiliate links, which means I may
						earn a small commission if you purchase — at no extra
						cost to you.
					</p>
				</div>
			</div>
		</article>
	)
}

export default BlogCard
