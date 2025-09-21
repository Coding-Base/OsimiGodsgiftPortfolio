// src/components/Certifications.jsx
// src/components/Certifications.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react'

export default function Certifications() {
  const certifications = [
    { name: 'ZuriBoard', icon: 'fas fa-certificate' },
    { name: 'Jobbersman', icon: 'fas fa-award' },
    { name: 'TEF', icon: 'fas fa-medal' },
    { name: 'SIDEHUSTLE', icon: 'fas fa-trophy' },
    { name: 'Coursera', icon: 'fas fa-graduation-cap' },
    { name: 'Alison', icon: 'fas fa-certificate' }
  ]

  const containerRef = useRef(null)
  const autoRef = useRef(null)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setItemsPerPage(4)
      else if (w >= 768) setItemsPerPage(3)
      else if (w >= 640) setItemsPerPage(2)
      else setItemsPerPage(1)
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

  const { intervalDelay, transitionMs } = useMemo(() => {
    // Slower transitions for better mobile experience
    if (itemsPerPage === 1) return { intervalDelay: 8000, transitionMs: 1200 }  // Increased from 6000/900
    if (itemsPerPage === 2) return { intervalDelay: 6000, transitionMs: 1000 }  // Increased from 4500/700
    return { intervalDelay: 5000, transitionMs: 800 }                           // Increased from 3500/600
  }, [itemsPerPage])

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current)
      autoRef.current = null
    }
  }

  const startAuto = () => {
    if (isPaused) return
    
    stopAuto()
    autoRef.current = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages)
    }, intervalDelay)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, intervalDelay, isPaused])

  const goTo = (i) => {
    setCurrentPage(i % pages)
    // Pause auto-rotation for a while after user interaction
    setIsPaused(true)
    setTimeout(() => {
      setIsPaused(false)
    }, intervalDelay * 2) // Pause for two intervals
  }

  const prev = () => {
    setCurrentPage((p) => (p - 1 + pages) % pages)
    setIsPaused(true)
    setTimeout(() => {
      setIsPaused(false)
    }, intervalDelay * 2)
  }

  const next = () => {
    setCurrentPage((p) => (p + 1) % pages)
    setIsPaused(true)
    setTimeout(() => {
      setIsPaused(false)
    }, intervalDelay * 2)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleTouchStart = () => {
    setIsPaused(true)
  }

  const handleTouchEnd = () => {
    // Resume after a delay when touch ends
    setTimeout(() => {
      setIsPaused(false)
    }, intervalDelay)
  }

  const itemWidthPercent = 100 / itemsPerPage
  const translatePercent = -(currentPage * 100)

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 section-title" data-aos="fade-up">Certifications</h2>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden rounded-lg mx-4">
            <div
              ref={containerRef}
              className="flex"
              style={{
                width: `${(certifications.length * 100) / itemsPerPage}%`,
                transform: `translateX(${translatePercent}%)`,
                transition: `transform ${transitionMs}ms ease-in-out`
              }}
            >
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 flex-shrink-0"
                  style={{ width: `${itemWidthPercent}%` }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="text-4xl text-indigo-600 mb-4">
                      <i className={cert.icon} aria-hidden />
                    </div>
                    <p className="font-semibold text-center text-gray-800">{cert.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pages > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-indigo-600 rounded-full p-3 shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-indigo-600 rounded-full p-3 shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="mt-6 flex items-center justify-center gap-2" data-aos="fade-up">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-indigo-600' : 'bg-gray-300'} focus:outline-none`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center" data-aos="fade-up">
          <p className="text-lg text-gray-700">Also completed courses from Coursera and Alison</p>
        </div>
      </div>
    </section>
  )
}
