import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Our Vehicles | Barakah Transport Service",
  description:
    "Browse our comprehensive premium fleet of 9 vehicles. All air-conditioned, sanitized, and fully serviced for your **Blessed Journey**.",
};

const allVehicles = [
  { name: "STARIA", image: "/hero/staria.png", seats: "8-9", luggage: 7 },
  { name: "STAREX", image: "/hero/starex.png", seats: 11, luggage: 9 },
  { name: "HYUNDAI H1", image: "/hero/h1.png", seats: 11, luggage: 8 },
  { name: "GMC YUKON XL", image: "/hero/gmc.png", seats: 7, luggage: 7 },
  { name: "TOYOTA CAMRY", image: "/hero/camry.png", seats: 4, luggage: 3 },
  { name: "HYUNDAI SONATA", image: "/hero/sonata.png", seats: 4, luggage: 3 },
  { name: "TOYOTA HIACE", image: "/hero/hiace.png", seats: 12, luggage: 12 },
  { name: "MERCEDES SEDAN", image: "/hero/mercedez-car.png", seats: 4, luggage: 3 },
  { name: "MERCEDES V-CLASS", image: "/hero/mercedez.png", seats: 7, luggage: 7 },
];

export default function FleetPage() {
  const contactInfo = {
    rawPhone: "966539886719"
  };

  return (
      <main className="bg-slate-50 pt-28 md:pt-40">
        
        {/* Header Section */}
        <section className="px-4 py-8 max-w-7xl mx-auto text-center">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.4em] font-black text-xs border border-[var(--yellow-main)]/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 inline-block">Our Full Fleet</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mt-6 mb-4">
            Available Umrah Vehicles
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Explore our vast selection of premium, sanitized vehicles perfectly sized for individuals, families, and larger groups making their **Blessed Journey**.
          </p>
        </section>

        {/* Vehicles Grid */}
        <section className="py-12 pb-24 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allVehicles.map((car, idx) => (
                <div
                  key={idx}
                  className="flex flex-col h-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:border-[var(--yellow-main)] transition-all duration-300"
                >
                  {/* Image Block */}
                  <div className="bg-white flex items-center justify-center p-6 h-48 sm:h-56 relative shrink-0">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Content Block */}
                  <div className="p-6 flex flex-col items-center flex-grow bg-white">
                    <h3 className="font-bold text-lg md:text-xl text-black uppercase text-center mb-4">
                      {car.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-4 text-slate-800 font-bold text-sm mb-6 w-full px-2">
                       <div className="flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                          {car.seats} Seats
                       </div>
                       <div className="flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="19" r="2"/><circle cx="15" cy="19" r="2"/><path d="M5 11h14v6H5z"/><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/></svg>
                          {car.luggage} Luggage
                       </div>
                    </div>
                    
                    <div className="mt-auto w-full">
                      <a 
                        href={`https://wa.me/${contactInfo.rawPhone}`} 
                        className="w-full flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black font-black text-lg px-6 py-4 rounded-xl shadow-md hover:bg-yellow-500 transition-colors"
                      >
                        Book Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" opacity="0"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 10.5l-4 4-1.41-1.41L14.67 11H6v-2h8.67l-3.59-4.09L12.5 3.5l4 4 4 4z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingForm />
      </main>
  );
}
