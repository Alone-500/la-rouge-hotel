import Image from "next/image";
import Link from "next/link";
import { supabase, RoomType } from "@/lib/supabase";
import { Star, MapPin, Wifi, Coffee, Utensils, Car } from "lucide-react";

export const revalidate = 60;

async function getRooms(): Promise<RoomType[]> {
  const { data, error } = await supabase
    .from("room_types")
    .select("*")
    .eq("is_active", true)
    .order("base_price", { ascending: true });

  if (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
  return data || [];
}

export default async function Home() {
  const rooms = await getRooms();

  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[90vh] -mt-20 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1920&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-rouge-black" />

        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <p className="text-rouge-gold text-sm uppercase tracking-[0.4em] mb-6">
            ★ ★ ★ ★ ★ Five Star Experience
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight text-shadow-gold">
            La Rouge <span className="text-rouge-gold italic">Hotel</span>
          </h1>
          <p className="text-lg md:text-xl text-rouge-cream/90 mb-10 max-w-2xl mx-auto font-light">
            Where timeless elegance meets contemporary luxury.
            Your unforgettable escape begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-10 py-4 bg-rouge-red text-white uppercase tracking-wider hover:bg-rouge-gold transition-all shadow-2xl border border-rouge-gold/30"
            >
              Book Your Stay
            </Link>
            <Link
              href="/rooms"
              className="px-10 py-4 border border-rouge-gold/50 text-rouge-gold uppercase tracking-wider hover:bg-rouge-gold hover:text-rouge-black transition-all"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-rouge-gold/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-rouge-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rouge-gold uppercase tracking-[0.3em] text-xs mb-4">Welcome</p>
          <h2 className="font-serif text-4xl md:text-5xl text-rouge-cream mb-8">
            A Sanctuary of <span className="italic text-rouge-gold">Luxury</span>
          </h2>
          <div className="w-24 h-px bg-rouge-gold mx-auto mb-8" />
          <p className="text-rouge-cream/70 leading-relaxed text-lg">
            Nestled in the heart of elegance, La Rouge Hotel offers an extraordinary blend of
            sophisticated comfort and impeccable service. From our beautifully appointed rooms
            to our world-class dining and event spaces, every detail is crafted to create
            memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* ===== FEATURED ROOMS ===== */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rouge-gold uppercase tracking-[0.3em] text-xs mb-4">Accommodation</p>
            <h2 className="font-serif text-4xl md:text-5xl text-rouge-cream mb-6">
              Our <span className="italic text-rouge-gold">Rooms & Suites</span>
            </h2>
            <div className="w-24 h-px bg-rouge-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.length === 0 ? (
              <p className="text-center text-rouge-cream/60 col-span-4">
                Loading rooms... If this persists, check your Supabase connection.
              </p>
            ) : (
              rooms.map((room) => (
                <div
                  key={room.id}
                  className="group relative overflow-hidden bg-rouge-black border border-rouge-gold/20 hover:border-rouge-gold/60 transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image_url || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-rouge-gold text-rouge-black text-xs uppercase tracking-wider">
                      ${room.base_price}/night
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-rouge-cream mb-2">{room.name}</h3>
                    <p className="text-sm text-rouge-cream/60 mb-4 line-clamp-2">
                      {room.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-rouge-gold/80 mb-4">
                      <span>Max {room.max_guests} guests</span>
                    </div>
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="block text-center w-full py-3 border border-rouge-gold/30 text-rouge-gold uppercase tracking-wider text-sm hover:bg-rouge-gold hover:text-rouge-black transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rouge-gold uppercase tracking-[0.3em] text-xs mb-4">Experience</p>
            <h2 className="font-serif text-4xl md:text-5xl text-rouge-cream mb-6">
              World-Class <span className="italic text-rouge-gold">Amenities</span>
            </h2>
            <div className="w-24 h-px bg-rouge-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: "Fine Dining", desc: "Award-winning cuisine" },
              { icon: Coffee, title: "Lounge Bar", desc: "Premium cocktails" },
              { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet" },
              { icon: Car, title: "Valet Parking", desc: "24/7 service" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 border border-rouge-gold/20 hover:border-rouge-gold/60 hover:bg-rouge-gold/5 transition-all"
              >
                <item.icon className="w-10 h-10 text-rouge-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl text-rouge-cream mb-2">{item.title}</h3>
                <p className="text-sm text-rouge-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-4 bg-gradient-to-b from-rouge-dark/20 to-rouge-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-rouge-cream mb-6">
            Ready for an <span className="italic text-rouge-gold">Unforgettable</span> Experience?
          </h2>
          <p className="text-rouge-cream/70 mb-10 text-lg">
            Reserve your suite today and discover what makes La Rouge truly exceptional.
          </p>
          <Link
            href="/booking"
            className="inline-block px-12 py-5 bg-rouge-red text-white uppercase tracking-wider hover:bg-rouge-gold transition-all shadow-2xl border border-rouge-gold/30"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
}
