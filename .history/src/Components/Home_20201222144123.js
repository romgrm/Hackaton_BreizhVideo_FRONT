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
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
