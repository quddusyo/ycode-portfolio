import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
          I am a software developer raised in Toronto Ontario. I have been learning web development for
          two years and have experience with the MERN stack. I also have experience with object 
          oriented programming and function programming. Join me in my jounrney into tech.
        </p>
    </div>
  )
}

export default About