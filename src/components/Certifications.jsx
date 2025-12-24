
// src/components/Certifications.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react'

export default function Certifications() {
  const certifications = [
    { 
      name: 'ZuriBoard', 
      icon: 'fas fa-certificate',
      provider: 'Zuri Training',
      date: '2023',
      color: '#10B981'
    },
    { 
      name: 'Jobbersman', 
      icon: 'fas fa-award',
      provider: 'Jobberman',
      date: '2023',
      color: '#8B5CF6'
    },
    { 
      name: 'TEF', 
      icon: 'fas fa-medal',
      provider: 'Tony Elumelu Foundation',
      date: '2022',
      color: '#F59E0B'
    },
    { 
      name: 'SIDEHUSTLE', 
      icon: 'fas fa-trophy',
      provider: 'SideHustle NG',
      date: '2022',
      color: '#EF4444'
    },
    { 
      name: 'Coursera', 
      icon: 'fas fa-graduation-cap',
      provider: 'Coursera',
      date: '2022-2023',
      color: '#3B82F6'
    },
    { 
      name: 'Alison', 
      icon: 'fas fa-certificate',
      provider: 'Alison Online',
      date: '2022',
      color: '#06B6D4'
    }
  ]

  const wrapperRef = useRef(null)
  const trackRef = useRef(null)
  const autoRef = useRef(null)
  const resumeTimeoutRef = useRef(null)

  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const wrapperWidthRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1280) setItemsPerPage(3)
      else if (w >= 768) setItemsPerPage(2)
      else setItemsPerPage(1)

      wrapperWidthRef.current = wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : window.innerWidth
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const pages = useMemo(() => Math.max(1, Math.ceil(certifications.length / itemsPerPage)), [certifications.length, itemsPerPage])

  useEffect(() => {
    if (currentPage >= pages) {
      setCurrentPage(0)
    }
  }, [itemsPerPage, pages, currentPage])

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current)
      autoRef.current = null
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const startAuto = () => {
    stopAuto()
    if (isPaused) return
    autoRef.current = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages)
    }, 4000)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [pages, isPaused])

  const pauseAutoTemporarily = (extraDelay = 0) => {
    setIsPaused(true)
    stopAuto()
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
      startAuto()
    }, 4000 + extraDelay)
  }

  const goTo = (i) => {
    setCurrentPage(i % pages)
    setActiveIndex(i * itemsPerPage)
    pauseAutoTemporarily(0)
  }

  const prev = () => {
    setCurrentPage((p) => (p - 1 + pages) % pages)
    setActiveIndex((p) => (p - itemsPerPage + certifications.length) % certifications.length)
    pauseAutoTemporarily(0)
  }

  const next = () => {
    setCurrentPage((p) => (p + 1) % pages)
    setActiveIndex((p) => (p + itemsPerPage) % certifications.length)
    pauseAutoTemporarily(0)
  }

  // Touch drag handlers
  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    wrapperWidthRef.current = wrapper.getBoundingClientRect().width

    const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX)

    const onPointerDown = (e) => {
      draggingRef.current = true
      startXRef.current = getClientX(e)
      setDragOffset(0)
      pauseAutoTemporarily(0)
      if (trackRef.current) trackRef.current.style.transition = 'none'
    }

    const onPointerMove = (e) => {
      if (!draggingRef.current) return
      const x = getClientX(e)
      const delta = x - startXRef.current
      setDragOffset(delta)
    }

    const onPointerUp = () => {
      if (!draggingRef.current) return
      draggingRef.current = false
      const threshold = Math.max(40, wrapperWidthRef.current * 0.15)
      const delta = dragOffset
      if (trackRef.current) trackRef.current.style.transition = `transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`
      if (delta > threshold) {
        prev()
      } else if (delta < -threshold) {
        next()
      } else {
        setCurrentPage((p) => p)
      }
      setDragOffset(0)
      pauseAutoTemporarily(0)
    }

    wrapper.addEventListener('touchstart', onPointerDown, { passive: true })
    wrapper.addEventListener('touchmove', onPointerMove, { passive: true })
    wrapper.addEventListener('touchend', onPointerUp)
    wrapper.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', onPointerUp)

    return () => {
      wrapper.removeEventListener('touchstart', onPointerDown)
      wrapper.removeEventListener('touchmove', onPointerMove)
      wrapper.removeEventListener('touchend', onPointerUp)
      wrapper.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerUp)
    }
  }, [dragOffset, pages])

  const wrapperWidth = wrapperWidthRef.current || (typeof window !== 'undefined' ? window.innerWidth : 0)
  const baseTranslate = -currentPage * wrapperWidth
  const translatePx = baseTranslate + (dragOffset || 0)
  const transitionStyle = draggingRef.current ? 'none' : `transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`

  const itemWidthPercent = 100 / itemsPerPage
  const trackWidthPercent = (certifications.length * 100) / itemsPerPage

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-emerald/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent-cyan font-mono text-sm tracking-widest">ACCREDITATIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recognized expertise through professional certifications and training programs
          </p>
        </div>

        {/* Featured Certification */}
        <div className="mb-12" data-aos="fade-up">
          <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 border border-accent-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-emerald flex items-center justify-center mr-6">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-1">Continuous Learning</h3>
                <p className="text-text-secondary">Also completed advanced courses from Coursera and Alison in full-stack development and AI technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative" aria-roledescription="carousel">
          {/* Navigation Arrows */}
          {pages > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-dark-surface text-accent-cyan rounded-full p-3 shadow-lg hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 z-20 hidden lg:block"
                data-aos="fade-right"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-dark-surface text-accent-cyan rounded-full p-3 shadow-lg hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 z-20 hidden lg:block"
                data-aos="fade-left"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div
            ref={wrapperRef}
            className="overflow-hidden rounded-2xl mx-4"
            data-aos="fade-up"
          >
            <div
              ref={trackRef}
              className="flex"
              style={{
                width: `${trackWidthPercent}%`,
                transform: `translateX(${translatePx}px)`,
                transition: transitionStyle
              }}
            >
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 flex-shrink-0"
                  style={{ width: `${itemWidthPercent}%` }}
                >
                  <div className={`
                    bg-dark-surface rounded-2xl p-8 h-full flex flex-col items-center justify-center 
                    border-2 transition-all duration-500 hover-card
                    ${activeIndex <= idx && idx < activeIndex + itemsPerPage 
                      ? 'border-accent-cyan/50 shadow-xl' 
                      : 'border-dark-card'
                    }
                  `}>
                    {/* Certificate Icon */}
                    <div 
                      className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: cert.color }}
                    >
                      <i className={cert.icon} aria-hidden />
                    </div>
                    
                    {/* Certificate Name */}
                    <h3 className="text-xl font-bold text-text-primary mb-2 text-center">
                      {cert.name}
                    </h3>
                    
                    {/* Provider & Date */}
                    <div className="text-center mb-4">
                      <p className="text-text-secondary text-sm mb-1">{cert.provider}</p>
                      <p className="text-accent-cyan text-xs font-mono">{cert.date}</p>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 rounded-full bg-accent-emerald mr-2 animate-pulse"></div>
                      <span className="text-sm text-text-secondary">Verified Certification</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {pages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2" data-aos="fade-up">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`
                    relative w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                    ${i === currentPage 
                      ? 'bg-accent-cyan scale-125' 
                      : 'bg-dark-card hover:bg-accent-cyan/50'
                    }
                  `}
                >
                  {i === currentPage && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-accent-cyan/30"></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 lg:hidden">
            <button
              onClick={prev}
              aria-label="Previous"
              className="mr-4 px-4 py-2 bg-dark-surface text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark-primary transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="px-4 py-2 bg-dark-surface text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark-primary transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center space-x-3 bg-dark-surface rounded-full px-6 py-3 border border-dark-card">
            <i className="fas fa-clock text-accent-cyan"></i>
            <span className="text-text-secondary">All certifications are up-to-date and verifiable</span>
          </div>
        </div>
      </div>
    </section>
  )
}
