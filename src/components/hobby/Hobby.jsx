import React from 'react'

import './Hobby.css'

const Hobby = ({ name, text }) => {
  return (
    <div className="hobbies-text">
      <p>{name}</p>
      <span>{text}</span>
    </div>
  )
}

export default Hobby
