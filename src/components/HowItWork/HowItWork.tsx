import React from 'react'
import WorkCard from './WorkCard'

function HowItWork() {
  
  return (
    <div>
        <div className='flex flex-col items-center gap-4 p-4'>
            <p className='font-bold'>
            3 eenvoudige stappen
            </p>
            <h1 className='text-2xl font-bold'>
            Hoe het werkt
            </h1>
            <p className='text-center'>
            Volg deze eenvoudige stappen om uw taxi of busje in slechts enkele te boeken notulen.
            </p>
        </div>
        <div className='flex flex-col items-center gap-4 p-4'>
       <WorkCard
       step='1'
       title='Kies uw bestemming'
        description='Kies uw bestemming en selecteer het type voertuig dat u wilt boeken.'
        buttonlink='Read More'
       />
       <WorkCard
       step='2'
       title='Kies uw bestemming'
        description='Kies uw bestemming en selecteer het type voertuig dat u wilt boeken.'
        buttonlink='Read More'
       />
       <WorkCard
       step='3'
       title='Kies uw bestemming'
        description='Kies uw bestemming en selecteer het type voertuig dat u wilt boeken.'
        buttonlink='Read More'
       />
       
        </div>
    </div>
  )
}

export default HowItWork