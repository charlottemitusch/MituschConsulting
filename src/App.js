import React, { useEffect } from 'react'
import bilde from '../src/assets/icons/bilde1.png'
import TxtType from './components/txtType/TxtType'
import './App.css'
import Box from './components/box/Box'
const App = () => {
  useEffect(() => {
    TxtType()
  }, [])
  return (
    <div className="hjem">
      <header className="hjem-header">
        <h2>CHARLOTTE MITUSCH</h2>
        <h1>
          <div
            class="typewrite"
            data-period="2000"
            data-type='[ "BUILDING A PORTFOLIO", "PROJECT BY PROJECT"]'
          >
            <span class="wrap"></span>
          </div>
        </h1>
      </header>
      <hr />
      <div className="innhold">
        <h2 className="title">
          <small>WELCOME TO</small>
        </h2>
        <h2 className="undertittel"> MITUSCH CONSULTING</h2>
        <hr id="margin" />
        <Box
          header={'MEET ME'}
          body={
            'Get to know the people who dedicated their careers to family law and who make it all happen for our clients.'
          }
          image={bilde}
        ></Box>
        <hr />
      </div>
    </div>
  )
}

export default App
