import React from 'react'
import ServiceCompo from './ServiceCompo'
import { FaTaxi } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { FaWheelchair } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

function Services() {
  return (
  




   <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
  <div className="container mx-auto grid gap-14 md:grid-cols-3 md:gap-5">
    <ServiceCompo
    color='bg-yellow-500'
    icon = {FaTaxi}
     title ="Taxi Vervoer "
     description="Boek taxi Rotterdam online van"
    />
    <ServiceCompo
    color = "bg-blue-500"
    icon = {IoAirplane}
     title ="Airport Vervoer "
     description="Boek taxi Rotterdam online van"
    />
    <ServiceCompo
    color = "bg-red-500"
    icon = {CiHospital1}
     title ="Patient Vervoer "
     description="Boek taxi Rotterdam online van"
    />
    <ServiceCompo
    color = "bg-green-500"
    icon = {FaWheelchair}
     title ="Rolstole Vervoer "
     description="Boek taxi Rotterdam online van"
    />
    <ServiceCompo
    color = "bg-orange-500"
    icon = {FaBusAlt}
     title ="Groeps Vervoer "
     description="Boek taxi Rotterdam online van"
    />

   
    
  </div>

</div>

  )
}

export default Services