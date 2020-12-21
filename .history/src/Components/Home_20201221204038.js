import React from 'react'
import home from '../Data/home.jpeg'
export default function Home() {
    return (
        <div  className="mx-auto">
            <img src={home} style={{width: 500, height: 300, display: 'flex'}} />
        </div>
    )
}
