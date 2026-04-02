"use client";

import { motion } from "framer-motion";

const serviceCars = [
  { name: "STARIA", image: "/hero/staria.png", seats: "8-9", luggage: 7 },
  { name: "STAREX", image: "/hero/starex.png", seats: 11, luggage: 9 },
  { name: "HYUNDAI H1", image: "/hero/h1.png", seats: 11, luggage: 8 },
  { name: "GMC YUKON XL", image: "/hero/gmc.png", seats: 7, luggage: 7 },
];

export default function Services() {
  const contactInfo = {
    rawPhone: "966539886719"
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="booking-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            We provide complete private Umrah taxi for groups, couples and families. Book now!
          </h2>
          <div className="w-20 h-1 bg-[var(--yellow-main)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCars.map((car, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
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
                    className="w-full flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black font-black text-lg px-8 py-5 rounded-2xl shadow-md hover:bg-yellow-500 transition-colors"
                  >
                    Book Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" opacity="0"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 10.5l-4 4-1.41-1.41L14.67 11H6v-2h8.67l-3.59-4.09L12.5 3.5l4 4 4 4z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
