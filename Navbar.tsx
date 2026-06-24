'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="container-lr flex items-center justify-between h-[74px]">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-[22px] md:text-[26px] text-gold tracking-wide">La Rouge</span>
          <span className="text-[9px] tracking-[0.38em] text-cream/70 uppercase -mt-1">Hotel</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-[13px] tracking-widest uppercase text-cream/85 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="ml-2 bg-rouge hover:bg-rouge-dark text-cream px-5 py-2.5 text-[12px] tracking-widest uppercase rounded-sm border border-gold/30 transition-all">
            Book Now
          </Link>
        </nav>

        <button 
          className="lg:hidden text-cream"
          onClick={()=>setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </div>

      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden glass-nav border-t border-gold/10"
        >
          <div className="container-lr py-6 flex flex-col gap-5">
            {links.map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-sm tracking-widest uppercase text-cream/90 hover:text-gold">
                {l.label}
              </Link>
            ))}
            <Link href="/booking" onClick={()=>setOpen(false)} className="btn-rouge text-center mt-2">Book Now</Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}
