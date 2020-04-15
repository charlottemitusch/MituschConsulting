import React, { useEffect } from 'react'
import bilde from '../src/assets/icons/bilde1.png'
import TxtType from './components/txtType/TxtType'
import './App.css'
import Box from './components/box/Box'
import Bakgrunn from './components/background/Bakgrunn'
import icon from '../src/assets/icons/bg.png'
const App = () => {
    useEffect(() => {
        TxtType()
    }, [])
    return (
        <div className="hjem">
            <Bakgrunn
                icon={icon}
                header={'CHARLOTTE MITUSCH'}
                text={'[ "BUILDING A PORTFOLIO", "PROJECT BY PROJECT"]'}
            />
            <div className="content">
                <hr />
                <div className="innhold">
                    <h2 className="title">
                        <small>WELCOME TO</small>
                    </h2>
                    <h2 className="undertittel"> MITUSCH CONSULTING</h2>
                    <hr id="margin" />
                    <div className="box-container1">
                        <Box
                            className={'box-inner-container'}
                            header={'MEET ME'}
                            body={
                                'Get to know the people who dedicated their careers to family law and who make it all happen for our clients.'
                            }
                            link={'/about'}
                            linkText={'ABOUT'}
                            imgName={'about3'}
                            image={bilde}
                        ></Box>
                    </div>
                    <hr />
                    <div>
                        <Box
                            imgName={'about1'}
                            className={'left-text-container'}
                            header={'EXPLORE PROJECTS'}
                            body={
                                'Get to know the people who dedicated their careers to family law and who make it all happen for our clients.'
                            }
                            link={'/projects'}
                            linkText={'PROJECTS'}
                            image={bilde}
                        />
                    </div>
                    <hr />
                    <Box
                        className={'box-inner-container'}
                        imgName={'about3'}
                        header={'REACH OUT'}
                        body={
                            'Get to know the people who dedicated their careers to family law and who make it all happen for our clients.'
                        }
                        link={'/contact'}
                        linkText={'CONTACT'}
                        image={bilde}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
