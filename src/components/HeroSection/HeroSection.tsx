import React from 'react'
import HeroForm from './HeroForm'

function HeroSection() {
  return (
    <div className='flex flex-col py-4 lg:flex-row justify-between lg:justify-around lg:items-center min-h-screen  w-full'>
        <div className='lg:flex-1 text-center items-center justify-center px-4 py-2'>
            
<h1 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:5xl dark:text-white">De juiste Zorg op de juiste Plek</h1>
<h2>
(Zorgvervoer Regio Rotterdam)
</h2>
<p className=" px-4 text-sm text-justify  font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-4 xl:px-48 dark:text-gray-400">Taxi Zorgvervoer heeft alle keurmerken om het vervoer zo veilig en comfortabel mogelijk uit te voeren voor haar klanten. Veiligheid en betrouwbaarheid staan bij ons hoog in het vaandel. Taxi Zorgvervoer beschikt over het TX-keurmerk en heeft RTX-gekeurde chauffeurs. Daarnaast biedt Taxi Zorgvervoer begeleiding aan al haar chauffeurs om EHBO-, veiligheids-, rolstoel-, leerlingen- en lastige situatiecursussen te volgen.</p>


        </div>
        <div className='lg:flex-1 '><HeroForm/></div>
    </div>
  )
}

export default HeroSection