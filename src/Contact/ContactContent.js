import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitBtn from './SubmitBtn';


const ContactContent = ({themeSwitch}) => {
    const [isPending, setIsPending] = useState(false)
    const notifySuccess = () => toast("Thank you for your Response!");
    const notifyFailure = () => toast("Response could not be Submitted.");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // loading
        // .env variables for email js API KEYS
        emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
                notifySuccess();
            }, (error) => {
                console.log('FAILED...', error);
                notifyFailure();
            })
        e.target.reset();
    };
  return (
    <div className='contact__container'>
        <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <form className={themeSwitch ? 'contact__form bg-light-1' : 'contact__form bg-dark-1'} ref={form} onSubmit={sendEmail}>
            <h3>Get In Contact</h3>
            <label>Name</label>
            <input type='text' name='user_name' placeholder='Your Name' required />
            <label>Email</label>
            <input type='email' name='user_email' placeholder='Email' required />
            <label>Phone</label>
            <input type='phone' name='user_phone' placeholder='Phone no. (Optional)' />
            <label>Message</label>
            <textarea type='text' name='message' placeholder='Additional Information '></textarea>
            <SubmitBtn isPending={isPending} setIsPending={setIsPending}/>
        </form>
    </div>
  )
}

export default ContactContent