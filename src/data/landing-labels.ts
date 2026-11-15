// Interface labels for the landing pages in each language, and the names of the
// route pages as they appear in Arabic and Indonesian. English labels are kept
// identical to the English pages' original wording.

import type { LandingLang } from "./landing";

export const LANG_NAME: Record<LandingLang, string> = {
  en: "English",
  ar: "العربية",
  id: "Bahasa Indonesia",
};

export interface UiLabels {
  home: string;
  quick: string;
  faq: string;
  routes: string;
  readNext: string;
  getFare: string;
  bookOnline: string;
  finalTitle: string;
  finalText: string;
  chat: string;
  alsoIn: string;
}

export const UI: Record<LandingLang, UiLabels> = {
  en: {
    home: "Home",
    quick: "Quick answer",
    faq: "Frequently asked questions",
    routes: "Routes you may need",
    readNext: "Read next",
    getFare: "Get your fare on WhatsApp",
    bookOnline: "Book online",
    finalTitle: "Get your fare before you travel",
    finalText: "Send your pickup, destination, date, time and group size. We reply with the vehicle and the fare.",
    chat: "Chat on WhatsApp",
    alsoIn: "Also available in",
  },
  ar: {
    home: "الرئيسية",
    quick: "الإجابة السريعة",
    faq: "الأسئلة الشائعة",
    routes: "رحلات قد تحتاجها",
    readNext: "اقرأ أيضاً",
    getFare: "احصل على السعر عبر واتساب",
    bookOnline: "احجز أونلاين",
    finalTitle: "احصل على السعر قبل السفر",
    finalText: "أرسل نقطة الانطلاق والوجهة والتاريخ والوقت وعدد المسافرين، وسنرد عليك بالسيارة والسعر.",
    chat: "تواصل عبر واتساب",
    alsoIn: "متوفر أيضاً بـ",
  },
  id: {
    home: "Beranda",
    quick: "Jawaban singkat",
    faq: "Pertanyaan yang sering diajukan",
    routes: "Rute yang mungkin Anda perlukan",
    readNext: "Baca juga",
    getFare: "Dapatkan tarif lewat WhatsApp",
    bookOnline: "Pesan online",
    finalTitle: "Dapatkan tarif sebelum berangkat",
    finalText: "Kirim titik jemput, tujuan, tanggal, jam dan jumlah penumpang. Kami balas dengan kendaraan dan tarifnya.",
    chat: "Chat di WhatsApp",
    alsoIn: "Tersedia juga dalam",
  },
};

// Route page names in each language. English uses the route's own title.
export const ROUTE_LABEL: Record<LandingLang, Record<string, string>> = {
  en: {},
  ar: {
    "jeddah-airport-to-makkah-taxi": "تاكسي من مطار جدة إلى مكة",
    "makkah-to-madinah-taxi": "تاكسي من مكة إلى المدينة",
    "madinah-to-makkah-taxi": "تاكسي من المدينة إلى مكة",
    "jeddah-airport-to-madinah-taxi": "تاكسي من مطار جدة إلى المدينة",
    "madinah-airport-transfer": "توصيل من مطار المدينة إلى الفندق",
    "makkah-ziyarat-tour": "جولة زيارات مكة",
    "madinah-ziyarat-tour": "جولة زيارات المدينة",
  },
  id: {
    "jeddah-airport-to-makkah-taxi": "Taksi Bandara Jeddah ke Makkah",
    "makkah-to-madinah-taxi": "Taksi Makkah ke Madinah",
    "madinah-to-makkah-taxi": "Taksi Madinah ke Makkah",
    "jeddah-airport-to-madinah-taxi": "Taksi Bandara Jeddah ke Madinah",
    "madinah-airport-transfer": "Transfer Bandara Madinah ke Hotel",
    "makkah-ziyarat-tour": "Tur Ziarah Makkah",
    "madinah-ziyarat-tour": "Tur Ziarah Madinah",
  },
};
