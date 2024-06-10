import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
        <div className="nav-heading">HARDIK SHARMA</div>
        <nav className="nav-menu">
         <NavLink to="/" className="nav-link">Home</NavLink>
         <NavLink to="/about" className="nav-link">About Me</NavLink>
         <NavLink to="/projects" className="nav-link">Projects</NavLink>
         <NavLink to="/experience" className="nav-link">Experience</NavLink>
         <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
        </nav>
        <button className="nav-button">Hire Me</button>
        </div>
    </>
  )
}

export default Navbar