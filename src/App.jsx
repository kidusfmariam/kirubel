import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProjectDetail from './Components/Project Detail/ProjectDetail'
import { AnimatePresence } from 'framer-motion'
function App() {

  return (
    <>
    <AnimatePresence>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/projects/:projectTitle' element={<ProjectDetail/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </AnimatePresence>
    </>
  )
}

export default App
