// import { title } from 'process'
import React from 'react';
import Image from 'next/image';
import logo from "@/img/logo.webp"

function Footer() {
  return (
    <div className=''>
        

        <footer className="flex flex-col md:flex-row gap-4 py-4 justify-around px-2 bg-white dark:bg-gray-900">
   
           
           <div className='flex flex-col flex-1 items-center justify-center gap-4'>
            <Image
            src={logo}
            alt='logo'
            width={200}
            height={200}
            />
            <p className='text-center'>
            Wij bieden snelle en betrouwbare besteldiensten voor ziekenhuizen en medische noodgevallen.
            </p>
           </div>
           <div className='flex-1'>
        <ul className='flex flex-col gap-4 justify-between'>

            <h2 className='font-bold'>Quick Links</h2>

            <li>
                Home
            </li>

            <li>
                 Betalingbevestiging
            </li>

            <li>
                 Privacyverklaring
            </li>

            <li>
                Algemene voorwaarden
            </li>

        </ul>
           </div>
           <div className='flex-1'>
        <ul className='flex flex-col gap-4 justify-between items-start'>
            <h1 className='font-bold '>Contact</h1>

            <li>
                Home
            </li>

            <li>
                Betalingbevestiging
            </li>

            <li>
                Privacyverklaring
            </li>

            <li>
                Algemene voorwaarden
            </li>

        </ul>
           </div>
           
   
   

        </footer>
        
        <div className='text-center md:py-8'>
        © {new Date().getFullYear()} Zorgvervoer Regio Rotterdam. All rights reserved.
        </div>

    </div>
  )
}

export default Footer