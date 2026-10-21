// Single source of business facts. Every page, schema block, footer and contact
// link reads from here. `null` means "not confirmed by the client yet": the UI
// hides it and the JSON-LD omits it. Never put a guessed value here.
// See TODO-CLIENT.md for the full list.

export const BUSINESS = {
  name: "Barakah Transport Service",
  legalName: null as string | null, // TODO-CLIENT
  phone: "+966539886719", // confirm official number
  whatsapp: "966539886719",
  email: "barakah.trans.service@gmail.com",
  address: {
    street: null as string | null, // TODO-CLIENT
    locality: "Makkah", // TODO-CLIENT: confirm Makkah vs Madinah as the main base
    region: "Makkah Province",
    country: "SA",
  },
  geo: { lat: null as number | null, lng: null as number | null }, // TODO-CLIENT
  areaServed: ["Makkah", "Madinah", "Jeddah"],
  hours: "24/7",
  social: {
    // TODO: the Instagram handle is misspelled ("transportsrevice"); update when renamed
    instagram: "https://www.instagram.com/barakahtransportsrevice/",
    facebook: "https://www.facebook.com/profile.php?id=61587584106438",
  },
  googleBusinessProfileUrl: null as string | null, // TODO-CLIENT
};

export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
