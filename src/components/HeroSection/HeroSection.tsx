import React from 'react'
import HeroForm from './HeroForm'

function HeroSection() {
  return (
    <div className='p-4'>

    <div className='flex flex-col container mx-auto py-4 lg:flex-row justify-between lg:justify-around lg:items-center min-h-screen   '>
        <div className='lg:flex-1 text-center items-center justify-center px-4 py-2'>
            
<h1 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:5xl dark:text-white">De juiste Zorg op de juiste Plek</h1>
<h2>
(Zorgvervoer Regio Rotterdam)
</h2>
<p className=" font-normal py-4 leading-tight dark:text-gray-400">Taxi Zorgvervoer heeft alle keurmerken om het vervoer zo veilig en comfortabel mogelijk uit te voeren voor haar klanten. Veiligheid en betrouwbaarheid staan bij ons hoog in het vaandel. Taxi Zorgvervoer beschikt over het TX-keurmerk en heeft RTX-gekeurde chauffeurs. Daarnaast biedt Taxi Zorgvervoer begeleiding aan al haar chauffeurs om EHBO-, veiligheids-, rolstoel-, leerlingen- en lastige situatiecursussen te volgen.</p>


        </div>
        <div className='lg:flex-1 '><HeroForm/></div>
    </div>
    </div>
  )
}

export default HeroSection