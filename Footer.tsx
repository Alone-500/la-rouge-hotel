import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#110606] border-t border-gold/15 mt-16">
      <div className="container-lr section-pad">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="font-serif text-2xl text-gold">La Rouge</div>
            <div className="text-[10px] tracking-[0.35em] text-cream/60 uppercase -mt-0.5 mb-4">Hotel</div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Where timeless elegance meets modern luxury. An unforgettable 5-star experience.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-[11px] tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-cream/75">
              <li><Link href="/rooms" className="hover:text-gold">Rooms & Suites</Link></li>
              <li><Link href="/facilities" className="hover:text-gold">Facilities</Link></li>
              <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-gold">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[11px] tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0"/> <span>18 Rouge Avenue,<br/>Accra, Ghana</span></li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-gold"/> +233 30 275 8820</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-gold"/> hello@larougehotel.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[11px] tracking-widest uppercase mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-cream/70 hover:text-gold transition"><Facebook size={20}/></a>
              <a href="#" className="text-cream/70 hover:text-gold transition"><Instagram size={20}/></a>
              <a href="#" className="text-cream/70 hover:text-gold transition"><Twitter size={20}/></a>
            </div>
            <p className="text-xs text-cream/50 mt-6 leading-relaxed">
              5-Star Luxury • Concierge 24/7<br/>Valet & Airport Transfer
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="container-lr py-5 text-center text-xs text-cream/50 tracking-wide">
          © {new Date().getFullYear()} La Rouge Hotel. All rights reserved. Crafted with elegance.
        </div>
      </div>
    </footer>
  )
}
