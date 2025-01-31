import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14
    md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h2 className='text-2xl md:text-4xl mb-2 font-bold text-blue-500'>Welcome to <span className='decoration-1 font-light'>Ossaf Ali Property Center</span></h2>
      <p className='text-black max-w-80 text-center mb-8 mt-2'>" Your Trusted Partner in Property Solutions –
       Buy, Sell, and Invest with Confidence. "</p>
       
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img_2} alt='Brand Image' className='w-90 h-90 mx-auto object-contain'></img>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-500'>
          <div className='mt-5 ml-10 grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-8'>
            <div>
              <p className='text-4xl font-medium text-gray-600'>10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-600'>50+</p>
              <p>Projects Completed</p>
            </div>
          </div>
          <p className='mx-10 max-w-lg mt-3'>With years of experience in the property market, we specialize in providing seamless
            real estate solutions tailored to your needs. Our commitment to excellence ensures that every client receives
            top-notch service, whether buying, selling, or investing.
            Customer satisfaction is at the heart of everything we do, making your property journey smooth, secure, and rewarding.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
