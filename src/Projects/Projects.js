import React, { useState } from 'react';
import './Projects.css';
import { ProjectData } from './ProjectData';
import { AiOutlineEye, AiOutlineGithub } from 'react-icons/ai'

const Projects = ({themeSwitch, setThemeSwitch}) => {
    const [ clicked, setClicked ] = useState(false) // change state of skills button if clicked

    const toggle = (id) => {
        if (clicked===id) { // if toggle on, close it
            return setClicked(false)
        } else { // otherwise open
            setClicked(id)
        }
    }
  return (
    <div className='projects-container container-default'>
        <h2>Projects I've worked on</h2>
        {ProjectData.map((project) => { // map through every project in project data
            return (
                <div  data-aos="fade" className={themeSwitch ? 'project-container bg-light-1' : 'project-container bg-dark-1 dark-text'} key={project.id}>
                    <h3>{project.title}</h3>
                    <div className='project-img'>
                        <img src={project.image} alt='' />
                    </div>
                    <div className='project-description'>
                        <p className='p-default'>{project.description}</p>
                        <details>
                            <summary>View Technologies</summary>
                                <div className='project-skills-container'>    
                                    {project.skills.map((skill) => { // map through every skill in project.skills
                                        return (
                                            <button
                                                key={skill.id}
                                                onMouseLeave={() => setClicked(false)}
                                                onClick={() => toggle(skill.id)}
                                                className='skill-btn'
                                            >
                                               <div className='btnContent'>
                                                   {clicked !== skill.id && ( 
                                                       <img src={skill.name} alt='' />
                                                   )}
                                                   {clicked === skill.id && (
                                                       <p>{skill.desc}</p>
                                                   )}
                                               </div>
                                            </button>
                                            // <img className='project-skills' src={skill.name} alt='' key={skill.id} />
                                        )
                                    })}
                                </div>
                        </details>
                    </div>
                    <div className='project-links'>
                        {project.url && (
                            <a href={project.url} target='_blank' rel='noreferrer'><AiOutlineEye /></a>
                        )}
                        {project.github_url && (
                            <a href={project.github_url} target='_blank' rel='noreferrer'><AiOutlineGithub /></a>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects