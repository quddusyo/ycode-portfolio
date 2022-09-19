import React from 'react';
import './Nav.css';
import themeSwitchIcon from '../assets/Nav/theme-switch.png'
import themeSwitchIconLight from '../assets/Nav/theme-switch-light.png'

const Nav = ({themeSwitch, setThemeSwitch}) => {
  return (
    <div className='nav-container'>
        <h1>ycode.co</h1>
        <div className='nav-right'>
            <button
              className={themeSwitch ? 'themeSwitchContainer nav-switch' : 'themeSwitchContainerLight nav-switch'}
              onClick={() => setThemeSwitch(!themeSwitch)}
            >
              <img src={themeSwitch ? themeSwitchIconLight : themeSwitchIcon} alt='' />
            </button>
        </div>
    </div>
  )
}

export default Nav