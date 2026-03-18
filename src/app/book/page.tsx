import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Ride | Barakah Transport Service",
  description:
    "Book a VIP Umrah or Hajj taxi in Saudi Arabia. Airport transfers, intercity travel, hotel pickups, and Ziyarat tours across Makkah, Madina, and Jeddah.",
};

export default function BookPage() {
  return (
      <main>
        {/* Hero */}
        <section
          className="relative pt-36 pb-12 px-4 overflow-hidden"
          style={{ background: "var(--bg-primary)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)" }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--yellow-main)] block mb-3">Reserve Your Journey</span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Book Your <span className="gold-text">Ride</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Fill in the form below and we&apos;ll confirm your booking within minutes via WhatsApp.
            </p>
          </div>
        </section>

        <BookingForm />
      </main>
  );
}
