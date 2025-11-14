import Audience from "@/components/home/Audience"
import Hero from "@/components/home/Hero"
import Top_Products from "@/components/home/Top_Products"
import { productsArray } from "@/components/productArticleArray"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col h-screen items-start">
			<Hero />
			<Audience />
			<Top_Products />
		</div>
	)
}
