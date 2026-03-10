import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CursorSystem from './components/CursorSystem.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'

export default function App() {
  return (
    <CursorSystem>
      <ScrollReset />
      <ScrollToTop />ㅍ
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/projects"     element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about"        element={<About />} />
        <Route path="/gallery"      element={<Gallery />} />
      </Routes>
    </CursorSystem>
  )
}

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
