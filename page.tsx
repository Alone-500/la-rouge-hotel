'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase, RoomType } from '@/lib/supabase'
import RoomCard from '@/components/RoomCard'
import { Users, Maximize, BedDouble, Building2, Check } from 'lucide-react'

const amenities = [
  'King-size luxury bedding',
  '48" Smart TV',
  'High-speed WiFi',
  'Mini bar',
  'Espresso machine',
  'Marble bathroom',
  '24h room service',
  'Daily housekeeping'
]

export default function RoomDetail(){
  const { slug } = useParams() as {slug:string}
  const [room,setRoom]=useState<RoomType|null>(null)
  const [others,setOthers]=useState<RoomType[]>([])

  useEffect(()=>{
    if(!slug) return
    supabase.from('room_types').select('*').eq('slug', slug).single().then(({data})=>setRoom(data))
    supabase.from('room_types').select('*').neq('slug', slug).limit(3).then(({data})=>setOthers(data||[]))
  },[slug])

  if(!room) return <div className="pt-[160px] pb-40 container-lr text-cream/60">Loading…</div>

  const gallery = [
    room.image_url,
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900',
  ].filter(Boolean)

  return (
    <>
      <div className="pt-[74px]" />
      <section className="container-lr py-10">
        <p className="text-gold text-[10px] tracking-widest uppercase mb-2">Suite Details</p>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="font-serif text-[34px] md:text-[46px] text-cream">{room.name}</h1>
          <div className="text-right">
            <div className="text-gold text-[28px] font-serif">${room.base_price}<span className="text-[13px] text-cream/60"> / night</span></div>
          </div>
        </div>
      </section>

      <section className="container-lr pb-10">
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2 h-[420px] rounded-sm overflow-hidden">
            <img src={gallery[0]||''} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-3 gap-3 h-[420px]">
            {gallery.slice(1,4).map((g,i)=>(
              <img key={i} src={g!} alt="" className="w-full h-full object-cover rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      <section className="container-lr pb-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-serif text-[26px] text-cream mb-3">About this suite</h2>
            <p className="text-cream/78 leading-relaxed">{room.description}</p>
            <p className="text-cream/70 leading-relaxed mt-4">
              Immerse yourself in La Rouge’s signature dark-luxe aesthetic. Hand-selected furnishings, gold-accent detailing,
              blackout drapes, and a rain shower with Diptyque amenities. A true 5-star sanctuary designed for discerning travellers.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-[22px] text-cream mb-4">Amenities</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {amenities.map(a=>(
                <div key={a} className="flex items-center gap-2 text-cream/80 text-sm">
                  <Check size={15} className="text-gold" /> {a}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[22px] text-cream mb-4">Virtual Tour</h3>
            <div className="rounded-sm overflow-hidden border border-gold/15 bg-darkcard">
              <div className="aspect-video bg-[#1b0d0d] flex items-center justify-center text-cream/50 text-sm">
                Virtual 360° tour — 4K walk-through available at check-in
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-darkcard border border-gold/15 rounded-sm p-6 sticky top-[96px]">
            <div className="text-[11px] tracking-widest uppercase text-gold mb-3">Room Specifications</div>
            <div className="space-y-3 text-sm text-cream/85">
              <div className="flex justify-between"><span className="flex items-center gap-2"><Users size={15} className="text-gold/80"/>Guests</span><span>Up to {room.max_guests}</span></div>
              <div className="flex justify-between"><span className="flex items-center gap-2"><Maximize size={15} className="text-gold/80"/>Size</span><span>{room.slug==='presidential'?'110 m²':room.slug==='vip'?'68 m²':room.slug==='family'?'52 m²':'38 m²'}</span></div>
              <div className="flex justify-between"><span className="flex items-center gap-2"><BedDouble size={15} className="text-gold/80"/>Bed</span><span>King</span></div>
              <div className="flex justify-between"><span className="flex items-center gap-2"><Building2 size={15} className="text-gold/80"/>Floor</span><span>Premium</span></div>
            </div>
            <div className="gold-divider my-5" />
            <Link href={`/booking?room=${room.slug}`} className="btn-rouge block text-center w-full">Book This Room</Link>
            <p className="text-center text-[11px] text-cream/55 mt-3">Instant confirmation • Pay at hotel</p>
          </div>
        </aside>
      </section>

      {others.length>0 && (
        <section className="section-pad bg-[#150707] border-t border-gold/10">
          <div className="container-lr">
            <h3 className="font-serif text-[26px] text-cream mb-8">You may also like</h3>
            <div className="grid md:grid-cols-3 gap-7">
              {others.map(o=> <RoomCard key={o.id} room={o} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
