import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="scroll">
        <header className="about-header">
          <h2 className="about-header-title">
            <small id="about-header">THIS IS ME</small> <br />
            CHARLOTTE MARIE MITUSCH
          </h2>
        </header>
      </section>
      <section className="scroll">
        <div className="midt">
          <p className="about-text">
            Since 2008, Stanchieri Family Law has served over 1,400 clients with
            various family law disputes. Our lawyers represent a wide range of
            clients, but clients with complex legal issues and/or high conflict
            situations will benefit most from our law firm.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
