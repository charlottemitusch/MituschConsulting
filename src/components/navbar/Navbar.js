import React, { useState } from 'react'
import './Navbar.css'
import icon from '../../assets/icons/logo2.png'
import './Hamburger.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false)
  const toggleNav = () => {
    // Dette kan du gjøre med klassenavn i stedet som jeg har gjort nedenfor med hamburgeren
    navBarOpen
      ? (document.getElementById('myNav').style.left = '100%')
      : (document.getElementById('myNav').style.left = '0%')
    setNavbarOpen(!navBarOpen)
  }

  return (
    <>
      <div className="container">
        <NavLink to="/">
          <img className="hei" src={icon} alt="" />
        </NavLink>
      </div>
      <div
        onClick={() => toggleNav()}
        className={
          navBarOpen
            ? 'menuButton hamburger hamburger--spin is-active'
            : 'menuButton hamburger hamburger--spin'
        }
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
      <div id="myNav" className="overlay">
        <div className="overlay-content">
          <nav>
            <ul>
              <li>
                <NavLink
                  onClick={() => toggleNav()}
                  to="/about"
                  activeClassName="active"
                >
                  ABOUT ME
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => toggleNav()} to="/projects">
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => toggleNav()} to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
