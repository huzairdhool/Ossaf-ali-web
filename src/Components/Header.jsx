import React from 'react'
import headerImg from '../assets/header_img.png';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div
            className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${headerImg})` }}
            id="Home">
            <Navbar />
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                    Property to build your DREAMS</h2>
                    <div className='space-x-6 mt-16'>
                        <a href='#Contact' className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 rounded-2xl text-white 
             hover:from-blue-400 hover:to-white hover:text-black transition-all duration-300 ease-in-out">Call Now</a>

             <a href='https://www.facebook.com/Shoaibnas33rproperty' className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 rounded-2xl text-white 
             hover:from-blue-400 hover:to-white hover:text-black transition-all duration-300 ease-in-out">Facebook</a>
                    </div>
            </div>
        </div>
    )
}

export default Header
