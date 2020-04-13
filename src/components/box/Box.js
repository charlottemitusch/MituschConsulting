import React from 'react'
import { Link } from 'react-router-dom'
import './Box.css'
const Box = ({ header, body, link, linkText, image }) => {
  return (
    <div className="box-container">
      <div className="box-inner-container">
        <div className="box">
          <p className="top"> {header} </p> <p className="body"> {body} </p>{' '}
          <Link to={link} className="link">
            <p className="link-text"> {linkText} </p>{' '}
            <i className="large material-icons link-icon">
              keyboard_arrow_right{' '}
            </i>{' '}
          </Link>{' '}
        </div>{' '}
        <img src={image} alt="" className="about" />
      </div>{' '}
    </div>
  )
}

export default Box
