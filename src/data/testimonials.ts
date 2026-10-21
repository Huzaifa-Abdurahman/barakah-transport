// Customer testimonials. Only entries with a `source` URL are shown (see
// components/sections/Testimonials.tsx). The previous copy had no sources and
// could not be verified, so they are held here until the client provides a
// real review link for each one (TODO-CLIENT.md).

export interface Testimonial {
  name: string;
  date: string;
  text: string;
  source: string | null; // e.g. the Google review URL
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Abdullah Al-Rashidi",
    date: "2 months ago",
    text: "Barakah Transport made our Umrah journey truly special. The driver was punctual, the vehicle was immaculate, and he even knew the best route to avoid the crowds.",
    source: null,
  },
  {
    name: "Fatima Malik",
    date: "3 months ago",
    text: "We were a family of 8 and they arranged a HiAce with amazing comfort. From Jeddah Airport to Makkah and all our Ziyarat, everything was arranged perfectly.",
    source: null,
  },
  {
    name: "Mohammed Hassan",
    date: "4 months ago",
    text: "I have used Barakah three years in a row now for Umrah. Their professionalism, pricing, and care for pilgrims is unmatched.",
    source: null,
  },
  {
    name: "Aisha Patel",
    date: "5 months ago",
    text: "As a solo female pilgrim, safety was my top priority. Barakah was recommended by my local mosque and they exceeded all expectations.",
    source: null,
  },
  {
    name: "Omar Farouq",
    date: "a month ago",
    text: "Booked via WhatsApp and the whole experience was smooth from start to finish. Clean car, kind driver, good English. Will use again.",
    source: null,
  },
];
