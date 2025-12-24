// src/components/About.jsx
const About = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Completed' },
    { value: '90%', label: 'Client Satisfaction' },
    { value: '∞', label: 'Passion for Code' },
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-emerald/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent-cyan font-mono text-sm tracking-widest">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting Digital <span className="gradient-text">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-emerald mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div data-aos="fade-right">
            <div className="bg-dark-surface rounded-2xl p-8 hover-card border border-dark-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald flex items-center justify-center mr-4">
                  <i className="fas fa-user text-xl text-dark-primary"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Who I Am</h3>
                  <p className="text-text-secondary">Full Stack Developer & Engineer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  I'm <span className="text-accent-cyan font-semibold">Osimi Godsgift Gbubemi</span>, a passionate Full Stack Developer with over 3 years of experience creating dynamic web applications and digital solutions that make a real impact.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Currently pursuing a degree in <span className="text-accent-emerald font-semibold">Petroleum Engineering</span> at the Federal University of Technology Owerri, I uniquely blend technical engineering knowledge with cutting-edge software development skills.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Based in Sapele, Delta State, Nigeria, I'm dedicated to delivering excellence in every project I undertake, with a keen eye for detail and an unwavering commitment to client satisfaction.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
              {stats.map((stat, index) => (
                <div key={index} className="bg-dark-card rounded-xl p-4 text-center hover:bg-dark-surface transition-colors">
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Journey */}
          <div data-aos="fade-left">
            <div className="bg-dark-surface rounded-2xl p-8 hover-card border border-dark-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-indigo to-purple-500 flex items-center justify-center mr-4">
                  <i className="fas fa-road text-xl text-dark-primary"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">My Journey</h3>
                  <p className="text-text-secondary">From Engineering to Code</p>
                </div>
              </div>

              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-emerald to-accent-indigo"></div>

                {/* Timeline Items */}
                <div className="relative pl-12">
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-surface"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-text-primary flex items-center">
                      Education
                      <span className="ml-2 px-2 py-1 text-xs bg-accent-cyan/20 text-accent-cyan rounded-full">Current</span>
                    </h4>
                    <p className="text-text-secondary">Petroleum Engineering, Federal University of Technology Owerri</p>
                    <p className="text-sm text-text-secondary mt-1">Expected Graduation: 2025/2026</p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-accent-emerald border-4 border-dark-surface"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-text-primary">Experience</h4>
                    <p className="text-text-secondary">3+ years of professional development experience</p>
                    <p className="text-sm text-accent-emerald mt-1">Full Stack Development • Web Applications • Digital Solutions</p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-accent-indigo border-4 border-dark-surface"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-text-primary">Philosophy</h4>
                    <p className="text-text-secondary">Create solutions that are not only functional but also deliver exceptional user experiences</p>
                    <p className="text-sm text-accent-indigo mt-1">User-Centric Design • Clean Code • Innovative Solutions</p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-purple-500 border-4 border-dark-surface"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-text-primary">Location</h4>
                    <p className="text-text-secondary">Based in Sapele, Delta State, Nigeria</p>
                    <p className="text-sm text-purple-400 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="w-full group px-6 py-4 bg-dark-card rounded-xl hover-card border border-dark-card hover:border-accent-cyan/30 flex items-center justify-between transition-all"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-emerald flex items-center justify-center mr-4">
                    <i className="fas fa-file-download text-lg"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-text-primary">Download Resume</div>
                    <div className="text-sm text-text-secondary">PDF • 2 MB</div>
                  </div>
                </div>
                <i className="fas fa-arrow-right text-accent-cyan group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
