import React from "react";
import BimalImg from "../assets/Bimal.jpg";
import BishwaImg from "../assets/Bishwa.jpg";
import ChetanImg from "../assets/chetan.jpg";
import SauravImg from "../assets/Saurav.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Bishwa Sharma",
      role: "Full Stack Developer",
      image: BishwaImg,
    },
    {
      name: "Bimal Kumal",
      role: "Digital Marketing Manager",
      image: BimalImg,
    },
    {
      name: "Chetan Koirala",
      role: "Graphic Designer",
      image: ChetanImg,
    },
    {
      name: "Saurav Subedi",
      role: "Digital Marketing Specialist",
      image: SauravImg,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Meet Our Expert Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;