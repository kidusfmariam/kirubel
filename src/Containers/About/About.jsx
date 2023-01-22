import React from 'react'
import { useEffect, useState } from 'react'
import './About.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
const About = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [1000, -3000], [0.23, -0.9, 0.34, 0.99] )


    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }


        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove )
        }
    }, [])

    const [cursorVariant, setCursorVariant] = useState("default")

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            height: 150, 
            width: 150,
            background: "white",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => {setCursorVariant("text")}
    const textLeave = () => {setCursorVariant("default")}
  return (
    <>
    <motion.div 
        variants={variants}
        animate = {cursorVariant}
        className="cursor"></motion.div>
    <div className='about-wrapper'>

        <motion.div 
        style={{ x: x }}
        className="title-container">
            <p className='about-title span-2'>I am a 3D artist from Ethiopia.</p>
            
        </motion.div>
        <div className='about-content'>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.4, delay: 0.3}}
        viewport={{once: true}}
        className='about-text'>
            <p className='about-p'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim commodi, amet alias nisi nostrum minima atque perspiciatis molestiae libero, doloribus nesciunt. Consequuntur nemo ad adipisci expedita! Maiores vitae labore blanditiis magni ut quibusdam error assumenda? Dignissimos mollitia nulla voluptas rerum possimus! Atque quo unde iste.</p>
            </motion.div>
        <motion.div 
        
        className="about-img">
            <motion.img 
            initial={{height: 1}}
            whileInView={{height: "100%"}}
            transition={{duration: 1.2, delay: 0.1}}
            viewport={{once: true}}
            src="/Assets/About/profile.png" alt="a picture of kirubel" />
        </motion.div>

        <motion.a 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.8}}
        viewport={{once: true}}
        href="#" className='contact-cta'  onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <p>CONTACT ME</p>
            </motion.a>
        </div>

       <Link style={{textDecoration: "none"}} to='/projects' >
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.8}}
        viewport={{once: true}}
        className='about-cta'>
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>View my projects</h1>
        </motion.div>
        </Link>
    </div>
    </>
  )
}

export default About