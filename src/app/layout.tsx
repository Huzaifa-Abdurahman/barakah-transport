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
  metadataBase: new URL("https://barakahtransportservice.com"),
  title: {
    default: "Barakah Transport Service | Premium Umrah & Hajj Taxi Saudi Arabia",
    template: "%s | Barakah Transport Service"
  },
  description: "Saudi Arabia's premier Premium Umrah & Hajj taxi company. Exceptional 5.0 rated transportation between Makkah, Madinah, Jeddah Airport, and all major holy Ziyarats.",
  keywords: ["Premium Umrah taxi", "Hajj transport", "Makkah Madina taxi", "Saudi Arabia Premium cab", "Jeddah airport transfer", "Ziyarat tours", "Barakah Transport Service", "premium taxi Makkah"],
  authors: [{ name: "Barakah Transport Service" }],
  creator: "Abdullah Khan",
  publisher: "Barakah Transport Service",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barakahtransportservice.com",
    title: "Barakah Transport Service | Premium Transport",
    description: "Premium Umrah & Hajj Taxi serving Makkah, Madinah, and Jeddah. Over 2,500+ happy passengers served flawlessly.",
    siteName: "Barakah Transport Service",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Barakah Transport Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barakah Transport Service | Premium Umrah Taxi",
    description: "Experience 5-star Premium transportation across Saudi Arabia's Holiest Cities.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
