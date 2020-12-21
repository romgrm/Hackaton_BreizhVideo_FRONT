import React from 'react'
import home from '../Data/home.jpeg'
export default function Home() {
    return (
        <div className="mx-auto">
            <img src={home} style={{ width: 500, height: 300, display: 'flex' }} className=" mx-auto mt-5" />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    )
}
