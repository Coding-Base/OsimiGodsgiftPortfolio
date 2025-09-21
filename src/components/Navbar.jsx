// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    // prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-white/90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="text-xl font-bold text-blue-500">Osimi Godsgift</a>

          <div className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition">Projects</button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-500 transition">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="relative z-60 w-10 h-10 flex items-center justify-center text-blue-500 focus:outline-none"
            >
              <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'}`} />
              <span className={`block w-6 h-0.5 bg-current mt-1 transform transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BOOK MENU */}
      <div
        ref={menuRef}
        className={`fixed inset-0 pointer-events-none`}
        aria-hidden={!isMenuOpen}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-400 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* book container provides perspective for 3D */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-lg h-full md:h-auto flex items-center justify-center pointer-events-none" style={{ perspective: '1400px' }}>
            {/* left panel */}
            <div
              className="fixed top-0 left-0 h-full w-1/2 md:w-1/2 overflow-hidden pointer-events-auto"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'right center',
                transition: 'transform 760ms cubic-bezier(.2,.85,.32,1), opacity 420ms',
                zIndex: 70
              }}
            >
              <div
                className={`h-full w-full bg-gradient-to-r from-white to-slate-50/90 shadow-lg border-r border-white/30 flex items-center justify-center ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: isMenuOpen ? 'rotateY(0deg)' : 'rotateY(88deg)',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0'
                }}
              >
                <nav className="px-6 py-10 w-full max-w-xs">
                  <ul className="space-y-6 text-left">
                    <li><button onClick={() => scrollToSection('home')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">Home</button></li>
                    <li><button onClick={() => scrollToSection('about')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">About</button></li>
                    <li><button onClick={() => scrollToSection('skills')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">Skills</button></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* right panel */}
            <div
              className="fixed top-0 right-0 h-full w-1/2 md:w-1/2 overflow-hidden pointer-events-auto"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
                transition: 'transform 760ms cubic-bezier(.2,.85,.32,1), opacity 420ms',
                zIndex: 70
              }}
            >
              <div
                className={`h-full w-full bg-gradient-to-l from-white to-slate-50/90 shadow-lg border-l border-white/30 flex items-center justify-center ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: isMenuOpen ? 'rotateY(0deg)' : 'rotateY(-88deg)',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0'
                }}
              >
                <nav className="px-6 py-10 w-full max-w-xs">
                  <ul className="space-y-6 text-right">
                    <li><button onClick={() => scrollToSection('projects')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">Projects</button></li>
                    <li><button onClick={() => scrollToSection('certifications')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">Certifications</button></li>
                    <li><button onClick={() => scrollToSection('contact')} className="text-xl font-semibold text-slate-800 hover:text-blue-600">Contact</button></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* center hinge accent */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200/60 pointer-events-none"
              style={{ zIndex: 75 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        /* ensure smooth 3d effect and hide backface */
        .fixed [style*="rotateY"] { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        /* small responsive tweaks */
        @media (max-width: 640px) {
          .fixed > .absolute { /* adjust panel widths on very small screens */ }
        }
      `}</style>
    </nav>
  )
}
