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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

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

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="App bg-dark-primary text-text-primary min-h-screen font-inter">
      {showLoader ? (
        <Loader />
      ) : (
        <>
          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-dark-surface z-50">
            <div 
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-emerald transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

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
            className="fixed bottom-8 right-8 bg-accent-cyan text-white p-3 rounded-full shadow-lg hover:bg-accent-emerald transition-all duration-300 transform hover:scale-110 z-40 animate-bounce-slow"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default App
