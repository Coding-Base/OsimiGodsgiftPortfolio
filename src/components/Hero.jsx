// src/components/Hero.jsx
import React, { useEffect, useState } from 'react'

import mylogo from "./mylogo.jpg"
const images = [
  'https://media.licdn.com/dms/image/v2/D4E22AQH8W-ZnwJVVew/feedshare-shrink_1280/B4EZkld_CpKcAs-/0/1757270249270?e=1761177600&v=beta&t=OeuT4_XILmDB_zo1oB7SYY5jIDFEQCK9UExq-ck1R1A',
  'https://media.licdn.com/dms/image/v2/D4E03AQGzl2zhG9VnYQ/profile-displayphoto-shrink_400_400/B4EZUiUqMmHcAg-/0/1740037597825?e=1761177600&v=beta&t=6PhE--8qZvSwtc-LgMe4GZlxrPYMqKMpXS_0V2fCwPc'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    images.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 20
    const y = (clientY / window.innerHeight - 0.5) * 20
    setMousePosition({ x, y })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-emerald/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse"></div>
              <span className="text-accent-cyan font-mono text-sm">Full Stack Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="gradient-text">Osimi Godsgift</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-8 text-text-secondary font-light">
              Crafting digital experiences with clean code and innovative solutions
            </h2>
            
            <p className="text-lg mb-10 text-text-secondary max-w-2xl">
              Passionate Full Stack Developer with 3+ years of experience creating dynamic web applications. 
              Blending technical engineering knowledge with cutting-edge software development skills.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-accent-cyan/30 text-accent-cyan rounded-full font-semibold hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" 
                   className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 group"
                   aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://github.com/Coding-Base/"
                   className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 group"
                   aria-label="GitHub">
                  <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://wa.me/2347049946769"
                   className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 group"
                   aria-label="WhatsApp">
                  <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
              <div className="h-8 w-px bg-dark-card"></div>
              <div>
                <p className="text-sm text-text-secondary">Based in Nigeria</p>
                <p className="text-sm text-accent-cyan">Available for projects</p>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div 
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="400"
            onMouseMove={handleMouseMove}
          >
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full animate-glow"></div>
                
                {/* Main Photo Container */}
                <div 
                  className="absolute inset-4 rounded-full overflow-hidden border-4 border-dark-card"
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={mylogo}
                      alt={`Osimi photo ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === i ? 'opacity-100' : 'opacity-0'
                      }`}
                      draggable={false}
                    />
                  ))}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-emerald/20 mix-blend-overlay"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-accent-cyan/20 animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-accent-emerald/20 animate-pulse-slow animation-delay-500"></div>
                
                {/* Tech Badges */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dark-surface px-4 py-2 rounded-full border border-accent-cyan/30 shadow-lg">
                  <span className="text-sm font-mono text-accent-cyan">React.js</span>
                </div>
                <div className="absolute -bottom-4 left-1/4 bg-dark-surface px-4 py-2 rounded-full border border-accent-emerald/30 shadow-lg">
                  <span className="text-sm font-mono text-accent-emerald">Typescript.js</span>
                </div>
                <div className="absolute -bottom-4 right-1/4 bg-dark-surface px-4 py-2 rounded-full border border-accent-indigo/30 shadow-lg">
                  <span className="text-sm font-mono text-accent-indigo">Python</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 right-0 bg-gradient-to-r from-accent-cyan to-accent-emerald text-dark-primary px-6 py-3 rounded-full shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
