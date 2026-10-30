// Transport posts: roads between the holy cities, airport transfers, hotel drop-offs
// and private taxi booking. Distances and times are approximate. Fares change, so
// point readers to the route pages or WhatsApp for current prices.

import type { BlogPost } from "./blog";

export const TRANSPORT_POSTS: BlogPost[] = [
  {
    slug: "makkah-to-madinah-road-guide",
    title: "Makkah to Madinah Road: Time and Stops",
    description:
      "The Makkah to Madinah road trip explained: about 450 km and 4 to 5 hours, the Miqat stop on the way, rest stops, and what to ask your private driver.",
    category: "Transport Guide",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "taxi from madinah to makkah",
    keywords: ["taxi from madinah to makkah", "taxi from makkah to madinah", "makkah to madinah road", "madinah to makkah distance", "makkah madinah highway"],
    relatedRoute: "makkah-to-madinah-taxi",
    intro:
      "The road between Makkah and Madinah is about 450 km. Under normal traffic the drive takes about 4 to 5 hours, but rest stops, prayer times and traffic can add time. Knowing the route in advance makes the trip easier for families and elderly travellers.",
    sections: [
      {
        heading: "Distance and time",
        paragraphs: [
          "The trip is about 450 km in each direction. Expect 4 to 5 hours of driving, plus any stops. Long weekends, the Hajj season and school holidays can make it slower, so leave earlier when the roads are busy.",
        ],
      },
      {
        heading: "The stops along the way",
        paragraphs: [
          "There are fuel stations and rest areas on the main road, with shops and washrooms. The Miqat for pilgrims coming from Madinah is on the route, near Madinah. If you want to enter ihram there, tell the driver before you book, so the stop is planned.",
        ],
        bullets: [
          "Plan one rest stop about every two hours for children and elderly passengers.",
          "Keep water, snacks and a small first-aid kit in the car.",
          "Ask the driver where the prayer stops are, so you can pray on time.",
        ],
      },
      {
        heading: "The Badr option",
        paragraphs: [
          "Some drivers offer a route that passes Badr, the site of the Battle of Badr. It is a different route, not always shorter, so ask whether it is included and how much extra time it adds before you agree to it.",
        ],
      },
      {
        heading: "What to confirm with your driver",
        paragraphs: [
          "A clear agreement at the start prevents surprises on the road.",
        ],
        bullets: [
          "The total fare, and whether it covers tolls, waiting time and stops.",
          "The pickup address in Makkah and the drop-off address in Madinah.",
          "The vehicle size, and whether it fits all your bags.",
          "Whether the driver will help with luggage at both ends.",
        ],
      },
    ],
  },
  {
    slug: "private-taxi-for-umrah-booking-guide",
    title: "Book a Private Taxi for Umrah Online",
    description:
      "A step-by-step guide to booking a private taxi for Umrah online or on WhatsApp: what to send, what to confirm, and how to avoid common booking mistakes.",
    category: "Travel Tips",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "umrah taxi online",
    keywords: ["umrah taxi online", "private taxi for umrah", "book taxi umrah", "umrah taxi booking", "taxi booking"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Booking a private taxi for Umrah is simple once you know what to send and what to confirm. This guide walks through the steps, from your first message to the driver's arrival.",
    sections: [
      {
        heading: "Step 1: send the trip details",
        paragraphs: [
          "The company needs the basics to quote a fare. Send them in one message to save time.",
        ],
        bullets: [
          "Pickup point and time, for example Jeddah Airport arrivals, or your hotel address in Makkah or Madinah.",
          "Drop-off point and date.",
          "Number of adults and children, and the number of large and small bags.",
          "Your flight number, if you are arriving or departing by air.",
        ],
      },
      {
        heading: "Step 2: choose the vehicle",
        paragraphs: [
          "Choose the vehicle by the number of people and bags, not only the number of seats. A car that seats five may not fit five large suitcases. Ask the company to confirm the luggage space.",
        ],
      },
      {
        heading: "Step 3: confirm the fare in writing",
        paragraphs: [
          "A fixed fare agreed in writing protects you from surprises on the day. Ask what it includes: tolls, waiting time at the airport, stops on the way and night charges.",
        ],
      },
      {
        heading: "Step 4: confirm the booking",
        paragraphs: [
          "Once the fare is agreed, ask for a written confirmation with the pickup time, the driver's name, the vehicle and a phone number. Keep this confirmation on your phone.",
        ],
        bullets: [
          "Check the time zone and the pickup time for late-night flights.",
          "Ask for a meet and greet at arrivals, so you do not have to find the driver in the crowd.",
          "Ask the company to confirm the drivers' licences and the vehicle registration.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        paragraphs: [
          "The most common problems come from unclear details rather than the trip itself.",
        ],
        bullets: [
          "Booking without confirming the number of bags.",
          "Agreeing a price by voice only, with no written confirmation.",
          "Forgetting to send the flight number, which can cause a missed pickup if the flight is delayed.",
        ],
      },
    ],
  },
  {
    slug: "hotel-to-haram-taxi-makkah",
    title: "Taxi from Makkah Hotel to the Haram",
    description:
      "How to plan a taxi from your Makkah hotel to Masjid al-Haram: the drop-off points near the gates, road closures at busy times and what to ask your driver.",
    category: "Travel Tips",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "bab makkah taxi",
    keywords: ["bab makkah taxi", "taxi from hotel to haram", "makkah hotel to haram taxi", "taxi near haram", "taxi service in makkah"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Many pilgrims use taxis to go between their hotel and the Haram several times a day. The roads near the Haram are busy and sometimes closed, so the drop-off point matters more than the distance.",
    sections: [
      {
        heading: "Why the drop-off point matters",
        paragraphs: [
          "The Haram has many gates, and roads close to it are often restricted at busy times, such as Friday prayer and the Ramadan nights. A driver may not be able to reach the gate closest to your hotel. Agreeing the drop-off point in advance saves a long walk in the heat.",
        ],
      },
      {
        heading: "Choosing a gate",
        paragraphs: [
          "Ask the driver which gate is closest to your hotel and whether it is open at that time. Save the gate name on your phone, so you can show it to the driver or a staff member.",
        ],
        bullets: [
          "Name the gate you want when you book, for example a gate near your hotel's side of the Haram.",
          "Ask for a drop-off point slightly away from the crowd if you travel with elderly family.",
          "Agree a pickup point and time for the return journey before you get out.",
        ],
      },
      {
        heading: "Planning the trips",
        paragraphs: [
          "If you make several trips a day, a driver on call is often better than booking each trip separately. Agree the number of trips and the fare for the day, so you are not negotiating at every journey.",
        ],
        bullets: [
          "Keep the hotel card and the hotel's address written in Arabic and English.",
          "Leave extra time for prayer times, when traffic is heavier.",
          "Save the driver's number and the hotel's number in your phone.",
        ],
      },
    ],
  },
  {
    slug: "madinah-airport-taxi-to-hotel-guide",
    title: "Madinah Airport Taxi to Your Hotel",
    description:
      "A guide to taking a taxi from Madinah Airport (MED) to your hotel near Masjid al-Nabawi: meet and greet, luggage, flight tracking and what to confirm before you book.",
    category: "Transport Guide",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "madinah airport taxi",
    keywords: ["madinah airport taxi", "madinah airport to hotel", "taxi madinah airport", "madinah airport transfer", "madinah airport taxi service"],
    relatedRoute: "madinah-airport-transfer",
    intro:
      "Prince Mohammad bin Abdulaziz International Airport (MED) is outside the city, so the transfer to your hotel near the Prophet's Mosque is a drive, not a short walk. A pre-booked transfer is the simplest way to start your stay in Madinah.",
    sections: [
      {
        heading: "Before you land",
        paragraphs: [
          "Send your flight number and expected landing time when you book. A driver who tracks your flight can adjust the pickup if the flight is early or late.",
        ],
      },
      {
        heading: "At the airport",
        paragraphs: [
          "Ask for a meet and greet at arrivals, with the driver's name on a sign. This is useful after a long flight, when you are tired and carrying luggage. Keep your phone switched on and the driver's number ready.",
        ],
      },
      {
        heading: "Luggage and vehicle",
        paragraphs: [
          "Check how many bags you have, and tell the company before you travel. Large families often need a van rather than a saloon car. Ask the driver to help with the luggage at the airport and at the hotel.",
        ],
      },
      {
        heading: "Confirm before you book",
        paragraphs: [
          "The details below prevent most problems on arrival day.",
        ],
        bullets: [
          "The fixed fare, and whether it includes waiting time at the airport.",
          "The hotel name and address, and the drop-off point in front of the hotel.",
          "The return transfer to the airport, if you need it, booked at the same time.",
          "The phone numbers of the company and the driver.",
        ],
      },
    ],
  },
  {
    slug: "private-taxi-vs-ride-hailing-saudi",
    title: "Private Taxi vs Ride-Hailing in Saudi",
    description:
      "Compare a pre-booked private taxi with ride-hailing apps in Saudi Arabia for Umrah trips: fares, luggage, group size, night travel and reliability.",
    category: "Transport Guide",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 6,
    primaryKeyword: "saudi taxi",
    keywords: ["saudi taxi", "taxi saudi arabia", "private taxi makkah", "uber makkah", "taxi booking saudi arabia"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Ride-hailing apps are common in Saudi Arabia, and many pilgrims use them for short trips in a city. For longer journeys between Jeddah, Makkah and Madinah, a pre-booked private taxi often makes more sense. This guide compares the two.",
    sections: [
      {
        heading: "Where ride-hailing apps work well",
        paragraphs: [
          "Apps are quick and easy for a single person with light luggage, travelling a short distance within one city. Prices are shown in the app before you confirm, and you can see the driver's details.",
        ],
      },
      {
        heading: "Where a private taxi works better",
        paragraphs: [
          "For families, groups, long journeys and heavy luggage, a pre-booked private car is usually more practical.",
        ],
        bullets: [
          "A fixed fare agreed in advance, rather than a fare that can change with demand.",
          "A vehicle sized for your group and bags, and the option of a van for larger families.",
          "Meet and greet at the airport, and a driver who tracks your flight.",
          "One driver for the whole day, for ziyarat tours and multiple stops.",
          "A booking confirmation you can show at check-in or at a checkpoint.",
        ],
      },
      {
        heading: "Night arrivals and departures",
        paragraphs: [
          "Late arrivals are a common reason to book in advance. A pre-booked driver knows your flight time and is waiting for you, which is easier after a long journey than searching for a car at night.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Use an app for a short, single trip with light luggage. Book a private taxi for airport transfers, intercity trips, ziyarat tours and any journey with a group or many bags. When in doubt, compare the total cost for the whole group, including bags and waiting time.",
        ],
      },
    ],
  },
  {
    slug: "makkah-to-jeddah-airport-taxi-departure",
    title: "Makkah to Jeddah Airport Taxi Guide",
    description:
      "Plan your departure from Makkah to Jeddah Airport by taxi: travel time, how early to leave, luggage limits and what to confirm with your driver the night before.",
    category: "Transport Guide",
    publishedAt: "2026-10-30",
    updatedAt: "2026-10-30",
    readMinutes: 5,
    primaryKeyword: "mecca to jeddah airport",
    keywords: ["mecca to jeddah airport", "makkah to jeddah airport", "makkah to jeddah taxi", "jeddah airport taxi", "taxi from makkah to jeddah airport"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    intro:
      "Leaving Makkah for home is the trip most pilgrims worry about most. The drive to Jeddah Airport is about 80 km, but the time you need depends on your flight, the traffic and your check-in. Planning the departure carefully avoids missed flights.",
    sections: [
      {
        heading: "How long the trip takes",
        paragraphs: [
          "The road from Makkah to Jeddah Airport is about 80 km, and under normal traffic it takes about 1 to 1.5 hours. Traffic is heavier at peak times and around Friday, so leave with a margin.",
        ],
      },
      {
        heading: "How early to leave",
        paragraphs: [
          "Check your airline's recommended arrival time for international flights and work back from it. Add the drive time and a margin for traffic and rest stops. Most pilgrims find it safer to leave earlier than they think.",
        ],
        bullets: [
          "Ask your airline for the recommended arrival time before you book the taxi.",
          "Add at least 30 to 60 minutes of margin for traffic.",
          "Book the pickup time with your hotel's check-out time in mind.",
        ],
      },
      {
        heading: "Luggage and documents",
        paragraphs: [
          "Airline baggage limits apply to the bags you take to the airport, and the taxi has to carry them all. Weigh your bags at the hotel and tell the company the total number of bags before the day. Keep passports, tickets and the booking confirmation in your hand luggage.",
        ],
      },
      {
        heading: "Confirm the night before",
        paragraphs: [
          "Confirm the pickup time, the address and the vehicle the evening before. Send your flight number again, so the driver knows the departure details.",
        ],
        bullets: [
          "Pickup time and address, with the hotel's name.",
          "Flight number and departure time.",
          "Phone numbers for you and the driver.",
        ],
      },
    ],
  },
];
