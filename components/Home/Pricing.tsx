"use client";

import React from "react";
import { pricing } from "@/lib/data/pricing";
import { Car, Bus, Truck, ArrowRight } from "lucide-react";

export default function Pricing() {
  const icons = [Car, Truck, Bus];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-3">
            Honest rates with no hidden charges — clear, simple and fair.
          </p>
        </div>

        {/* VEHICLE TYPES ========================== */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Vehicle Types
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pricing.vehicleTypes.map((vehicle, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                >
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6">
                    <Icon size={40} className="text-yellow-400" />
                  </div>

                  {/* TITLE */}
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {vehicle.name}
                  </h4>
                  <p className="text-gray-300 mb-2">{vehicle.description}</p>
                  <p className="text-sm text-gray-400 mb-6">
                    Capacity: {vehicle.capacity}
                  </p>

                  {/* RATES */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Local (per km)</span>
                      <span className="font-semibold text-white">{vehicle.rates.local}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Outstation (per km)</span>
                      <span className="font-semibold text-white">{vehicle.rates.outstation}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Airport</span>
                      <span className="font-semibold text-white">{vehicle.rates.airport}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Minimum Fare</span>
                      <span className="font-semibold text-white">{vehicle.rates.minFare}</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* SPECIAL PACKAGES ====================== */}
        <h3 className="text-2xl font-bold text-center mb-10">
          Special Packages
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.specialPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-yellow-400/10 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
              <p className="text-gray-300 mb-4">{pkg.description}</p>

              <div className="text-4xl font-extrabold text-yellow-400 mb-2">
                {pkg.price}
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Duration: {pkg.duration}
              </p>

              <ul className="space-y-3">
                {pkg.includes.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-sm text-gray-300"
                  >
                    <span className="text-yellow-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                Book Package <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
