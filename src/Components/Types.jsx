import React from 'react'
import { assets } from '../assets/assets'

const Types = () => {
    return (
        <div className="container bg-gray-200 mx-auto py-4 pt-20 mb-0 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Property">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-blue-500 text-center">
                Commercial & Rental <span className="decoration-1 font-light">Property</span>
            </h2>
            <p className="text-black max-w-80 text-center mb-8 mt-2 mx-auto">
                "Your needs are just one call away"
            </p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img_2} alt='Brand Image' className='w-90 h-90 mx-auto object-contain'></img>
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-500'>
                    <div className='mt-5 ml-10 grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-8'>
                        <div>
                            <p className='text-4xl font-medium text-gray-600'>Commercial</p>
                        </div>
                    </div>
                    <p className='mx-10 max-w-lg mt-3'>Explore a wide range of commercial properties designed to support and grow your business.
                         Whether you need a modern office space, retail shop, warehouse, or industrial unit, we offer prime locations with high 
                         visibility, excellent accessibility, and flexible leasing options.</p>
                </div>
                

                
            </div>
        </div>
    )
}

export default Types
