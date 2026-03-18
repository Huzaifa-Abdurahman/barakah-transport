"use client";

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Users, MapPin, Clock, Car, Award } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { icon: Users, label: 'Pilgrims Served', value: '50K+' },
  { icon: Phone, label: '24/7 Response', value: 'Yes' },
  { icon: Award, label: 'Elite Class', value: 'VIP' },
  { icon: MapPin, label: 'Local Ziyarats', value: '100%' },
  { icon: Car, label: 'Latest Models', value: '2024+' },
  { icon: Clock, label: 'Satisfied Clients', value: '99%' },
];

const services = [
  'Jeddah Airport ↔ Makkah / Madinah',
  'Makkah ↔ Madinah VIP Express',
  'Madinah Airport ↔ Hotel Transfer',
  'Exclusive Ziyarats (Makkah & Madinah)',
  'Haram & Local Spot Services',
  'Professional English-Speaking Drivers',
];

const fleetPreview = [
  { src: '/fleet/staria.png', name: 'Staria VIP', tag: 'Most Popular' },
  { src: '/fleet/hiace.png', name: 'HiAce 10-Seater', tag: 'Group Travel' },
  { src: '/fleet/yukon.png', name: 'GMC Premium', tag: 'Ultra Luxury' },
];

// Skeleton loader for stat card
function StatSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 animate-pulse">
      <div className="w-24 h-24 rounded-[2rem] bg-slate-200" />
      <div className="h-8 w-16 bg-slate-200 rounded-md" />
      <div className="h-3 w-20 bg-slate-100 rounded-full" />
    </div>
  );
}

// Skeleton loader for fleet card
function FleetSkeleton({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`animate-pulse rounded-2xl bg-slate-200 h-56 ${wide ? 'sm:col-span-2' : ''}`} />
  );
}

export default function UnderHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F8F5EF] overflow-hidden relative"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,175,55,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 90% 80%, rgba(212,175,55,0.05) 0%, transparent 50%)
        `,
      }}
    >
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--yellow-main)] to-transparent opacity-60" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

        {/* ── Section Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--yellow-main)]" />
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.35em] font-black text-[11px]">
            Barakh Transport Service
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--yellow-main)]" />
        </motion.div>

        {/* ── Stats Grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-14 mb-28"
        >
          {!isInView
            ? Array.from({ length: 6 }).map((_, i) => <StatSkeleton key={i} />)
            : stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: 'spring', stiffness: 90, damping: 14 },
                  },
                }}
                whileHover={{ y: -12, transition: { duration: 0.25 } }}
                className="group flex flex-col items-center justify-start text-center"
              >
                {/* Icon box */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center text-[var(--yellow-main)] transition-all duration-400 group-hover:shadow-[0_28px_55px_-10px_rgba(212,175,55,0.25)] group-hover:bg-[var(--yellow-main)] group-hover:text-white">
                    <stat.icon className="w-10 h-10 stroke-[1.8px]" />
                  </div>
                  {/* Gold ring on hover */}
                  <div className="absolute inset-0 rounded-[2rem] border-2 border-[var(--yellow-main)] opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-105 transition-all duration-300" />
                </div>

                <div className="font-black text-4xl text-slate-900 mb-2 tracking-tighter leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.22em] text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-6 mb-28">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-[var(--yellow-main)] opacity-60" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        {/* ── Services + Fleet ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Left — Services */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[3px] bg-[var(--yellow-main)] rounded-full" />
                <span className="text-[var(--yellow-main)] uppercase tracking-[0.3em] font-black text-[11px]">
                  Premium Fleet
                </span>
              </div>

              <h2 className="text-4xl lg:text-[3.2rem] font-black uppercase tracking-tighter mb-6 leading-[1.05]">
                <span className="text-slate-900">Elite Class </span>
                <br />
                <span className="text-slate-900">Umrah </span>
                <span
                  className="relative inline-block"
                  style={{
                    WebkitTextStroke: '2px var(--yellow-main)',
                    color: 'transparent',
                  }}
                >
                  Services
                </span>
              </h2>

              <p className="text-[15px] text-slate-500 font-medium max-w-lg leading-relaxed">
                We guarantee a serene, high-end experience tailored for global pilgrims.
                Punctual, safe transfers with our latest fleet and trusted multi-lingual drivers.
                Don&apos;t settle for less on your sacred journey.
              </p>
            </div>

            {/* Services list */}
            <div className="grid grid-cols-1 gap-4 mt-4 relative z-20">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07, ease: 'easeOut' }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-5 px-6 py-5 md:px-8 rounded-[1.5rem] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-default border border-transparent hover:border-[var(--yellow-main)]/20"
                >
                  <div className="w-2.5 h-2.5 bg-[var(--yellow-main)] rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 text-sm md:text-base tracking-wide transition-colors duration-200">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-6 pt-8"
            >
              <Link href="/contact#booking" className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 bg-[var(--yellow-main)] text-black text-center font-black text-lg rounded-[2rem] shadow-xl hover:bg-yellow-500 transition-colors duration-300">
                Book a Transfer
              </Link>
              <Link href="/routes" className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 bg-white border-2 border-slate-200 text-slate-800 text-center font-black text-lg rounded-[2rem] hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-md">
                View Our Routes
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Fleet */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {!isInView
              ? fleetPreview.map((_, i) => <FleetSkeleton key={i} />)
              : fleetPreview.map((car, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[var(--yellow-main)]/30 transition-all duration-400 w-full"
                >
                  {/* Premium Badge */}
                  <div className="absolute top-5 right-5 z-[30]">
                    <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--yellow-main)] text-black text-[11px] md:text-xs font-black uppercase tracking-[0.25em] shadow-lg">
                      {car.tag}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative pt-10 pb-20 px-4 w-full h-[280px] md:h-[350px] flex items-center justify-center">
                    <Image
                      src={car.src}
                      alt={car.name}
                      width={600}
                      height={400}
                      className="w-full h-auto max-h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out z-[10] relative"
                    />
                  </div>
                  
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent z-[15] pointer-events-none" />

                  {/* Card footer exactly matched to premium look */}
                  <div className="absolute bottom-0 left-0 right-0 z-[20] p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4 text-left">
                      <div className="min-w-0">
                        <p className="text-xs md:text-[13px] font-black tracking-[0.3em] text-[var(--yellow-main)] uppercase mb-2">
                          Barakah Fleet
                        </p>
                        <h3 className="font-black text-2xl md:text-3xl text-white leading-none tracking-tight">
                          {car.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-10 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
        >
          {['Licensed & Insured', 'Saudi MOT Certified', 'Hajj & Umrah Ministry Approved', 'GPS Tracked Vehicles'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400">
              <div className="w-1.5 h-1.5 bg-[var(--yellow-main)] rounded-full" />
              <span className="text-[11px] uppercase font-bold tracking-[0.2em]">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--yellow-main)]/40 to-transparent" />
    </section>
  );
}