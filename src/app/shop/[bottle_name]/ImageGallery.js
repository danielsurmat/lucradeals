"use client"
import { useState } from 'react'
import Image from 'next/image'

const ImageGallery = ({ images , name}) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0)
  return (
		<section className="flex-1 flex flex-col sm:items-center">
			<div className="relative w-64 h-96 mx-auto">
				<Image
					src={images[activeImgIndex]}
					alt={name}
					fill
					className="object-contain rounded-lg"
				/>
			</div>
			<div className='' >
                {
                    images.map((imgSrc, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveImgIndex(index)}
                            className={`border-2 m-2 p-1 rounded-md ${index === activeImgIndex ? 'border-blue-500' : 'border-transparent'}`}
                        >
                            <div className="relative w-10 h-10">
                                <Image
                                    src={imgSrc}
                                    alt={name + ' thumbnail ' + (index + 1)}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </button>
                    ))
                }
            </div>
		</section>
  )
}

export default ImageGallery
