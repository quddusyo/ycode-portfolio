import React, {useState} from 'react';
import './Skills.css';
import { SkillsData } from './SkillsData';

const Skills = () => {

    const [ clicked, setClicked ] = useState(false)

    const toggle = (id) => {
        if (clicked===id) {
            // if toggle on, close it
            return setClicked(false)
        } else {
            setClicked(id)
        }
    }

    return (
        <div className='skills-container container-default'>
            <div className='title-container'>
                <h2>my tech stack</h2>
            </div>
            <div className='skill-list'>
                <div className='skills'>
                    {SkillsData.map((skill, index) => (
                        <button
                         key={skill.id}
                         onMouseEnter={() => toggle(skill.id)}
                         onMouseLeave={() => setClicked(false)}
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