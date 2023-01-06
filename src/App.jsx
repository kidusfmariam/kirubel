import { useState, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProjectDetail from './Components/Project Detail/ProjectDetail'
import ScrollToTop from './Components/Scroll To Top/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
function App() {

  return (
    <>
    <AnimatePresence>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/projects/:projectTitle' element={<ProjectDetail/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </AnimatePresence>
    </>
  )
}

export default App
