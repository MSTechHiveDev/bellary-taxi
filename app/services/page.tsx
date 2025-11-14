import React from 'react'

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Local Taxi</h2>
              <p className="text-gray-600">Safe and reliable local taxi services within Ballari city.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Airport Transfer</h2>
              <p className="text-gray-600">Comfortable rides to and from the airport on time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Outstation</h2>
              <p className="text-gray-600">Long distance travel to nearby cities and towns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">24/7 Service</h2>
              <p className="text-gray-600">Round the clock taxi services for your convenience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Multiple Vehicle Types</h2>
              <p className="text-gray-600">Choose from sedan, SUV, and tempo traveler vehicles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Professional Drivers</h2>
              <p className="text-gray-600">Experienced and verified drivers for safe journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage