import React from 'react'
import './About.css'
import bilde from '../../assets/icons/oslo4.png'
import Bakgrunn from '../../components/background/Bakgrunn'

const About = () => {
  return (
    <div>
      <Bakgrunn
        icon={bilde}
        header={'GET TO KNOW ME'}
        text={'["REACH OUT IF YOU LIKE WHAT YOU SEE", "OR HAVE ANY QUESTIONS"]'}
      />{' '}
    </div>
  )
}

export default About
