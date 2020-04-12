import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";

import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
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
  );
};
export default Routes;

function Contact() {
  return <h2>Contact</h2>;
}
