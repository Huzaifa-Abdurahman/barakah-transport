import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Barakah Transport Service - Premium Umrah Taxi",
  description:
    "Learn about Barakah Transport Service, founded by CEO Abdullah Khan. 5+ years of trusted experience, 5.0 Google Rating, and over 1000+ satisfied pilgrims served with 0-accident certified drivers.",
};
export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 pb-20 min-h-screen relative" style={{ backgroundImage: "url('/i4.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10">
      {/* Hero Header */}
      <section className="px-4 py-8 max-w-7xl mx-auto text-center mt-6">
        <span className="text-[var(--yellow-main)] uppercase tracking-[0.4em] font-black text-xs border border-[var(--yellow-main)]/30 px-6 py-2 rounded-full mb-6 inline-block bg-white shadow-sm">
          About Our Heritage
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-900 mt-6 mb-6">
          Barakah Transport <br /> Service
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
          The most trusted, highly reputable Umrah and Hajj Premium Taxi company in the Saudi Arabia region. We stand for excellence, extreme reliability, and preserving the sanctity of your <strong>Blessed</strong> Islamic pilgrimage.
        </p>
      </section>

      {/* CEO & Story Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Block */}
          <div className="relative group">
            {/* The image the user uploaded. Recommend placing it in /public/ceo.JPG */}
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 border-4 border-white aspect-[4/5] md:aspect-square relative flex items-center justify-center bg-black">
              <img
                src="/ceo.JPG"
                alt="CEO Abdullah Khan of Barakah Transport Service"
                className="w-full h-auto max-h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="font-black text-2xl tracking-wide uppercase">Abdullah Khan</span>
                <span className="text-[var(--yellow-main)] font-bold text-sm tracking-widest uppercase">Founder & CEO</span>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[var(--yellow-main)] text-black w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col justify-center items-center shadow-xl border-4 border-slate-50 rotate-12 hover:rotate-0 transition-transform duration-500 z-10">
              <span className="text-2xl md:text-3xl font-black">5+</span>
              <span className="text-[10px] md:text-xs font-black uppercase text-center leading-tight tracking-widest mt-1 px-4">Years of Trust</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              A Legacy of Trust for Thousands of Pilgrims
            </h2>
            <div className="w-20 h-1.5 bg-[var(--yellow-main)] rounded-full"></div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mt-2">
              Under the visionary leadership of <strong>CEO Abdullah Khan</strong>, Barakah Transport Service has rapidly evolved into one of the most highly reputed Premium taxi companies in the Saudi Arabia region.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              We exclusively utilize <strong>Saudi Government-Certified Drivers</strong> driving highly-maintained, premium cars. Because your life and comfort matter, we strictly maintain a flawless <strong>0 Accident Ratio</strong>, allowing you to focus entirely on your religious duties in absolute peace of mind.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Having successfully served more than <strong>1000+ satisfied pilgrims and clients</strong> across Makkah and Madinah, we let our impeccable track-record of <strong>5.0+ Ratings on Google Business</strong> speak for our uncompromised dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md text-center flex flex-col items-center hover:border-[var(--yellow-main)] transition-colors">
            <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">5+</span>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</span>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md text-center flex flex-col items-center hover:border-[var(--yellow-main)] transition-colors">
            <span className="text-4xl md:text-5xl font-black text-[var(--yellow-main)] mb-2">5.0</span>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Google Rating</span>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md text-center flex flex-col items-center hover:border-[var(--yellow-main)] transition-colors">
            <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">0%</span>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Accident Ratio</span>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md text-center flex flex-col items-center hover:border-[var(--yellow-main)] transition-colors">
            <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">1k+</span>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Pilgrims Served</span>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
