import Image from 'next/image'
import React from 'react'
import image from '@/img/contact.webp'

function RegisterDriver() {
  return (
    <div 
    className='flex flex-col md:flex-row justify-around md:items-center border-2 m-4 rounded-lg'
    >
        <div className='flex flex-col w-2/3 gap-4 p-4'>

            <form action="" className='flex flex-col   gap-4'>
                <h1 className='font-bold md:text-2xl'>Registreer je als bestuurder</h1>
                <div className='flex flex-col w-full gap-2'>
                    <input type="text" placeholder='Uw volledige naam' className='border-2 rounded-lg p-2' />
                    <input type="email" placeholder='E-mail' className='border-2 rounded-lg p-2'/>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <input type="text" placeholder='Telefoonnummer'  className='border-2 rounded-lg p-2' />
                    <input type="age" placeholder='Leeftijd'  className='border-2 rounded-lg p-2'/>
                </div>
                <textarea name="" id="" placeholder='Uw bericht' className='border-2 p-4 rounded-lg'></textarea>
                <button type="button" className="w-full bg-blue-700 hover:bg-primary-dark text-white p-3 rounded-xl mt-5 transition-all">Indienen</button>
            </form>

        </div>
        <div className='p-2'>
            <Image src={image} alt="driver" className='shadow rounded-lg' width={320} height={320}/>
        </div>
    </div>
  )
}

export default RegisterDriver