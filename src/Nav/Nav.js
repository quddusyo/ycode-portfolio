import React from 'react';
import './Nav.css';
import themeSwitchIconLight from '../assets/Icons/Moon.png';
import themeSwitchIcon from '../assets/Nav/theme-switch.png';

const Nav = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className='nav-container'>
        <h1>ycode.co</h1>
        <div className='nav-right'>
            <button
              className={themeSwitch ? 'themeSwitchContainerLight nav-switch' : 'themeSwitchContainer nav-switch'}
              onClick={() => setThemeSwitch(!themeSwitch)}
            >
              <img src={themeSwitch ? themeSwitchIconLight : themeSwitchIcon} alt='' />
            </button>
        </div>
    </div>
  )
}

export default Nav