import React from 'react'
import { useParams } from 'react-router'
import { projects } from '../../../Projects'
import { Link } from 'react-router-dom'
import './ProjectDetail.css'
const ProjectDetail = () => {

    const{projectTitle} = useParams()
    const thisProject = projects.find(item => item.title === projectTitle)

  return (
    <div className='detail-wrapper'>
        <div className='introduction'>
            <h1>{thisProject.title}</h1>
            <p>{thisProject.description}</p>
        </div>
        <div className='introduction-img'>
        <img src={thisProject.imageOne} alt="" />
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
            <p>Find out more about this project <a target='_blank' href={thisProject.link}>here</a></p>
            <Link to='/projects'><p>Back to Projects</p></Link>
        </div>

    </div>
  )
}

export default ProjectDetail