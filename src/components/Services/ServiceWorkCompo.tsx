import React from 'react'


interface ServiceWorkCompoProps {
    icon: React.ComponentType;
    title: string;
    description: string;
}

function ServiceWorkCompo(props: ServiceWorkCompoProps) {
    return (
        <div className='border-t-4 border-blue-700 flex flex-col justify-center items-center gap-4 bg-white p-2 rounded-lg'>
            <div>
                <props.icon/>
            </div>
                <h1 className='text-xl font-bold'>
                     {props.title}
                </h1>
                <p className='text-center'>
                    {props.description}
                </p>

        </div>
    )
}

export default ServiceWorkCompo