import { Star } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TrustpilotIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center text-[#00B67A]">
    <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 0l3.7 7.5 8.3 1.2-6 5.8 1.4 8.3L12 18.9l-7.4 3.9 1.4-8.3-6-5.8 8.3-1.2z"/>
    </svg>
  </div>
);

const StarRow = () => (
  <div className="flex gap-[2px]">
    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#FFB800" className="text-[#FFB800]" />)}
  </div>
);

const BigStarRow = () => (
  <div className="inline-flex gap-1 lg:gap-2 items-center mx-3 relative top-[-4px]">
    {[...Array(5)].map((_, i) => <Star key={i} size={48} fill="#1e293b" className="text-[#1e293b] w-8 h-8 md:w-12 md:h-12" />)}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F4F4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Badges Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* Google Badge */}
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform border border-slate-100">
             <div className="w-12 h-12 rounded-full border border-slate-100 flex flex-shrink-0 items-center justify-center bg-slate-50">
               <GoogleIcon />
             </div>
             <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-slate-500 text-sm uppercase tracking-wide">Google Rating</span>
                <div className="flex items-center gap-2">
                   <span className="font-black text-slate-800 text-lg leading-none">5.0</span>
                   <StarRow />
                </div>
             </div>
          </div>

          {/* TrustPilot Badge */}
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform border border-slate-100">
             <div className="w-12 h-12 rounded-full border border-slate-100 flex flex-shrink-0 items-center justify-center bg-slate-50">
               <TrustpilotIcon />
             </div>
             <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-slate-500 text-sm uppercase tracking-wide">Trust Pilot Rating</span>
                <div className="flex items-center gap-2">
                   <span className="font-black text-slate-800 text-lg leading-none">5.0</span>
                   <StarRow />
                </div>
             </div>
          </div>
        </div>

        {/* Text Centerpiece */}
        <div className="text-center w-full flex flex-col items-center">
           <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#1e293b] leading-tight flex flex-col sm:flex-row items-center justify-center flex-wrap select-text">
             <span>2,557</span> 
             <BigStarRow /> 
           </h2>
           <h3 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-[#1e293b] mt-2 mb-8 select-text">
             Positive Reviews
           </h3>
           
           <h4 className="text-2xl md:text-4xl lg:text-[2.2rem] font-semibold text-[#334155] leading-snug tracking-tight mb-2">
             (Feedback From Our
           </h4>
           <h4 className="text-2xl md:text-4xl lg:text-[2.2rem] font-semibold text-[#334155] leading-snug tracking-tight mb-12">
             Genuine Passengers)
           </h4>

           <p className="text-xl md:text-2xl font-black text-[#0f172a] mb-12">
             2,557 + Our Happy Customer Reviews
           </p>
        </div>

        {/* Google Reviews Carousel */}
        <div className="w-full mt-12 overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll flex gap-6 px-4 md:px-8">
          {[
            { name: "Abdullah Al-Rashidi", date: "2 months ago", text: "Barakah Transport made our Umrah journey truly special. The driver was punctual, the vehicle was immaculate, and he even knew the times for each prayer stop. Highly recommended!", avatar: "A" },
            { name: "Fatima Malik", date: "3 months ago", text: "We were a family of 8 and they arranged a HiAce with amazing comfort. From Jeddah Airport to Makkah and all our Ziyarat — everything was seamless. JazakAllah Khair!", avatar: "F" },
            { name: "Mohammed Hassan", date: "4 months ago", text: "I have used Barakah three years in a row now for Umrah. Their professionalism, pricing, and care for pilgrims is unmatched. The gold standard of transport services in Saudi Arabia.", avatar: "M" },
            { name: "Aisha Patel", date: "5 months ago", text: "As a solo female pilgrim, safety was my top priority. Barakah was recommended by my local mosque and they exceeded all expectations. Professional, respectful, and on time.", avatar: "A" },
            { name: "Omar Farouq", date: "a month ago", text: "Booked via WhatsApp and the whole experience was smooth from start to finish. Clean car, kind driver, good English. Will use again for Hajj insha'Allah.", avatar: "O" }
          ].map((review, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 snap-center flex flex-col flex-shrink-0 text-left hover:-translate-y-1 transition-transform">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600">
                    {review.avatar}
                  </div>
                  <div className="flex flex-col flex-1">
                     <span className="font-bold text-slate-800 leading-tight">{review.name}</span>
                     <span className="text-slate-400 text-xs">{review.date}</span>
                  </div>
                  <GoogleIcon />
               </div>
               <StarRow />
               <p className="text-slate-600 font-medium leading-relaxed mt-4">
                 &ldquo;{review.text}&rdquo;
               </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
