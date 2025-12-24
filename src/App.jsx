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
import './App.css'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setShowLoader(false)
      setTimeout(() => setIsVisible(true), 100)
    }, 1500)

    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (!showLoader) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
      })
    }
  }, [showLoader])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="App bg-dark-primary text-text-primary min-h-screen">
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
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-accent-cyan text-white p-3 rounded-full shadow-lg hover:bg-accent-emerald transition-all duration-300 transform hover:scale-110 z-40"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-dark-surface z-50">
            <div 
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-emerald"
              style={{
                width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default App
