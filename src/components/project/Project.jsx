import React from 'react'

import './Project.css'

const Project = ({ img, name }) => {
    return (
        <div className="project-container">
            <img src={img} alt="" id="project-img" />
            <div className="project">{name}</div>
        </div>
    )
}

export default Project
