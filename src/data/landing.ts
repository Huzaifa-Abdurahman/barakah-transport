// Landing pages for city-level, service-level and price-intent searches.
// Each page targets one primary keyword and a related set. Prices are never written here:
// fares are quoted per trip on call or WhatsApp. Facts come from the existing site copy
// (24/7 service, airports, fleet seats) or from the owner's confirmed statements.
// Keyword volumes come from the October 2026 pull; "not measured" means no data yet.

import { absoluteUrl } from "@/config/site";
import { AR_LANDING_PAGES } from "./landing-ar";
import { ID_LANDING_PAGES } from "./landing-id";

export type LandingLang = "en" | "ar" | "id";

export interface LandingSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LandingPage {
  slug: string; // URL path without the leading slash, e.g. "ar/taxi-makkah"
  lang: LandingLang;
  group: string; // the same value for every language version of one page, e.g. "taxi-makkah"
  title: string; // short page title; the layout adds "| Barakah Transport Service"
  description: string; // 150–160 characters
  h1: string;
  primaryKeyword: string;
  keywords: string[];
  summary: string; // answer-first summary shown above the article
  intro: string;
  areaServed: string[];
  serviceType: string;
  sections: LandingSection[];
  faqs: { q: string; a: string }[];
  relatedRoutes: string[]; // slugs in data/routes.ts
  relatedGuides: string[]; // slugs in data/blog*.ts
  whatsappText: string;
}

type LandingDraft = Omit<LandingPage, "lang" | "group">;

