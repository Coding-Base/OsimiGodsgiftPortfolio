// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-surface/95 backdrop-blur-md py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            data-aos="fade-right"
          >
            OG
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center" data-aos="fade-left">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group px-1 py-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary focus:outline-none"
            aria-label="Toggle menu"
            data-aos="fade-left"
          >
            <div className={`w-6 h-6 relative transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`absolute top-1 w-6 h-0.5 bg-accent-cyan transition-all ${isMenuOpen ? 'rotate-90 top-3' : ''}`}></span>
              <span className={`absolute top-3 w-6 h-0.5 bg-accent-cyan transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute bottom-1 w-6 h-0.5 bg-accent-cyan transition-all ${isMenuOpen ? '-rotate-90 bottom-3' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 z-40 transition-all duration-500
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div className={`
          absolute right-0 top-0 h-full w-64 bg-dark-surface transform transition-transform duration-500
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-8 h-full flex flex-col">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-text-secondary hover:text-accent-cyan mb-8"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-xl font-semibold text-text-secondary hover:text-accent-cyan transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  window.open('/resume.pdf', '_blank')
                  setIsMenuOpen(false)
                }}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Download Resume
              </button>
            </div>

            <div className="mt-auto pt-8 border-t border-dark-card">
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="text-text-secondary hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://github.com/yourusername" className="text-text-secondary hover:text-accent-cyan transition-colors" aria-label="GitHub">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="https://wa.me/2347049946769" className="text-text-secondary hover:text-accent-cyan transition-colors" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
