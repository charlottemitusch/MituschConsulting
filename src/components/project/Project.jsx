import React from 'react'

import './Project.css'

const Project = ({ hr, img, name, descript }) => {
    return (
        <div className="project-container">
            {hr === 'top' && <hr id="hr-p" />}
            <img src={img} alt="" id="project-img" />

            <div className="project-name">
                <h2>
                    {name} <br /> <span>{descript}</span>{' '}
                </h2>
            </div>
            {hr === 'btm' && <hr id="hr-p" />}
        </div>
    )
}

export default Project
