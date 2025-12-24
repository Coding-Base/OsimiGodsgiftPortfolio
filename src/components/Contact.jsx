// src/components/Contact.jsx
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const sendEmail = async (e) => {
    e.preventDefault()
    if (!form.current) return

    setSending(true)
    setStatus(null)

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
      form.current.reset()
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later or email me directly.' })
      setTimeout(() => setStatus(null), 5000)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-emerald/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent-cyan font-mono text-sm tracking-widest">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-poppins">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card hover-card">
              <h3 className="text-2xl font-bold text-text-primary mb-8 font-poppins">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start p-4 rounded-xl hover:bg-dark-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-cyan/20 to-accent-emerald/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-accent-cyan text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 font-poppins">Location</h4>
                    <p className="text-text-secondary">Sapele, Delta State, Nigeria</p>
                    <p className="text-sm text-accent-emerald mt-1">Available for remote work worldwide</p>
                  </div>
                </div>

                <a 
                  href="mailto:osimigbubemigodsgift@gmail.com"
                  className="flex items-start p-4 rounded-xl hover:bg-dark-card transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-purple-500 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 font-poppins">Email</h4>
                    <p className="text-text-secondary">osimigbubemigodsgift@gmail.com</p>
                    <p className="text-sm text-purple-400 mt-1">Click to email me directly</p>
                  </div>
                  <i className="fas fa-arrow-right text-accent-cyan ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </a>

                <a 
                  href="tel:+2347049946769"
                  className="flex items-start p-4 rounded-xl hover:bg-dark-card transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-emerald-500 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 font-poppins">Phone / WhatsApp</h4>
                    <p className="text-text-secondary">+234 704 994 6769</p>
                    <p className="text-sm text-emerald-400 mt-1">Call or WhatsApp me directly</p>
                  </div>
                  <i className="fas fa-arrow-right text-accent-cyan ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </a>

                <div className="flex items-start p-4 rounded-xl hover:bg-dark-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-amber-500 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 font-poppins">Availability</h4>
                    <p className="text-text-secondary">Available for projects</p>
                    <p className="text-sm text-amber-400 mt-1">Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-dark-card">
                <h4 className="text-lg font-semibold text-text-primary mb-4 font-poppins">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" 
                     className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                     aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in text-xl group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href="https://www.facebook.com/share/1CPpfhUTcz/"
                     className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                     aria-label="Facebook">
                    <i className="fab fa-facebook-f text-xl group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href="https://wa.me/+2347049946769"
                     className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                     aria-label="WhatsApp">
                    <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href="https://github.com/yourusername"
                     className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-colors group"
                     aria-label="GitHub">
                    <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 border border-accent-cyan/20 rounded-2xl p-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-accent-emerald animate-pulse mr-3"></div>
                <div>
                  <p className="font-semibold text-text-primary font-poppins">Currently available for new projects</p>
                  <p className="text-sm text-text-secondary mt-1">I'm taking on freelance work and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card hover-card">
              <h3 className="text-2xl font-bold text-text-primary mb-8 font-poppins">Send a Message</h3>
              
              {status && status.type === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-2xl text-dark-primary"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-text-primary mb-2 font-poppins">Message Sent Successfully!</h4>
                  <p className="text-text-secondary mb-6">{status.message}</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="px-6 py-2 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark-primary transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {status && status.type === 'error' && (
                    <div className="mb-4 px-4 py-3 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 text-red-300">
                      <div className="flex items-center">
                        <i className="fas fa-exclamation-circle mr-3"></i>
                        <span>{status.message}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full px-4 py-3 bg-dark-card border border-dark-card rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full px-4 py-3 bg-dark-card border border-dark-card rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-dark-card border border-dark-card rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Project Inquiry or Collaboration"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="w-full px-4 py-3 bg-dark-card border border-dark-card rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-emerald text-dark-primary rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-poppins"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-text-secondary text-center">
                    <i className="fas fa-shield-alt mr-2 text-accent-cyan"></i>
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-dark-card rounded-xl p-4 text-center hover:bg-dark-surface transition-colors">
                <div className="text-2xl font-bold gradient-text mb-1 font-poppins">24h</div>
                <div className="text-sm text-text-secondary">Response Time</div>
              </div>
              <div className="bg-dark-card rounded-xl p-4 text-center hover:bg-dark-surface transition-colors">
                <div className="text-2xl font-bold gradient-text mb-1 font-poppins">100%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4 font-poppins">Prefer a quick chat?</h3>
            <p className="text-text-secondary mb-6">Let's hop on a call to discuss your project requirements</p>
            <a
              href="https://wa.me/+2347049946769?text=Hi%20Osimi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-emerald to-green-500 text-dark-primary rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <i className="fab fa-whatsapp mr-2 text-lg"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
