import React from 'react'
import home from '../Data/home.jpeg'
export default function Home() {
    return (
        <div>
            <div className="mx-auto text-center">
                <img src={home} style={{ width: 500, height: 300, display: 'flex' }} className=" mx-auto mt-5 rou" />
                <button class="btn btn-primary mt-5" type="button">Voir les évènements</button>
            </div>
            <div class="">
            </div>
        </div>
    )
}
