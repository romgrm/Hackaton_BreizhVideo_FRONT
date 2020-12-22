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
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </div>
    )
}
