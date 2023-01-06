import React from 'react'
import './ContactMe.css'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { motion } from 'framer-motion'
const ContactMe = () => {
  return (
    <div className='contact-me-wrapper'>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.6}}
        className="contact-me-container">
            <h1>FEEL FREE TO REACH OUT</h1>
            <a  href="mailto:kirubfm@gmail.com" target='_blank'>
                <p className='main-email'>kirubfm@gmail.com</p></a>

            <div className='icons'>
                <a href="https://www.instagram.com/its_kirub/" target='_blank'><AiOutlineInstagram className='icon' /></a>
                <a href="mailto:kirubfm@gmail.com" target='_blank'><AiOutlineMail className='icon' /></a>
                <a href="https://www.therookies.co/u/Kirub" target='_blank'><img src="/Assets/Contact/Rookies.webp" alt="rookies" className='icon-img'/></a>
            </div>
        </motion.div>
    </div>
  )
}

export default ContactMe