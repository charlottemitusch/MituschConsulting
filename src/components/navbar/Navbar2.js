import React from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";

//import Link from "react-router-dom";

function Navbar2() {
  const bottomNav = () => {
    var x = document.getElementById("myNavbar");
    if (x.className === "bottomnav") {
      x.className += " responsive";
    } else {
      x.className = "bottomnav";
    }
  };
  return (
    <footer className="bottomnav" id="myNavbar">
      <nav>
        <p id="explore">EXPLORE</p>
        <ul>
          <li>
            <NavLink onClick={() => bottomNav()} to="/about">
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => bottomNav()} to="/projects">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => bottomNav()} to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar2;
