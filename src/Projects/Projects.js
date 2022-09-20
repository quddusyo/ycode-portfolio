import React from 'react';
import './Projects.css';
import { ProjectData } from './ProjectData';
import { AiOutlineEye, AiOutlineGithub } from 'react-icons/ai'

const Projects = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className='projects-container container-default'>
        <h2>Projects I've worked on</h2>
        {ProjectData.map((index) => {
            return (
                <div className={themeSwitch ? 'project-container bg-light-1' : 'project-container bg-dark-1 dark-text'} key={index}>
                    <h3>{index.title}</h3>
                    <div className='project-img'>
                        <img src={index.image} alt='' className='image' />
                    </div>
                    <div className='project-description'>
                        <p className='p-default'>{index.description}</p>
                        <details>
                            <summary>View Technologies</summary>
                                <div className='project-skills-container'>    
                                    {index.skills.map((skill) => {
                                        return (
                                            <img className='project-skills' src={skill} alt='' />
                                        )
                                    })}
                                </div>
                        </details>
                    </div>
                    <div className='project-links'>
                        {index.url && (
                            <a href={index.url} target='_blank' rel='noreferrer'><AiOutlineEye /></a>
                        )}
                        {index.github_url && (
                            <a href={index.github_url} target='_blank' rel='noreferrer'><AiOutlineGithub /></a>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects