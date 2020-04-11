import React from "react";
import "./Navbar.css";
import icon from "../../assets/icons/icon.png";
import hei from "../../assets/icons/nav.png";
//interface NavbarProps {}
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Navbar() {
  const openNav = () => {
    document.getElementById("myNav").style.left = "0%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.left = "100%";
  };

  return (
    <div className="container">
      <img className="hei" src={icon} alt="" />
      <Router>
        <div id="myNav" class="overlay">
          <a class="closebtn" onClick={() => closeNav()}>
            &times;
          </a>
          <div class="overlay-content">
            <nav>
              <ul>
                <li>
                  <NavLink to="/about">About me</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <a onClick={() => openNav()}>
        {" "}
        <span>
          <img className="navbar" src={hei} alt="" onClick={() => openNav()} />
        </span>
      </a>
    </div>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

function About() {
  return <h2>About me</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

export default Navbar;
