import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
		<article className="bg-white text-gray-950  lg:max-w-[80%] rounded-lg p-1 sm:p-4 flex-1/2 flex justify-center lg:h-1/2">
			<section className="w-2/3 flex flex-col justify-center gap-2">
				<h1 className="text-xl lg:text-2xl font-bold mb-2 ">
					Stay Hydrated, Stay Stylish — Find Your Perfect Bottle Today
				</h1>
				<h2 className="text-sm lg:text-xl font-medium">
					From insulated bottles that keep drinks cold all day to
					trendy designs everyone’s talking about — explore our top
					picks and sip in style
				</h2>

				<Link href={"/products"}>
					<button className=" bg-orange-500 p-2 rounded-lg text-md text-white font-semibold pointer-events-none lg:mt-8">
						DiscoverMore
					</button>
				</Link>
			</section>
			<section className="flex justify-center">
				<Image
					src="/owala2.jpeg"
					width={200}
					height={250}
					alt="owala water bottle"
					className="w-auto h-auto"
				/>
			</section>
		</article>
  )
}

export default Hero
