"use client";

import React from "react";
import { services } from "@/lib/data/services";
import { Car, MapPin, Navigation, Clock } from "lucide-react";

export default function Services() {
  const icons = [Car, MapPin, Navigation, Clock];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-3">
            Reliable, comfortable and affordable taxi services designed for every travel need.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.id}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition">
                  <Icon size={32} className="text-yellow-400" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* PRICE BLOCK */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400">Starting at</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {service.price}
                  </p>
                  <p className="text-xs text-gray-500">{service.duration}</p>
                </div>

                {/* FEATURES */}
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <span className="text-yellow-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
