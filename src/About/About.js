import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div data-aos="fade-left" className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
          Winter of 2020, I enrolled in a full-stack web developer bootcamp due to my curious nature, and I was hooked. I fell in love with
          the procress of making websites and how its like lego bricks, it keep building up. I also fell in love with front-end development, 
          how small simple microanimations that can significantly increase UI and give a website more life. I enjoy researching alongside problem 
          solving to create robust real-world web solutions to help businesses grow. I have experience in many technologies used to create
           websites for my freelance clients. View my skills below.
        </p>
    </div>
  )
}

export default About