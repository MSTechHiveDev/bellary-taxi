"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Best Bellary Taxi Cabs Logo"
            width={40}
            height={40}
          />
          <span className="text-lg md:text-xl font-bold tracking-wide">
            Best Bellary Taxi
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>

          <a
            href="tel:+919999999999"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Call Now
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden" onClick={toggleMenu}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-lg">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/pricing" onClick={toggleMenu}>Pricing</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>

            <a
              href="tel:+919999999999"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center mt-2"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
