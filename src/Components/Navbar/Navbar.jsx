import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'
const Navbar = () => {
    const[nav, setNav] = useState(false)
  return (
    <>
    <nav>
        <div className='nav-logo'>
            <img src="/Assets/Navbar/kirubel-logo.png" alt="kirubel-logo" />
        </div>
        <div className='nav-menu-lg'>
            <p className='nav-lg-link'>About</p>
            <p className='nav-lg-link'>Projects</p>
            <p className='menu-btn' onClick={() => setNav(!nav)}><AiOutlineMenu/></p>
        </div>
    </nav>

    <motion.div 
    initial={{x: "-200%"}}
    animate={{x: nav ? 0 : "-200%"}}
    transition={{duration: 1}}
    className='nav-menu-sm'>
        <div className='close-btn' onClick={() => setNav(!nav)}><AiOutlineClose size={40}/></div>
        <div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.3, delay: 0.5}}
        className='nav-logo-sm'>
            <img src="/Assets/Navbar/kirubel-logo.png" alt="kirubel-logo" />
        </motion.div>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.3, delay: 0.7}}
            className='nav-sm-link'>ABOUT</motion.p>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.3, delay: 0.9}}
            className='nav-sm-link'>PROJECTS</motion.p>
        </div>
    </motion.div>
    </>
  )
}

export default Navbar