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
                    <div className="project-text">
                        <h3>EXPLORE</h3>
                        <span>PROJECTS</span>
                    </div>

                    <Project
                        img={icon}
                        name={'PROSJEKT'}
                        descript={'Mitt første prosjekt'}
                    />

                    <Project
                        img={img}
                        name={'PROSJEKT'}
                        descript={'Mitt første prosjekt'}
                    />

                    <Project
                        img={icon}
                        name={'PROSJEKT'}
                        descript={'Mitt første prosjekt'}
                    />

                    <Project
                        img={img}
                        name={'PROSJEKT'}
                        descript={'Mitt første prosjekt'}
                    />

                    <Project
                        img={icon}
                        name={'PROSJEKT'}
                        descript={'Mitt første prosjekt'}
                    />
                    <hr className="vL" />
                </div>
            </section>
        </div>
    )
}

export default Projects
