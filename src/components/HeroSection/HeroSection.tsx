import React from 'react'
import HeroForm from './HeroForm'

function HeroSection() {
  return (
    <div className='flex flex-col justify-between  min-h-screen border-2 w-full'>
        <div className='text-center px-4 py-2'>
            
<h1 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">De juiste Zorg op de juiste Plek</h1>
<h2>
(Zorgvervoer Regio Rotterdam)
</h2>
<p className=" px-4 text-sm text-justify  font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Taxi Zorgvervoer heeft alle keurmerken om het vervoer zo veilig en comfortabel mogelijk uit te voeren voor haar klanten. Veiligheid en betrouwbaarheid staan bij ons hoog in het vaandel. Taxi Zorgvervoer beschikt over het TX-keurmerk en heeft RTX-gekeurde chauffeurs. Daarnaast biedt Taxi Zorgvervoer begeleiding aan al haar chauffeurs om EHBO-, veiligheids-, rolstoel-, leerlingen- en lastige situatiecursussen te volgen.</p>


        </div>
        <div className='border-2'><HeroForm/></div>
    </div>
  )
}

export default HeroSection