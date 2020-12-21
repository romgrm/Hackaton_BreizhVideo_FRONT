import React from 'react'
import home from '../Data/home.jpeg'
export default function Home() {
    return (
        <div>
            <div className="mx-auto text-center">
                <img src={home} style={{ width: 500, height: 300, display: 'flex' }} className=" mx-auto mt-5" />
                <button class="btn btn-primary" type="button">Button</button>
            </div>
            <div class="">
            </div>
        </div>
    )
}
