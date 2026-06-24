import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "sonner";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Rouge Hotel — 5-Star Luxury Experience",
  description: "Experience unparalleled luxury at La Rouge Hotel. Premium suites, world-class dining, and exceptional service in an elegant dark-rouge atmosphere.",
  keywords: "luxury hotel, 5 star hotel, presidential suite, vip suite, la rouge",
  openGraph: {
    title: "La Rouge Hotel",
    description: "5-Star Luxury Experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
