// One entry per route or ziyarat page. A new page is one new entry here, not new code.
// Facts come from the existing site copy. Anything the client has not confirmed is
// null (prices) or marked "approx." (distances). See TODO-CLIENT.md.

export type Vehicle = "GMC Yukon XL" | "Hyundai Staria" | "Hyundai Starex" | "Hyundai H1" | "Toyota HiAce" | "Mercedes V-Class";

export interface VehiclePrice {
  vehicle: Vehicle;
  seats: string;
  luggage: number;
  priceSar: number | null; // null = price on request via WhatsApp
}

export interface RoutePage {
  slug: string;
  kind: "route" | "ziyarat";
  title: string; // short name; the layout adds "| Barakah Transport Service"
  metaDescription: string; // 150–160 chars; add the price once confirmed
  h1: string;
  intro: string;
  areaServed: string[];
  distanceKm: number | null; // approximate; verify before publishing
  durationText: string | null; // approximate; verify before publishing
  prices: VehiclePrice[];
  includes: string[];
  stops?: { name: string; note: string }[]; // ziyarat only
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  whatsappText: string; // pre-filled WhatsApp message, so the lead shows which page sent it
}

// Seats and luggage match the figures on the Our Vehicles page.
const FLEET_PRICES: VehiclePrice[] = [
  { vehicle: "Hyundai Staria", seats: "8–9", luggage: 7, priceSar: null },
  { vehicle: "Hyundai Starex", seats: "11", luggage: 9, priceSar: null },
  { vehicle: "Hyundai H1", seats: "11", luggage: 8, priceSar: null },
  { vehicle: "GMC Yukon XL", seats: "7", luggage: 7, priceSar: null },
  { vehicle: "Mercedes V-Class", seats: "7", luggage: 7, priceSar: null },
  { vehicle: "Toyota HiAce", seats: "12", luggage: 12, priceSar: null },
];

const PRICE_FAQ = {
  q: "How much does this taxi cost?",
  a: "Fares are fixed per vehicle, so the price depends on the vehicle you need for your group and luggage. Message us on WhatsApp with your pickup, drop-off and group size, and we will confirm the price before you book.",
};

const HOURS_FAQ = {
  q: "Do you pick up at night?",
  a: "Yes. Barakah Transport Service operates 24 hours a day, 7 days a week, including late-night flight arrivals and departures.",
};

