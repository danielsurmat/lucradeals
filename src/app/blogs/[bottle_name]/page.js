import React from "react"
import { productsArray } from "@/components/productArticleArray"
import BlogCard from "@/components/blogs/BlogCard"

export async function generateMetadata({ params }) {
	const { bottle_name } =await params
	const product = productsArray.find(
		(p) => p.blogLink === bottle_name
	)

    return {
        title: product ? `${product.name}` : "Blog Not Found",
        description: product ? product.descriptions : "",
}

}

const page = async ({ params }) => {
	const { bottle_name } =await params
	const product = productsArray.find((p) => p.blogLink === bottle_name)
	if (!product) return <h1 className="text-black">Blog not found</h1>
	return (
        <div className="text-black" >
            <BlogCard product={product} />
        </div>
    )
}

export default page
