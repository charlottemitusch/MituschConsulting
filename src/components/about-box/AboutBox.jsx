import React from 'react'
import './AboutBox.css'

const AboutBox = ({ title, detail }) => {
    return (
        <li>
            <div className="box-content">
                <span className="box-title">{title}</span>
                <span className="box-detail">{detail}</span>
            </div>
        </li>
    )
}
export default AboutBox
