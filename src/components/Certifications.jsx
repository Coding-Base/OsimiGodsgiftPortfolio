// src/components/Certifications.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function Certifications() {
  const certifications = [
    { name: 'ZuriBoard' },
    { name: 'Jobbersman' },
    { name: 'TEF' },
    { name: 'SIDEHUSTLE' },
    { name: 'Coursera' },
    { name: 'Alison' }
  ]

  const containerRef = useRef(null)
  const autoRef = useRef(null)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)

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

  const pages = Math.max(1, Math.ceil(certifications.length / itemsPerPage))

  useEffect(() => {
    if (currentPage >= pages) setCurrentPage(0)
  }, [itemsPerPage, pages, currentPage])

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages)
    }, 3000)
    return () => clearInterval(autoRef.current)
  }, [pages])

  const goTo = (i) => {
    setCurrentPage(i % pages)
  }

  const prev = () => {
    setCurrentPage((p) => (p - 1 + pages) % pages)
  }

  const next = () => {
    setCurrentPage((p) => (p + 1) % pages)
  }

  const handleMouseEnter = () => {
    clearInterval(autoRef.current)
  }

  const handleMouseLeave = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages)
    }, 3000)
  }

  const itemWidthPercent = 100 / itemsPerPage
  const translatePercent = -(currentPage * 100)

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 section-title" data-aos="fade-up">Training On</h2>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden rounded-lg">
            <div
              ref={containerRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${(certifications.length * 100) / itemsPerPage}%`,
                transform: `translateX(${translatePercent}%)`
              }}
            >
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 flex-shrink-0"
                  style={{ width: `${itemWidthPercent}%` }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-md h-full flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-certificate text-4xl text-blue-500 mb-3" aria-hidden />
                      <p className="font-semibold">{cert.name}</p>
                    </div>
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
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
                className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-blue-600' : 'bg-slate-300'} focus:outline-none`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center" data-aos="fade-up">
          <p className="text-lg">Also completed courses from Coursera and Alison</p>
        </div>
      </div>
    </section>
  )
}
