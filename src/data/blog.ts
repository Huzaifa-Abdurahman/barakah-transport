// Blog posts. Each post is one entry here. Keep facts general and verifiable:
// prices, opening hours and access rules change, so point readers to the route
// pages or WhatsApp for current fares.

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string; // meta description, 150–160 characters
  category: "Ziyarat" | "Travel Tips" | "Transport Guide";
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD
  readMinutes: number;
  primaryKeyword: string; // used for planning only, not shown on the page
  relatedRoute: string; // slug of a route or ziyarat page in data/routes.ts
  intro: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "makkah-ziyarat-places-guide",
    title: "Makkah Ziyarat Places: A Complete Guide for Pilgrims",
    description:
      "The main ziyarat places in Makkah, including Cave Hira, Cave Thawr, Jannat al-Mu'alla, Mina, Arafat and Muzdalifah, with planning tips for each visit.",
    category: "Ziyarat",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 6,
    primaryKeyword: "makkah ziyarat",
    relatedRoute: "makkah-ziyarat-tour",
    intro:
      "Ziyarat means visiting places linked to the life of the Prophet ﷺ and to the history of Islam. Ziyarat is not part of the obligatory rites of Umrah or Hajj, but many pilgrims want to see these places while they are in Makkah. This guide covers the main sites and how to plan a visit.",
    sections: [
      {
        heading: "Sites close to Masjid al-Haram",
        paragraphs: [
          "Most pilgrims stay near the Haram, so the nearest ziyarat sites are easy to reach on foot or by a short taxi ride.",
        ],
        bullets: [
          "Jannat al-Mu'alla: one of Makkah's oldest cemeteries. It is the burial place of Khadijah (RA), the Prophet's wife, and of close relatives.",
          "The Well of Zamzam and the Maqam Ibrahim, which are part of the Haram itself and visited during Umrah.",
        ],
      },
      {
        heading: "Mountains and caves",
        paragraphs: [
          "The two most visited mountain sites are both a short drive from the city centre.",
        ],
        bullets: [
          "Cave Hira (Jabal al-Nour): the cave where the first verses of the Quran were revealed to the Prophet ﷺ.",
          "Cave Thawr (Jabal Thawr): the cave where the Prophet ﷺ and Abu Bakr (RA) sought refuge during the Hijrah to Madinah.",
          "Masjid Aisha (Masjid al-Taneem), on the outskirts of Makkah, where many pilgrims begin an extra Umrah.",
        ],
      },
      {
        heading: "Hajj sites outside the city",
        paragraphs: [
          "Mina, Arafat and Muzdalifah are the places of the Hajj rites. Outside Hajj, you can visit them as sites, and many pilgrims go to see them during Umrah. Arafat (Jabal al-Rahmah) is the hill where the Prophet ﷺ gave his final sermon. Muzdalifah is the open area between Arafat and Mina.",
        ],
      },
      {
        heading: "How to plan your ziyarat",
        paragraphs: [
          "Group the sites by direction so you spend less time on the road. The mountain sites and the outer sites are often done on separate half-days, and the full tour can take several hours.",
        ],
        bullets: [
          "Check opening times and access rules before you go, as they change.",
          "Carry water and wear comfortable shoes, especially for the climb to Cave Hira.",
          "Go early in the morning, when it is cooler and the sites are quieter.",
          "A private vehicle with a driver lets you go at your own pace and stop when you need to rest.",
        ],
      },
    ],
  },
  {
    slug: "madinah-ziyarat-places-guide",
    title: "Madinah Ziyarat Places: The Sites Every Pilgrim Should Know",
    description:
      "A guide to the ziyarat places in Madinah, from Masjid Quba and Masjid al-Qiblatayn to Mount Uhud and the Seven Mosques, with tips on how to visit them.",
    category: "Ziyarat",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 6,
    primaryKeyword: "ziyarat places in madinah",
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Madinah has many historic sites linked to the Prophet ﷺ, his family and his companions. Some are within walking distance of the Prophet's Mosque, and others are a short drive away. Here is a practical guide to the main sites.",
    sections: [
      {
        heading: "Inside the city",
        paragraphs: [
          "The sites near Masjid al-Nabawi are the easiest to visit, and many pilgrims see them during their stay.",
        ],
        bullets: [
          "Masjid al-Nabawi: the Prophet's Mosque, which holds the Rawdah Ash-Shareefah and the Prophet's resting place.",
          "Jannat al-Baqi: the main historic cemetery of Madinah, where many members of the Prophet's family and companions are buried.",
          "Masjid al-Ghamama: a historic mosque connected to the Prophet's Eid and rain prayers.",
          "Masjid Abu Bakr and Masjid Ali: small historic mosques near Masjid al-Nabawi.",
        ],
      },
      {
        heading: "Sites outside the centre",
        paragraphs: [
          "These are a short taxi or tour ride from the city. Many pilgrims visit them on a half-day tour.",
        ],
        bullets: [
          "Masjid Quba: described as the first mosque built in Islam. Many scholars cite a well-known hadith that praying two rak'ahs here carries the reward of an Umrah.",
          "Masjid al-Qiblatayn: the mosque where the direction of prayer was changed from Jerusalem to the Kaaba.",
          "Mount Uhud and the Martyrs' Cemetery: the site of the Battle of Uhud, where the graves of the martyrs are located.",
          "The Seven Mosques (Masajid al-Sab'ah): a group of small mosques near the site of the Battle of the Trench, including Masjid al-Fath.",
          "Historic wells and date farms, including the Well of Uthman and the date gardens on the outskirts of the city.",
        ],
      },
      {
        heading: "Planning your visit",
        paragraphs: [
          "Visit Masjid al-Nabawi and the Rawdah at the times set by the Prophet's Mosque authorities, and check the current rules before you go. Quba and Masjid al-Qiblatayn can be done in one trip. Mount Uhud is further north, so plan it as a separate stop.",
        ],
        bullets: [
          "Ask your driver to plan the route so the outer sites are visited in one loop.",
          "Keep a small bag with water, a hat and a shawl for the outdoor sites.",
          "If you have elderly family members, ask about step-free access and rest stops before you book.",
        ],
      },
    ],
  },
  {
    slug: "jeddah-airport-to-makkah-guide",
    title: "Jeddah Airport to Makkah: Distance, Travel Time and Your Options",
    description:
      "How far Jeddah Airport is from Makkah, how long the trip takes, and how to compare a private taxi, the Haramain train and the bus for your group.",
    category: "Transport Guide",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 5,
    primaryKeyword: "jeddah to makkah distance",
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Most pilgrims arrive at King Abdulaziz International Airport (JED) in Jeddah and go straight on to Makkah. The trip is short by road, but the best option depends on how many people and bags you have and what time you land.",
    sections: [
      {
        heading: "Distance and travel time",
        paragraphs: [
          "The road distance from Jeddah Airport to Makkah is about 80 to 100 km, depending on the route taken. Under normal traffic the trip takes about 1 to 1.5 hours. During peak periods, such as Ramadan, the Hajj season and busy Fridays, it can take longer.",
        ],
      },
      {
        heading: "Your options",
        paragraphs: [
          "There are three main ways to make the trip. Each suits a different group.",
        ],
        bullets: [
          "Private taxi: door-to-door, with luggage space and a fixed fare when you book in advance. Best for families, groups and anyone with several bags.",
          "Haramain high-speed train: a station is located at the airport and the train is quick. Luggage limits are strict, and you will need a taxi from the station to your hotel. Check current timetables and rules before you travel.",
          "Bus: the lowest-cost option, with set stops and timetables. Best for solo travellers with light luggage who have time to spare.",
        ],
      },
      {
        heading: "Tips for a smooth arrival",
        paragraphs: [
          "Arrivals can be busy and flights are often late at night, so a little planning helps.",
        ],
        bullets: [
          "Agree the fare and the vehicle before you travel, and confirm the number of seats and bags it fits.",
          "Send your flight number so the driver can track any delay.",
          "Ask for a meet and greet at arrivals, so you do not have to find the car in the crowd.",
          "Keep your hotel address and a phone number for the driver ready.",
        ],
      },
    ],
  },
  {
    slug: "makkah-to-madinah-travel-options",
    title: "Makkah to Madinah: Taxi, Train or Bus?",
    description:
      "Compare the taxi, the Haramain train and the intercity bus from Makkah to Madinah on cost, time, comfort and luggage, to choose the best option for your group.",
    category: "Transport Guide",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 6,
    primaryKeyword: "makkah to madinah bus",
    relatedRoute: "makkah-to-madinah-taxi",
    intro:
      "Many pilgrims travel between Makkah and Madinah during their trip. The road journey is about 450 km and takes around 4 to 5 hours, depending on traffic. Here is how the three main options compare.",
    sections: [
      {
        heading: "The three options",
        paragraphs: [
          "Each option has trade-offs in time, comfort and flexibility.",
        ],
        bullets: [
          "Private taxi: you set the departure time, travel door-to-door with all your bags, and can make stops along the way. This is the most flexible option.",
          "Haramain high-speed train: the fastest way between the two cities. It runs on fixed timetables and you need to reach the station at each end, so plan the transfers.",
          "Intercity bus: usually the lowest cost, with fixed departures and stops. It takes longer and you have less space for luggage.",
        ],
      },
      {
        heading: "Which is right for you?",
        paragraphs: [
          "For families, elderly travellers or groups with a lot of luggage, a private vehicle is often the most comfortable choice, because you can travel without changing transport. Solo travellers with light bags may prefer the train for speed. Budget travellers who do not mind a longer journey may choose the bus.",
        ],
      },
      {
        heading: "Before you travel",
        paragraphs: [
          "Whatever you choose, check the details in advance so the day runs smoothly.",
        ],
        bullets: [
          "Confirm the fare in writing, and check whether it includes tolls and waiting time.",
          "Plan rest stops for children and elderly passengers.",
          "If you want to stop at the Miqat on the way, tell the company before you book. See our guide to the Miqat for Madinah pilgrims.",
          "Keep your passports and tickets in your hand luggage.",
        ],
      },
    ],
  },
  {
    slug: "miqat-guide-for-madinah-pilgrims",
    title: "The Miqat for Pilgrims from Madinah: What You Need to Know",
    description:
      "What the Miqat is, where pilgrims travelling from Madinah enter ihram, and how to plan the stop if you are travelling to Makkah by taxi.",
    category: "Travel Tips",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 5,
    primaryKeyword: "miqat from madinah",
    relatedRoute: "madinah-to-makkah-taxi",
    intro:
      "The Miqat is the boundary where pilgrims must enter the state of ihram before going further towards Makkah. Pilgrims coming from Madinah have their own Miqat. Knowing where it is, and planning the stop, makes the journey easier.",
    sections: [
      {
        heading: "What is the Miqat?",
        paragraphs: [
          "A Miqat is a fixed place marked for pilgrims. Every pilgrim going to Umrah or Hajj must enter ihram at the Miqat for their direction, or before it. Ihram means the state of sanctity, and it begins with the intention and the ihram clothing.",
        ],
      },
      {
        heading: "The Miqat for Madinah pilgrims",
        paragraphs: [
          "Pilgrims travelling from Madinah enter ihram at Dhul Hulaifah, also known as Abyar Ali or Bir Ali, which has a mosque called Masjid Dhul Hulaifah (Masjid al-Shajarah). It is on the route between Madinah and Makkah.",
        ],
      },
      {
        heading: "Planning the stop by taxi",
        paragraphs: [
          "Many pilgrims travelling by private taxi ask for a stop at the Miqat so they can prepare for ihram. Tell the company before you book, so the stop can be arranged on the day.",
        ],
        bullets: [
          "Prepare your ihram clothing and make sure you know the intention before you reach the Miqat.",
          "Use the stop for rest, wudu and prayer, and keep your belongings together.",
          "Confirm with the company whether a stop is possible for your trip, as arrangements vary.",
        ],
      },
    ],
  },
  {
    slug: "cave-hira-visiting-guide",
    title: "Visiting Cave Hira (Jabal al-Nour): A Practical Guide",
    description:
      "Everything to know before visiting Cave Hira on Jabal al-Nour, where the first revelation came. The climb, what to bring and how to plan the visit safely.",
    category: "Ziyarat",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 5,
    primaryKeyword: "hira cave jabal al nour",
    relatedRoute: "makkah-ziyarat-tour",
    intro:
      "Cave Hira, on Jabal al-Nour (the Mountain of Light), is one of the most visited ziyarat sites in Makkah. It is the cave where the first verses of the Quran were revealed to the Prophet ﷺ. The visit involves a steep climb, so a little preparation makes a big difference.",
    sections: [
      {
        heading: "Why the cave matters",
        paragraphs: [
          "The Prophet ﷺ used to spend time in prayer and reflection in Cave Hira before the revelation came. Many pilgrims visit it to reflect on that moment and on the history of the Quran.",
        ],
      },
      {
        heading: "What the climb is like",
        paragraphs: [
          "The path to the cave is steep and uneven, with many steps. It takes time to climb and come back down, and the cave itself is small. The mountain is located a few kilometres from the Haram. Please consider your fitness before you go, and do not attempt the climb if you have a health condition that makes it unsafe.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "A little planning makes the climb safer and more enjoyable.",
        ],
        bullets: [
          "Wear shoes with good grip. Sandals and smooth soles are not suitable.",
          "Carry water and some light snacks, and take regular rest breaks.",
          "Go early in the morning or at a cooler time of day.",
          "Check the current access rules and the visitor information near the mountain before you set off.",
          "Let someone in your group know your plan, and stay with the group at all times.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "A private taxi can drop you at the foot of the mountain and wait for you, which is useful for elderly pilgrims and families. Ask about waiting time when you book, so you know the plan for the return journey.",
        ],
      },
    ],
  },
  {
    slug: "umrah-taxi-checklist-for-families",
    title: "Umrah Taxi Checklist for Families and Elderly Pilgrims",
    description:
      "A checklist to use before you book an Umrah taxi for your family: seats, luggage, fixed fares, pickup, comfort for elderly travellers and what to confirm in writing.",
    category: "Travel Tips",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readMinutes: 5,
    primaryKeyword: "umrah taxi",
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Travelling with family, especially with elderly parents or young children, needs more planning than travelling alone. Use this checklist before you book an Umrah taxi, so you know exactly what you are getting.",
    sections: [
      {
        heading: "Vehicle and luggage",
        paragraphs: [
          "The most common mistake is booking a car that is too small for the group or the bags. Count your passengers and luggage before you choose a vehicle.",
        ],
        bullets: [
          "Check the number of seats, and whether the seats fit the number of adults and children you are travelling with.",
          "Check how many large bags the vehicle takes, not only the seat count.",
          "For large families, ask whether two vehicles would be more comfortable than one.",
        ],
      },
      {
        heading: "Price and payment",
        paragraphs: [
          "Confirm the price before you travel, and get the details in writing. A fixed fare protects you from surprises on the day.",
        ],
        bullets: [
          "Ask what the fare includes, such as tolls, waiting time and any stops.",
          "Ask how and when you pay, and whether there are any extra charges at night.",
        ],
      },
      {
        heading: "Comfort for elderly travellers",
        paragraphs: [
          "For elderly pilgrims, step height and space to sit comfortably matter as much as the price.",
        ],
        bullets: [
          "Ask about the step height of the vehicle and whether there is room for a walking aid.",
          "Plan rest stops, especially on longer trips such as Makkah to Madinah.",
          "Ask the driver to help with luggage, so the family can walk slowly and safely.",
        ],
      },
      {
        heading: "Pickup and communication",
        paragraphs: [
          "Clear communication on the day prevents most problems.",
        ],
        bullets: [
          "Share your flight number, pickup point and a phone number for the driver.",
          "Ask for a meet and greet at arrivals if you are landing in the evening or at night.",
          "Keep the booking confirmation on WhatsApp so you can find the details quickly.",
        ],
      },
    ],
  },
];

export const BLOG_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p]));
