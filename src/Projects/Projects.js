import React from 'react';
import './Projects.css';
import { ProjectData } from './ProjectData';

const Projects = () => {
  return (
    <div className='projects-container container-default'>
        <h2>Projects I've worked on</h2>
        {ProjectData.map((index) => {
            return (
                <div className='project-container' key={index}>
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
                    <a href={index.url} target='_blank' rel='noreferrer'>View Project</a>
                </div>
            )
        })}
    </div>
  )
}

export default Projects