import React, { useState } from "react";
import "./Navbar.css";
import icon from "../../assets/icons/logo2.png";
import "./Hamburger.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const toggleNav = () => {
    // Dette kan du gjøre med klassenavn i stedet som jeg har gjort nedenfor med hamburgeren
    navBarOpen
      ? (document.getElementById("myNav").style.left = "100%")
      : (document.getElementById("myNav").style.left = "0%");
    setNavbarOpen(!navBarOpen);
  };

  return (
    <div className="container">
      <img className="hei" src={icon} alt="" />
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <nav>
            <ul>
              <li>
                <NavLink onClick={() => toggleNav()} to="/about">
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => toggleNav()} to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => toggleNav()} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        onClick={() => toggleNav()}
        className={
          navBarOpen
            ? "menuButton hamburger hamburger--spin is-active"
            : "menuButton hamburger hamburger--spin"
        }
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
