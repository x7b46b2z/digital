const MarketingTools = () => {
    const tools = [
      { name: "Google Ads", logo: "🔍" },
      { name: "Hubspot", logo: "📊" },
      { name: "Zoom", logo: "🎥" },
      { name: "WordPress", logo: "🌐" },
      { name: "Meta Ads", logo: "📱" }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Tools We Use</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm w-40 h-40 flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">{tool.logo}</div>
                <h3 className="text-lg font-medium text-gray-800">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MarketingTools;