export const ROUTES: RoutePage[] = [
  {
    slug: "jeddah-airport-to-makkah-taxi",
    kind: "route",
    title: "Jeddah Airport to Makkah Taxi",
    h1: "Jeddah Airport to Makkah Taxi",
    metaDescription:
      "Private taxi from Jeddah Airport (JED) to Makkah hotels. Meet & greet at arrivals, luggage space for families, open 24/7. Message us on WhatsApp for your fixed fare.",
    intro:
      "Your chauffeur meets you at King Abdulaziz International Airport (JED) and drives you directly to your hotel in Makkah, so you skip the airport hustle.",
    areaServed: ["Jeddah", "Makkah"],
    distanceKm: 80,
    durationText: "approx. 1 hour",
    prices: FLEET_PRICES,
    includes: [
      "Meet & greet at Jeddah Airport arrivals",
      "Direct transfer to your Makkah hotel",
      "Luggage space sized for your vehicle (see table)",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long is the drive from Jeddah Airport to Makkah?",
        a: "The drive is roughly one hour, depending on traffic and the time of day. Ask us for an estimate for your exact hotel.",
      },
      {
        q: "Is a taxi better than the Haramain train with luggage?",
        a: "With several bags or children, a private taxi is usually more comfortable because you go straight from the airport to your hotel and the vehicle has room for your luggage. The train suits lighter travel with fewer bags.",
      },
      HOURS_FAQ,
      {
        q: "Can you collect a group that needs more than one vehicle?",
        a: "Yes. For large families or tour groups we can arrange more than one vehicle. Message us on WhatsApp with your group size and we will suggest a setup.",
      },
    ],
    relatedSlugs: ["makkah-to-madinah-taxi", "jeddah-airport-to-madinah-taxi", "makkah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Jeddah Airport to Makkah (from website)",
  },
  {
    slug: "makkah-to-madinah-taxi",
    kind: "route",
    title: "Makkah to Madinah Taxi",
    h1: "Makkah to Madinah Taxi",
    metaDescription:
      "Private taxi from Makkah to Madinah in a comfortable premium fleet, direct to your hotel. Luggage space for families, open 24/7. Message us on WhatsApp for your fixed fare.",
    intro:
      "A direct private transfer between the two Holy Cities, in an air-conditioned vehicle sized for your group and luggage.",
    areaServed: ["Makkah", "Madinah"],
    distanceKm: 450,
    durationText: "approx. 4–5 hours",
    prices: FLEET_PRICES,
    includes: [
      "Private vehicle for your group only",
      "Pickup in Makkah and drop-off at your Madinah hotel",
      "Luggage space sized for your vehicle (see table)",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long is the drive from Makkah to Madinah?",
        a: "The drive is roughly four to five hours, depending on traffic, the route and stops. Plan extra time for rest stops with children or elderly travellers.",
      },
      {
        q: "Is a taxi better than the Haramain train from Makkah to Madinah?",
        a: "A private taxi is more flexible: you set the departure time, avoid station transfers, and can travel with several bags. The train is faster but needs a station trip at each end.",
      },
      {
        q: "Can we stop at the Miqat on the way?",
        a: "Ask us on WhatsApp before booking. We will confirm whether a Miqat stop can be arranged for your trip.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["madinah-to-makkah-taxi", "jeddah-airport-to-makkah-taxi", "madinah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Makkah to Madinah (from website)",
  },
  {
    slug: "madinah-to-makkah-taxi",
    kind: "route",
    title: "Madinah to Makkah Taxi",
    h1: "Madinah to Makkah Taxi",
    metaDescription:
      "Private taxi from Madinah to Makkah, direct to your hotel, in a comfortable premium fleet. Family-sized vehicles, open 24/7. Message us on WhatsApp for your fixed fare.",
    intro:
      "A private transfer from Madinah to Makkah for individuals, families and groups. You can also ask us about a Miqat stop before you travel.",
    areaServed: ["Madinah", "Makkah"],
    distanceKm: 450,
    durationText: "approx. 4–5 hours",
    prices: FLEET_PRICES,
    includes: [
      "Private vehicle for your group only",
      "Pickup in Madinah and drop-off at your Makkah hotel",
      "Luggage space sized for your vehicle (see table)",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long is the drive from Madinah to Makkah?",
        a: "The drive is roughly four to five hours, depending on traffic and stops.",
      },
      {
        q: "Can we stop at the Miqat?",
        a: "Ask us on WhatsApp before booking. We will confirm whether a Miqat stop can be arranged for your trip.",
      },
      {
        q: "Is Uber cheaper than a taxi in Saudi Arabia?",
        a: "Ride-hailing apps can be cheaper for short trips within one city. For a long intercity trip with luggage, a pre-booked private vehicle gives you a confirmed price, a vehicle sized for your group, and no searching for a driver at the end of the journey.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["makkah-to-madinah-taxi", "madinah-airport-transfer", "madinah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Madinah to Makkah (from website)",
  },
  {
    slug: "jeddah-airport-to-madinah-taxi",
    kind: "route",
    title: "Jeddah Airport to Madinah Taxi",
    h1: "Jeddah Airport to Madinah Taxi",
    metaDescription:
      "Private taxi from Jeddah Airport (JED) straight to your Madinah hotel. Meet & greet at arrivals, luggage space for families, open 24/7. Message us on WhatsApp for your fare.",
    intro:
      "Land at Jeddah and continue directly to Madinah. Your chauffeur meets you at arrivals and takes you straight to your hotel.",
    areaServed: ["Jeddah", "Madinah"],
    distanceKm: 420,
    durationText: "approx. 4–5 hours",
    prices: FLEET_PRICES,
    includes: [
      "Meet & greet at Jeddah Airport arrivals",
      "Direct transfer to your Madinah hotel",
      "Luggage space sized for your vehicle (see table)",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long is the drive from Jeddah Airport to Madinah?",
        a: "The drive is roughly four to five hours, depending on traffic and stops.",
      },
      {
        q: "Can you collect me on arrival at Jeddah Airport?",
        a: "Yes. Your chauffeur meets you at arrivals. Send us your flight details on WhatsApp so we can plan the pickup time.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["jeddah-airport-to-makkah-taxi", "madinah-airport-transfer", "madinah-to-makkah-taxi"],
    whatsappText: "Assalamu alaikum, I'd like to book: Jeddah Airport to Madinah (from website)",
  },
  {
    slug: "madinah-airport-transfer",
    kind: "route",
    title: "Madinah Airport to Hotel Transfer",
    h1: "Madinah Airport to Hotel Transfer",
    metaDescription:
      "Private transfer from Madinah Airport (MED) to your hotel near the Prophet's Mosque. Luggage space for families, open 24/7. Message us on WhatsApp for your fixed fare.",
    intro:
      "Arriving at Prince Mohammad bin Abdulaziz International Airport (MED)? We handle your luggage and drive you to your accommodation near the Prophet's Mosque.",
    areaServed: ["Madinah"],
    distanceKm: null,
    durationText: null,
    prices: FLEET_PRICES,
    includes: [
      "Meet & greet at Madinah Airport arrivals",
      "Luggage handled by your chauffeur",
      "Transfer to your Madinah hotel, and back to the airport on departure",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "Do you also take me back to Madinah Airport?",
        a: "Yes. We also run hotel-to-airport transfers for departures. Tell us your flight time on WhatsApp when you book.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["madinah-to-makkah-taxi", "jeddah-airport-to-madinah-taxi", "madinah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Madinah Airport to hotel (from website)",
  },
  {
    slug: "makkah-ziyarat-tour",
    kind: "ziyarat",
    title: "Makkah Ziyarat Tour",
    h1: "Makkah Ziyarat Tour: Cave Hira, Cave Thawr and Arafat",
    metaDescription:
      "Guided Makkah ziyarat tour in a private vehicle: Cave Hira, Cave Thawr, Arafat, Mina and Muzdalifah. Comfortable, air-conditioned, open 24/7. Message us on WhatsApp.",
    intro:
      "A private guided tour of the sacred sites around Makkah, with comfortable, air-conditioned transport between each stop.",
    areaServed: ["Makkah"],
    distanceKm: null,
    durationText: null,
    prices: FLEET_PRICES,
    stops: [
      { name: "Jabal al-Nour (Cave Hira)", note: "The cave where the first revelation was received." },
      { name: "Jabal Thawr (Cave Thawr)", note: "The cave the Prophet ﷺ sheltered in during the Hijrah." },
      { name: "Arafat", note: "The plain of Arafat, where the Hajj gathering takes place." },
      { name: "Mina", note: "The valley associated with the Hajj rites." },
      { name: "Muzdalifah", note: "The open area between Arafat and Mina." },
      { name: "Jannat al-Mu'alla", note: "The historic cemetery in Makkah." },
    ],
    includes: [
      "Private vehicle for your group only",
      "Pickup from your Makkah hotel and return",
      "Experienced chauffeur who drives between each stop",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long does the Makkah ziyarat tour take?",
        a: "The length depends on how many sites you visit and how long you stay at each. Tell us which sites you want when you message us, and we will suggest a plan.",
      },
      {
        q: "Is the Cave Hira climb difficult?",
        a: "Cave Hira is on a steep mountain path with many steps. Please consider your fitness before going, and ask us about the route when you book.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "madinah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Makkah Ziyarat Tour (from website)",
  },
  {
    slug: "madinah-ziyarat-tour",
    kind: "ziyarat",
    title: "Madinah Ziyarat Tour",
    h1: "Madinah Ziyarat Tour: Quba, Uhud and Qiblatain",
    metaDescription:
      "Guided Madinah ziyarat tour in a private vehicle: Masjid Quba, Mount Uhud, Masjid al-Qiblatayn and the Seven Mosques. Air-conditioned, open 24/7. Message us on WhatsApp.",
    intro:
      "A private guided tour of the historic sites of Madinah, at your own pace, with comfortable transport between each stop.",
    areaServed: ["Madinah"],
    distanceKm: null,
    durationText: null,
    prices: FLEET_PRICES,
    stops: [
      { name: "Masjid Quba", note: "The first mosque built in Islam." },
      { name: "Mount Uhud and the Martyrs' Cemetery", note: "The site of the Battle of Uhud." },
      { name: "Masjid al-Qiblatayn", note: "The mosque where the Qiblah was changed." },
      { name: "The Seven Mosques (Khandaq)", note: "The mosques around the site of the Battle of the Trench." },
      { name: "Dates Market", note: "The well-known dates market in Madinah." },
    ],
    includes: [
      "Private vehicle for your group only",
      "Pickup from your Madinah hotel and return",
      "Experienced chauffeur who drives between each stop",
      "Service 24 hours a day, 7 days a week",
    ],
    faqs: [
      PRICE_FAQ,
      {
        q: "How long does the Madinah ziyarat tour take?",
        a: "The length depends on how many sites you visit. Tell us your preferred sites on WhatsApp and we will suggest a plan.",
      },
      {
        q: "Can I visit Masjid Quba on its own?",
        a: "Yes. A private vehicle can take you to Masjid Quba alone, or add it to a longer tour.",
      },
      HOURS_FAQ,
    ],
    relatedSlugs: ["madinah-airport-transfer", "madinah-to-makkah-taxi", "makkah-ziyarat-tour"],
    whatsappText: "Assalamu alaikum, I'd like to book: Madinah Ziyarat Tour (from website)",
  },
];

export const ROUTE_BY_SLUG: Record<string, RoutePage> = Object.fromEntries(ROUTES.map((r) => [r.slug, r]));
