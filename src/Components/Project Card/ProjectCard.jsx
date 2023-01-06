import React from 'react'
import './ProjectCard.css'
import { motion} from 'framer-motion'
const ProjectCard = ({thumbnail, title, id}) => {

  return (

    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.4, delay: 0.5}}
    className='card-wrapper'>
    <div className='card-container'>
        <motion.div className='card-img-container'>
            <img src={thumbnail} alt="project-thumbnail" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.3, delay: 0.4}}
        exit={{opacity: 0}}
        className='card-text'>
            <h3>{id}</h3>
            <h1>{title}</h1>
        </motion.div>
    </div>
    </motion.div>
  )
}

export default ProjectCard