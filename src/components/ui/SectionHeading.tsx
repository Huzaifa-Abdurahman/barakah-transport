"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string; // optional word(s) inside title to render in gold
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  // Build the title node — if `highlight` is provided and found in title,
  // split around it and render that part in gold.
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    if (parts.length < 2) return title;
    return (
      <>
        {parts[0]}
        <span
          className="relative inline-block"
          style={{
            WebkitTextStroke: "2px var(--yellow-main)",
            color: "transparent",
          }}
        >
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const labelId = label
    ? `${label.toLowerCase().replace(/\s+/g, "-")}-heading`
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClasses} ${className}`}
      aria-labelledby={labelId}
    >
      {/* Label pill */}
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[var(--yellow-main)] rounded-full" />
          <span
            id={labelId}
            className="text-[10px] uppercase tracking-[0.35em] font-black text-[var(--yellow-main)]"
          >
            {label}
          </span>
          <div className="w-8 h-[2px] bg-[var(--yellow-main)] rounded-full" />
        </motion.div>
      )}

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-[3rem] font-black uppercase tracking-tighter leading-[1.05] text-slate-900"
        style={{ fontFamily: "var(--font-cinzel, serif)" }}
      >
        {renderTitle()}
      </motion.h2>

      {/* Gold underline accent */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        className="mt-5 h-[3px] w-16 rounded-full origin-left"
        style={{
          background: "var(--gold-gradient-h, linear-gradient(90deg, #D4AF37, #F5D078))",
          transformOrigin: align === "right" ? "right" : align === "center" ? "center" : "left",
        }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 text-[15px] sm:text-base leading-relaxed max-w-2xl font-medium text-slate-500"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}