import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu]=useState(false)

  useEffect(()=>{
    if (showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }return ()=>{
      document.body.style.overflow='auto'
    };
  },[setShowMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} className='hover:scale-110 cursor-pointer' style={{ height: '70px', width: 'auto' }} alt="Logo" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href='#Home' id='Home' className='cursor-pointer hover:text-blue-500 hover:underline'>Home</a>
          <a href='#About' id='Home' className='cursor-pointer hover:text-blue-500 hover:underline'>About</a>
          <a href='#Property' className='cursor-pointer hover:text-blue-500 hover:underline'>Property</a>
          <a href='#Contact' className='cursor-pointer hover:text-blue-500 hover:underline'>Contact Us</a>
        </ul>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer'></img>
      </div>

      {/* menu items */}

      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt='cross-icon' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href='#Home' className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=> setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=> setShowMobileMenu(false)} href='#Property' className='px-4 py-2 rounded-full inline-block'>Property</a>
          <a onClick={()=> setShowMobileMenu(false)} href='#Contact' className='px-4 py-2 rounded-full inline-block'>Contact Us</a>
        </ul>
      </div>


    </div>
  )
}

export default Navbar
