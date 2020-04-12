import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './navigation/Routes'
import Footer from './components/footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
