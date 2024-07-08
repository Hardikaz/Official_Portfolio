import React from 'react'
import {useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {

  const [isMenuIcon,setMenuIcon]=useState(true);

  const toggleIcon= () => {
    setMenuIcon(!isMenuIcon);
  };

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
        <div className="svg-containers" onClick={toggleIcon}>
        {isMenuIcon ?
        ( <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5" />
</svg> ):
(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" />
</svg>) }

</div>
        <button className="nav-button">Hire Me</button>
        </div>
    </>
  )
}

export default Navbar