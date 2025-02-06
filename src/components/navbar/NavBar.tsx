'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import logo from '@/img/logo.webp'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className='container mx-auto flex justify-between items-center px-4 py-2'>
        {/* Logo - Increased size */}
        <div className='flex-shrink-0'>
          <Image 
            src={logo} 
            alt="logo" 
            width={120} 
            height={120} 
            className="h-auto w-auto object-contain max-h-[70px] md:max-h-[90px]" 
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-1 justify-center items-center'>
          <ul className='flex space-x-8 items-center'>
            <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>Home</li>
            <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>About</li>
            <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>Services</li>
          </ul>
        </div>

        {/* Button - Separate from menu */}
        <div className='hidden md:block'>
          <button className='bg-blue-500 text-white rounded-lg px-6 py-2.5 hover:bg-blue-600 transition-colors text-lg'>
            Click Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoMdClose className='w-7 h-7' />
          ) : (
            <RxHamburgerMenu className='w-7 h-7' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-md'>
          <div className='container mx-auto px-4 py-3'>
            <ul className='space-y-4 text-center'>
              <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>Home</li>
              <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>About</li>
              <li className='hover:text-blue-500 transition-colors cursor-pointer text-lg'>Services</li>
              <li className='pt-4'>
                <button className='w-full bg-blue-500 text-white rounded-lg px-6 py-2.5 hover:bg-blue-600 transition-colors text-lg'>
                  Click Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar