// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react'

const images = [
  'https://media.licdn.com/dms/image/v2/D4E22AQH8W-ZnwJVVew/feedshare-shrink_1280/B4EZkld_CpKcAs-/0/1757270249270?e=1761177600&v=beta&t=OeuT4_XILmDB_zo1oB7SYY5jIDFEQCK9UExq-ck1R1A',
  'https://media.licdn.com/dms/image/v2/D4E03AQGzl2zhG9VnYQ/profile-displayphoto-shrink_400_400/B4EZUiUqMmHcAg-/0/1740037597825?e=1761177600&v=beta&t=6PhE--8qZvSwtc-LgMe4GZlxrPYMqKMpXS_0V2fCwPc'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    images.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 gradient-bg text-white">
      <style>{`
        .hero-photo-wrap { position: relative; width: 20rem; height: 20rem; max-width: 80%; }
        @media (min-width: 768px) { .hero-photo-wrap { width: 20rem; height: 20rem; } }
        .hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 9999px; transition: opacity 700ms ease-in-out; }
        .ripple-layer { position: absolute; inset: 0; display:flex; align-items:center; justify-content:center; pointer-events:none; border-radius:9999px; overflow:hidden; }

        .ripple {
          position: absolute;
          width: 22%;
          height: 22%;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 35%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.02) 60%, transparent 70%);
          transform: scale(0.6);
          opacity: 20;
          filter: blur(0px);
          animation-name: rippleExpand;
          animation-duration: 2200ms;
          animation-iteration-count: infinite;
          will-change: transform, opacity, filter;
        }

        .ripple.r1 { left: 30%; top: 30%; animation-delay: 0ms; }
        .ripple.r2 { left: 50%; top: 50%; animation-delay: 550ms; }
        .ripple.r3 { left: 65%; top: 40%; animation-delay: 1100ms; }
        .ripple.r4 { left: 40%; top: 60%; animation-delay: 1650ms; }

        @keyframes rippleExpand {
          0% { transform: scale(0.6); opacity: 10.55; filter: blur(0px); }
          40% { transform: scale(1.05); opacity:10.28; filter: blur(20px); }
          70% { transform: scale(1.7); opacity: 10.12; filter: blur(4px); }
          100% { transform: scale(2.6); opacity: 10; filter: blur(6px); }
        }

        .water-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 75%, rgba(255,255,255,0.04) 100%);
          background-size: 300% 300%;
          mix-blend-mode: overlay;
          opacity: 0.9;
          animation: sheenMove 6s linear infinite;
          border-radius: 9999px;
          pointer-events: none;
        }

        @keyframes sheenMove {
          0% { background-position: 0% 50%; transform: translateY(0px) rotate(0deg); }
          50% { background-position: 70% 50%; transform: translateY(-4px) rotate(1deg); }
          100% { background-position: 0% 50%; transform: translateY(0px) rotate(0deg); }
        }

        .wave-noise {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04), transparent 10%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03), transparent 10%);
          opacity: 0.9;
          mix-blend-mode: overlay;
          filter: blur(2px) saturate(120%);
          animation: noiseMove 9s linear infinite;
          border-radius: 9999px;
          pointer-events: none;
        }

        @keyframes noiseMove {
          0% { transform: translateX(0px) translateY(0px) scale(1); }
          50% { transform: translateX(-6px) translateY(-4px) scale(1.02); }
          100% { transform: translateX(0px) translateY(0px) scale(1); }
        }

        .inner-glow {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 20px 60px rgba(0,0,0,0.22), inset 0 -10px 30px rgba(255,255,255,0.02);
          border-radius: 9999px;
          pointer-events: none;
        }

        .ripple-center-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.65);
          box-shadow: 0 0 12px rgba(255,255,255,0.12), 0 0 28px rgba(0,0,0,0.28);
          opacity: 0.95;
        }
      `}</style>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:w-1/2 justify-center items-start py-12" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I'm <span className="text-green-400">Osimi Godsgift</span></h1>
          <h2 className="text-2xl md:text-3xl mb-6">Full Stack Developer</h2>
          <p className="text-lg mb-8">Crafting digital experiences with clean code and innovative solutions</p>
          <div className="flex space-x-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition">View My Work</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Contact Me</button>
          </div>
          <div className="flex mt-10 space-x-4">
            <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="text-white hover:text-green-400 transition" aria-label="Facebook"><i className="fab fa-facebook-f text-2xl" /></a>
            <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="text-white hover:text-green-400 transition" aria-label="LinkedIn"><i className="fab fa-linkedin-in text-2xl" /></a>
            <a href="https://wa.me/2347049946769" className="text-white hover:text-green-400 transition" aria-label="WhatsApp"><i className="fab fa-whatsapp text-2xl" /></a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
          <div ref={containerRef} className="hero-photo-wrap rounded-full border-4 border-white shadow-xl">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Osimi photo ${i + 1}`}
                className={`hero-photo ${index === i ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={index !== i}
                draggable={false}
              />
            ))}

            <div className="ripple-layer" aria-hidden>
              <div className="ripple r1" />
              <div className="ripple r2" />
              <div className="ripple r3" />
              <div className="ripple r4" />
              <div className="water-sheen" />
              <div className="wave-noise" />
              <div className="inner-glow" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="ripple-center-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
