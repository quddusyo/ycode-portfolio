import React from 'react';
import './About.css';

const About = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div data-aos="fade-left" className={themeSwitch ? 'about-container container-default' : 'about-container container-default dark-text'}>
        <h2>About Me</h2>
        <p className='p-default'>
        A versatile professional combining nearly a decade of experience in IT, full-stack web development, and cybersecurity. Proficient in HTML, CSS, JavaScript, React, Express, Node.js, and Python, with additional skills in database management, RESTful APIs, and Git version control.

As a cybersecurity expert, I specialize in incident response, vulnerability assessments, and penetration testing, ensuring the protection of digital assets and minimizing risks. A passionate CTF enthusiast, I was recognized for achieving third place at the CyberSci Regionals 2024 CTF in Calgary and first place in the Infected Networks CTF 2024 at SAIT. Currently, I am advancing my expertise by pursuing the CompTIA Security+ and OSCP Offsec certifications.

I am committed to delivering high-quality solutions, leveraging my diverse skill set, and collaborating with innovative teams to drive impactful projects.
        </p>
    </div>
  )
}

export default About