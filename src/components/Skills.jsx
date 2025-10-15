 // src/components/Skills.jsx
import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillRef = useRef(null)
  
  useEffect(() => {
    const el = skillRef.current
    if (!el) return

    const setInitialWidths = () => {
      const skillBars = el.querySelectorAll('.progress-bar')
      skillBars.forEach(bar => {
        bar.style.width = '0%'
      })
    }

    const animateSkillBars = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = el.querySelectorAll('.progress-bar')
          skillBars.forEach((bar, i) => {
            const pct = bar.dataset.percent || '0'
            setTimeout(() => {
              bar.style.width = `${pct}%`
            }, i * 120)
          })
          observer.unobserve(entry.target)
        }
      })
    }

    setInitialWidths()

    const observer = new IntersectionObserver(animateSkillBars, { threshold: 0.4 })
    observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  const skills = {
    frontend: [
      { name: 'React', percentage: 80 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'TypeScript', percentage: 60 },
      { name: 'HTML/CSS', percentage: 95 },
      { name: 'Tailwind CSS', percentage: 80 },
      { name: 'Bootstrap', percentage: 80 }
    ],
    backend: [
      { name: 'Python', percentage: 85 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'PostgreSQL/MySQL', percentage: 75 },
      { name: 'Git/Github', percentage: 80 },
      { name: 'Docker', percentage: 50 },
      { name: 'AI Tools ', percentage: 95 },
      { name: 'Prompt Engineering ', percentage: 95 },
      { name: ' DevOps ', percentage: 95 },

     
     
    ]
  }

  return (
    <section id="skills" ref={skillRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 section-title" data-aos="fade-up">Technical Skills  With AI Empowerment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-6 text-blue-500">Frontend Development</h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar h-2 rounded-full bg-gray-300">
                    <div 
                      className="progress-bar h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out" 
                      data-percent={skill.percentage}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-6 text-blue-500">Backend & DevOps</h3>
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar h-2 rounded-full bg-gray-300">
                    <div 
                      className="progress-bar h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out" 
                      data-percent={skill.percentage}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
