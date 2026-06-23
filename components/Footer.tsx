import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-rouge-gold/20 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-rouge-gold mb-2">La Rouge</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-rouge-cream/60 mb-4">Hotel</p>
            <p className="text-sm text-rouge-cream/70">
              Where elegance meets unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-rouge-gold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rooms" className="text-rouge-cream/70 hover:text-rouge-gold">Rooms</Link></li>
              <li><Link href="/facilities" className="text-rouge-cream/70 hover:text-rouge-gold">Facilities</Link></li>
              <li><Link href="/gallery" className="text-rouge-cream/70 hover:text-rouge-gold">Gallery</Link></li>
              <li><Link href="/about" className="text-rouge-cream/70 hover:text-rouge-gold">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-rouge-gold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-rouge-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-rouge-gold mt-0.5" />
                <span>Your Address Here</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-rouge-gold" />
                <span>+234 000 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-rouge-gold" />
                <span>info@larougehotel.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-rouge-gold uppercase tracking-wider text-sm mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-rouge-gold/30 flex items-center justify-center hover:border-rouge-gold hover:bg-rouge-gold/10 transition-all">
                <Facebook size={18} className="text-rouge-gold" />
              </a>
              <a href="#" className="w-10 h-10 border border-rouge-gold/30 flex items-center justify-center hover:border-rouge-gold hover:bg-rouge-gold/10 transition-all">
                <Instagram size={18} className="text-rouge-gold" />
              </a>
              <a href="#" className="w-10 h-10 border border-rouge-gold/30 flex items-center justify-center hover:border-rouge-gold hover:bg-rouge-gold/10 transition-all">
                <Twitter size={18} className="text-rouge-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-rouge-gold/20 text-center text-xs text-rouge-cream/50">
          © {new Date().getFullYear()} La Rouge Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
