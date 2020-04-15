//import icon from '../../assets/icons/bg.png'
import './Bakgrunn.css'
import TxtType from './../txtType/TxtType'
import React, { useEffect } from 'react'

const Bakgrunn = ({ icon, header, text }) => {
    useEffect(() => {
        TxtType()
    }, [])
    return (
        <div className="content1">
            <div className="bakgrunn">
                <img
                    src={icon}
                    alt=""
                    id="bakgrunn"
                    className="with-overlay scroll-section screen-size   text-center  hero-banner showing"
                />
            </div>
            <div class="center-screen">
                <div class="elm-with-fade-in fade-in">
                    <h2 class="max-1820 heading-60 ">
                        <small>{header}</small> <br />
                        <h1 className="viktig">
                            <a
                                href=" "
                                class="typewrite"
                                data-period="2000"
                                data-type={text}
                            >
                                <span class="wrap"></span>
                            </a>
                        </h1>
                    </h2>
                </div>
            </div>
            <div class="arrow bounce"></div>
        </div>
    )
}
export default Bakgrunn
