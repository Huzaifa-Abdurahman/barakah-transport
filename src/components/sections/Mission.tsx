"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function Mission() {
  const contactInfo = {
    phone: "+966 53 988 6719",
    rawPhone: "966539886719"
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Text Side */}
        <div className="lg:pr-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[3px] bg-[var(--yellow-main)]"></span>
                <span className="text-[var(--yellow-main)] uppercase tracking-[0.25em] font-bold text-sm">
                  Our Commitment
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                Mission & <span className="text-[var(--yellow-main)] italic">Goals</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              At <strong className="text-slate-900 font-bold">Barakah Transport Service</strong>, our mission is to provide every pilgrim with a seamless, stress-free, and spiritually fulfilling travel experience. We aim to bridge the distance between holy cities with comfort and reliability.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              Our goal is to become the leading transport provider in Saudi Arabia by maintaining the highest standards of safety, quality, and hospitality. We are committed to continuous improvement and customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <a href={`https://wa.me/${contactInfo.rawPhone}`} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-black text-lg px-10 py-5 sm:px-12 sm:py-6 rounded-[2rem] shadow-xl transition-all hover:scale-[1.02]">
                <PhoneCall size={24} />
                Book via WhatsApp
              </a>
              <div className="w-full sm:w-auto flex items-center gap-5 bg-slate-50 border border-slate-200 p-4 pr-8 rounded-[2rem] shadow-md">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--yellow-main)]">
                  <PhoneCall size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">24/7 Support</span>
                  <span className="text-xl font-black text-slate-900 leading-none">{contactInfo.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Side with Slant */}
        <div className="relative min-h-[600px] hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('/i1.webp')` }}
          ></div>
          {/* Slanted Yellow Overlay */}
          <div
            className="absolute top-0 bottom-0 left-0 w-40 bg-[var(--yellow-main)] -translate-x-20 -skew-x-[20deg] z-10 shadow-[-20px_0_50px_rgba(0,0,0,0.2)]"
          ></div>
        </div>
      </div>
    </section>
  );
}
