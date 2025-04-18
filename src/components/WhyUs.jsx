const WhyUs = () => {
    const features = [
      {
        title: "+156% Conversion Rate",
        description: "More Sales & Conversions",
        icon: "📈"
      },
      {
        title: "3x Traffic Growth",
        description: "Higher Website Traffic",
        icon: "🚀"
      },
      {
        title: "Top 3 Rankings",
        description: "Better Google Rankings",
        icon: "🏆"
      },
      {
        title: "89% Brand Recognition",
        description: "Stunning Visuals",
        icon: "🎨"
      },
      {
        title: "99.9% Uptime",
        description: "24/7 Website Performance",
        icon: "⏱️"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyUs;