"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingForm() {
  const contactInfo = {
    phone: "+966 53 988 6719",
    rawPhone: "966539886719"
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    vehicle: "Select Vehicle",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send Email to Admin & Autoresponder to User via FormSubmit.co
      await fetch("https://formsubmit.co/ajax/barakah.trans.service@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "Pick Up": formData.pickup,
          "Drop Off": formData.dropoff,
          Date: formData.date,
          Vehicle: formData.vehicle,
          message: formData.message,
          _subject: "🚕 New VIP Taxi Booking Request!",
          _autoresponse: "Thank you for choosing Barakah Transport. We have safely received your booking request! Our team will reach out to you shortly via WhatsApp with a confirmation.",
          _template: "table"
        })
      });

      // 2. Open WhatsApp directly with all details formatted
      const waText = `*New VIP Booking Request* 🚖\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Route:* ${formData.pickup} ➡️ ${formData.dropoff}\n*Date:* ${formData.date}\n*Vehicle:* ${formData.vehicle}\n*Notes:* ${formData.message}`;
      window.open(`https://wa.me/${contactInfo.rawPhone}?text=${encodeURIComponent(waText)}`, "_blank");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        date: "",
        vehicle: "Select Vehicle",
        message: ""
      });
      alert("Booking Request Sent Successfully!");
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Something went wrong. Please try again or contact us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 md:py-32 relative bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[10]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[20]">
        <div className="text-center mb-16 text-white drop-shadow-2xl">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.4em] font-black text-sm md:text-base border border-[var(--yellow-main)]/50 px-6 py-2 rounded-full mb-6 inline-block bg-black/50 backdrop-blur-md">
            VIP Reservation
          </span>
          <h2 className="text-6xl md:text-7xl font-black mt-6 uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
            Book <span className="text-[var(--yellow-main)]">With Us Now</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_70px_rgba(212,175,55,0.25)] border-4 border-[var(--yellow-main)] relative overflow-visible"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--yellow-main)]/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">Reserve Your Vehicle</h3>
            <div className="w-16 h-1.5 bg-[var(--yellow-main)] mx-auto mt-6 rounded-full"></div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Full Name" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone / WhatsApp Number" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
              <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
              <input type="text" name="pickup" required value={formData.pickup} onChange={handleChange} placeholder="Pick Up Location (e.g. Jeddah Airport)" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
              <input type="text" name="dropoff" required value={formData.dropoff} onChange={handleChange} placeholder="Drop Off Location (e.g. Makkah Hotel)" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] focus:ring-4 focus:ring-[var(--yellow-main)]/10 transition-all font-bold text-[15px] shadow-sm" />
            </div>

            <div className="relative shadow-sm rounded-xl">
              <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] transition-all font-bold text-[15px] appearance-none cursor-pointer">
                <option disabled>Select Vehicle</option>
                <option>HiAce 10 Seater</option>
                <option>Staria 7 Seater</option>
                <option>Camry 4 Seater</option>
                <option>GMC / Tahoe 7 Seater</option>
                <option>Coaster Bus 30 Seater</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                ▼
              </div>
            </div>

            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any special requests? (e.g. Child seat needed, Flight number...)" rows={4} className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[var(--yellow-main)] transition-all font-bold text-[15px] resize-none shadow-sm"></textarea>

            <div className="flex flex-col gap-6 pt-6">
              <button disabled={isSubmitting} type="submit" className="w-full bg-[var(--yellow-main)] text-black py-6 md:py-8 rounded-2xl font-black uppercase text-lg md:text-xl tracking-[0.2em] shadow-[0_15px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.6)] transition-all hover:-translate-y-1 hover:bg-yellow-400 disabled:opacity-50">
                {isSubmitting ? "Processing..." : "Confirm & Send to WhatsApp"}
              </button>
              <div className="text-center pt-8 border-t border-slate-100 flex flex-col items-center">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Need Immediate Online Support?</p>
                <a href={`tel:+${contactInfo.rawPhone}`} className="text-black font-black text-2xl hover:text-[var(--yellow-main)] transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
