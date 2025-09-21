// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
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
    // return focus to the hamburger for a11y
    if (btnRef.current) btnRef.current.focus()
  }

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            className="text-xl font-bold text-indigo-600"
          >
            Osimi Godsgift 
          </a>

          <div className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('home')} className="hover:text-indigo-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-600 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition">Projects</button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-indigo-600 transition">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition">Contact</button>
          </div>

          <div className="md:hidden">
            <button
              ref={btnRef}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="w-10 h-10 inline-flex items-center justify-center text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-40 pointer-events-none`}
        aria-hidden={!isMenuOpen}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* sliding panel */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <div
            className={`pointer-events-auto w-full max-w-md h-full bg-white transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="px-6 pt-20 pb-10 h-full flex flex-col justify-center">
              <div className="space-y-6 text-center">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-100"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-100"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-100"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-100"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-100"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4"
                >
                  Contact
                </button>
              </div>

              <div className="mt-12 flex justify-center space-x-6">
                <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="text-indigo-600 hover:text-amber-500 transition" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H20l-1 3h-3v7A10 10 0 0022 12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="text-indigo-600 hover:text-amber-500 transition" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17V10.5H6V17h2.5zM7.2 9.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zM18 17v-3.7c0-2-1-2.9-2.3-2.9-1.1 0-1.6.6-1.9 1.1V17h-2.5V10.5h2.4v.9c.5-.9 1.6-1.9 3.4-1.9 2.4 0 3.8 1.6 3.8 4.6V17H18z"/></svg>
                </a>
                <a href="https://wa.me/2347049946769" className="text-indigo-600 hover:text-amber-500 transition" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 00-8.02 15.54L2 22l4.64-1.22A10 10 0 1012 2zm1.9 15.1c-.3.8-1.1 1.5-1.9 1.7-.6.1-1.1.1-1.8 0-1.7-.3-3.1-1.7-3.4-3.4-.1-.7-.1-1.2 0-1.8.2-.8.9-1.6 1.7-1.9.3-.1.5 0 .7.2l.9.9c.1.1.2.2.4.1.4-.1 1-1 1.2-1.3.2-.3.1-.5.1-.7 0-.4-.7-1.5-.9-1.9-.2-.4-.5-.4-.8-.4-.4 0-.8 0-1.4.7-.6.8-1 1.8-1 3 0 2.3 1.9 4.4 4.4 4.7.8.2 1.7.1 2.4-.1 1.3-.3 2.3-1.1 2.8-2.3.1-.1.1-.3.1-.4 0-.3-.1-.5-.3-.6l-.8-.5c-.1 0-.2-.1-.3 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
