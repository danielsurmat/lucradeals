import Link from "next/link"
export default function NotFound() {
	return (
		<div className="bg-white text-black text-center h-72 rounded-lg sm:w-[80%] mx-auto mt-20">
			<h2 className="text-2xl font-bold mb-6">Not Found</h2>
			<p className="text-lg mb-6">
				Could not find the page you are looking.
			</p>
			<Link
				className="bg-orange-600 px-4 py-1 rounded-lg text-white"
				href="/"
			>
				Return to Home
			</Link>
		</div>
	)
}
