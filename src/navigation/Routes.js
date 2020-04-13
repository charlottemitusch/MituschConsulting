import React from 'react'
import About from '../pages/about/About'
import Projects from '../pages/projects/Projects'
import App from '../App'
import Contact from '../pages/contact/Contact'

import { Switch, Route } from 'react-router-dom'
const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>{' '}
      <Route path="/projects">
        <Projects />
      </Route>{' '}
      <Route path="/contact">
        <Contact />
      </Route>{' '}
      <Route path="/">
        <App />
      </Route>{' '}
    </Switch>
  )
}
export default Routes
