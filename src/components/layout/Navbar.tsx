"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "/services" },
    { name: "OUR VEHICLES", href: "/our-vehicles" },
    { name: "ABOUT", href: "/about" },
    { name: "ROUTES", href: "/routes" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <nav className={`transition-all duration-500 ${isSolid ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 border-b border-black/5" : "bg-transparent py-6"}`}>
        <div className="container px-6 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo (2).png" alt="Barakah Transport" className="h-[3.5rem] md:h-[4.5rem] w-auto object-contain" />
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-black tracking-tighter uppercase transition-colors duration-300 ${isSolid ? "text-black" : "text-white"}`}>
                Barakah
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--yellow-main)] uppercase">
                Transport
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[12px] font-black tracking-widest hover:text-[var(--yellow-main)] transition-all duration-300 ${isSolid ? "text-black/70" : "text-white/70"}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-black/10 pl-10">
               <Link href="/contact#booking" className="inline-flex items-center justify-center h-10 px-8 rounded-xl bg-[var(--yellow-main)] text-black hover:bg-black hover:text-white font-black text-xs tracking-widest uppercase transition-colors">
                 BOOK NOW
               </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded transition-colors duration-300 ${isSolid ? "text-black" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-[#111] shadow-2xl z-[60] flex flex-col pt-6 border-t-[3px] border-[var(--yellow-main)] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10 px-6">
              <div className="flex items-center gap-3">
                <img src="/logo (2).png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white"><X size={28} /></button>
            </div>
            
            <div className="flex flex-col gap-8 px-8">
              <Link href="/" className="text-xl font-bold tracking-wide text-[var(--yellow-main)]" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-xl font-bold tracking-wide text-white" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/our-vehicles" className="text-xl font-bold tracking-wide text-white" onClick={() => setIsOpen(false)}>
                Our Vehicles
              </Link>
              <Link href="/routes" className="text-xl font-bold tracking-wide text-white" onClick={() => setIsOpen(false)}>
                Routes
              </Link>
              <Link href="/contact" className="text-xl font-bold tracking-wide text-white" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
