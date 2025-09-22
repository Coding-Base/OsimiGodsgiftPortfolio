
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

  const wrapperRef = useRef(null)         // visible viewport for slides
  const trackRef = useRef(null)           // the flex track that moves
  const autoRef = useRef(null)
  const resumeTimeoutRef = useRef(null)

  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const wrapperWidthRef = useRef(0)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setItemsPerPage(4)
      else if (w >= 768) setItemsPerPage(3)
      else if (w >= 640) setItemsPerPage(2)
      else setItemsPerPage(1)

      // measure wrapper width
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

  const { intervalDelay, transitionMs } = useMemo(() => {
    if (itemsPerPage === 1) return { intervalDelay: 8000, transitionMs: 900 }
    if (itemsPerPage === 2) return { intervalDelay: 6000, transitionMs: 700 }
    return { intervalDelay: 5000, transitionMs: 600 }
  }, [itemsPerPage])

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
    }, intervalDelay)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, intervalDelay, isPaused])

  const pauseAutoTemporarily = (extraDelay = 0) => {
    setIsPaused(true)
    stopAuto()
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
      startAuto()
    }, intervalDelay + extraDelay)
  }

  const goTo = (i) => {
    setCurrentPage(i % pages)
    pauseAutoTemporarily(0)
  }

  const prev = () => {
    setCurrentPage((p) => (p - 1 + pages) % pages)
    pauseAutoTemporarily(0)
  }

  const next = () => {
    setCurrentPage((p) => (p + 1) % pages)
    pauseAutoTemporarily(0)
  }

  // Pointer / touch drag handlers
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
      // stop transition while dragging
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
      const threshold = Math.max(40, wrapperWidthRef.current * 0.12) // swipe threshold
      const delta = dragOffset
      // restore transition
      if (trackRef.current) trackRef.current.style.transition = `transform ${transitionMs}ms ease-in-out`
      if (delta > threshold) {
        // move previous
        setCurrentPage((p) => (p - 1 + pages) % pages)
      } else if (delta < -threshold) {
        // move next
        setCurrentPage((p) => (p + 1) % pages)
      } else {
        // snap back, no page change
        setCurrentPage((p) => p)
      }
      setDragOffset(0)
      // resume auto after one interval
      pauseAutoTemporarily(0)
    }

    // pointer events
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragOffset, pages, transitionMs, intervalDelay])

  // compute translation in px: base = -currentPage * wrapperWidth
  const wrapperWidth = wrapperWidthRef.current || (typeof window !== 'undefined' ? window.innerWidth : 0)
  const baseTranslate = -currentPage * wrapperWidth
  const translatePx = baseTranslate + (dragOffset || 0)
  const transitionStyle = draggingRef.current ? 'none' : `transform ${transitionMs}ms ease-in-out`

  const itemWidthPercent = 100 / itemsPerPage
  const trackWidthPercent = (certifications.length * 100) / itemsPerPage

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 section-title" data-aos="fade-up">Certifications</h2>

        <div
          className="relative"
          aria-roledescription="carousel"
        >
          <div
            ref={wrapperRef}
            className="overflow-hidden rounded-lg mx-4"
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
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-indigo-600 rounded-full p-2 shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-indigo-600 rounded-full p-2 shadow-md z-10"
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

    
