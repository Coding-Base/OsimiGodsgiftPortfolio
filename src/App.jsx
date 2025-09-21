// src/App.jsx
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import Loader from './components/Loader'
import 'aos/dist/aos.css'

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (!showLoader) {
      AOS.init({
        duration: 3000,
        once: true,
        offset: 100
      })
    }
  }, [showLoader])

  return (
    <div className="App">
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
