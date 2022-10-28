import { useState, useEffect } from 'react';
import ArrowUp from './assets/Icons/ArrowUp.png';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [themeSwitch, setThemeSwitch]= useState(true);
  const [showButton, setShowButton] = useState(false);
  // animate on scroll implementation
  useEffect(() => {
      Aos.init({ duration: 1500 });
  }, []);
  // to top button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className={themeSwitch ? 'app' : 'appDark'}>
      <Nav
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      <Home
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      {showButton && (
        <button className='footer__btn' onClick={scrollToTop}>
          <img src={ArrowUp} alt='' />
        </button>
      )}
      <Skills/>
      <About
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      <Projects
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      <Footer />
    </div>
  );
}

export default App;
