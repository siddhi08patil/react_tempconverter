import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Temprature_converter</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Farenhite">Ferenhite</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Celcius" >celcius </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Kelvin" >kelvin</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
