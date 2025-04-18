import React from 'react';
import LogoImg from '../assets/logo.jpg'; 

const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Transforming Digital Presence Since 2020</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At NexoVision, we're passionate about helping businesses thrive in the digital landscape. 
                Our team of experts combines creativity with data-driven strategies to deliver exceptional results. 
                We believe in building long-term partnerships with our clients and helping them achieve sustainable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">150%</h3>
                  <p className="text-gray-600">Average ROI</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10 flex justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src={LogoImg} 
                  alt="Digital Solution Logo" 
                  className="rounded-lg shadow-xl w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-50 opacity-20 rounded-lg mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;