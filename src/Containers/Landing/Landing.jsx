import React from 'react'
import './Landing.css'
import { motion } from 'framer-motion'
const Landing = () => {
  return (
    <section className='landing-wrapper'>
        <div className="landing-container">
            <div className="landing-images">
            <div className="landing-img landing-img-1">
                <motion.img 
                initial={{width: 0}}
                animate={{width: "100%"}}
                transition={{duration: 1.4, delay: 1}}
                src="/Assets/Home/landing-img-1.jpg" alt="landing-img-1" />
            </div>
            <div className="landing-img landing-img-2">
                <motion.img 
                initial={{width: "20rem", height: "20rem" }}
                animate={{width: "100%", height: "100%"}}
                transition={{duration: 1.6, delay: 0.1}}
                src="/Assets/Home/landing-img-2.jpg" alt="landing-img-2" />
            </div>
            <div className="landing-img landing-img-3">
                <motion.img 
                initial={{ height:0}}
                animate={{ height: "100%"}}
                transition={{duration: 1.4, delay: 1}}
                src="/Assets/Home/landing-img-3.jpg" alt="landing-img-3" />
            </div>
            </div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 2}}
            className='landing-text'>
                <h1>KIRUBEL <br/> F.MARIAM</h1>
                
            </motion.div>
        </div>
    </section>
  )
}

export default Landing