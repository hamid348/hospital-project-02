import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import hospital from '@/img/hospital.jpg'

interface ServiceCardsProps {
    pic: StaticImageData;
    title: string;
    description: string;
    link: string;
}

function ServiceCards(props: ServiceCardsProps) {
    return (
        <div className='flex flex-col items-center gap-4'>
                <Image src={props.pic} alt="hospital" width={320} height={320}/>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <p className='font-bold'>{props.description}</p>
                <button className='bg-blue-700 text-white rounded-lg px-2 py-1'>
                        <a href={props.link}>Click Me</a>
                </button>
        </div>
    )
}

export default ServiceCards