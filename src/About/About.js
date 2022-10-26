import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
          I am a software developer raised in Toronto Ontario. I have six months of front-end experience creating multipage websites for clients and small startups in Calgary. I 
        </p>
    </div>
  )
}

export default About