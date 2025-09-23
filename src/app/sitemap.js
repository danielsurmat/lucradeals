import { productsArray } from "@/components/productArticleArray"

export default async function sitemap() {
    const products = productsArray.map((product) => ({
        url: `https://lucradeals.com/blogs/${product.blogTitle}`,
        lastModified: new Date(),
    }))
    return [
		{
			url: "https://lucradeals.com",
			lastModified: new Date(),
		},
		{
			url: "https://lucradeals.com/products",
			lastModified: new Date(),
		},

		{
			url: "https://lucradeals.com/blogs",
			lastModified: new Date(),
		},

		{
			url: "https://lucradeals.com/products",
			lastModified: new Date(),
		},
        ...products,
	]
}
