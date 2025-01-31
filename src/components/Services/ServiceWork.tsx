import React from 'react'
import ServiceWorkCompo from './ServiceWorkCompo'
import { FaLocationDot } from "react-icons/fa6";

function ServiceWork() {
  return (
    <div className=' flex flex-col lg:flex-row gap-2 justify-center items-center bg-gray-400 py-8 px-2 m-4'>
        <ServiceWorkCompo
        icon={FaLocationDot}
        title="Service Work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas."
        />
        <ServiceWorkCompo
        icon={FaLocationDot}
        title="Service Work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas."
        />
        <ServiceWorkCompo
        icon={FaLocationDot}
        title="Service Work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas."
        />

    </div>
  )
}

export default ServiceWork