// src/components/Projects.jsx
const Projects = () => {
  const projects = [
    {
      title: "Gloveries Business Solution",
      embedUrl: "https://gloveries-business-solution.onrender.com/",
      description: "A tech solution business website offering various tech-inclined services. Developed a completely new website with enhanced design and functionality for the business CEO, Mr. Samuel Imafidon.",
      liveUrl: "https://gloveries-business-solution.onrender.com/"
    },
    {
      title: "FUTO CAMPUS MEDIA Official Blog Website",
      embedUrl: "https://futocampusmedia.online/",
      description: "A full-stack social media information news website with both user-facing frontend and admin panel for content creation and monitoring user reactions. Developed for the CEO of FUTO Campus Media.",
      liveUrl: "https://futocampusmedia.online/"
    },
    {
      title: "PetroX",
      embedUrl: "https://petrox-test-frontend.onrender.com/",
      description: "A comprehensive student full-stack website providing access to various tools, materials, CBT tests, and learning management systems for campuses. A complex platform designed to enhance the educational experience.",
      liveUrl: "https://petrox-test-frontend.onrender.com/"
    },
    {
      title: "Buziness Pally",
      description: "A mobile application that helps shop owners record sales and maintain inventory to maximize profit and minimize loss, specifically designed for SMEs. Currently being used by business owners for accounting purposes.",
      isMobile: true
    },
    {
      title: "Christowonder Fashion House",
      embedUrl: "https://christopher-fashion-house.onrender.com/",
      description: "A tailored website developed for a client in the tailoring business, showcasing their services and portfolio with an elegant and professional design.",
      liveUrl: "https://christopher-fashion-house.onrender.com/"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 section-title" data-aos="fade-up">My Projects</h2>
        
        {projects.map((project, index) => (
          <div key={index} className="mb-20" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">{project.title}</h3>
            
            {project.embedUrl ? (
              <div className="iframe-container mb-6">
                <iframe src={project.embedUrl} title={project.title}></iframe>
              </div>
            ) : project.isMobile ? (
              <div className="bg-gray-100 rounded-lg p-6 mb-6 flex items-center justify-center" style={{ minHeight: '300px' }}>
                <div className="text-center">
                  <i className="fas fa-mobile-alt text-6xl text-blue-500 mb-4"></i>
                  <p className="text-lg font-semibold">Mobile Application</p>
                </div>
              </div>
            ) : null}
            
            <p className="mb-4">{project.description}</p>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-500 font-semibold hover:underline">
                View Live Site <i className="fas fa-arrow-right ml-2"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects