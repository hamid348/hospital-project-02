'use client'
import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
import logo from '@/img/logo.webp'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <div className=' flex justify-around py-4 items-center border-b-2 '>
        <div className=''>
            <Image src={logo} alt="logo" width={100}  height={100}/>
        </div>
        <div className='hidden md:block '>
            <ul className='flex gap-6 justify-around w-1/2'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
            </ul>
        </div>
        <div className=' h-8 w-8  md:hidden '
        
        >
           <RxHamburgerMenu className='w-full h-full md:hidden '
           onClick={() => setIsOpen(!isOpen)}
            />        
        </div>
        <div className='  w-24 h-10 text-center hidden md:block'>
              <button className=' bg-blue-700 text-white rounded-lg px-2 py-1 '>
                Click Me
              </button>


        </div>
       
        
    </div>
    <div>
    {
      isOpen && (
        <div className='absolute mx-auto top-4'>
          Hamid
        </div>
      )
    }
  </div>
  </div>
  )
}

export default NavBar