import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
        <div className="nav-heading">HARDIK SHARMA</div>
        <nav className="nav-menu">
          <a>Home</a>
          <a>About Me</a>
          <a>Projects</a>
          <a>Services</a>
          <a>Contact Me</a>
        </nav>
        <button className="nav-button">Hire Me</button>
        </div>
    </>
  )
}

export default Navbar