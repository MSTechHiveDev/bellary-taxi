"use client";

import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Experience the best taxi service in Bellary. Book now for instant confirmation and competitive rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+919999999999"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              📞 Call Now: +91 99999 99999
            </a>
            <Link
              href="/bookings"
              className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Online
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Quick Booking</h3>
              <p className="text-sm text-gray-400">Instant confirmation within minutes</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-2">Best Rates</h3>
              <p className="text-sm text-gray-400">Transparent pricing, no hidden charges</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-bold mb-2">Safe & Secure</h3>
              <p className="text-sm text-gray-400">Licensed drivers and GPS tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}