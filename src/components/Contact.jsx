// src/components/Contact.jsx
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text)
      alert('Message sent successfully!')
      form.current.reset()
    }, (error) => {
      console.log(error.text)
      alert('Failed to send message. Please try again later.')
    })
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
                <i className="fas fa-map-marker-alt mt-1 text-green-400 mr-4"></i>
                <span>Sapele, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-4"></i>
                <span>osimigbubemigodsgift@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/+2347049946769" className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-green-400 hover:text-white transition">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
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
              <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
