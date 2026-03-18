"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// WhatsApp SVG icon (native — no react-icons dependency needed)
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.651 4.838 1.788 6.872L2 30l7.338-1.763A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.836-1.602l-.418-.248-4.354 1.047 1.077-4.24-.272-.435A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.548c-.345-.172-2.04-1.007-2.356-1.122-.316-.115-.546-.172-.776.172-.23.345-.89 1.122-1.09 1.353-.2.23-.4.258-.746.086-.345-.172-1.457-.537-2.776-1.713-1.026-.914-1.718-2.043-1.919-2.388-.2-.345-.021-.532.15-.703.155-.155.345-.403.517-.604.172-.2.23-.345.345-.575.115-.23.057-.432-.029-.604-.086-.172-.776-1.87-1.063-2.561-.28-.673-.563-.582-.776-.593l-.66-.011c-.23 0-.604.086-.92.432-.316.345-1.205 1.178-1.205 2.872s1.234 3.33 1.406 3.56c.172.23 2.429 3.71 5.886 5.202.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.316-.23-.66-.402z" />
    </svg>
  );
}

const PHONE = "966539886719";
const MESSAGE = "Hello%20Barakah%20Transport%20Service%2C%20I%20would%20like%20to%20book%20a%20taxi.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-[999] flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Outer pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
        style={{ backgroundColor: "#25D366" }}
      />

      {/* Secondary slower ring */}
      <motion.span
        className="absolute rounded-full pointer-events-none"
        style={{ backgroundColor: "#25D366", inset: "-6px" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0, 0.15] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 6, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="bg-[#111] text-white text-[12px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xl border border-white/10">
              Chat with us
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#111] border-r border-t border-white/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.45)]"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon size={28} />
      </div>
    </motion.a>
  );
}