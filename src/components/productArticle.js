"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductArticle = ({ product}) => {
  return (
		<article className="text-gray-900 bg-white rounded-xl flex flex-col items-center p-4 h-[320px]">
			<section className="w-2/3 relative h-96 md:h-[500px">
				<Image
					src={product.images[0]}
					fill
					alt="water bottle"
					className="object-contain"
				/>
			</section>

			<section className="flex flex-col">
				<Link
					href={`/blogs/${product.blogLink}`}
					className="hover:underline underline-offset-2 decoration-slate-800"
				>
					<h1>{product.name}</h1>
				</Link>

				<p className="text-[18px] font-semibold">${product.price}</p>

				<Link href={product.aff_link} className="mt-1" target="_blank">
					<button className="bg-orange-500 text-white font-semibold p-2 rounded-md pointer-events-none w-full">
						Shop now
					</button>
				</Link>
			</section>
		</article>
  )
}

export default ProductArticle
