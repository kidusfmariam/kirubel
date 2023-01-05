import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { AnimatePresence } from 'framer-motion'
function App() {

  return (
    <>
    <AnimatePresence>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </AnimatePresence>
    </>
  )
}

export default App
