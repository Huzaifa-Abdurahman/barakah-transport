import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barakah Transport Service | VIP Umrah & Hajj Taxi Saudi Arabia",
  description:
    "Saudi Arabia's premier VIP Umrah & Hajj taxi company. Comfortable transportation between Makkah, Madina, Jeddah Airport, and all major holy sites. Book your ride today.",
  keywords: "Umrah taxi, Hajj transport, Makkah Madina taxi, Saudi Arabia VIP cab, airport transfer Saudi",
  openGraph: {
    title: "Barakah Transport Service",
    description: "VIP Umrah & Hajj Taxi — Makkah · Madina · Jeddah · Airports",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
