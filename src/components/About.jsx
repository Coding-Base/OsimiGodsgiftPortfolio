// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 section-title" data-aos="fade-up">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Who I Am</h3>
            <p className="mb-4">I'm Osimi Godsgift Gbubemi, a passionate Full Stack Developer with over 3 years of experience creating dynamic web applications and digital solutions.</p>
            <p className="mb-4">Currently pursuing a degree in Petroleum Engineering at the Federal University of Technology Owerri, I blend technical engineering knowledge with cutting-edge software development skills.</p>
            <p>Based in Sapele, Delta State, Nigeria, I'm dedicated to delivering excellence in every project I undertake, with a keen eye for detail and a commitment to client satisfaction.</p>
          </div>
          <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">My Journey</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">Education</h4>
                <p>Petroleum Engineering, Federal University of Technology Owerri (2025/2026)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Experience</h4>
                <p>3+ years of professional development experience</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Philosophy</h4>
                <p>Create solutions that are not only functional but also deliver exceptional user experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About