import type { Metadata } from "next";
import BookingForm from "@/components/sections/BookingForm";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Barakah Transport Service",
  description: "Get in touch with Barakah Transport Service for Premium Umrah and Hajj taxi bookings. We are available 24/7.",
};

const contactCards = [
  {
    icon: <MessageCircle size={28} />,
    title: "WhatsApp Us",
    detail: "+966 53 988 6719",
    sub: "Instant replies 24/7",
    href: "https://wa.me/966539886719",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    detail: "+966 53 988 6719",
    sub: "Always available",
    href: "tel:+966539886719",
    color: "text-[var(--yellow-main)]",
    bg: "bg-[var(--yellow-main)]/10",
  },
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    detail: "barakah.trans.service@gmail.com",
    sub: "Drop us a line",
    href: "mailto:barakah.trans.service@gmail.com",
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
  {
    icon: <MapPin size={28} />,
    title: "Head Office",
    detail: "Commercial Market of Makkah",
    sub: "Saudi Arabia",
    href: "#",
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    href: "https://www.instagram.com/barakahtransportsrevice/?hl=en",
    hover: "hover:bg-pink-50 hover:text-pink-600 border-pink-100",
  },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/profile.php?id=61587584106438",
    hover: "hover:bg-blue-50 hover:text-blue-600 border-blue-100",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-32 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <section className="px-4 py-32 max-w-full mx-auto text-center mt-6 relative" style={{ backgroundImage: "url('/i3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.4em] font-black text-xs border border-[var(--yellow-main)]/30 px-6 py-2 rounded-full mb-6 inline-block bg-white/10 shadow-sm backdrop-blur-md">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mt-6 mb-6">
            Contact <span className="text-[var(--yellow-main)]">Us</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            We operate 24 hours a day, 7 days a week. Whether you are arriving at Jeddah Airport or planning intercity travel between Makkah and Madinah, we are always ready to assist you.
          </p>
        </div>
      </section>

      {/* Connection Cards Dashboard */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => (
            <a 
              key={idx} 
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">{card.title}</h3>
              <p className="font-bold text-slate-600 mb-2 truncate w-full px-2" title={card.detail}>{card.detail}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">{card.sub}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Social Media Strip */}
      <section className="px-4 pb-16 max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl flex flex-col items-center">
          <h3 className="font-black text-xl text-slate-900 mb-6 uppercase tracking-widest">Connect With Us</h3>
          <div className="flex flex-row gap-2 sm:gap-4 w-full md:w-auto overflow-hidden">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-2 sm:px-8 py-4 rounded-xl border-2 text-slate-600 font-bold transition-all duration-300 text-xs sm:text-base ${social.hover}`}
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
    </main>
  );
}
