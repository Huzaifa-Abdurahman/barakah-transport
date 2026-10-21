import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import UnderHero from "@/components/sections/UnderHero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Mission from "@/components/sections/Mission";
import Testimonials from "@/components/sections/Testimonials";
import RouteLinks from "@/components/seo/RouteLinks";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Umrah Taxi in Makkah & Madinah | Barakah Transport Service" },
  description:
    "Premium Umrah taxi in Makkah, Madinah and Jeddah. Airport transfers, intercity rides and ziyarat tours in private, air-conditioned vehicles, 24/7. Message us on WhatsApp.",
  alternates: { canonical: absoluteUrl("/") },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <UnderHero />
      <WhyUs />
      <Services />
      <RouteLinks />
      <Mission />
      <Testimonials />
    </main>
  );
}
