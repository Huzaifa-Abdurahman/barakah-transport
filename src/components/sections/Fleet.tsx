"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Wifi, Wind, Briefcase, CheckCircle2, PhoneCall } from "lucide-react";

const fleet = [
  {
    id: "hiace",
    name: "HiAce 10 Seater",
    tag: "Group Choice",
    description: "Ideal for larger families or groups, our Toyota HiAce offers a spacious and comfortable journey with ample room for both passengers and luggage.",
    image: "https://images.unsplash.com/photo-1621213340533-85e683713063?q=80&w=2070&auto=format&fit=crop",
    features: [
      { icon: <Users size={18} />, label: "Seating Capacity", value: "10" },
      { icon: <Wifi size={18} />, label: "Free WiFi", value: "Yes" },
      { icon: <Briefcase size={18} />, label: "Luggage space", value: "06" },
      { icon: <Wind size={18} />, label: "Air-conditioned", value: "Yes" },
    ]
  },
  {
    id: "staria",
    name: "Staria 7 Seater",
    tag: "Luxury VIP",
    description: "Experience premium travel with our Hyundai Staria. Modern aesthetics combined with luxurious seating for a truly comfortable pilgrimage experience.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1964&auto=format&fit=crop",
    features: [
      { icon: <Users size={18} />, label: "Seating Capacity", value: "07" },
      { icon: <Wifi size={18} />, label: "Free WiFi", value: "Yes" },
      { icon: <Briefcase size={18} />, label: "Luggage space", value: "04" },
      { icon: <Wind size={18} />, label: "Air-conditioned", value: "Yes" },
    ]
  },
  {
    id: "camry",
    name: "Camry 4 Seater",
    tag: "Executive",
    description: "Perfect for small families or solo travelers, the Toyota Camry provides a smooth, quiet, and reliable ride between holy cities.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
    features: [
      { icon: <Users size={18} />, label: "Seating Capacity", value: "04" },
      { icon: <Wifi size={18} />, label: "Free WiFi", value: "Yes" },
      { icon: <Briefcase size={18} />, label: "Luggage space", value: "02" },
      { icon: <Wind size={18} />, label: "Air-conditioned", value: "Yes" },
    ]
  },
  {
    id: "yukon",
    name: "GMC 7 Seater",
    tag: "Premium SUV",
    description: "Command the road with our GMC Yukon. Maximum comfort, safety, and power for groups who prefer a high-profile travel experience.",
    image: "https://images.unsplash.com/photo-1574041188310-8647ac2b679b?q=80&w=1974&auto=format&fit=crop",
    features: [
      { icon: <Users size={18} />, label: "Seating Capacity", value: "07" },
      { icon: <Wifi size={18} />, label: "Free WiFi", value: "Yes" },
      { icon: <Briefcase size={18} />, label: "Luggage space", value: "05" },
      { icon: <Wind size={18} />, label: "Air-conditioned", value: "Yes" },
    ]
  }
];

export default function Fleet() {
  const [activeTab, setActiveTab] = useState(fleet[0].id);
  const currentCar = fleet.find(c => c.id === activeTab) || fleet[0];
  const contactInfo = {
    phone: "+966 53 988 6719",
    rawPhone: "966539886719"
  };

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.4em] font-black text-xs">Our Cars</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase tracking-tighter">Available Umrah Taxi</h2>
          <div className="w-20 h-1 bg-[var(--yellow-main)] mx-auto mt-6"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 px-4">
          {fleet.map((car) => (
            <button
              key={car.id}
              onClick={() => setActiveTab(car.id)}
              className={`px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === car.id
                  ? "bg-[var(--yellow-main)] text-black shadow-[0_10px_30px_-5px_var(--yellow-main)] translate-y-[-2px]"
                  : "bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100 hover:text-black"
                }`}
            >
              {car.name}
            </button>
          ))}
        </div>

        {/* Car Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-50 relative"
          >
            <div className="space-y-10 order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-black tracking-tight">{currentCar.name}</h3>
                  <span className="text-black bg-[var(--yellow-main)] font-black text-[10px] px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {currentCar.tag}
                  </span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-lg">
                  {currentCar.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-10">
                {currentCar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[var(--yellow-main)] flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{feature.label}</p>
                      <p className="text-xl font-black leading-none">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <a href={`https://wa.me/${contactInfo.rawPhone}`} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-colors">
                  <PhoneCall size={20} />
                  Book via WhatsApp
                </a>
                <div className="w-full sm:w-auto flex items-center gap-4 bg-slate-50 border border-slate-100 p-3 pr-6 rounded-xl">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--yellow-main)]">
                    <PhoneCall size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Online Support</span>
                    <span className="text-lg font-bold text-slate-800">{contactInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--yellow-main)]/10 to-transparent blur-3xl opacity-50 rounded-full"></div>
              <motion.img
                key={currentCar.image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative z-10 max-w-md lg:max-w-none"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
