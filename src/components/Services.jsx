const Services = () => {
    const services = [
      {
        title: "Meta Advertising",
        description: "Targeted ads on Facebook and Instagram to reach your ideal customers."
      },
      {
        title: "Graphics Design",
        description: "Eye-catching visuals that represent your brand perfectly."
      },
      {
        title: "Web Development",
        description: "Fast, responsive websites that convert visitors into customers."
      },
      {
        title: "Google Advertising",
        description: "PPC campaigns that drive qualified traffic to your business."
      },
      {
        title: "Bulk SMS",
        description: "Direct marketing through SMS for higher engagement."
      },
      {
        title: "Email Marketing",
        description: "Automated email campaigns that nurture leads."
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Services – Grow Your Business</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;