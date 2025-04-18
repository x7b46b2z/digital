import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/9742555114?text=Hi%20Digital%20Solution,%20I%20want%20to%20get%20started', '');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 cursor-pointer ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center">
          <Link to="hero" className="flex items-center">
            <img 
              src= "/src/assets/logo.jpg" 
              alt="Company Logo"
              className="h-10" 
            />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="about" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">About Us</Link>
          <Link to="services" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</Link>
          <Link to="testimonials" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Testimonials</Link>
          <Link to="calculator" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Calculator</Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact Us</Link>
        </div>
        
        <button 
          onClick={openWhatsApp}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md transition duration-300"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;