import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="flex flex-col items-center justify-center">
        {/* Logo Section */}
        <img 
          src={assets.logo} 
          className="hover:scale-110 cursor-pointer mb-4" 
          style={{ height: '80px', width: 'auto' }} 
          alt="Logo" 
        />

        {/* Links Section */}
        <div className="flex space-x-4 mb-2">
          <a href="#Home" id="Home" className="hover:underline">Home</a>
          <a href="#About" id="Home" className="hover:underline">About</a>
          <a href="#Property" className="hover:underline">Property</a>
          <a href="#Contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm">&copy; 2025 Ossaf Ali Property Cent. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


