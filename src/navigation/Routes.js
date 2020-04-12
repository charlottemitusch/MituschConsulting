import React from "react";

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

function About() {
  return <h2>H</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}
