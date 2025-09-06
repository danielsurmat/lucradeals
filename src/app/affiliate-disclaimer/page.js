import React from "react"

const page = () => {
	return (
		<div className=" items-center text-black  rounded-xl flex flex-col gap-4 md:max-w-4/5">
			<div className="bg-white p-8 rounded-lg md:ml-48">
				<h1 className="text-2xl font-bold">Affiliate Disclosure</h1>
				<div className="flex flex-col gap-4 italic text-lg mt-4">
					<p className="">
						Some of the links on this website are affiliate links.
						This means that if you click on a link and make a
						purchase, I may earn a small commission{" "}
						<span className="font-bold" >at no extra cost to you.</span>
					</p>
					<p>
						I only recommend products that I truly believe in and
						that I think will add value to you. Your purchase
						through these links helps support this website so I can
						continue creating helpful content.
					</p>
					<p>
						Rest assured, the price you pay is the same whether you
						use my link or go directly to the retailer’s website.
						Your trust is important, and I’ll always aim to provide
						honest and transparent recommendations.
					</p>
				</div>
			</div>
		</div>
	)
}

export default page
