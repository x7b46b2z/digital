import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = [
    "Watch Your Business Grow Beyond Limits",
    "Fuel Your Growth with Digital Strategy",
    "We Build, You Scale"
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/1234567890?text=Hi%20Digital%20Solution,%20I%20want%20a%20custom%20strategy',
      '_blank'
    );
  };

  return (
    <section id= "hero" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* Typewriter Text */}
          <div className="min-h-[90px] flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            More leads, higher sales, and stronger brand presence – all backed by data-driven strategies
          </p>

          {/* Button */}
          <button
            onClick={openWhatsApp}
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            Get Your Custom Strategy
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">127%</h3>
              <p className="text-gray-600">Revenue Growth</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">15,000+</h3>
              <p className="text-gray-600">New Leads</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">89%</h3>
              <p className="text-gray-600">Conversion Rate</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;