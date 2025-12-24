// src/components/Skills.jsx
import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const skillRef = useRef(null)
  const [animatedPercentages, setAnimatedPercentages] = useState({})
  const [isInView, setIsInView] = useState(false)
  
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

  // Animate percentage counters
  const animateCounter = (skillId, targetPercentage) => {
    let current = 0
    const increment = targetPercentage / 50 // Divide into 50 steps (2% per step)
    const duration = 1500 // Total animation duration
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetPercentage) {
        current = targetPercentage
        clearInterval(timer)
      }
      
      setAnimatedPercentages(prev => ({
        ...prev,
        [skillId]: Math.floor(current)
      }))
    }, duration / 50) // Update 50 times over the duration
  }

  useEffect(() => {
    const el = skillRef.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true)
          
          // Start animations for all skills
          const allSkills = [...skills.frontend, ...skills.backend]
          allSkills.forEach((skill, index) => {
            const skillId = `${skill.category || 'skill'}-${index}`
            setTimeout(() => {
              animateCounter(skillId, skill.percentage)
            }, index * 100) // Stagger animations
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, { 
      threshold: 0.2,
      rootMargin: '-50px 0px'
    })
    
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  const SkillCard = ({ skill, index, category, isFrontend = true }) => {
    const skillId = `${category}-${index}`
    const animatedPercentage = animatedPercentages[skillId] || 0
    const isAnimated = animatedPercentage > 0
    
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
              <p className="text-sm text-text-secondary">{isFrontend ? 'Frontend' : 'Backend'}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold gradient-text">
              {isAnimated ? `${animatedPercentage}%` : '0%'}
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Background bar */}
          <div className="h-2 w-full bg-dark-card rounded-full overflow-hidden">
            {/* Progress bar with animation */}
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: isInView ? `${skill.percentage}%` : '0%',
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                transitionDelay: `${index * 100}ms`
              }}
            />
          </div>
          
          {/* Animated dot that moves with progress */}
          {isInView && (
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-pulse"
                 style={{ 
                   left: `calc(${skill.percentage}% - 4px)`,
                   animationDelay: `${index * 100}ms`
                 }}></div>
          )}
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
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-poppins">
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
                  <h3 className="text-2xl font-bold text-text-primary font-poppins">Frontend Development</h3>
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
                  category="frontend"
                  isFrontend={true}
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
                  <h3 className="text-2xl font-bold text-text-primary font-poppins">Backend & DevOps</h3>
                  <p className="text-text-secondary">Building scalable, secure systems</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4">
              {skills.backend.map((skill, index) => (
                <SkillCard 
                  key={index} 
                  skill={skill} 
                  index={index}
                  category="backend"
                  isFrontend={false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Updated Additional Skills */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center font-poppins">
              Additional Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs', 
                'GraphQL', 
                'AWS', 
                'Render', 
                'AWS CloudFront', 
                'AWS S3',
                'Redux',
                'OAuth',
                'Postman',
                'VS Code'
              ].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-dark-card text-text-secondary rounded-full text-sm hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 cursor-default hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
            
            {/* Infrastructure Services */}
            <div className="mt-8 pt-6 border-t border-dark-card">
              <h4 className="text-lg font-semibold text-text-primary mb-4 text-center font-poppins">
                Infrastructure & Deployment
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Render', icon: 'fas fa-server', color: '#46B3A9' },
                  { name: 'AWS S3', icon: 'fas fa-cloud', color: '#FF9900' },
                  { name: 'CloudFront', icon: 'fas fa-bolt', color: '#FF9900' },
                  { name: 'Github', icon: 'fas fa-globe', color: '#00C7B7' },
                  { name: 'Gitlab', icon: 'fas fa-rocket', color: '#000000' },
                  { name: 'Godaddy Hosting', icon: 'fas fa-tint', color: '#0080FF' }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 bg-dark-card rounded-lg hover:bg-dark-surface transition-colors"
                  >
                    <i className={`${service.icon} text-lg`} style={{ color: service.color }}></i>
                    <span className="text-text-primary text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent border border-accent-cyan/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center mr-3">
                <i className="fas fa-code text-accent-cyan"></i>
              </div>
              <h4 className="font-semibold text-text-primary">Full Stack</h4>
            </div>
            <p className="text-sm text-text-secondary">End-to-end development from UI/UX to deployment</p>
          </div>
          
          <div className="bg-gradient-to-br from-accent-emerald/10 to-transparent border border-accent-emerald/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-emerald/20 flex items-center justify-center mr-3">
                <i className="fas fa-robot text-accent-emerald"></i>
              </div>
              <h4 className="font-semibold text-text-primary">AI Integration</h4>
            </div>
            <p className="text-sm text-text-secondary">Leveraging AI tools for enhanced development workflows</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <i className="fas fa-cloud text-purple-400"></i>
              </div>
              <h4 className="font-semibold text-text-primary">Cloud Native</h4>
            </div>
            <p className="text-sm text-text-secondary">Modern cloud infrastructure and deployment expertise</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