const ENGLISH_DRAFTS: LandingDraft[] = [
  {
    slug: "taxi-makkah",
    title: "Taxi Makkah: Private, VIP and Shared",
    description:
      "Book a taxi in Makkah for hotel trips, airport transfers and ziyarat. Private, VIP and shared rides, open 24/7. Send your trip on WhatsApp for your fare.",
    h1: "Taxi in Makkah: Private, VIP and Shared Rides",
    primaryKeyword: "makkah taxi",
    keywords: ["makkah taxi", "taxi makkah", "makkah taxi service", "taxi service in makkah", "mecca taxi"],
    summary:
      "Barakah Transport Service runs private, VIP and shared taxi rides in Makkah, 24 hours a day. Send us your pickup, destination and time on WhatsApp. We confirm the vehicle and the fare in writing before you travel.",
    intro:
      "You may need a ride from the airport to your hotel, a trip to the Haram at prayer time, or a day of ziyarat. We match the vehicle and the service to your group, and quote the trip before you commit.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "Taxi service",
    sections: [
      {
        heading: "Ride types in Makkah",
        bullets: [
          "Private: one vehicle for your group, on your schedule, with the stops you choose.",
          "VIP: a premium private car for guests who want more comfort. See the VIP taxi page for details.",
          "Shared: a seat on a route and date where one is available. Usually the lowest cost per person.",
        ],
      },
      {
        heading: "Common trips we arrange",
        bullets: [
          "Hotel to Masjidil Haram and back, including trips at busy prayer times.",
          "Jeddah airport to Makkah hotels, with meet and greet at arrivals.",
          "Half-day and full-day ziyarat around Makkah, with waiting time agreed in advance.",
          "Makkah to Madinah, as a private intercity trip.",
        ],
      },
      {
        heading: "How booking works",
        paragraphs: ["Booking takes one WhatsApp message. Include these details so we can quote the right vehicle:"],
        bullets: [
          "Pickup point, destination and date and time.",
          "Number of adults and children, and the number and size of bags.",
          "Your flight number, if the trip starts or ends at an airport.",
          "Any mobility needs, such as a wheelchair or walking aid.",
        ],
      },
      {
        heading: "Drivers and language",
        paragraphs: [
          "If you need an Arabic-speaking driver, tell us when you book. We confirm the driver's language before the trip, so you know what to expect.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a fixed price for a taxi in Makkah?",
        a: "Prices depend on the vehicle, the route, the time and any stops, so we quote each trip. The taxi price page explains what changes the fare.",
      },
      {
        q: "Can I book a taxi in Makkah for a few hours?",
        a: "Yes. Tell us the number of hours and the stops you want, and we will quote the trip before you travel.",
      },
      {
        q: "Do you pick up from hotels near the Haram?",
        a: "Yes. Send us the hotel name and address. Roads near the Haram are often closed at busy times, so we agree the drop-off point in advance.",
      },
      {
        q: "Do you run trips from Jeddah airport to Makkah?",
        a: "Yes. The Jeddah airport to Makkah page shows the route details, and you can book the transfer on WhatsApp.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-ziyarat-tour", "makkah-to-madinah-taxi"],
    relatedGuides: ["hotel-to-haram-taxi-makkah", "private-taxi-vs-ride-hailing-saudi", "private-taxi-for-umrah-booking-guide"],
    whatsappText: "Assalamu alaikum, I'd like to book a taxi in Makkah (from website, Makkah taxi page)",
  },
  {
    slug: "taxi-madinah",
    title: "Madinah Taxi: Private Rides, 24/7",
    description:
      "Private taxi in Madinah for hotel trips near Masjid an-Nabawi, ziyarat and airport transfers. Open 24/7. Send your trip on WhatsApp and get your fare quickly.",
    h1: "Taxi in Madinah: Private Rides Near the Prophet's Mosque",
    primaryKeyword: "madinah taxi",
    keywords: ["madinah taxi", "taxi madinah", "taxi service in madinah", "madinah private taxi", "taxi near masjid nabawi"],
    summary:
      "We run private taxi rides in Madinah around the clock: trips between your hotel and Masjid an-Nabawi, Madinah ziyarat, and airport transfers. Message us your trip on WhatsApp, and we confirm the vehicle and fare before you travel.",
    intro:
      "Most pilgrims in Madinah want two things from a taxi: to reach the Prophet's Mosque without a long walk in the heat, and to see the historic sites without losing a day to transport. We plan both around your schedule.",
    areaServed: ["Madinah"],
    serviceType: "Taxi service",
    sections: [
      {
        heading: "Trips we arrange in Madinah",
        bullets: [
          "Hotel to Masjid an-Nabawi and back, at the times you need.",
          "Madinah ziyarat: Masjid Quba, Masjid al-Qiblatain, Mount Uhud and the Seven Mosques, in one loop.",
          "Madinah airport transfers, with the drop-off at your hotel. See the Madinah airport page.",
          "Madinah to Makkah, as a private intercity trip.",
        ],
      },
      {
        heading: "Choosing the right vehicle",
        paragraphs: [
          "A sedan suits up to four people with light bags. For families, larger groups or heavy luggage, choose an SUV or a van. Tell us your group size and bags, and we will suggest the vehicle.",
        ],
      },
      {
        heading: "What to confirm before you travel",
        bullets: [
          "The fare, and whether it includes waiting time at the airport or at the ziyarat sites.",
          "The drop-off point at your hotel, and how close the car can get to the mosque.",
          "The return time, if you want the driver to wait or come back for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does the drive from Madinah airport to the city take?",
        a: "The airport is outside the city, so the trip takes longer than a walk. Ask for a time estimate when you book, since traffic changes the journey.",
      },
      {
        q: "Can you take me around Madinah for a full day?",
        a: "Yes. Tell us which sites you want to visit, and we will plan one route and quote the day before you travel.",
      },
      {
        q: "Do you have Arabic-speaking drivers in Madinah?",
        a: "Tell us when you book. We confirm the driver's language before the trip.",
      },
    ],
    relatedRoutes: ["madinah-airport-transfer", "madinah-ziyarat-tour", "madinah-to-makkah-taxi"],
    relatedGuides: ["madinah-airport-taxi-to-hotel-guide", "madinah-ziyarat-one-day-route", "makkah-to-madinah-road-guide"],
    whatsappText: "Assalamu alaikum, I'd like a private taxi in Madinah (from website, Madinah taxi page)",
  },
  {
    slug: "vip-taxi-makkah",
    title: "VIP Taxi Makkah: Premium Private Cars",
    description:
      "VIP taxi in Makkah with a premium private car and a dedicated driver, for families, elderly guests and business trips. Get your quote on WhatsApp, open 24/7.",
    h1: "VIP Taxi in Makkah: Premium Private Cars and Drivers",
    primaryKeyword: "vip taxi makkah",
    keywords: ["vip taxi makkah", "vip taxi service makkah", "premium taxi makkah", "luxury taxi makkah", "vip umrah taxi"],
    summary:
      "A VIP taxi in Makkah is a premium private car with one driver for your group, on a schedule you set. We quote the trip on WhatsApp and confirm the vehicle and the fare in writing before you travel.",
    intro:
      "Some trips call for more than a comfortable ride: an elderly parent who needs space, a business guest, or a family landing late at night. Our VIP service gives you a premium car and a driver for the whole trip, from pickup to drop-off.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "VIP taxi service",
    sections: [
      {
        heading: "What VIP means for you",
        bullets: [
          "A late-model premium vehicle, reserved for your group only.",
          "One driver for the trip, who knows your schedule and stops.",
          "Airport meet and greet at arrivals for Jeddah airport trips.",
          "Your own timing for prayers, rest and ziyarat.",
        ],
      },
      {
        heading: "Vehicles for VIP trips",
        paragraphs: ["Seat numbers below are the capacities listed on our fleet page. Luggage space depends on the bags you bring."],
        bullets: [
          "GMC Yukon XL: 7 seats, luggage space for 7 bags.",
          "Mercedes V-Class: 7 seats, luggage space for 7 bags.",
          "Hyundai Staria: 8 to 9 seats, luggage space for 7 bags.",
        ],
      },
      {
        heading: "Who books a VIP taxi",
        bullets: [
          "Families with elderly members who need more room and a calm ride.",
          "Business travellers and guests who need a reliable schedule.",
          "Groups that want one car for the whole day instead of several trips.",
        ],
      },
      {
        heading: "What to confirm when you book",
        bullets: [
          "The exact vehicle model, the seats and the number of bags it fits.",
          "Waiting time at the airport or during ziyarat, and whether it is in the fare.",
          "Stops on the way, and any change to the route after you set off.",
          "The driver's language, if it matters to you.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is a VIP taxi different from a private taxi?",
        a: "A private taxi is a dedicated vehicle for your group. A VIP trip adds a premium car and a driver who stays with your schedule for the whole trip.",
      },
      {
        q: "Can I book a VIP car for the whole day?",
        a: "Yes. Tell us the hours and the places you want to visit, and we will quote the day before you travel.",
      },
      {
        q: "Is the VIP fare fixed?",
        a: "We quote each VIP trip in advance on WhatsApp and confirm the amount in writing. The taxi price page explains what the fare covers.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-ziyarat-tour", "makkah-to-madinah-taxi"],
    relatedGuides: ["personal-vip-taxi-makkah", "private-taxi-for-umrah-booking-guide", "arabic-speaking-driver-makkah-madinah"],
    whatsappText: "Assalamu alaikum, I'd like to book a VIP taxi in Makkah (from website, VIP taxi page)",
  },
  {
    slug: "cheap-taxi-makkah",
    title: "Cheap Taxi Makkah: Shared and Private",
    description:
      "Affordable taxi in Makkah: shared rides where a seat is free, or a private car shared by your group. Compare cost per person, then book on WhatsApp, 24/7.",
    h1: "Affordable Taxi in Makkah: Shared and Private Options",
    primaryKeyword: "cheap taxi makkah",
    keywords: ["cheap taxi makkah", "affordable taxi makkah", "budget taxi makkah", "shared taxi makkah", "taxi makkah less price"],
    summary:
      "For a lower cost in Makkah, choose a shared ride on a route with a free seat, or a private car when your group fills it. We quote both on WhatsApp, so you compare the real cost per person before you book.",
    intro:
      "Budget matters on pilgrimage. The option with the lowest total fare is not always the cheapest per person. This page shows you how to compare shared and private rides, so you decide with the numbers in front of you.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "Shared and private taxi service",
    sections: [
      {
        heading: "How to compare shared and private",
        paragraphs: [
          "Divide the total fare by the number of people who pay for the seat. A private car that costs the same whether one or four people ride in it is cheaper per person as the group grows. A shared seat costs less for one person, but only when a seat is free on your route and date.",
        ],
      },
      {
        heading: "When shared makes sense",
        bullets: [
          "You are travelling alone, or as a couple with light bags.",
          "Your trip is a short, simple route with no stops.",
          "You are flexible on the departure time.",
        ],
      },
      {
        heading: "When private is better value",
        bullets: [
          "You travel as a group of three or four, or more.",
          "You have large bags, or a child or an older relative with you.",
          "You want to set the time and stops yourself.",
        ],
      },
      {
        heading: "Ways to keep the fare down",
        bullets: [
          "Book ahead, so you agree the fare instead of negotiating at the airport.",
          "Choose the smallest vehicle that fits your group and bags.",
          "Plan one route with the stops grouped together.",
          "Ask for the fare in writing, with what it includes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a shared taxi cheaper than a private one?",
        a: "Per seat, a shared ride is often cheaper when a seat is free on your route and date. For a family with bags, a private car is often better value per person. Ask us for both quotes.",
      },
      {
        q: "Is a shared taxi safe for older travellers?",
        a: "Officials advise older pilgrims not to travel alone by taxi. For elderly family members, a private car is usually the better choice.",
      },
      {
        q: "Do you have a fixed fare for every trip?",
        a: "No single fare covers every trip, because routes and vehicles differ. Every fare is confirmed in writing before you travel.",
      },
      {
        q: "Does the price change at night?",
        a: "Night trips and busy seasons can change the fare. We tell you the amount before you travel, so there are no surprises.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "makkah-ziyarat-tour"],
    relatedGuides: ["private-taxi-vs-ride-hailing-saudi", "umrah-taxi-checklist-for-families", "taksi-sharing-makkah"],
    whatsappText: "Assalamu alaikum, I'd like a taxi in Makkah at a good price, shared or private (from website, cheap taxi page)",
  },
  {
    slug: "taxi-price-makkah",
    title: "Taxi Price Makkah: Quote on WhatsApp",
    description:
      "How taxi prices in Makkah are set, and how to get your exact fare on call or WhatsApp. We explain what changes the fare and what to confirm before you go.",
    h1: "Taxi Price in Makkah: Fare Quoted Before You Travel",
    primaryKeyword: "taxi price makkah",
    keywords: ["taxi price makkah", "taxi cost makkah", "how much taxi makkah", "makkah taxi fare", "taxi fare makkah on call"],
    summary:
      "We do not publish one price for every trip in Makkah, because the fare depends on the vehicle, the route, the time and any stops. Call or message us with your trip, and we send the fare in writing before you travel.",
    intro:
      "People who search for a taxi price in Makkah usually want one of two things: to avoid overpaying, or to plan a budget before they arrive. This page explains what changes the price, and how to get an exact quote in a few minutes.",
    areaServed: ["Makkah", "Jeddah", "Madinah"],
    serviceType: "Taxi booking and fare quote",
    sections: [
      {
        heading: "What changes the fare",
        bullets: [
          "Vehicle type and seats: a sedan, an SUV or a van.",
          "Route and distance: airport transfers, hotel trips and intercity routes cost differently.",
          "Time: night trips and busy seasons can change the amount.",
          "Waiting time at the airport or during ziyarat.",
          "Stops and detours along the way.",
          "Luggage: many large bags may need a bigger vehicle.",
        ],
      },
      {
        heading: "How to get your exact fare",
        paragraphs: ["Send these details on WhatsApp or call us. We reply with the vehicle and the fare."],
        bullets: [
          "Pickup point and destination.",
          "Date and time, and the return time if you need one.",
          "Number of passengers and bags.",
          "Any stops you want on the way.",
        ],
      },
      {
        heading: "What to check in every quote",
        bullets: [
          "Whether tolls, waiting time and stops are included.",
          "Night or peak-time charges, if any apply to your trip.",
          "How and when you pay. Our policy is drop first, then payment, as set out in the booking confirmation.",
          "Cancellation or change terms, which we send with the confirmation.",
        ],
      },
      {
        heading: "Comparing quotes fairly",
        paragraphs: [
          "Compare the same vehicle, the same route and the same inclusions. A lower number is only better if it covers the same trip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is the price not shown on this page?",
        a: "The fare depends on the vehicle, the route, the time and the stops. The same trip can cost differently at busy times, so we quote your exact trip rather than publish a number that may not match it.",
      },
      {
        q: "Do I pay before or after the trip?",
        a: "Our policy is drop first, then payment, as set out in your booking confirmation.",
      },
      {
        q: "How quickly will I get my price?",
        a: "Send your trip details on WhatsApp. We reply with the vehicle and fare once we have confirmed the details.",
      },
      {
        q: "Is the airport trip priced the same as a hotel trip?",
        a: "No. Airport trips, long routes and night trips are priced separately. Ask us for each trip.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "madinah-airport-transfer"],
    relatedGuides: ["private-taxi-for-umrah-booking-guide", "makkah-to-jeddah-airport-taxi-departure", "private-taxi-vs-ride-hailing-saudi"],
    whatsappText: "Assalamu alaikum, I'd like a price quote for a taxi in Makkah (from website, taxi price page)",
  },
];

const withLang = (lang: LandingLang) => (p: LandingDraft): LandingPage => ({ ...p, lang, group: p.slug });

// Every landing page in every language. English slugs are the group name; Arabic and
// Indonesian files set their own group so the language versions link to each other.
export const LANDING_PAGES: LandingPage[] = [
  ...ENGLISH_DRAFTS.map(withLang("en")),
  ...AR_LANDING_PAGES,
  ...ID_LANDING_PAGES,
];

export const LANDING_BY_SLUG: Record<string, LandingPage> = Object.fromEntries(LANDING_PAGES.map((p) => [p.slug, p]));

// hreflang alternates for one page: every language version, plus x-default pointing at English.
export function landingAlternates(page: LandingPage): Record<string, string> {
  const versions = LANDING_PAGES.filter((p) => p.group === page.group);
  const languages: Record<string, string> = {};
  for (const p of versions) languages[p.lang] = absoluteUrl(`/${p.slug}`);
  const en = versions.find((p) => p.lang === "en");
  if (en) languages["x-default"] = absoluteUrl(`/${en.slug}`);
  return languages;
}
