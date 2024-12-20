import React, { useState } from 'react';
import './Skills.css';
import { SkillsData } from './SkillsData';

const Skills = () => {

    const [ clicked, setClicked ] = useState(false) // change state of skills button if clicked

    const toggle = (id) => {
        if (clicked===id) { // if toggle on, close it
            return setClicked(false)
        } else { // otherwise open
            return setClicked(id)
        }
    }

    return (
        <div data-aos="fade-right" className='skills-container container-default'>
            <div className='title-container'>
                <h2>my technologies</h2>
            </div>
            <div className='skill-list'>
                <div className='skills'>
                    {SkillsData.map((skill) => (
                        <button
                         key={skill.id}
                         onMouseLeave={() => setClicked(false)}
                         onClick={() => toggle(skill.id)}
                         className='skill-btn'
                        >
                            <div className='btnContent'>
                                {clicked !== skill.id && ( 
                                    <img src={skill.img} alt='' />
                                )}
                                {clicked === skill.id && (
                                    <p>{skill.desc}</p>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;