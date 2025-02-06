import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface TestMonialCompoProps {
    person: StaticImageData;
    name: string;
    about: string;
    testmonial: string;
}

function TestMonialCompo(props: TestMonialCompoProps) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg">
            <div className="flex gap-4">
                <Image
                    src={props.person}
                    alt="person"
                    className="rounded-full"
                    width={50}
                    height={50}
                />
                <div>
                    <h1 className="font-bold">{props.name}</h1>
                    <p>{props.about}</p>
                </div>
            </div>
            <div>
                <p>
                    {props.testmonial}
                </p>
            </div>
        </div>
    )
}

export default TestMonialCompo