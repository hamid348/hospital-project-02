import React from 'react'
import ServiceCards from '../ServiceCards/ServiceCards'
import hospital from '@/img/hospital.jpg'
// import Image from 'next/image'

function Services() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-4 '>
     <ServiceCards
     pic = {hospital}
        title = 'Hospital'
        description = 'This is a hospital'
        link = '/hospital'
     />
     <ServiceCards
     pic = {hospital}
        title = 'Hospital'
        description = 'This is a hospital'
        link = '/hospital'
     />
     <ServiceCards
     pic = {hospital}
        title = 'Hospital'
        description = 'This is a hospital'
        link = '/hospital'
     />
     <ServiceCards
     pic = {hospital}
        title = 'Hospital'
        description = 'This is a hospital'
        link = '/hospital'
     />
     <ServiceCards
     pic = {hospital}
        title = 'Hospital'
        description = 'This is a hospital'
        link = '/hospital'
     />

    </div>
  )
}

export default Services