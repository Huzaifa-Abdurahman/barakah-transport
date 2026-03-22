"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, Check, ShieldCheck, Car } from "lucide-react";

export default function WhyUs() {
  const contactInfo = {
    phone: "+966 53 988 6719",
    rawPhone: "966539886719"
  };

    return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Profile Side - Clean, Standard DOM Layout */}
          <div className="w-full flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md lg:max-w-full rounded-[1.5rem] bg-[#0A0A0A] p-6 md:p-10 border border-white/10 shadow-lg flex flex-col items-center"
            >
               {/* Extremely Subtle Internal Glow */}
               <div className="absolute inset-0 bg-[var(--yellow-main)] opacity-[0.03] blur-2xl rounded-[1.5rem] pointer-events-none" />
               
               {/* Clean Image */}
               <img 
                 src="/i2.JPG" 
                 alt="Premium Transport" 
                 className="relative z-10 w-full h-[240px] md:h-[280px] object-cover rounded-2xl overflow-hidden shadow-md border border-white/5 mb-6 hover:scale-[1.02] transition-transform duration-500 bg-white" 
               />
               
               {/* Normal Flow Grid of Badges Instead of Absolute Position */}
               <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10 mt-auto">
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-[var(--yellow-main)]/10 flex flex-shrink-0 items-center justify-center text-[var(--yellow-main)]">
                       <Star size={20} fill="currentColor" />
                     </div>
                     <div className="text-left">
                        <div className="text-lg font-bold text-white leading-none mb-1">100%</div>
                        <div className="text-[11px] font-medium text-slate-400 leading-tight uppercase tracking-wider">Reliability Rate</div>
                     </div>
                  </div>
                  
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex flex-shrink-0 items-center justify-center text-white">
                       <Check size={20} className="stroke-[3px]" />
                     </div>
                     <div className="text-left">
                        <div className="text-sm font-bold text-white leading-tight">Govt. Approved</div>
                        <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">Saudi Arabia</div>
                     </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex flex-shrink-0 items-center justify-center text-emerald-400">
                       <ShieldCheck size={20} className="stroke-[2px]" />
                     </div>
                     <div className="text-left">
                        <div className="text-sm font-bold text-white leading-tight">Nusuk Approved</div>
                        <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">Official Platform</div>
                     </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-500/10 flex flex-shrink-0 items-center justify-center text-blue-400">
                       <Car size={20} className="stroke-[2px]" />
                     </div>
                     <div className="text-left">
                        <div className="text-sm font-bold text-white leading-tight">PTA Approved</div>
                        <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">Govt Certified Cars</div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Headers aligned cleanly left */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[3px] bg-[var(--yellow-main)] rounded"></div>
                <span className="text-[var(--yellow-main)] font-semibold text-sm tracking-widest uppercase">
                  The Gold Standard
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Premium Transfer Services Across <span className="text-[var(--yellow-main)] italic">Saudi Arabia</span>
              </h2>
            </div>

            {/* Standard aligned callout box */}
            <div className="bg-white/5 p-6 rounded-2xl flex items-start sm:items-center gap-4 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--yellow-main)] to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Star size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Global Premium Reputation</h3>
                <p className="text-slate-300 text-sm md:text-base">Makkah & Madinah's top-rated, most trusted premium transport service.</p>
              </div>
            </div>

            {/* Perfectly aligned grid list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fluent English Speakers",
                "24/7 Priority Dispatch",
                "Spotless Latest Models",
                "Premium Door-to-Door",
                "Personalized Ziyarats",
                "Complete Reliability",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--yellow-main)]/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-[var(--yellow-main)] stroke-[3px]" />
                  </div>
                  <span className="text-slate-300 font-medium text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Clean readable text block */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed border-l-4 border-[var(--yellow-main)] pl-4">
              Barakah Transport Service serves discerning pilgrims from the USA, UK, Pakistan, India, Indonesia, and beyond. We guarantee an impeccable, spiritually uplifting journey in ultimate comfort.
            </p>

            {/* Infinite Ribbons of Countries */}
            <div className="pt-6 relative w-full overflow-hidden">
               <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
               <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
               
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Trusted by Pilgrims From:</p>
               
               <div className="flex w-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex shrink-0 items-center gap-10 whitespace-nowrap min-w-full"
                  >
                     {[
                       { flag: "🇺🇸", name: "USA" },
                       { flag: "🇬🇧", name: "UK" },
                       { flag: "🇸🇦", name: "Saudi Arabia" },
                       { flag: "🇲🇾", name: "Malaysia" },
                       { flag: "🇮🇩", name: "Indonesia" },
                       { flag: "🇵🇰", name: "Pakistan" },
                       { flag: "🇮🇳", name: "India" },
                       { flag: "🇦🇪", name: "UAE" },
                       { flag: "🇨🇦", name: "Canada" },
                       { flag: "🇧🇩", name: "Bangladesh" },
                       { flag: "🇺🇸", name: "USA" },
                       { flag: "🇬🇧", name: "UK" },
                       { flag: "🇸🇦", name: "Saudi Arabia" },
                       { flag: "🇲🇾", name: "Malaysia" },
                       { flag: "🇮🇩", name: "Indonesia" },
                       { flag: "🇵🇰", name: "Pakistan" },
                       { flag: "🇮🇳", name: "India" },
                       { flag: "🇦🇪", name: "UAE" },
                       { flag: "🇨🇦", name: "Canada" },
                       { flag: "🇧🇩", name: "Bangladesh" },
                     ].map((country, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                           <span className="text-xl">{country.flag}</span>
                           <span className="font-bold text-sm text-slate-300">{country.name}</span>
                        </div>
                     ))}
                  </motion.div>
               </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
