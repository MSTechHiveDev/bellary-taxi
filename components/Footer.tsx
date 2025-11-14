import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Best Bellary Taxi Logo"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-semibold text-white">
              Best Bellary Taxi
            </h2>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Reliable and affordable taxi services across Bellary & nearby cities.
            Available 24/7 for local and outstation rides.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-yellow-400">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="flex flex-col gap-2 text-sm">
            <li>Local Taxi</li>
            <li>Outstation Rides</li>
            <li>Airport Pickup & Drop</li>
            <li>Corporate Travel</li>
            <li>Tempo Traveller</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="text-sm">📍 Bellary, Karnataka</p>

          <p className="text-sm mt-2">
            📞{" "}
            <a href="tel:+919999999999" className="hover:text-yellow-400">
              +91 99999 99999
            </a>
          </p>

          <p className="text-sm mt-2">
            📧{" "}
            <a href="mailto:info@bestbellarytaxis.com" className="hover:text-yellow-400">
              info@bestbellarytaxis.com
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Best Bellary Taxi Cabs. All rights reserved.
      </div>
    </footer>
  );
}
