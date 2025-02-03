import React from 'react'

import { FC } from 'react';

interface ServiceCompoProps {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
    description: string;
    color: string;
}

function ServiceCompo({ icon: Icon , title, description , color}: ServiceCompoProps) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
    <div
      className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full ${color} shadow-lg shadow-teal-500/40`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{title}</h1>
    <p className="px-4 text-gray-500">{description}</p>
    <div
      className="mx-auto flex h-16 w-16  transform items-center justify-center rounded-full ">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>

    </div>
  </div>
  )
}

export default ServiceCompo