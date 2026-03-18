import type { Metadata } from "next";
import { Plane, Building, Landmark, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Routes | Barakah Transport Service",
  description: "Explore our VIP transfer routes including Airport Transfers, Hotel Transfers, and Sightseeing Tours across Saudi Arabia.",
};

const PHONE = "966539886719";

const categories = [
  {
    icon: <Plane className="text-orange-500 fill-orange-50 stroke-[1.5px]" size={40} />,
    title: "Airport Transfers",
    desc: "Experience a smooth start to your Umrah journey with our professional airport pickup and drop-off services.",
  },
  {
    icon: <Building className="text-orange-500 fill-orange-50 stroke-[1.5px]" size={40} />,
    title: "Hotel Transfers",
    desc: "Travel effortlessly between the airport and your hotel in Jeddah, Makkah, Madinah or Riyadh with our reliable transfer service.",
  },
  {
    icon: <Landmark className="text-orange-500 fill-orange-50 stroke-[1.5px]" size={40} />,
    title: "Sightseeing Tours",
    desc: "Discover the beauty and history of Makkah, Madinah, Taif, and Badr with our comfortable sightseeing tours.",
  },
];

const individualRoutes = [
  {
    title: "Jeddah Airport ↔ Makkah / Madinah",
    desc: "Direct VIP transfers from King Abdulaziz International Airport (JED) straight to your hotel in Makkah or Madinah. Travel peacefully with zero waiting times. (Also available for Hotel to Jeddah Airport departure transfers).",
    img: "/routes/jeddah airport.JPG",
    linkText: "Book Arrival Transfer",
  },
  {
    title: "Makkah ↔ Madinah VIP Express",
    desc: "Seamless intercity travel between the two Holy Cities. Journey from Makkah to Madinah, or from Madinah back to Makkah. Travel exclusively in our premium fleet with highly experienced chauffeurs on your own schedule.",
    img: "/routes/madina-tomakkah.JPG",
    linkText: "Book City Transfer",
  },
  {
    title: "Madinah Airport ↔ Madinah Hotel",
    desc: "Arriving at Prince Mohammad bin Abdulaziz Airport (MED)? Let us handle your luggage and drive you swiftly to your accommodation near the Prophet's Mosque. (Also available for returning Madinah Hotel to Airport transfers).",
    img: "/routes/madina-airport.JPG",
    linkText: "Book Madinah Transfer",
  },
  {
    title: "Makkah Ziyarats (Holy Sightseeing)",
    desc: "Explore historic, sacred landmarks across Makkah in complete comfort. This comprehensive tour includes visits to Jabal al-Nour (Cave Hira), Jabal Thawr (Cave Thawr), Arafat, Mina, Muzdalifah, and Jannat al-Mu'alla.",
    img: "/routes/m-ziarats.JPG",
    linkText: "Book Makkah Ziyarat",
  },
  {
    title: "Madinah Ziyarats (Holy Sightseeing)",
    desc: "Discover the rich, monumental landscapes of Madinah at your own pace. Our guided tour includes visits to Masjid Quba, Mount Uhud and the Martyrs' Cemetery, Masjid al-Qiblatayn, the Seven Mosques (Khandaq), and the famous Dates Market.",
    img: "/routes/madina-ziarats.JPG",
    linkText: "Book Madinah Ziyarat",
  },
  {
    title: "Hotel ↔ Haram Local Transfers",
    desc: "Need daily rides from your Makkah or Madinah hotel directly to Masjid al-Haram or Al-Masjid an-Nabawi? Lock in reliable, safe rides back and forth without haggling.",
    img: "/routes/harm.JPG",
    linkText: "Book Local Transfer",
  },
  {
    title: "Long Distance: Makkah/Madinah ↔ Dammam",
    desc: "Need to travel further across the Kingdom of Saudi Arabia? We provide exclusive VIP transfers between Makkah or Madinah and major cities like Dammam, or vice versa.",
    img: "/routes/damam.JPG",
    linkText: "Book Long Distance",
  },
];

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-20 pb-20">

      {/* 1. Header Image without Opacity/Blur */}
      <div className="w-full relative shadow-md">
        <img
          src="/i1.webp"
          alt="Barakah Routes"
          className="w-full h-[40vh] md:h-[60vh] object-cover block"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-[0.2em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Routes
          </h1>
        </div>
      </div>

      {/* 2. Detailed Working Routes List with Images and CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-16">
        <div className="text-center mb-8">
          <span className="text-orange-500 uppercase tracking-[0.3em] font-black text-xs mb-3 block">Travel With Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Popular <span className="text-[var(--yellow-main)]">Routes</span></h2>
        </div>

        {individualRoutes.map((route, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch group hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-shadow duration-500`}
            >
              <div className="w-full md:w-1/2 overflow-hidden relative">
                <img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center items-start text-left bg-white">
                <div className="w-12 h-1 bg-[var(--yellow-main)] mb-6 rounded-full" />
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">{route.title}</h3>
                <p className="text-slate-600 font-medium mb-8 leading-relaxed text-[15px]">{route.desc}</p>
                <div className="mt-auto">
                  <a
                    href="/contact#booking"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[var(--yellow-main)] hover:text-black text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 group/btn shadow-md hover:shadow-lg"
                  >
                    {route.linkText}
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Separator */}
      <div className="w-full max-w-4xl mx-auto px-6 mb-8 mt-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60"></div>
      </div>

      {/* 3. Three Column Icons Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center max-w-sm mx-auto">
              <div className="w-20 h-20 rounded-full border-[3px] border-orange-500 flex items-center justify-center mb-6 bg-white shadow-sm hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{cat.title}</h2>
              <p className="text-slate-700 font-semibold leading-relaxed text-[15px]">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
