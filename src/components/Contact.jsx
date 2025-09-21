// src/components/Contact.jsx
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', message: string }

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
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      form.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
    } finally {
      setSending(false)
      // auto-hide success after 5s
      if (status?.type !== 'success') {
        // ensure we still clear any old timer if needed (no timer here)
      }
      if (status?.type === 'success') {
        setTimeout(() => setStatus(null), 5000)
      } else {
        // If just sent successfully, ensure we clear after 5s as well:
        if (status === null) {
          // schedule based on the new success state (we cannot read it synchronously),
          // set an additional timeout to clear any future success message
          setTimeout(() => setStatus(null), 5000)
        }
      }
    }
  }

  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 section-title" data-aos="fade-up">Get In Touch</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">Let's Talk About Your Project</h3>
            <p className="mb-6">I'm available for freelance work and interesting project opportunities. Feel free to reach out if you want to collaborate with me.</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 text-green-400 mr-4" aria-hidden></i>
                <span>Sapele, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-4" aria-hidden></i>
                <span>osimigbubemigodsgift@gmail.com</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden></i>
              </a>
              <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden></i>
              </a>
              <a href="https://wa.me/+2347049946769" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" aria-hidden></i>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
              {status && status.type === 'success' && (
                <div className="mb-4 px-4 py-3 rounded-md bg-green-50 border border-green-200 text-green-800">
                  {status.message}
                </div>
              )}
              {status && status.type === 'error' && (
                <div className="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-red-800">
                  {status.message}
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input type="text" id="name" name="user_name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input type="email" id="email" name="user_email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center ${sending ? 'bg-blue-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                aria-busy={sending}
              >
                {sending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
