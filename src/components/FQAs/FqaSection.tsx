import React from 'react'
import FqaCard from './FqaCard'

function FqaSection() {
  return (
    <section className='w-full py-12 px-4 flex items-center justify-center bg-blue-400 dark:bg-gray-900'>
        <div className='container flex flex-col gap-6 w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl dark:bg-gray-800 dark:shadow-none p-6 md:p-8'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center dark:text-white transition-colors'>
                Frequently Asked Questions
            </h1>
            <div className='space-y-4'>
                <FqaCard />
            </div>
        </div>
    </section>
  )
}

export default FqaSection