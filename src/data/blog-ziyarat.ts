// Ziyarat posts: one-day routes, multi-day itineraries and single-site guides.
// Distances are approximate, from public map listings. Confirm access and opening
// times before you visit: they change.

import type { BlogPost } from "./blog";

export const ZIYARAT_POSTS: BlogPost[] = [
  {
    slug: "makkah-ziyarat-one-day-route",
    title: "Makkah Ziyarat Route: One-Day Plan",
    description:
      "A one-day Makkah ziyarat route in the order that saves the most time: Jannat al-Mu'alla, Cave Hira, Cave Thawr, Masjid Aisha and Arafat, with stop times.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "ziyarat in makkah",
    keywords: ["ziyarat in makkah", "makkah ziyarat route", "makkah ziyarat tour", "ziyarat places in makkah", "makkah ziyarat places list"],
    relatedRoute: "makkah-ziyarat-tour",
    intro:
      "A good Makkah ziyarat route saves time by grouping sites that are close together. The sites are spread out, and the outer ones, such as Arafat, are about 20 km from the centre. This plan starts near the Haram and works outwards, with a rest stop built in.",
    sections: [
      {
        heading: "The route, in order",
        paragraphs: [
          "Start early, before the heat and the crowds. The times below are a guide for a comfortable pace, not a fixed schedule.",
        ],
        bullets: [
          "Jannat al-Mu'alla (about 1 km from the Haram): visit the cemetery where Khadijah (RA) is buried. Allow about 30 minutes.",
          "Cave Hira and Jabal al-Nour (about 4.5 km from the Haram): the cave of the first revelation. Allow 2 to 3 hours, including the climb and the visit to the Hira visitor area.",
          "Cave Thawr (Jabal Thawr), about 5 km from the Haram: the cave where the Prophet ﷺ and Abu Bakr (RA) took refuge. Allow about 1 hour, including the drive.",
          "Masjid Aisha (Masjid al-Taneem), about 7 to 8 km from the Haram: a common starting point for an extra Umrah. Allow about 45 minutes.",
          "Mina and Muzdalifah: the Hajj valley and the open area between Mina and Arafat. Visit them on the way out to Arafat.",
          "Arafat (Jabal al-Rahmah), about 20 km from central Makkah: the hill where the Prophet ﷺ gave his final sermon. Allow about 1 hour.",
        ],
      },
      {
        heading: "Why use a private car for this route",
        paragraphs: [
          "Most of these sites are not on a single road, and the walking between them is long in the heat. A private car lets you wait at each site without losing a taxi, and it makes the rest stops possible. Ask the driver to wait while you climb Cave Hira, and agree the total hours before you start.",
        ],
      },
      {
        heading: "Planning checklist",
        paragraphs: [
          "Most problems on a ziyarat day come from missing water, late starts or unclear timings. Plan for these.",
        ],
        bullets: [
          "Agree the pickup time, the total hours and the fare before you leave, and check whether waiting time is included.",
          "Carry water, sunscreen and a small snack for each person.",
          "Wear comfortable shoes with good grip for the climb to Cave Hira.",
          "Check the access rules for Arafat and the mountain sites before you go, as they can change.",
          "Keep your hotel card and the driver's number with you in case you get separated.",
        ],
      },
    ],
  },
  {
    slug: "madinah-ziyarat-one-day-route",
    title: "Madinah Ziyarat Route: One-Day Plan",
    description:
      "A one-day Madinah ziyarat route that starts at Masjid al-Nabawi and covers Jannat al-Baqi, Quba, Qiblatain, Uhud and the Seven Mosques, with timings.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "madina ziyarat places",
    keywords: ["madina ziyarat places", "madinah ziyarat route", "madinah ziyarat tour", "ziyarat madinah", "madinah ziyarat"],
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Madinah's ziyarat sites are spread across the city, from the sites within walking distance of Masjid al-Nabawi to Mount Uhud, several kilometres to the north. This route covers the main sites in a logical order, so you spend the day driving less.",
    sections: [
      {
        heading: "Morning: the sites near the Prophet's Mosque",
        paragraphs: [
          "Start here, while the city is quiet. Most of these sites are within a short walk or a few minutes by car.",
        ],
        bullets: [
          "Masjid al-Nabawi and the Rawdah: check the visiting times set by the Prophet's Mosque authorities before you go.",
          "Jannat al-Baqi: the main historic cemetery of Madinah, where many members of the Prophet's family and companions are buried. Allow about 30 minutes.",
          "Masjid Abu Bakr and Masjid Ali: small historic mosques near Masjid al-Nabawi. Allow about 20 minutes.",
        ],
      },
      {
        heading: "Midday: Quba and Qiblatain",
        paragraphs: [
          "Masjid Quba is about 3.5 to 4 km south of Masjid al-Nabawi. Masjid al-Qiblatayn is about 4 to 5 km north-west of the Prophet's Mosque. Both can be done in one trip, with the Quba visit first.",
        ],
        bullets: [
          "Masjid Quba: many scholars cite a hadith that praying two rak'ahs here carries the reward of an Umrah.",
          "Masjid al-Qiblatayn: the mosque where the direction of prayer was changed to the Kaaba.",
        ],
      },
      {
        heading: "Afternoon: Uhud and the Seven Mosques",
        paragraphs: [
          "Mount Uhud and the Martyrs' Cemetery are about 5 to 6 km north of the Prophet's Mosque. Finish with the Seven Mosques near the site of the Battle of the Trench, and a stop at the date farms if you have time.",
        ],
        bullets: [
          "Mount Uhud: the site of the Battle of Uhud, with the graves of the martyrs. Allow about 45 minutes.",
          "The Seven Mosques (Masajid al-Sab'ah): a group of small historic mosques near the Battle of the Trench site. Allow about 45 minutes.",
        ],
      },
      {
        heading: "Making the day work",
        paragraphs: [
          "The sites are spread out, so the order matters more than the speed. Ask your driver to plan the loop so you do not cross the city twice.",
        ],
        bullets: [
          "Agree whether the fare covers waiting time at each site.",
          "Take water and a hat, since much of the day is outdoors.",
          "Ask about step-free access and rest stops if you travel with elderly family members.",
        ],
      },
    ],
  },
  {
    slug: "umrah-ziyarat-itinerary-five-days",
    title: "Umrah Ziyarat Itinerary: Five Days",
    description:
      "A five-day Umrah itinerary that combines Makkah and Madinah ziyarat with travel days, rest and the Umrah itself, with a private transport plan for each day.",
    category: "Travel Tips",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 7,
    primaryKeyword: "umrah ziyarat",
    keywords: ["umrah ziyarat", "umrah ziyarat places", "ziyarat places in makkah and madinah", "umrah ziyarat tour", "umrah taxi"],
    relatedRoute: "makkah-to-madinah-taxi",
    intro:
      "Many pilgrims have five or six days in the holy cities. A simple plan helps you do the Umrah, see the main ziyarat and rest. This itinerary is a starting point you can adjust to your own pace and group.",
    sections: [
      {
        heading: "Day 1: arrival in Makkah",
        paragraphs: [
          "Arrive, check in and rest. If you land at Jeddah, book a private transfer so you do not wait in the airport queues. Do the Umrah when you feel ready, and keep the rest of the day light.",
        ],
      },
      {
        heading: "Day 2: Makkah ziyarat",
        paragraphs: [
          "Use a private car for a half-day or full-day ziyarat. Cave Hira, Cave Thawr and Arafat are the main sites, and the full route is set out in our Makkah ziyarat guide. Start early and keep the afternoon free for rest.",
        ],
      },
      {
        heading: "Day 3: travel from Makkah to Madinah",
        paragraphs: [
          "The road trip is about 450 km and takes around 4 to 5 hours, depending on traffic. Use a private car if you travel with children or elderly family, so you can stop when you need to. Plan the Miqat stop before you leave, and tell the driver in advance.",
        ],
      },
      {
        heading: "Day 4: Madinah ziyarat",
        paragraphs: [
          "Start at the Prophet's Mosque, then visit Quba, Qiblatain, Uhud and the Seven Mosques with a driver. Check the Rawdah visiting times before you set out.",
        ],
      },
      {
        heading: "Day 5: rest, shopping and departure",
        paragraphs: [
          "Keep this day flexible. Book your departure transfer in advance and confirm the pickup time with the company the evening before. Late flights and early pickups are common, so a driver who tracks your flight is useful.",
        ],
        bullets: [
          "Confirm the pickup time, address and vehicle size the day before.",
          "Keep your passport, tickets and valuables in your hand luggage.",
        ],
      },
      {
        heading: "How to book the transport",
        paragraphs: [
          "Book the Jeddah transfer, the Makkah to Madinah trip, the Madinah ziyarat and the departure transfer as one plan with the same company. This keeps the fares, the vehicle and the timing consistent.",
        ],
      },
    ],
  },
  {
    slug: "masjid-quba-visit-guide",
    title: "Masjid Quba: First Mosque in Islam Guide",
    description:
      "Everything to know before visiting Masjid Quba in Madinah: its history, the reward of praying there, how far it is from the Prophet's Mosque and how to get there.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "masjid quba",
    keywords: ["masjid quba", "masjid quba madinah", "quba mosque madinah", "masjid e quba", "quba masjid"],
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Masjid Quba is the first mosque built in Islam, and it is one of the first sites most pilgrims visit in Madinah. It stands about 3.5 to 4 km south of Masjid al-Nabawi, so it is easy to reach by taxi.",
    sections: [
      {
        heading: "History of the mosque",
        paragraphs: [
          "The Prophet ﷺ stopped at Quba on his way to Madinah during the Hijrah, and the mosque was built there in the early days of the Muslim community. The Quran refers to a mosque founded on piety from the first day, and Masjid Quba is widely understood to be that mosque.",
        ],
      },
      {
        heading: "The reward of praying there",
        paragraphs: [
          "A well-known hadith, recorded in Sunan Ibn Majah, says that praying two rak'ahs at Masjid Quba carries the reward of an Umrah. Many pilgrims make this part of their Madinah visit for that reason.",
        ],
      },
      {
        heading: "Visiting in practice",
        paragraphs: [
          "The mosque is open for prayer, and visitors are welcome at prayer times and outside them. Dress modestly, keep your voice low inside, and follow the guidance of the staff.",
        ],
        bullets: [
          "Getting there: a short taxi ride from the Prophet's Mosque, about 3.5 to 4 km.",
          "Pair the visit with Masjid al-Qiblatayn, which is in the same direction of the city.",
          "Go early or after prayer to avoid the busiest times.",
          "Keep water with you, and allow about an hour for the visit.",
        ],
      },
    ],
  },
  {
    slug: "masjid-al-qiblatain-guide",
    title: "Masjid al-Qiblatayn: Visiting Guide",
    description:
      "A guide to Masjid al-Qiblatayn in Madinah, the mosque where the direction of prayer was changed from Jerusalem to the Kaaba, and how to visit it.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 4,
    primaryKeyword: "masjid al qiblatain",
    keywords: ["masjid al qiblatain", "masjid al-qiblatain", "masjid qiblatain", "two qibla mosque", "qibla masjid"],
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Masjid al-Qiblatayn, the Mosque of the Two Qiblas, is one of the most meaningful ziyarat sites in Madinah. It is where the direction of prayer was changed from Jerusalem to the Kaaba in Makkah.",
    sections: [
      {
        heading: "What happened here",
        paragraphs: [
          "While the Prophet ﷺ was praying in this mosque, the direction of prayer was changed by divine revelation, from Jerusalem to the Kaaba. The mosque takes its name from the two directions of prayer. It is located about 4 to 5 km north-west of Masjid al-Nabawi.",
        ],
      },
      {
        heading: "Planning the visit",
        paragraphs: [
          "The visit is short, and it works well as a stop on the same trip as Masjid Quba. A private car lets you go straight from one site to the next.",
        ],
        bullets: [
          "Allow about 30 to 45 minutes, including time to pray.",
          "Ask the driver to plan Quba and Qiblatain on the same loop.",
          "Check the current visiting arrangements before you go, as access can change.",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "The mosque is a place of worship, so behave as you would in any mosque. Dress modestly, keep noise low, and respect other visitors.",
        ],
      },
    ],
  },
  {
    slug: "mount-uhud-visiting-guide",
    title: "Mount Uhud: Battle Site and Cemetery Guide",
    description:
      "How to visit Mount Uhud and the Martyrs' Cemetery in Madinah: the history of the Battle of Uhud, the Archers' Mount, how far it is and what to plan.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "uhud mountain",
    keywords: ["uhud mountain", "mount uhud madinah", "uhud martyrs cemetery", "battle of uhud", "jabal uhud"],
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Mount Uhud is one of the best-known sites in Madinah. It is the place of the Battle of Uhud, and the Martyrs' Cemetery is at its foot. It is about 5 to 6 km north of Masjid al-Nabawi, so plan it as a separate stop.",
    sections: [
      {
        heading: "The Battle of Uhud",
        paragraphs: [
          "The Battle of Uhud took place at the foot of the mountain. Among those who died was Hamza ibn Abd al-Muttalib (RA), the Prophet's uncle, and many other companions. Their graves are at the Martyrs' Cemetery, and the mountain is known for the Archers' Mount (Jabal al-Rumat), where the archers were placed.",
        ],
      },
      {
        heading: "What to see",
        paragraphs: [
          "The site is quiet and open, and it is best visited in the morning or late afternoon.",
        ],
        bullets: [
          "The Martyrs' Cemetery, with the graves of the companions who fell in the battle.",
          "The Archers' Mount (Jabal al-Rumat), on the hill beside the mountain.",
          "The surrounding area, where the battle took place.",
        ],
      },
      {
        heading: "Planning the trip",
        paragraphs: [
          "Mount Uhud is best combined with the Martyrs' Cemetery and the Seven Mosques in one trip, because they are close together. Bring water and a hat, since there is little shade.",
        ],
        bullets: [
          "Allow about 45 minutes for the visit.",
          "Ask about waiting time at the site when you book the driver.",
          "Wear comfortable shoes if you plan to walk around the mountain area.",
        ],
      },
    ],
  },
  {
    slug: "jannat-al-baqi-visiting-guide",
    title: "Jannat al-Baqi: Madinah Cemetery Guide",
    description:
      "A visiting guide to Jannat al-Baqi, the main historic cemetery of Madinah near the Prophet's Mosque: who is buried there, the etiquette and how to plan the visit.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "jannat al baqi",
    keywords: ["jannat al baqi", "jannat al-baqi", "jannatul baqi", "baqi cemetery", "jannat al baqi madinah"],
    relatedRoute: "madinah-ziyarat-tour",
    intro:
      "Jannat al-Baqi, often called Baqi cemetery, is the main historic cemetery of Madinah. It is close to the Prophet's Mosque, and many members of the Prophet's family and companions are buried there. It is one of the first ziyarat sites most pilgrims visit.",
    sections: [
      {
        heading: "Who is buried here",
        paragraphs: [
          "Many members of the Prophet's family and many of his companions are buried in Jannat al-Baqi. Visitors often make dua for them when they visit. The cemetery has been developed over the centuries, and the layout and access arrangements can change, so check the current rules when you go.",
        ],
      },
      {
        heading: "Etiquette",
        paragraphs: [
          "Visiting a cemetery is a quiet and respectful act. Keep your voice low, avoid crowding, and do not take photographs of the graves. Women and men should follow the rules set by the site staff.",
        ],
      },
      {
        heading: "Planning the visit",
        paragraphs: [
          "Jannat al-Baqi is close to the Prophet's Mosque, so it is easy to add to the start of a Madinah ziyarat day. A short taxi ride or a walk from the hotel is usually enough.",
        ],
        bullets: [
          "Allow about 30 minutes.",
          "Go early or after prayer to avoid the busiest times.",
          "Combine the visit with the other historic sites near Masjid al-Nabawi, such as Masjid Abu Bakr and Masjid Ali.",
        ],
      },
    ],
  },
  {
    slug: "arafat-mina-muzdalifah-guide",
    title: "Arafat, Mina and Muzdalifah Guide",
    description:
      "What Arafat, Mina and Muzdalifah are, why they matter in Hajj, and how pilgrims visit them during Umrah, with the distances from Makkah and planning tips.",
    category: "Ziyarat",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "jabal arafat",
    keywords: ["jabal arafat", "arafat makkah", "mina makkah", "muzdalifah", "jabal rahmah"],
    relatedRoute: "makkah-ziyarat-tour",
    intro:
      "Arafat, Mina and Muzdalifah are the places of the Hajj rites, and they are among the most important sites in Islam. Many pilgrims visit them during Umrah to see them and learn their history. This guide explains what each site is and how to plan a visit.",
    sections: [
      {
        heading: "Arafat (Jabal al-Rahmah)",
        paragraphs: [
          "Arafat is the plain where the Prophet ﷺ gave his final sermon. Jabal al-Rahmah, the Mount of Mercy, stands in the plain. Standing at Arafat is the central rite of Hajj. It is about 20 to 21 km from central Makkah.",
        ],
      },
      {
        heading: "Mina",
        paragraphs: [
          "Mina is the valley where pilgrims stay during the days of Hajj, and where the Jamarat pillars stand. Masjid al-Khayf is in the valley. The valley lies a few kilometres east of the Haram.",
        ],
      },
      {
        heading: "Muzdalifah",
        paragraphs: [
          "Muzdalifah is the open area between Arafat and Mina. Pilgrims spend the night there during Hajj. Outside the Hajj season, it is a site to see on the way between Mina and Arafat.",
        ],
      },
      {
        heading: "Visiting outside Hajj",
        paragraphs: [
          "Access to these sites outside Hajj is set by the authorities and can change, so check the current arrangements before you go. Plan the visit as a half-day with a private car, since the three sites are spread out and the heat is strong in the afternoon.",
        ],
        bullets: [
          "Go early in the morning, and bring water and a hat.",
          "Ask the driver to plan the route Arafat, Muzdalifah and Mina in one loop.",
          "Keep the visit respectful: these are sacred places, even when they are quiet.",
        ],
      },
    ],
  },
];
