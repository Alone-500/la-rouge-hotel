'use client'
import Link from 'next/link'
import { Users } from 'lucide-react'
import { RoomType } from '@/lib/supabase'

export default function RoomCard({ room }: { room: RoomType }) {
  return (
    <div className="bg-darkcard rounded-[4px] overflow-hidden border border-gold/10 hover:border-gold/30 transition-all group">
      <div className="relative h-[260px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={room.image_url || ''} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-4 right-4 bg-darkbg/80 backdrop-blur px-3 py-1.5 rounded-sm border border-gold/25">
          <span className="text-gold text-sm font-medium">${room.base_price}</span>
          <span className="text-cream/60 text-[11px]"> /night</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-[22px] text-cream mb-2">{room.name}</h3>
        <p className="text-cream/70 text-sm leading-relaxed mb-4 min-h-[44px]">{room.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-cream/70 text-xs">
            <Users size={14} className="text-gold/80" />
            <span>Up to {room.max_guests} guests</span>
          </div>
          <Link href={`/rooms/${room.slug}`} className="text-gold text-[12px] tracking-wider uppercase hover:text-gold-light">
            View →
          </Link>
        </div>
      </div>
    </div>
  )
}
