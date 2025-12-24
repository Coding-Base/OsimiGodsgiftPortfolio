// src/components/Projects.jsx
import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "Gloveries Business Solution",
      embedUrl: "https://gloveries-business-solution.onrender.com/",
      description: "A comprehensive tech solution business website offering various tech-inclined services. Developed a completely new website with enhanced design and functionality for the business CEO, Mr. Samuel Imafidon.",
      liveUrl: "https://gloveries-business-solution.onrender.com/",
      technologies: ["React", "Tailwind"],
      category: "web",
      featured: true
    },
    {
      title: "FUTO CAMPUS MEDIA Official Blog Website",
      embedUrl: "https://futocampusmedia.online/",
      description: "A full-stack social media information news website with both user-facing frontend and admin panel for content creation and monitoring user reactions. Developed for the CEO of FUTO Campus Media.",
      liveUrl: "https://futocampusmedia.online/",
      technologies: ["Python", "JavaScript", "PostgreSQL", "Django"],
      category: "web",
      featured: true
    },
    {
      title: "PetroX",
      embedUrl: "https://petrox-test-frontend.onrender.com/",
      description: "A comprehensive student full-stack website providing access to various tools, materials, CBT tests, and learning management systems for campuses. A complex platform designed to enhance the educational experience.",
      liveUrl: "https://petrox-test-frontend.onrender.com/",
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      category: "web",
      featured: true
    },
    {
      title: "Buziness Pally",
      description: "A mobile application that helps shop owners record sales and maintain inventory to maximize profit and minimize loss, specifically designed for SMEs. Currently being used by business owners for accounting purposes.",
      isMobile: true,
      technologies: ["React Native", "Asyc Storage", "Redux", "Chart.js"],
      category: "mobile",
      featured: false
    },
    {
      title: "Christowonder Fashion House",
      embedUrl: "https://christopher-fashion-house.onrender.com/",
      description: "A tailored website developed for a client in the tailoring business, showcasing their services and portfolio with an elegant and professional design.",
      liveUrl: "https://christopher-fashion-house.onrender.com/",
      technologies: ["HTML/CSS", "JavaScript", "tailwind"],
      category: "web",
      featured: false
    },
    {
      title: "Excel Sheet Modifier ",
      description: "A Python project that helps create an automatic correction across several files with a full automated process and then creates a new file with the updated data",
      technologies: ["Python", "sheets", "Excel", "files"],
      category: "web",
      featured: false,
      githubUrl: "https://github.com/Coding-Base"
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent-cyan font-mono text-sm tracking-widest">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and innovative solutions
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {['all', 'web', 'mobile'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-emerald text-dark-primary'
                  : 'bg-dark-surface text-text-secondary hover:text-accent-cyan border border-dark-card'
              }`}
            >
              {filter === 'all' ? 'All Projects' : 
               filter === 'web' ? 'Web Applications' : 'Mobile Apps'}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center" data-aos="fade-up">
            <span className="w-8 h-1 bg-accent-cyan rounded-full mr-4"></span>
            Featured Work
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} index={index} featured />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center" data-aos="fade-up">
            <span className="w-8 h-1 bg-accent-emerald rounded-full mr-4"></span>
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(project => !project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Have a project in mind?</h3>
            <p className="text-text-secondary mb-6">Let's work together to bring your ideas to life</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`group relative ${
        featured ? 'lg:col-span-2' : ''
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-dark-surface rounded-2xl overflow-hidden hover-card border border-dark-card transition-all duration-500 ${
        isHovered ? 'border-accent-cyan/30' : ''
      }`}>
        {/* Project Preview */}
        <div className={`relative overflow-hidden ${
          featured ? 'h-64 md:h-80' : 'h-48'
        }`}>
          {project.embedUrl ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-emerald/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-laptop-code text-6xl text-accent-cyan/30"></i>
                  <p className="mt-4 text-text-secondary font-mono">Live Preview Available</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent flex items-end p-6 transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <button
                  onClick={() => window.open(project.liveUrl || project.embedUrl, '_blank')}
                  className="px-4 py-2 bg-accent-cyan text-dark-primary rounded-lg font-semibold hover:bg-accent-emerald transition-colors"
                >
                  Visit Live Site
                </button>
              </div>
            </div>
          ) : project.isMobile ? (
            <div className="relative w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-56 bg-dark-card rounded-3xl border-8 border-dark-surface overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-dark-card rounded-b-lg"></div>
                  <div className="h-full flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-4xl text-accent-cyan"></i>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-emerald/10 to-accent-cyan/10 flex items-center justify-center">
              <i className="fas fa-code text-6xl text-accent-emerald/30"></i>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
              {project.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/20 text-accent-cyan">
                  <i className="fas fa-star mr-1"></i> Featured
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors"
                  aria-label="Live Site"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-dark-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>

          <p className="text-text-secondary mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-dark-card text-text-secondary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <button
            onClick={() => setIsHovered(!isHovered)}
            className="w-full py-3 border border-dark-card text-text-secondary rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 flex items-center justify-center group"
          >
            <span>View Details</span>
            <i className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${
              isHovered ? 'rotate-180' : ''
            }`}></i>
          </button>

          {/* Expanded Details */}
          <div className={`overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-96 mt-4' : 'max-h-0'
          }`}>
            <div className="pt-4 border-t border-dark-card">
              <p className="text-text-secondary mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">
                  {project.category === 'web' ? 'Web Application' : 'Mobile Application'}
                </span>
                <span className="text-sm text-accent-cyan">
                  {project.featured ? 'Enterprise Project' : 'Client Project'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/20 to-accent-emerald/20 blur-xl transition-opacity duration-500 -z-10 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  )
}

export default Projects
