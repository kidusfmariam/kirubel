import React from 'react'
import { useParams } from 'react-router'
import { projects } from '../../../Projects'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectDetail.css'
const ProjectDetail = () => {

    const{projectTitle} = useParams()
    const thisProject = projects.find(item => item.title === projectTitle)

  return (
    <div className='detail-wrapper'>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.3}}
        className='introduction'>
            <h1>{thisProject.title}</h1>
            <p>{thisProject.description}</p>
        </motion.div>
        <div className='introduction-img'>
        <motion.img 
        initial={{y: 500}}
        animate={{y: 0}}
        transition={{duration: 1.2, dealy: 0.5}}
        src={thisProject.imageOne} alt="landing-img" />
        </div>

        <div className='main-media'>
            <img src={thisProject.imageThree} alt="" className='media media-1'  />
            <video 
            loop
            autoPlay
            muted
            type="video/mp4"
            src={thisProject.video} 
            className='media media-2' ></video>
        </div>
        <div className='final-img'>
            <img src={thisProject.imageTwo} alt="" />
        </div>

        <div className='closing'>
            <p>More about this project <a target='_blank' href={thisProject.link}>here</a></p>
            <Link style={{textDecoration: 'none'}} to='/projects'><p>Back to Projects</p></Link>
        </div>

    </div>
  )
}

export default ProjectDetail