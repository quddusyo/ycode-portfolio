import { useState } from 'react';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  const [themeSwitch, setThemeSwitch]= useState(true)
  console.log(themeSwitch)
  return (
    <div className={themeSwitch ? 'app' : 'appDark'}>
      <Nav
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
