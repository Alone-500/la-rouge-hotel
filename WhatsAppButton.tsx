'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '233302758820'
  const message = encodeURIComponent('Hello La Rouge Hotel, I would like to make an enquiry.')
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
      aria-label="WhatsApp"
      style={{ animation: 'pulse-slow 2.5s infinite' }}
    >
      <MessageCircle size={26} fill="white" />
    </a>
  )
}
