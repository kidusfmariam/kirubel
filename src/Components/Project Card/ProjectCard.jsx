import React from 'react'
import './ProjectCard.css'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
const ProjectCard = ({thumbnail, title, id}) => {

    const {scrollYProgress} = useScroll()
    let y = useSpring(scrollYProgress, [0,0.2], [0, "-100vh"])
  return (

    <div className='card-wrapper'>
    <div className='card-container'>
        <motion.div style={{y: y}} className='card-img-container'>
            <img src={thumbnail} alt="project-thumbnail" />
        </motion.div>
        <div className='card-text'>
            <h3>{id}</h3>
            <h1>{title}</h1>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard