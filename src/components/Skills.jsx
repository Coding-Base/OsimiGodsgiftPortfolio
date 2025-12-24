// src/components/Skills.jsx
import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const skillRef = useRef(null)
  const [animatedSkills, setAnimatedSkills] = useState([])
  
  const skills = {
    frontend: [
      { name: 'React', percentage: 80, icon: 'fab fa-react', color: '#61DAFB' },
      { name: 'JavaScript', percentage: 85, icon: 'fab fa-js-square', color: '#F7DF1E' },
      { name: 'TypeScript', percentage: 60, icon: 'fas fa-code', color: '#3178C6' },
      { name: 'HTML/CSS', percentage: 95, icon: 'fab fa-html5', color: '#E34F26' },
      { name: 'Tailwind CSS', percentage: 80, icon: 'fas fa-wind', color: '#06B6D4' },
      { name: 'Bootstrap', percentage: 80, icon: 'fab fa-bootstrap', color: '#7952B3' }
    ],
    backend: [
      { name: 'Python', percentage: 85, icon: 'fab fa-python', color: '#3776AB' },
      { name: 'MongoDB', percentage: 80, icon: 'fas fa-database', color: '#47A248' },
      { name: 'PostgreSQL/MySQL', percentage: 75, icon: 'fas fa-server', color: '#336791' },
      { name: 'Git/Github', percentage: 80, icon: 'fab fa-git-alt', color: '#F05032' },
      { name: 'Docker', percentage: 50, icon: 'fab fa-docker', color: '#2496ED' },
      { name: 'AI Tools', percentage: 95, icon: 'fas fa-robot', color: '#10B981' },
      { name: 'Prompt Engineering', percentage: 95, icon: 'fas fa-keyboard', color: '#8B5CF6' },
      { name: 'DevOps', percentage: 95, icon: 'fas fa-code-branch', color: '#F59E0B' }
    ]
  }

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
          const allSkills = [...skills.frontend, ...skills.backend]
          allSkills.forEach((skill, i) => {
            setTimeout(() => {
              setAnimatedSkills(prev => {
                const newSkills = [...prev]
                newSkills[i] = { ...skill, animated: true }
                return newSkills
              })
            }, i * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }

    setInitialWidths()

    const observer = new IntersectionObserver(animateSkillBars, { 
      threshold: 0.3,
      rootMargin: '-50px'
    })
    
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  const SkillCard = ({ skill, index, category }) => {
    const isAnimated = animatedSkills[index]?.animated || false
    
    return (
      <div className="group relative bg-dark-surface rounded-xl p-6 hover-card border border-dark-card transition-all duration-300 hover:border-accent-cyan/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-dark-card flex items-center justify-center group-hover:scale-110 transition-transform"
                 style={{ color: skill.color }}>
              <i className={`${skill.icon} text-xl`}></i>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary">{skill.name}</h4>
              <p className="text-sm text-text-secondary">{category}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold gradient-text">
              {isAnimated ? `${skill.percentage}%` : '0%'}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-2 w-full bg-dark-card rounded-full overflow-hidden">
            <div 
              className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: isAnimated ? `${skill.percentage}%` : '0%',
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
              }}
            />
          </div>
          
          {/* Animated dots on progress bar */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute w-2 h-2 rounded-full bg-white animate-pulse"
                 style={{ 
                   left: `${skill.percentage}%`,
                   transform: 'translateX(-50%)',
                   animationDelay: `${index * 0.1}s`
                 }}></div>
          </div>
        </div>

        {/* Skill level indicator */}
        <div className="flex justify-between mt-2">
          <span className="text-xs text-text-secondary">Beginner</span>
          <span className="text-xs text-text-secondary">Expert</span>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" ref={skillRef} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-emerald/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent-cyan font-mono text-sm tracking-widest">TECHNICAL EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            With AI empowerment, I combine traditional development skills with cutting-edge AI tools
          </p>
        </div>

        {/* AI Empowerment Badge */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-accent-cyan/20 to-accent-emerald/20 border border-accent-cyan/30 rounded-full px-6 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald flex items-center justify-center">
              <i className="fas fa-robot text-sm"></i>
            </div>
            <div>
              <span className="font-semibold text-text-primary">AI-Empowered Development</span>
              <span className="text-text-secondary text-sm ml-2">• Enhanced with AI Tools & Prompt Engineering</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                  <i className="fas fa-palette text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Frontend Development</h3>
                  <p className="text-text-secondary">Creating beautiful, responsive interfaces</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4">
              {skills.frontend.map((skill, index) => (
                <SkillCard 
                  key={index} 
                  skill={skill} 
                  index={index}
                  category="Frontend"
                />
              ))}
            </div>
          </div>

          {/* Backend & DevOps Skills */}
          <div data-aos="fade-left">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mr-4">
                  <i className="fas fa-server text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Backend & DevOps</h3>
                  <p className="text-text-secondary">Building scalable, secure systems</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4">
              {skills.backend.map((skill, index) => (
                <SkillCard 
                  key={index} 
                  skill={skill} 
                  index={index + skills.frontend.length}
                  category="Backend"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Additional Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Express.js', 'REST APIs', 'GraphQL', 'AWS', 'Firebase', 'Jest', 'CI/CD', 'Figma', 'Adobe XD'].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-dark-card text-text-secondary rounded-full text-sm hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
