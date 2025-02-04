import React from 'react';
import HeroForm from './HeroForm';
import hero from '../../img/hero.jpg';

function HeroSection() {
  return (
    <div className="p-4">
      {/* Hero Section with Background Image */}
      <div
        className="flex flex-col container mx-auto py-16 lg:flex-row justify-between lg:justify-around lg:items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${hero})`, // Background image for dynamic imports
        }}
      >
        {/* Left Section (Text content) */}
        <div className="lg:flex-1 text-center lg:text-left px-4 py-6 lg:py-0">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 leading-tight md:text-4xl lg:text-5xl dark:text-white">
            De juiste Zorg op de juiste Plek
          </h1>
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-300">
            (Zorgvervoer Regio Rotterdam)
          </h2>
          <p className="text-gray-700 text-justify dark:text-gray-400 font-normal text-base lg:text-lg mt-4 tracking-wide leading-relaxed lg:leading-loose">
            Taxi Zorgvervoer heeft alle keurmerken om het vervoer zo veilig en comfortabel mogelijk uit te voeren voor haar klanten. Veiligheid en betrouwbaarheid staan bij ons hoog in het vaandel. Taxi Zorgvervoer beschikt over het TX-keurmerk en heeft RTX-gekeurde chauffeurs. Daarnaast biedt Taxi Zorgvervoer begeleiding aan al haar chauffeurs om EHBO-, veiligheids-, rolstoel-, leerlingen- en lastige situatiecursussen te volgen.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:flex-1 mt-6 lg:mt-0">
          <HeroForm />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
