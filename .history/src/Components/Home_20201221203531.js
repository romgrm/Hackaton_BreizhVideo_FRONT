import React from 'react'
import home from '../Data/home.jpeg'
export default function Home() {
    return (
        <div  className="mr-5">
            <Image src={home} style={{width: 500, height: 300}} />
        </div>
    )
}
