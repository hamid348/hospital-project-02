import React from 'react'

interface AboutCards {
    title: string;
    desc: string;
    }

function AboutCards(props: AboutCards) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-blue-400 font-bold text-lg mb-2">{props.title}</h3>
    <p className="text-gray-600 text-sm">{props.desc}</p>

</div>
  )
}

export default AboutCards