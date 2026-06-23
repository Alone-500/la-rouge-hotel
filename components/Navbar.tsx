"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-rouge-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-rouge-gold leading-none">
            La Rouge
          </span>
          <span className="text-[10px] text-rouge-cream/60 tracking-[0.3em] uppercase">
            Hotel
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-rouge-cream hover:text-rouge-gold transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="px-6 py-2 bg-rouge-red text-white text-sm uppercase tracking-wider hover:bg-rouge-gold transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-rouge-gold"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-rouge-gold/20 px-4 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-rouge-cream hover:text-rouge-gold transition-colors uppercase tracking-wider py-2 border-b border-rouge-gold/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-6 py-3 bg-rouge-red text-white text-center uppercase tracking-wider hover:bg-rouge-gold transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
