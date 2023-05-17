import React from 'react';
import './Home.css';
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin, AiOutlineUser } from 'react-icons/ai';

const Home = ({themeSwitch, setThemeSwitch}) => {
  return (
    // example below of using the transition class for easier code
    <div className={themeSwitch ? 'home-container bg-light-1 container-default transition' : 'home-container container-default bg-dark-1 dark-text transition'}>
      <h2>Web Developer</h2>
      <div className='content-container'>
        <div data-aos="fade-left" className='home-intro'>
          <div className='home-icons-container'>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='mailto: yousufq1999@gmail.com' target='_blank' rel='noreferrer'>
              <AiTwotoneMail />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://www.linkedin.com/in/yousuf-quddus' target='_blank' rel='noreferrer'>
              <AiFillLinkedin />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://github.com/quddusyo' target='_blank' rel='noreferrer'>
              <AiFillGithub />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://ysfcontractors.ca' target='_blank' rel='noreferrer'>
            <AiOutlineUser />
            </a>
          </div>
          <h3>Hey, it's <span>Yousuf</span></h3>
          <div className='p-container'>
            <p className='p-default content'>
              I sit at the intersection of web development and digital marketing to create real world web solutions 
              and present them in a beautiful and easy-to-understand manner to help businesses grow.
            </p>
          </div>
          <div className='profile-options'>
            <a href='mailto: yousufq1999@gmail.com' target='_blank' rel="noreferrer">
              <button className='btn primary-btn'>Contact</button>
            </a>
            <a href='YousufQ_Resume.pdf' download='YousufQ_Resume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className='profile'>
          <div className='profile-picture'>
            <div className={themeSwitch ? 'profile-picture-background' : 'profile-picture-background profile-picture-background_dark'}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home