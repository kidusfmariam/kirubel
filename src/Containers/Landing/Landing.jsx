import React from 'react'
import './Landing.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../LandingPageImg'
const Landing = () => {
    
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * 6)]);
        }, 1000)
        
        return () => clearInterval(intervalId);
    }, [])
  return (
    <section className='landing-wrapper'>
        <div className="landing-container">
            <motion.h1
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 3}}
            >KIRUBEL F.MARIAM</motion.h1>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5, delay: 0.8}} 
            className='landing-img-container '>
               <motion.img 
               initial={{opacity: 0, scale: 1.4}}
               whileInView={{opacity: 1, scale: 1}}
               transition={{duration: 1.5, delay: 0.8}}
               src={currentImage} alt="img" className='img' />
            </motion.div>
           
        </div>
    </section>
  )
}

export default Landing