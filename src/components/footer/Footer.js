import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bottomnav" id="myNavbar">
      <nav>
        <p id="explore"> EXPLORE </p>{' '}
        <ul>
          <li>
            <NavLink to="/about"> ABOUT ME </NavLink>{' '}
          </li>{' '}
          <li>
            <NavLink to="/projects"> PROJECTS </NavLink>{' '}
          </li>{' '}
          <li>
            <NavLink to="/contact"> CONTACT </NavLink>{' '}
          </li>{' '}
        </ul>{' '}
      </nav>{' '}
    </footer>
  )
}

export default Footer
