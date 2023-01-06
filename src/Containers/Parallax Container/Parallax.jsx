import React, { useState } from 'react'
import './Parallax.css'
import { Link } from 'react-router-dom'
import ProjectCard from '../../Components/Project Card/ProjectCard'
import { projects } from '../../../Projects'
const Parallax = () => {
  console.log(projects)
  return (
    <div className='parallax-container'>
        {
            projects.map((item) => {
              return (
              <div>
              <Link to={`/projects/${item.title}`}>
              <ProjectCard
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item.imageOne}
              />
              </Link>
              </div>
              )
            })
        }
    </div>
  )
}

export default Parallax