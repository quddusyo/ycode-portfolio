import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Home = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className={themeSwitch ? 'home-container bg-light-1 container-default' : 'home-container container-default bg-dark-1 dark-text'}>
      <h2>Web Developer</h2>
      <div className='content-container'>
        <div data-aos="fade-left" className='home-intro'>
          <div className='home-icons-container'>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='mailto: yusuf1quddus@gmail.com' target='_blank' rel='noreferrer'>
              <AiTwotoneMail />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://www.linkedin.com/in/yousuf-quddus' target='_blank' rel='noreferrer'>
              <AiFillLinkedin />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://github.com/quddusyo' target='_blank' rel='noreferrer'>
              <AiFillGithub />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://twitter.com/codewithyou' target='_blank' rel='noreferrer'>
              <AiFillTwitterSquare />
            </a>
          </div>
          <h3>Hi, I'm <span>Yousuf</span></h3>
          <div className='home-slides'>
            <Typical
              loop={Infinity}
              steps={[
                "~ Web Developer 🚀",
                1200,
                "~ Passionate Learner 🌱",
                1200,
                "~ Great Googler 🔎",
                1200,
              ]}
              wrapper="h4"
            />
          </div>
          <div className='p-container'>
            <p className='p-default content'>
              I sit at the intersection of web development and digital marketing to create applications 
              and present them in a beautiful and easy-to-understand manner to help businesses grow.
            </p>
          </div>
          <div className='profile-options'>
            <a href='mailto: yusuf1quddus@gmail.com' target='_blank' rel="noreferrer">
              <button className='btn primary-btn'>Contact Me</button>
            </a>
            <a href='YousufQ_Resume.pdf' download='YousufQ_Resume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className='profile'>
          <div className='profile-picture'>
            <div className='profile-picture-background'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home