"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroCars = [
    { src: "/hero/staria.png", name: "STARIA", tag: "Comfort Travel" },
    { src: "/hero/starex.png", name: "STAREX", tag: "Luxury Van" },
    { src: "/hero/gmc.png", name: "GMC", tag: "Luxury SUV" },
    { src: "/hero/h1.png", name: "H1", tag: "Executive" },
];

const PHONE_RAW = "966539886719";
const PHONE_DISP = "+966 53 988 6719";

/* ─── tiny animated dot for the car-selector ─── */
function DotNav({
    total,
    active,
    onChange,
}: {
    total: number;
    active: number;
    onChange: (i: number) => void;
}) {
    return (
        <div className="flex items-center gap-2 mt-6">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    aria-label={`View ${heroCars[i].name}`}
                    className="group relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                    style={{ width: i === active ? 28 : 12, background: "rgba(255,255,255,0.2)" }}
                >
                    {i === active && (
                        <motion.span
                            layoutId="dot-fill"
                            className="absolute inset-0 rounded-full bg-[var(--yellow-main)]"
                        />
                    )}
                </button>
            ))}
        </div>
    );
}

export const HeroSection = () => {
    const [currentCar, setCurrentCar] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(
            () => setCurrentCar((p) => (p + 1) % heroCars.length),
            5000
        );
        return () => clearInterval(id);
    }, []);

    return (
        /*
          pt-28 md:pt-36  →  clears a ~72-80px fixed navbar
          pb-20 md:pb-28  →  generous bottom on mobile & desktop
          px-5 sm:px-6    →  prevents content touching screen edge on mobile
        */
        <section className="relative flex flex-col overflow-hidden bg-black pt-28 md:pt-36 pb-20 md:pb-28">

            {/* ── Background ambient glow ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,hsla(43,100%,50%,0.08)_0,transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,hsla(43,100%,50%,0.05)_0,transparent_70%)]" />
                {/* subtle noise grain */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        backgroundSize: "200px 200px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ══════════════════════════════
              LEFT — Text column
          ══════════════════════════════ */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="flex flex-col items-start text-left"
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            className="inline-flex items-center gap-3 mb-6"
                        >
                            <span className="w-8 h-[2px] bg-[var(--yellow-main)] rounded-full" />
                            <span className="text-[var(--yellow-main)] font-black text-[11px] tracking-[0.35em] uppercase">
                                Your Trusted Travel Partner
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.05] tracking-tighter mb-6"
                        >
                            Comfortable Rides
                            <br />
                            For Your{" "}
                            <span
                                className="relative inline-block text-[var(--yellow-main)] font-black"
                            >
                                Holy Journey
                            </span>
                        </motion.h1>

                        {/* Body */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-slate-400 text-[15px] md:text-base mb-10 leading-relaxed max-w-md font-medium space-y-4"
                        >
                            <p className="text-slate-200">
                                Travel across Saudi Arabia with peace of mind.
                                Safe cars, friendly drivers, and easy booking — all in one place.
                            </p>
                            <p>
                                We provide reliable and affordable transport for your Umrah & Ziyarat.
                                Our experienced drivers speak your language and ensure a smooth journey from start to finish.
                            </p>
                        </motion.div>

                        {/* ── CTAs ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
                        >
                            {/* Book button — tall, narrow pill */}
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <Link
                                    href="/book"
                                    className="group relative inline-flex items-center justify-center gap-2.5 bg-[var(--yellow-main)] text-black font-black text-[13px] uppercase tracking-widest
                             px-8 py-4 rounded-full overflow-hidden
                             shadow-[0_8px_32px_rgba(212,175,55,0.38)]
                             hover:bg-black hover:text-[var(--yellow-main)]
                             hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                             transition-all duration-300"
                                >
                                    {/* shimmer sweep */}
                                    <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/15 group-hover:translate-x-[200%] transition-transform duration-500 ease-out" />
                                    Book Your Ride Now
                                </Link>
                            </motion.div>

                            {/* WhatsApp pill */}
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <a
                                    href={`https://wa.me/${PHONE_RAW}`}
                                    className="group inline-flex items-center gap-4
                             bg-white/[0.05] border border-white/[0.1]
                             rounded-full
                             pl-2 pr-6 py-2
                             hover:border-[var(--yellow-main)]/50
                             hover:bg-[var(--yellow-main)]/5
                             transition-all duration-300"
                                >
                                    {/* Icon circle */}
                                    <div className="w-11 h-11 flex-shrink-0 rounded-full bg-black/60 border border-[var(--yellow-main)]/40 flex items-center justify-center text-[var(--yellow-main)] group-hover:bg-[var(--yellow-main)] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                                        <MessageSquare size={18} />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                                            Contact on WhatsApp
                                        </span>
                                        <span className="text-base font-black text-white leading-tight">
                                            {PHONE_DISP}
                                        </span>
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Dot nav */}
                        <DotNav
                            total={heroCars.length}
                            active={currentCar}
                            onChange={setCurrentCar}
                        />
                    </motion.div>

                    {/* ══════════════════════════════
              RIGHT — Car image column
          ══════════════════════════════ */}
                    <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCar}
                                initial={{ opacity: 0, scale: 0.93, x: 30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.93, x: -20 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                className="relative w-full max-w-[580px] flex flex-col items-center"
                            >
                                {/* Gold glow behind car */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[var(--yellow-main)]/12 blur-[80px] rounded-full z-0 pointer-events-none" />

                                {/* Car image */}
                                <img
                                    src={heroCars[currentCar].src}
                                    alt={heroCars[currentCar].name}
                                    className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10"
                                />

                                {/* Name + tag — properly spaced below image */}
                                <div className="mt-6 flex flex-col items-center gap-3 relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[0.15em] uppercase leading-none">
                                        {heroCars[currentCar].name}
                                    </h2>
                                    <span className="inline-flex items-center px-11 py-4 rounded-full bg-[var(--yellow-main)] text-black text-[11px] font-black uppercase tracking-[0.25em] shadow-[0_4px_16px_rgba(212,175,55,0.4)]">
                                        {heroCars[currentCar].tag}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};
