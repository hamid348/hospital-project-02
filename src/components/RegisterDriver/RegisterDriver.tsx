import Image from 'next/image'
import React from 'react'
import image from '@/img/contact.webp'

function RegisterDriver() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between md:justify-around items-center border-2 rounded-lg p-4">
        
        {/* Form Section */}
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-4 p-4">
          <form className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Registreer je als bestuurder</h1>
            <div className="flex flex-col w-full gap-2">
              <input 
                type="text" 
                placeholder="Uw volledige naam" 
                className="border-2 rounded-lg p-2" 
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="border-2 rounded-lg p-2" 
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <input 
                type="text" 
                placeholder="Telefoonnummer" 
                className="border-2 rounded-lg p-2" 
              />
              <input 
                type="number" 
                placeholder="Leeftijd" 
                className="border-2 rounded-lg p-2" 
              />
            </div>
            <textarea 
              name="" 
              id="" 
              placeholder="Uw bericht" 
              className="border-2 p-4 rounded-lg" 
            />
            <button 
              type="button" 
              className="w-full bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-xl mt-5 transition-all"
            >
              Indienen
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 p-2 mt-4 md:mt-0 w-full md:w-1/3 lg:w-1/2">
          <Image 
            src={image} 
            alt="driver" 
            className="shadow rounded-lg mx-auto w-full h-auto object-cover"
            width={320} 
            height={320} 
            layout="intrinsic"  // Maintains the image aspect ratio
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterDriver
