import React from 'react'

const Navbar = () => {
  return (
      <nav className="bg-green-900 text-white px-6 py-4 lg:px-20 shadow-md flex justify-between items-center relative
       w-full">
        <img src="\logo.png" width={60} height={50} alt="We Poomala" className="w-15"/>
        <ul className="flex gap-6 text-lg p-2">
          <li className="hover:text-green-300 cursor-pointer">Home</li>
          <li className="hover:text-green-300 cursor-pointer">Resorts</li>
          <li className="hover:text-green-300 cursor-pointer">Gallery</li>
          <li className="hover:text-green-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  }

export default Navbar
