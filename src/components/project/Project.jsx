import React from 'react'

import './Project.css'

const Project = ({ hr, img, name }) => {
    return (
        <div className="project-container">
            {hr === 'top' && <hr id="hr-p" />}
            <img src={img} alt="" id="project-img" />

            <div className="project">{name}</div>
            {hr === 'btm' && <hr id="hr-p" />}
        </div>
    )
}

export default Project
