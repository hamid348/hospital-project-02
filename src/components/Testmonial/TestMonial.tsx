import React from "react";
import TestMonialCompo from "./TestMonialCompo";
import person1 from "@/img/32.jpg";
import person2 from "@/img/44.jpg";
import person3 from "@/img/65.jpg";


function TestMonial() {
  return (
    <div className="flex flex-col  justify-center items-center gap-4 bg-white p-2 rounded-lg">
      <h1 className="md:text-2xl">Wat onze klanten zeggen</h1>
      <div className="flex md:flex-row md:py-8">
        <TestMonialCompo 
          person={person1} 
          name="John" 
          about="Software Engineer" 
          testmonial="Fantastische service! De chauffeur was zeer vriendelijk en de auto was erg comfortabel. Ik zou dit bedrijf zeker aanraden voor lange ritten."
        />
        <TestMonialCompo 
          person={person2} 
          name="John" 
          about="Software Engineer" 
          testmonial="Fantastische service! De chauffeur was zeer vriendelijk en de auto was erg comfortabel. Ik zou dit bedrijf zeker aanraden voor lange ritten."
        />
        <TestMonialCompo 
          person={person3} 
          name="John" 
          about="Software Engineer" 
          testmonial="Fantastische service! De chauffeur was zeer vriendelijk en de auto was erg comfortabel. Ik zou dit bedrijf zeker aanraden voor lange ritten."
        />
      </div>
    </div>
  );
}

export default TestMonial;
