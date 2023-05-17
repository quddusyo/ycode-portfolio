import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div data-aos="fade-left" className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
        Seasoned full stack web developer proficient in HTML, CSS, JavaScript, React, Express, Node.js, and Python. Skilled in database management, RESTful APIs, and Git version control. Committed to delivering top-notch code quality and contributing to the success of web projects. Seeking opportunities to leverage my expertise and collaborate with innovative companies.
        </p>
    </div>
  )
}

export default About