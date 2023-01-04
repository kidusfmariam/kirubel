import React from 'react'
import './Landing.css'
import { motion } from 'framer-motion'
const Landing = () => {
  return (
    <section className='landing-wrapper'>
        <div className="landing-container">
            <h1>KIRUBEL F.MARIAM</h1>
            <div className='landing-img-container'>
                <img src="/Assets/Home/landing-img-1.jpg" alt="" />
            </div>
            <div className='landing-img-container'>
                <img src="/Assets/Home/landing-img-2.jpg" alt="" />
            </div>
            <div className='landing-img-container'>
                <img src="/Assets/Home/landing-img-3.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Landing