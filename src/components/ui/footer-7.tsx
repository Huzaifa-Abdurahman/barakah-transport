"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: { url: string; src: string; alt: string; title: string };
  sections?: Array<{ title: string; links: Array<{ name: string; href: string }> }>;
  description?: string;
  socialLinks?: Array<{ icon: React.ReactElement; href: string; label: string }>;
  copyright?: string;
  legalLinks?: Array<{ name: string; href: string }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Jeddah Airport Transfer", href: "/services" },
      { name: "Makkah to Madinah", href: "/services" },
      { name: "Madinah to Makkah", href: "/services" },
      { name: "Ziyarat Tours", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Vehicles", href: "/our-vehicles" },
      { name: "Locations", href: "/locations" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+966 53 988 6719", href: "tel:+966539886719" },
      { name: "barakah.trans.service@gmail.com", href: "mailto:barakah.trans.service@gmail.com" },
      { name: "Medina, Saudi Arabia", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/barakahtransportsrevice/?hl=en", label: "Instagram" },
  { icon: <FaFacebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61587584106438", label: "Facebook" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo (2).png",
    alt: "Barakah Transport Service",
    title: "Barakah Transport Service",
  },
  sections = defaultSections,
  description = "Saudi Arabia's premier Premium Umrah & Hajj taxi company. Professional and comfortable transportation across the Kingdom.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Barakah Transport Service. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="relative bg-[#080910] text-white overflow-hidden">
      {/* Top gold border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--yellow-main)] to-transparent opacity-70" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[var(--yellow-main)] opacity-[0.04] blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl pt-20 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-16 lg:gap-24 pb-16 border-b border-white/[0.06]">

          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col gap-7"
          >
            {/* Logo image */}
            <a href={logo.url} className="inline-block group mb-2 mt-2">
              <img src="/logo (2).png" alt="Barakah Transport" className="h-20 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity duration-300" />
            </a>

            <p className="text-[14px] text-slate-400 leading-relaxed max-w-[300px] font-medium">
              {description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-[var(--yellow-main)] hover:border-[var(--yellow-main)]/40 hover:bg-[var(--yellow-main)]/10 transition-all duration-250"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12">
            {sections.map((section, sIdx) => (
              <motion.div
                key={sIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={sIdx + 1}
                variants={fadeUp}
              >
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--yellow-main)] mb-6">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-[13px] font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-0 h-[1.5px] bg-[var(--yellow-main)] rounded-full group-hover:w-3 transition-all duration-250 flex-shrink-0" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-600 text-center sm:text-left">
            {copyright}
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600 hover:text-[var(--yellow-main)] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </footer>
  );
};
