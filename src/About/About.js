import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div data-aos="fade-left" className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
          In the Winter of 2020, I enrolled in a full-stack web developer bootcamp. Due to my curious nature, I was
          hooked and continued to learn new technologies. I enjoy researching alongside problem solving to create
          robust responsive full-stack web applications with a focus on UI design and animations. I have
          experience in many technologies used to create websites for my freelancing clients.
        </p>
    </div>
  )
}

export default About