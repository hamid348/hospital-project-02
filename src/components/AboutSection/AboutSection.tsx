import React from "react";
import AboutCards from "./AboutCards";

function AboutSection() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-6">
             <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                 Effortless 
            </span> 
            Transportation Services
        </h1>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-400">Premium Travel Solutions by OkTaxis</h2>
          <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
            Traveling can be an exciting adventure, but getting to and from the
            airport often presents challenges. At OkTaxis, we provide seamless
            and reliable airport transportation services in Manchester and
            Liverpool, ensuring your journey begins and ends on the right note.
            Whether you are traveling for business or leisure, our premium
            services are designed to cater to your needs with comfort,
            efficiency, and luxury.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-400">Premium Travel Solutions by OkTaxis</h2>
          <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
            Traveling can be an exciting adventure, but getting to and from the
            airport often presents challenges. At OkTaxis, we provide seamless
            and reliable airport transportation services in Manchester and
            Liverpool, ensuring your journey begins and ends on the right note.
            Whether you are traveling for business or leisure, our premium
            services are designed to cater to your needs with comfort,
            efficiency, and luxury.
          </p>
        </div>
        {/* card section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <AboutCards
                title="Safety First"
                desc="We prioritize the safety of our passengers and drivers, ensuring a secure and comfortable journey."
            />
            <AboutCards
                title="Safety First"
                desc="We prioritize the safety of our passengers and drivers, ensuring a secure and comfortable journey."
            />
            <AboutCards
                title="Safety First"
                desc="We prioritize the safety of our passengers and drivers, ensuring a secure and comfortable journey."
            />
            <AboutCards
                title="Safety First"
                desc="We prioritize the safety of our passengers and drivers, ensuring a secure and comfortable journey."
            />
        </div>
        <div className="flex justify-center mt-12">
            <button className="bg-blue-400 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-800 hover:shadow-2xl transition duration-300">Book Now</button>
        </div>
      </div>

      
    </div>
  );
}

export default AboutSection;
