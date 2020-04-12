import React from "react";

import icon2 from "../src/assets/icons/bilde1.png";

import "./App.css";

function App() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  return (
    <div className="hjem">
      <header className="hjem-header">
        <h2>CHARLOTTE MITUSCH</h2>
        <h1>
          <a
            href=" "
            class="typewrite"
            data-period="2000"
            data-type='[ "BUILDING A PORTFOLIO", "PROJECT BY PROJECT"]'
          >
            <span class="wrap"></span>
          </a>
        </h1>
      </header>
      <hr />
      <div className="innhold">
        <h2 className="title">
          <small>WELCOME TO</small>
        </h2>
        <h2 className="undertittel"> MITUSCH CONSULTING</h2>

        <hr id="margin" />

        <div className="container1">
          {" "}
          <img src={icon2} alt="" className="about" />
          <div className="box1">
            <p className="top">MEET ME</p>
            <p className="body">
              Get to know the people who dedicated their careers to family law
              and who make it all happen for our clients.
            </p>
            <p className="link">
              {" "}
              <a href="/about/">
                ABOUT
                <i className="large material-icons">keyboard_arrow_right</i>
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="container2">
          {" "}
          <img src={icon2} alt="" className="about1" />
          <div className="box2">
            <p className="top">EXPLORE PROJECTS</p>
            <p className="body">
              Get to know the people who dedicated their careers to family law
              and who make it all happen for our clients.
            </p>
            <p className="link">
              {" "}
              <a href="/projects/">
                PROJECTS
                <i className="large material-icons">keyboard_arrow_right</i>
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="container1">
          {" "}
          <img src={icon2} alt="" className="about" />
          <div className="box1">
            <p className="top">MEET ME</p>
            <p className="body">
              Get to know the people who dedicated their careers to family law
              and who make it all happen for our clients.
            </p>
            <p className="link">
              {" "}
              <a href="/about/">
                ABOUT
                <i className="large material-icons">keyboard_arrow_right</i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
