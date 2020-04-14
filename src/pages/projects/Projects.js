import React from 'react'
import './Projects.css'
import Project from '../../components/project/Project'
import icon from '../../assets/icons/prosjekt1.png'
import img from '../../assets/icons/google.png'

const Projects = () => {
    return (
        <div className="about-page">
            <section className="scroll">
                <header className="project-header">
                    <h2 className="project-header-title">
                        <small id="project-header">EXPLORE MY</small> <br />
                        PROJECT PORTFOLIO
                    </h2>
                </header>
            </section>
            <section className="scroll">
                <div className="project-box">
                    <Project img={icon} name={'dette er en test'} />

                    <Project img={img} name={'tster ut igjen'} />

                    <Project img={icon} name={'dette er en test'} />

                    <Project img={img} name={'tster ut igjen'} hr={'btm'} />
                </div>
            </section>
        </div>
    )
}

export default Projects
