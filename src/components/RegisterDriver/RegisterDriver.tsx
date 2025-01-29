import Image from 'next/image'
import React from 'react'
import image from '@/img/hospital.jpg'

function RegisterDriver() {
  return (
    <div>
        <div>

        </div>
        <div>
            <Image src={image} alt="driver" className='shadow' width={320} height={320}/>
        </div>
    </div>
  )
}

export default RegisterDriver