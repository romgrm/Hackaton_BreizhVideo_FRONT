import React from 'react'
import home from '../Data/home.jpeg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="mx-auto text-center">
                <h1 className="display-3 my-5">BreizhVideo</h1>
                <img src={home} style={{ width: 500, height: 300, display: 'flex' }} className=" mx-auto mt-5 rounded" />
                <Link class="btn btn-primary mt-5" type="button" to='/Events'>Voir les évènements</Link>
            </div>
            <div class="">
            </div>
           
        </div>
    )
}
