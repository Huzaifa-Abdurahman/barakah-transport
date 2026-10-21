import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, absoluteUrl } from "@/config/site";
import { organizationSchema } from "@/lib/schema";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Barakah Transport Service | Premium Umrah & Hajj Taxi Saudi Arabia",
    template: "%s | Barakah Transport Service"
  },
  description: "Premium Umrah & Hajj taxi between Makkah, Madinah, Jeddah Airport and the holy Ziyarat sites. 24/7 service with a private, air-conditioned fleet.",
  keywords: ["Premium Umrah taxi", "Hajj transport", "Makkah Madina taxi", "Saudi Arabia Premium cab", "Jeddah airport transfer", "Ziyarat tours", "Barakah Transport Service", "premium taxi Makkah"],
  authors: [{ name: "Barakah Transport Service" }],
  publisher: "Barakah Transport Service",
  // No canonical here. Each page sets its own, so no page inherits the homepage's.
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
    url: SITE_URL,
    title: "Barakah Transport Service | Premium Umrah Taxi",
    description: "Premium Umrah & Hajj taxi serving Makkah, Madinah and Jeddah Airport, 24/7.",
    siteName: "Barakah Transport Service",
    images: [
      {
        url: absoluteUrl("/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Barakah Transport Service premium fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barakah Transport Service | Premium Umrah Taxi",
    description: "Premium private transport across Saudi Arabia's holy cities, 24/7.",
    images: [absoluteUrl("/og-default.jpg")],
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
        <JsonLd data={organizationSchema()} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
