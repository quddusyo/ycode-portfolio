import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';

const Home = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className={themeSwitch ? 'home-container bg-light-1 container-default' : 'home-container container-default bg-dark-1 dark-text'}>
      <h2>Software Engineer</h2>
      <div className='content-container'>
        <div data-aos="fade-left" className='home-intro'>
          <div className='home-icons-container'>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='mailto: yusuf1quddus@gmail.com' target='_blank' rel='noreferrer'>
              <AiTwotoneMail className='mail-icon' />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='Tel: 6473882675' target='_blank' rel='noreferrer'>
              <AiFillPhone className='phone-icon' />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://github.com/quddusyo' target='_blank' rel='noreferrer'>
              <AiFillGithub className='github-icon' />
            </a>
            <a className={themeSwitch ? 'contact-icon btn-light-style' : 'contact-icon btn-dark-style'} href='https://www.linkedin.com/in/yousuf-quddus' target='_blank' rel='noreferrer'>
              <AiFillLinkedin className='linkedin-icon' />
            </a>
          </div>
          <h3>Hi, I'm <span>Yousuf</span></h3>
          <h3 className='home-slides'>
            <Typical
              loop={Infinity}
              steps={[
                "~ Full Stack Developer 🚀",
                1200,
                "~ Passionate Learner 🌱",
                1200,
                "~ Self Taught 📚",
                1200,
              ]}
            />
          </h3>
          <div className='p-container'>
            <p className='p-default content'>
              I sit at the intersection of web development and software engineering to create applications 
              and present them in a beautiful and easy-to-understand way to help your business grow. Let's connect.
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