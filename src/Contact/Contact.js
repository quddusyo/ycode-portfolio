import React from 'react';
import './Contact.css';
import ContactContent from './ContactContent';


const Contact = ({themeSwitch}) => {
  return (
    <div className='section__container'>
      <ContactContent themeSwitch={themeSwitch}/>
    </div>
  )
}

export default Contact