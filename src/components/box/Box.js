import React from 'react'
import { Link } from 'react-router-dom'
import './Box.css'
const Box = ({ className, header, body, link, linkText, image, imgName }) => {
    if (className === 'box-inner-container' && imgName === 'about3') {
    }
    if (className === 'left-text-container' && imgName === 'about1') {
    }
    return (
        <div className="box-container">
            <div className="container">
                <div className={className}>
                    <div className="box">
                        <p className="top"> {header} </p>{' '}
                        <p className="body"> {body} </p>{' '}
                        <Link to={link} className="link">
                            <p className="link-text"> {linkText} </p>{' '}
                            <i className="large material-icons link-icon">
                                keyboard_arrow_right{' '}
                            </i>{' '}
                        </Link>{' '}
                    </div>{' '}
                    <img src={image} alt="" className={imgName} />
                </div>{' '}
            </div>
        </div>
    )
}

export default Box
