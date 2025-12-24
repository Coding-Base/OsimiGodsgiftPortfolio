// src/components/Footer.jsx
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing:', email)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home', icon: 'fas fa-home' },
    { label: 'About', href: '#about', icon: 'fas fa-user' },
    { label: 'Skills', href: '#skills', icon: 'fas fa-code' },
    { label: 'Projects', href: '#projects', icon: 'fas fa-briefcase' },
    { label: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ]

  const services = [
    'Full Stack Development',
    'Web Applications',
    'Mobile Apps',
    'AI Integration',
    'Technical Consulting',
    'Prompt Engineering'
  ]

  return (
    <footer className="relative overflow-hidden bg-dark-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-primary/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-bold gradient-text mb-4 inline-block font-poppins">
              Osimi Godsgift
            </a>
            <p className="text-text-secondary mb-6">
              Full Stack Developer & Engineer blending technical expertise with innovative software solutions to create exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" 
                 className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                 aria-label="LinkedIn">
                <i className="fab fa-linkedin-in group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="https://www.facebook.com/share/1CPpfhUTcz/"
                 className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                 aria-label="Facebook">
                <i className="fab fa-facebook-f group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="https://wa.me/+2347049946769"
                 className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                 aria-label="WhatsApp">
                <i className="fab fa-whatsapp group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="https://github.com/yourusername"
                 className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                 aria-label="GitHub">
                <i className="fab fa-github group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors flex items-center group"
                  >
                    <i className={`${link.icon} text-xs mr-2 text-accent-cyan`}></i>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6 font-poppins">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-chevron-right text-xs text-accent-emerald mr-2"></i>
                  <span className="text-text-secondary hover:text-accent-cyan transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6 font-poppins">Stay Updated</h3>
            <p className="text-text-secondary mb-4">
              Subscribe to my newsletter for the latest updates, tech insights, and project showcases.
            </p>
            {subscribed ? (
              <div className="bg-gradient-to-r from-accent-emerald/10 to-green-500/10 border border-accent-emerald/20 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-accent-emerald mr-2"></i>
                  <span className="text-text-primary">Thanks for subscribing!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-dark-card border border-dark-card rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-accent-cyan to-accent-emerald text-dark-primary rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-poppins"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-dark-card to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-secondary text-sm mb-4 md:mb-0">
            <p>
              &copy; {currentYear} Osimi Godsgift Gbubemi. All rights reserved.
              <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                <i className="fas fa-map-marker-alt mr-1 text-accent-cyan"></i>
                Based in Sapele, Delta State, Nigeria
              </span>
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:osimigbubemigodsgift@gmail.com" className="text-text-secondary hover:text-accent-cyan transition-colors text-sm">
              <i className="fas fa-envelope mr-1"></i>
              Email
            </a>
            <a href="tel:+2347049946769" className="text-text-secondary hover:text-accent-cyan transition-colors text-sm">
              <i className="fas fa-phone mr-1"></i>
              Call
            </a>
            <a href="/privacy-policy" className="text-text-secondary hover:text-accent-cyan transition-colors text-sm">
              Privacy
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-secondary hover:text-accent-cyan transition-colors text-sm flex items-center justify-center mx-auto group"
          >
            <i className="fas fa-arrow-up mr-2 group-hover:-translate-y-1 transition-transform"></i>
            Back to Top
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-primary to-transparent pointer-events-none"></div>
    </footer>
  )
}

export default Footer
