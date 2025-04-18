import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">NexoVision</h3>
            <p className="text-gray-400 mb-4">Helping businesses grow through innovative digital marketing solutions.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572775611962#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digi.solution1?igsh=MTQ4YXFqOXp5NXFycA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="w-5 h-5" />
              </a> */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition">About Us</Link></li>
              <li><Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition">Services</Link></li>
              <li><Link to="testimonials" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition">Testimonials</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition">Meta Advertising</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition">Web Development</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition">SEO</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition">Graphic Design</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <a href="https://maps.google.com?q=Butwal,Nepal" target="_blank" rel="noopener noreferrer" className="flex items-start text-gray-400 hover:text-white transition">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Butwal, Nepal</span>
                </a>
              </li>
              <li className="flex items-start">
                <a href="tel:+9779742555114" className="flex items-start text-gray-400 hover:text-white transition">
                  <FaPhoneAlt className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>+977 9742555114</span>
                </a>
              </li>
              <li className="flex items-start">
                <a href="mailto:nexovision0@gmail.com" className="flex items-start text-gray-400 hover:text-white transition">
                  <FaEnvelope className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>nexovision0@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NexoVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;