"use client";

import { motion } from "framer-motion";

const items = [
  "VIP UMRAH TAXI SERVICES",
  "JEDDAH TO MAKKAH TRANSFERS",
  "MAKKAH TO MADINAH TRANSFERS",
  "24/7 CUSTOMER SUPPORT",
  "LUXURY FLEET AVAILABLE",
  "PROFESSIONAL DRIVERS",
];

export default function TrustStrip() {
  return (
    <div className="relative overflow-hidden bg-black py-4">
      {/* Patterned Border Top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{
          background: `repeating-linear-gradient(45deg, var(--yellow-main), var(--yellow-main) 10px, #000 10px, #000 20px)`
        }}
      ></div>

      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-sm font-black tracking-widest text-[#FFB800]"
          >
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
          </div>
        ))}
      </motion.div>

      {/* Patterned Border Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-20"
        style={{
          background: `repeating-linear-gradient(-45deg, var(--yellow-main), var(--yellow-main) 10px, #000 10px, #000 20px)`
        }}
      ></div>
    </div>
  );
}

