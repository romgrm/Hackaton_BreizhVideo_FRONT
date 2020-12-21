import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BreizhVideo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/Events">Events</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Movies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Places</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
