import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "La Rouge Hotel | Premium Luxury Experience",
  description: "Experience unparalleled luxury at La Rouge Hotel. Premium rooms, fine dining, and elegant event spaces.",
  keywords: "La Rouge Hotel, luxury hotel, premium accommodation, hotel booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-rouge-black text-rouge-cream">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
