import { useState } from 'react';

const AdvertisingCalculator = () => {
  const [dailyBudget, setDailyBudget] = useState(180);
  const [duration, setDuration] = useState(7);

  // Constants for calculations
  const estimatedDailyReach = Math.round(dailyBudget * 15); 
  const totalCost = dailyBudget * duration;
  const totalEstimatedReach = estimatedDailyReach * duration;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0
    }).format(amount).replace('₹', 'Rs ');
  };

  const handleSubmit = () => {
    const message = `Advertising Campaign Inquiry\n\n` +
                   `Budget Details:\n` +
                   `Daily: ${formatCurrency(dailyBudget)}\n` +
                   `Duration: ${duration} days\n` +
                   `Total: ${formatCurrency(totalCost)}\n\n` +
                   `Estimated Reach:\n` +
                   `Daily: ${estimatedDailyReach.toLocaleString()} people\n` +
                   `Total: ${totalEstimatedReach.toLocaleString()} people\n\n` +
                   `I am interested in this advertising plan. Please contact me with more details.`;
    
    window.open(`https://wa.me/9742555114?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCustomStrategy = () => {
    const message = `Custom Advertising Strategy Request\n\n` +
                   `Current Plan:\n` +
                   `Daily Budget: ${formatCurrency(dailyBudget)}\n` +
                   `Duration: ${duration} days\n\n` +
                   `I need a custom advertising strategy for my business. Please suggest the best approach.`;
    
    window.open(`https://wa.me/9742555114?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                  Daily Budget (Rs)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">Rs</span>
                  <input
                    type="number"
                    id="budget"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
                  Campaign Duration (Days)
                </label>
                <input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Campaign Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily Budget:</span>
                  <span className="font-medium">{formatCurrency(dailyBudget)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Campaign Duration:</span>
                  <span className="font-medium">{duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Daily Reach:</span>
                  <span className="font-medium">{estimatedDailyReach.toLocaleString()} people</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700 font-semibold">Total Cost:</span>
                  <span className="text-blue-600 font-bold">{formatCurrency(totalCost)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700 font-semibold">Total Estimated Reach:</span>
                  <span className="text-blue-600 font-bold">{totalEstimatedReach.toLocaleString()} people</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 cursor-pointer flex flex-col md:flex-row justify-between items-center gap-4">
            <button 
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg transition duration-300"
              onClick={handleSubmit}
            >
              Submit Inquiry
            </button>
            <button 
              className="w-full md:w-auto px-6 py-2 bg-white border border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
              onClick={handleCustomStrategy}
            >
              Request Custom Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingCalculator;