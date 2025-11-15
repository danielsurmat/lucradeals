import React from 'react';
import { productsArray } from './productArticleArray';
import Image from 'next/image'; 
import Link from 'next/link';

const ProductGrid = ({ productsNo }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
        {
          productsArray.slice(0, productsNo).map((product, index) => (
            <div key={index} className="p-2 flex flex-col min-h-[300px] rounded-xl ring-1 ring-gray-300">
              <div className='relative flex-1'>
                <Image
                  src={product.images[0]}
                  // width={150}
                  // height={150}
                  fill
                  alt={product.name}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-md ">{product.name}</h2>
                <p className="text-md text-gray-600">${product.price}</p>
                <Link href={product.aff_link} target="_blank">
                  <button className="bg-slate-950 text-white p-2 rounded-md mt-2 w-full">
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default ProductGrid
