import React from 'react'
import './Footer.css'
const Footer = () => {
    let year = new Date().getFullYear()
  return (
    <footer>
        <p>{`Kirubel F.Mariam ${year}`}</p>
    </footer>
  )
}

export default Footer