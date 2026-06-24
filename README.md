# La Rouge Hotel — Customer Website

5-star luxury hotel — Next.js 14 + Supabase + Tailwind + Framer Motion

Live: https://la-rouge-hotel.vercel.app
Supabase: https://vlerxqwbmzlgcdchjnfz.supabase.co

## Stack
- Next.js 14 App Router, TypeScript
- Tailwind CSS — dark rouge / gold theme
- Framer Motion
- Supabase (DB + Auth + Realtime)
- Vercel deploy

## Pages
- / — cinematic hero, featured rooms
- /rooms — all 4 room types from DB
- /rooms/[slug] — gallery, virtual tour, specs, book CTA
- /booking → /booking/details → /booking/confirmation — 4-step, auto-confirmed, pay at hotel
- /facilities — overview
- /facilities/bar — showcase, WhatsApp enquiries
- /facilities/events — full event enquiry form → Supabase event_enquiries
- /gallery — masonry + lightbox
- /about
- /contact — form → contact_messages + Google Maps
- /reviews — Google-style reviews + moderated site_comments

## Quick start
```bash
npm install
npm run dev
# http://localhost:3000
```

Copy `.env.local.example` → `.env.local` (credentials already wired in lib/supabase.ts as fallback for phone-only GitHub editing).

## Database
Tables already created in Supabase with RLS:
- room_types (4 seeded: Standard $150, Family $250, VIP $450, Presidential $850)
- bookings
- event_enquiries
- site_comments
- contact_messages

Realtime enabled on all.
