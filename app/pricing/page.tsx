import React from 'react'

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Pricing</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Sedan</h2>
              <div className="text-3xl font-bold text-blue-600 mb-4">₹15/km</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>4 Passengers</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>AC Comfort</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Local & Outstation</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Book Now
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
              <h2 className="text-2xl font-semibold mb-4">SUV</h2>
              <div className="text-3xl font-bold text-blue-600 mb-4">₹20/km</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>7 Passengers</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Spacious AC</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Luggage Space</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Book Now
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Tempo Traveler</h2>
              <div className="text-3xl font-bold text-blue-600 mb-4">₹25/km</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>12-16 Passengers</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Group Travel</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Event Transport</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Book Now
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Additional charges may apply for waiting time, tolls, and night trips</p>
            <p className="text-sm text-gray-500">Contact us for custom packages and special rates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage