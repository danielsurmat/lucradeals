import React from 'react'
import ProductGrid from '@/components/home/productGrid'
import { productsArray } from '@/components/productArticleArray'

const page = () => {
  return (
		<div className="h-full flex flex-col items-center">
			<article className='text-black bg-white p-3 rounded-lg md:max-w-[66%]' >
				<h1 className='text-2xl font-bold' >Find Your Perfect Bottle</h1>
				<section className='italic text-md '>
					Stay refreshed all day with our handpicked collection of
					insulated water bottles, tumblers, and jugs. Stylish,
					durable, and built for every lifestyle—explore the options
					below and choose the one that fits you best.
				</section>
			</article>
			<ProductGrid products={productsArray} />
		</div>
  )
}

export default page
