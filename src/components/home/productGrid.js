"use client"
import React from "react"
import ProductArticle from "../productArticle"

const ProductGrid = ({ products }) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 mt-5 gap-2 lg:gap-7 lg:max-w-2/3">
			{products.map((product, i) => (
				<div key={i}>
					<ProductArticle product={product}/>
				</div>
			))}
		</div>
	)
}

export default ProductGrid
