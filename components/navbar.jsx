import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">PR Parkir & Hitung Kata</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/parkir">Parkir</NavLink></li>
                    <li><NavLink to="/kata">Hitung Kata</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;