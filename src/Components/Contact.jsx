import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-15" id='Contact'>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white border-b-2 border-b-blue-600 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Us</h3>
              <div className="text-gray-600">
                <div className="flex items-center mb-2">
                <img src={assets.contact} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Call Us</span>
                </div>
                <p className="mb-4 font-medium">+923000000</p>
                <div className="flex items-center mb-2">
                <img src={assets.contact} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Email Us</span>
                </div>
                <p className="mb-4 font-medium">example@mail.com</p>
                <div className="flex items-center mb-2">
                <img src={assets.contact} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Address</span>
                </div>
                <p className='font-medium'>Rehman Shaheed road near Yousaf Plaza, Gujrat.</p>
              </div>
            </div>
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows="4" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" placeholder="Your Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 hover:scale-transition-200 hover:cursor-pointer hover:font-medium transition-all duration-100 
                  text-white font-bold py-2 px-6 rounded-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;