import React from 'react'
import './About.css'
import AboutBox from '../../components/about-box/AboutBox'
import bilde from '../../assets/icons/vbtk1.png'
import Hobby from '../../components/hobby/Hobby'

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
        <div className="img-section four-boxes">
          <ul className="img-boxes"></ul>
          <AboutBox title={'hei'} detail={'vet ikke'} />
          <div className="vl"></div>

          <AboutBox title={'hei'} detail={'vet ikke'} />
          <div className="vl"></div>
          <AboutBox title={'hei'} detail={'vet ikke'} />
          <div className="vl"></div>

          <AboutBox title={'hei'} detail={'vet ikke'} />
        </div>
        <div className="hobbies">
          <div className="hobbies-content">
            <h2>HOW I BEST SPEND MY LEISURE TIME</h2>{' '}
            <span>
              {' '}
              <hr />
              <h3>MY FAVORITE THINGS TO DO</h3>
            </span>
          </div>{' '}
          <div className="left-center-text">
            <Hobby
              name={'TENNIS'}
              text={
                'My hobby is playing tennis. I like it because you can play it with almost anyone and anywhere. I play tennis twice a week at the Smash tennis center near my school. I’ve played it on my own for four years, but regularly for only two years. I play tennis around the year in and outdoors with my friends and relatives. It’s easy to start tennis. You can sign up for classes at the nearby tennis center where you can usually borrow a racquet and tennis balls. Tennis is easy to learn and fun to play. You can play it in groups of four or with your friend. You can play tennis in many ways: you can play intensely and get in shape or you cannd'
              }
            />
            <div className="VL"></div>
            <img src={bilde} alt="" className="tennis-img" />
          </div>
          <div className="right-center-text">
            <img src={bilde} alt="" className="tennis-img1" />

            <div className="VL"></div>
            <Hobby
              name={'TRAVELS'}
              text={
                'My hobby is playing tennis. I like it because you can play it with almost anyone and anywhere. sh tennis center near my school. I’ve played it on my own for four years, but regularly for only two years. I play tennis around the year in and outdoors with my friends and relatives. It’s easy to start tennis. You can sign up for classes at the nearby tennis center where you can usually borrow a racquet and tennis balls. Tennis is easy to learn and fun to play. You can play it in groups of four or with your friend. You can play tennis in many ways: you can play intensely and get in shape or you cannd discuss with your part'
              }
            />
          </div>
          <div className="left-center-text">
            <Hobby name={'test'} text={'test text'} />
            <div className="VL"></div>
            <img src={bilde} alt="" className="tennis-img" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
