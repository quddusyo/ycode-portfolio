import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home-container container-default'>
      <h2>Software Engineer</h2>
      <div className='content-container'>
        <div className='home-intro'>
          <div className='home-icons-container'>
            <a className='contact-icon' href='mailto: yusuf1quddus@gmail.com' target='_blank' rel='noreferrer'>
              <AiTwotoneMail className='mail-icon' />
            </a>
            <a className='contact-icon' href='Tel: 6474506754' target='_blank' rel='noreferrer'>
              <AiFillPhone className='phone-icon' />
            </a>
            <a className='contact-icon' href='https://github.com/quddusyo' target='_blank' rel='noreferrer'>
              <AiFillGithub className='github-icon' />
            </a>
            <a className='contact-icon' href='https://www.linkedin.com/in/yousuf-quddus' target='_blank' rel='noreferrer'>
              <AiFillLinkedin className='linkedin-icon' />
            </a>
          </div>
          <h3>Hi, I'm Yousuf</h3>
          <h3>
            <Typical
              loop={Infinity}
              steps={[
                "~ Full Stack Developer 🚀",
                1200,
                "~ Passionate Learner 🧠",
                1200,
                "~ React Developer ⚛️",
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
        </div>
        <div className='profile'>
          <div className='profile-picture'>
            <div className='profile-picture-background'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home