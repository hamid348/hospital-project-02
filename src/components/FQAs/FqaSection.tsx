import React from 'react'
import FqaCard from './FqaCard'

function FqaSection() {
  return (
    <div className='p-4  flex  items-center justify-center bg-blue-400 dark:bg-gray-900'>
        
        <div className='container flex flex-col gap-4 max-w-md mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-none p-4'>
        <h1 className='text-2xl font-bold text-center dark:text-white'>Frequently Asked Questions</h1>
            <FqaCard/>
        </div>
    </div>
  )
}

export default FqaSection