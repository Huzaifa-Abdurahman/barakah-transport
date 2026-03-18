import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Services from "@/components/sections/Services";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Our Services | Barakah Transport Service",
  description:
    "Explore all our routes — Makkah transfers, Madina Airport, Jeddah Airport, Makkah to Madina intercity, hotel pickups, and Ziyarat guided tours.",
};

const routes = [
  {
    from: "Jeddah Airport",
    to: "Makkah",
    duration: "~1 hr",
    desc: "Smooth, comfortable transfer from King Abdulaziz International Airport directly to your Makkah hotel.",
  },
  {
    from: "Madina Airport",
    to: "Madina City / Hotel",
    duration: "~30 min",
    desc: "Reliable arrival and departure transfers at Prince Mohammed bin Abdulaziz Airport.",
  },
  {
    from: "Makkah",
    to: "Madina",
    duration: "~4.5 hrs",
    desc: "Intercity VIP travel between the two holiest cities. Rest easy in our premium vehicles.",
  },
  {
    from: "Hotel",
    to: "Haram Gate",
    duration: "Varies",
    desc: "Frequent, on-demand transfers between your hotel and the Grand Mosque area throughout your stay.",
  },
  {
    from: "Makkah / Madina",
    to: "Ziyarat Sites",
    duration: "Half/Full Day",
    desc: "Guided historical tours to Uhud, Masjid Quba, Jannat al-Baqi, and Jabal Thawr with knowledgeable drivers.",
  },
  {
    from: "Any Location",
    to: "Any Airport",
    duration: "Varies",
    desc: "Flexible departure transfers. We track your flight time and ensure you arrive with time to spare.",
  },
];

export default function ServicesPage() {
  return (
      <main>
        {/* Page Hero */}
        <section
          className="relative pt-36 pb-20 px-4 overflow-hidden flex flex-col items-center"
          style={{ background: "var(--bg-primary)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 60% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--yellow-main)] block mb-3">What We Offer</span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our <span className="gold-text">Services</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Every route, every transfer — handled with care and blessed intention.
            </p>
          </div>
        </section>

        {/* Routes Grid */}
        <section className="py-16 flex flex-col items-center" style={{ background: "var(--bg-section)" }}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {routes.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{
                    background: "var(--card-gradient)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <div
                    className="flex items-center gap-2 mb-1 text-sm font-semibold"
                    style={{ color: "var(--gold-400)", fontFamily: "var(--font-cinzel)" }}
                  >
                    {r.from}
                    <span style={{ color: "var(--gold-700)" }}>→</span>
                    {r.to}
                  </div>
                  <div
                    className="text-xs mb-4 px-2 py-0.5 rounded-full inline-block"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {r.duration}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <BookingForm />
      </main>
  );
}
