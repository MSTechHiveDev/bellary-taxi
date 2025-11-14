"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  const heroBg = "/images/hero-bg.png";
  const heroCar = "/images/car-side.png";
  const gallery = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
  ];

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center"
      aria-label="Hero - Best Bellary Taxi"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.48), rgba(0,0,0,0.5)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-6/12 text-white">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 bg-yellow-400/95 text-black px-3 py-1 rounded-full mb-4 text-sm font-medium shadow">
              <span className="font-bold">★</span>
              <span>Trusted in Bellary • 24/7 Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Ride Safe. Ride Comfortable.
              <span className="block text-yellow-400 mt-2">Best Bellary Taxi Cabs</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-200/90">
              Reliable airport transfers, outstation trips, and group travel — transparent rates,
              professional drivers, and prompt pickups.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-500 transition"
              >
                Book a Ride
              </Link>

              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition"
              >
                Call Now
              </a>
            </div>

            <ul className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-300">
              <li>✔️ Clean & Sanitized</li>
              <li>✔️ Trained Drivers</li>
              <li>✔️ Transparent Pricing</li>
            </ul>
          </div>
        </div>

        {/* RIGHT VISUAL — HIDE ON SMALL SCREENS */}
        <div className="w-full lg:w-6/12 relative hidden md:flex justify-center lg:justify-end">
          
          {/* CAR IMAGE - hidden on small screens */}
          <div className="relative w-[280px] h-[180px] sm:w-[340px] sm:h-[220px] lg:w-[420px] lg:h-[300px]">
            <img
              src={heroCar}
              alt="Taxi car"
              className="absolute -bottom-6 right-0 w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-700 hover:translate-y-[-6px]"
            />
          </div>

          {/* GALLERY IMAGES - hidden on mobile & small tablets */}
          <div className="hidden lg:grid absolute left-4 top-6 gap-3">
            {gallery.map((g, i) => (
              <div
                key={i}
                className="w-28 h-20 rounded-lg overflow-hidden border border-white/10 bg-black/30 transform hover:scale-105 transition"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <img src={g} alt={`gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
