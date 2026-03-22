import type { Metadata } from "next";
import { CarFront, PlaneTakeoff, Map, Briefcase, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Premium Services | Barakah Transport Service",
  description: "Excellence in Saudi Arabia. From Premium Umrah Taxi services and detailed Ziyarat guidance to professional transport and vehicle consulting for Hajj groups.",
};

const servicesData = [
  {
    icon: <CarFront size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "Premium Taxi Services (Saudi Arabia)",
    description: "Experience the gold standard in private transportation. Whether you are traveling for Umrah, Hajj, or high-end business across Jeddah, Makkah, and Madinah, our late-model luxury cars ensure you arrive completely relaxed.",
  },
  {
    icon: <Briefcase size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "Expert Vehicle Consulting",
    description: "Navigating fleet logistics for a massive family or tour group? We provide professional transportation consulting. We'll expertly calculate luggage capacities, advise on Saudi transport regulations, and architect the perfect multi-vehicle arrangement for your group size.",
  },
  {
    icon: <PlaneTakeoff size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "Airport Express Transfers",
    description: "Total peace of mind the moment you land. Our chauffeurs will meet you directly at King Abdulaziz Airport (JED) or Prince Mohammad Airport (MED) and whisk you away directly to your holy accommodation avoiding any airport hustle.",
  },
  {
    icon: <Map size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "Guided Ziyarat Expeditions",
    description: "Connect deeply with Islamic history. We provide private, tailored transportation to monumental sites surrounding the Holy Cities, allowing you to explore these iconic landmarks peacefully without feeling rushed by a loud bus tour.",
  },
  {
    icon: <ShieldCheck size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "Secure & Certified Chauffeurs",
    description: "Safety is uncompromising. Every single Barakah Transport chauffeur holds rigorous certification from the Saudi Arabian Government. We boast a 0% accident ratio and profound courtesy for all pilgrims.",
  },
  {
    icon: <Clock size={44} className="text-[var(--yellow-main)] drop-shadow-sm" />,
    title: "24/7 Operations & Dispatch",
    description: "Travel delays? Midnight flight changes? Our dedicated back-office operation runs 24 hours a day, 7 days a week handling reservations, real-time vehicle dispatching, and live tracking to ensure unmatched reliability.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      
      {/* Immersive Header */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden shadow-md">
         <div className="absolute inset-0 z-0">
           <img 
             src="/i2.JPG" 
             alt="Barakah Transport Premium Taxi Services" 
             className="w-full h-full object-cover object-center scale-105" 
           />
           <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]"></div>
         </div>
         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-8">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--yellow-main)]/20 border border-[var(--yellow-main)]/30 text-[var(--yellow-main)] font-black text-xs uppercase tracking-[0.3em] mb-6 shadow-lg backdrop-blur-md">
               Premium Operations
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-[1.1] drop-shadow-2xl">
               Our <span className="text-[var(--yellow-main)]">Services</span>
            </h1>
            <p className="text-slate-300 font-medium text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
               More than just a ride. Premium Taxi operations and advanced fleet consulting natively distributed across the Kingdom of Saudi Arabia.
            </p>
         </div>
      </section>

      {/* Corporate Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 pb-16">
         <div className="text-center mb-16">
           <span className="text-slate-500 font-black text-xs uppercase tracking-[0.3em] mb-3 block">Saudi Arabia's Finest</span>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">What We <span className="text-[var(--yellow-main)]">Offer</span></h2>
           <div className="w-20 h-1.5 bg-[var(--yellow-main)] mx-auto mt-6 rounded-full shadow-sm"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
           {servicesData.map((s, idx) => (
             <div key={idx} className="bg-white rounded-[2rem] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-[var(--yellow-main)]/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-300 group flex flex-col items-start cursor-default">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--yellow-main)]/10 transition-transform duration-500 shadow-sm">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[var(--yellow-main)] transition-colors">{s.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed flex-1 text-[15px]">{s.description}</p>
             </div>
           ))}
         </div>
      </section>

      {/* Deep Dive Consulting Showcase */}
      <section className="bg-slate-900 w-full py-24 border-t-8 border-[var(--yellow-main)]">
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group bg-black">
               <div className="absolute inset-0 bg-[var(--yellow-main)]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
               <img src="/i3.jpg" alt="Fleet Transport Consulting" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 opacity-90" />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
               <span className="text-[var(--yellow-main)] font-black text-xs uppercase tracking-[0.3em] bg-[var(--yellow-main)]/10 px-5 py-2 rounded-full border border-[var(--yellow-main)]/20">Fleet Strategy</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-md">Advanced <br/><span className="text-[var(--yellow-main)]">Consulting</span> Solutions</h2>
               <p className="text-slate-400 font-medium leading-relaxed text-lg mb-2">
                 Coordinating travel for a 40-person family or a multinational business delegation isn't simply about booking cars. It requires deep logistical orchestration.
               </p>
               <p className="text-slate-400 font-medium leading-relaxed text-lg mb-6">
                 Barakah Transport offers bespoke consultation to guide you through Saudi Arabian traffic zones, Haramain logistical limitations, optimal baggage routing, and multi-fleet premium coordination. Bring us your itinerary, and we will architect the perfect transportation network for you.
               </p>
               <Link href="/contact#booking" className="inline-flex items-center gap-3 bg-[var(--yellow-main)] text-black px-10 py-5 rounded-xl font-black uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_20px_40px_rgba(212,175,55,0.6)] transition-all group">
                 Consult With Us Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </section>

      {/* Global Booking Form Integration */}
      <BookingForm />

    </main>
  );
}
