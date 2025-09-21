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
        <a href="#" className="text-xl font-bold text-blue-500">Osimi Godsgift</a>
        <div className="hidden md:flex space-x-10">
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition">Projects</button>
          <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-500 transition">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition">Contact</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-500 focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white px-6 pt-2 pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => scrollToSection('home')} className="block py-2 hover:text-blue-500 transition w-full text-left">Home</button>
        <button onClick={() => scrollToSection('about')} className="block py-2 hover:text-blue-500 transition w-full text-left">About</button>
        <button onClick={() => scrollToSection('skills')} className="block py-2 hover:text-blue-500 transition w-full text-left">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="block py-2 hover:text-blue-500 transition w-full text-left">Projects</button>
        <button onClick={() => scrollToSection('certifications')} className="block py-2 hover:text-blue-500 transition w-full text-left">Certifications</button>
        <button onClick={() => scrollToSection('contact')} className="block py-2 hover:text-blue-500 transition w-full text-left">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar