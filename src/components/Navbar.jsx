// src/components/Navbar.jsx
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600">Osimi Godsgift </a>
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
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Book-like Animation */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container mx-auto px-6 pt-20 pb-10 h-full flex flex-col justify-center">
          <div className="space-y-8 text-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certifications')} 
              className="block text-2xl font-semibold text-indigo-600 hover:text-amber-500 transition w-full py-4 border-b border-gray-200"
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
            <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="text-indigo-600 hover:text-amber-500 transition">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="text-indigo-600 hover:text-amber-500 transition">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="https://wa.me/2347049946769" className="text-indigo-600 hover:text-amber-500 transition">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
