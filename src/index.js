import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/Routes";
import Navbar2 from "./components/navbar/Navbar2";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      <Routes />
      <Navbar2 />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
