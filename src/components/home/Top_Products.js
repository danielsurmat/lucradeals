import React from 'react'
import ProductGrid from '../ProductGrid';
import { productsArray } from '../productArticleArray';

const Top_Products = () => {
  return (
	<article className='sm:px-44 mt-6 p-2'>
		<div>
			<h1 className='text-xl font-semibold'>Top Products</h1>
		</div>

		<div className='mt-8'>
			<ProductGrid productsNo={4} />
		</div>
	</article>
  )
}

export default Top_Products

