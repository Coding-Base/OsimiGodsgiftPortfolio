// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Osimi Godsgift Gbubemi. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1CPpfhUTcz/" className="hover:text-green-400 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/osimi-gbubemi-godsgift-94a86a275" className="hover:text-green-400 transition"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://wa.me/07049946769" className="hover:text-green-400 transition"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer