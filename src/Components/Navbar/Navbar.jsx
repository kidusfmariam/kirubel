import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[nav, setNav] = useState(false)
    const changeColor = (color) =>{
       const body = document.getElementsByClassName('nav-links');
       body.style.background= color;
    }
  return (
    <>
    <motion.nav
    initial={{opacity: 0, y: "-200%"}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1.3, delay: .4}}
    >
        <Link to='/'>
        <div className={`nav-logo ${nav ? "invisible" : ""}`}>
            <img src="/Assets/Navbar/kirubel-logo.png" alt="kirubel-logo" />
        </div>
        </Link>

        <div className='nav-btn' onClick={() => setNav(!nav)}>
            <div className={`line ${nav ? "rotated-1" : ""}`}></div>
            <div className={`line ${nav ? "rotated-2" : ""}`}></div>
        </div>
    </motion.nav>

    <motion.div 
    initial={{y: "-100%"}}
    animate={{y: nav ? 0 : "-100%"}}
    transition={{duration: 1, delay: 0.1}}
    className='nav-links'>
       <Link style={{textDecoration: 'none'}} to='/'>
        <div className='nav-link nav-link-1' onClick={() => setNav(!nav)}>
                <motion.h1
                initial={{opacity: 0, x: "-100%"}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.2, delay: 0.2}}
                exit={{x:"-100%"}}
                >HOME</motion.h1>
                <div className='overlay overlay-1'></div>
        </div>
        </Link>

        <Link style={{textDecoration: 'none'}} to='/projects'>
        <div className='nav-link nav-link-2' onClick={() => setNav(!nav)}>
                <motion.h1
                initial={{opacity: 0, x: "-100%"}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.2, delay: 0.4}}
                exit={{x:"-100%"}}
                >PROJECTS</motion.h1>
                <div className='overlay overlay-2'></div>
        </div>
        </Link>


        <Link style={{textDecoration: 'none'}} to='/contact'>
        <div className='nav-link nav-link-3' onClick={() => setNav(!nav)}>
                <motion.h1
                initial={{opacity: 0, x: "-100%"}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.2, delay: 0.6}}
                exit={{x:"-100%"}}
                >CONTACT</motion.h1>
                <div className='overlay overlay-3'></div>
        </div>
        </Link>
    </motion.div>

    
    </>
  )
}

export default Navbar