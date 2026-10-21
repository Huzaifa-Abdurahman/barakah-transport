# TODO-CLIENT: facts we need from Barakah Transport Service

Every item here is a placeholder or an unverified claim. The site does not show
or emit any of these until the client confirms them. Where a value is needed in
code, it lives in one of the files listed below.

## 1. Business details (`src/config/business.ts`)

- [ ] **Legal name** of the company (currently `null`, so it is left out of schema).
- [ ] **Street address** (currently `null`, so it is left out of schema). Confirm the main base city: the footer and schema now say **Makkah**, but the old footer said **Medina**.
- [ ] **Latitude and longitude** of the base (for LocalBusiness/TaxiService geo).
- [ ] **Google Business Profile URL** (`googleBusinessProfileUrl`).
- [ ] **Confirm the official phone** `+966 53 988 6719` and that WhatsApp uses the same number.
- [ ] **Instagram handle**: it is currently `barakahtransportsrevice` (misspelled). Rename it, then update `BUSINESS.social.instagram`.
- [ ] **Facebook vanity URL**, if one is claimed.

## 2. Trust claims (`src/config/claims.ts`): all disabled until proven

Each claim stays hidden (`enabled: false`). To turn one on, send proof, then set
its `enabled` flag to `true` after review.

| Key | Claim | Proof needed |
| --- | --- | --- |
| `googleRating` | Google Rating 5.0 | Screenshot of the Google Business Profile with the live rating and review count |
| `trustpilotRating` | Trust Pilot Rating 5.0 | Trustpilot business page URL |
| `positiveReviews` | 2,557 Positive Reviews | Review export or profile link that shows the count |
| `saudiMot` | Saudi MOT Certified | Certificate or registration number |
| `hajjUmrahMinistry` | Hajj & Umrah Ministry Approved | Licence or permit number |
| `nusuk` | Nusuk Approved | Nusuk partner confirmation |
| `pilgrimsServed` | 2,500+ pilgrims served | Booking records or the figure from the owner |
| `yearsExperience` | 5+ years of experience | Trade licence or founding date |
| `zeroAccidentDrivers` | Zero-accident certified drivers | Accident record or insurer statement |
| `licensedInsured` | Licensed & Insured | Licence and insurance certificate numbers |
| `gpsTracked` | GPS-tracked vehicles | Tracking provider and confirmation that every vehicle is tracked |

**Removed from the site** because they cannot be verified: "PTA Approved" (PTA
is Pakistan's telecom regulator, so it does not apply here), "Govt. Approved",
"100% Reliability Rate", "50K+ Pilgrims Served", "99% Satisfied Clients",
"2024+ Latest Models", "100% Local Ziyarats", "Professional English-Speaking
Drivers", and the "0% accident ratio" stat on the About page.

## 3. Customer reviews (`src/data/testimonials.ts`)

- [ ] The five reviews that were on the homepage (Abdullah Al-Rashidi, Fatima Malik, Mohammed Hassan, Aisha Patel, Omar Farouq) have **no source**, so they are **not shown**. Send a link to each one on Google or Trustpilot (`source`), or confirm they are real and can be published with consent.
- [ ] Only reviews with a `source` appear on the site and in the schema.

## 4. Fares (`src/data/routes.ts`)

Every fare is `null`, so the site says "Price on request via WhatsApp". For each route, send the fixed fare per vehicle (SAR):

- [ ] Jeddah Airport → Makkah (6 vehicles)
- [ ] Makkah → Madinah (6 vehicles)
- [ ] Madinah → Makkah (6 vehicles)
- [ ] Jeddah Airport → Madinah (6 vehicles)
- [ ] Madinah Airport → hotel (6 vehicles)
- [ ] Makkah ziyarat tour (6 vehicles, or per-tour price)
- [ ] Madinah ziyarat tour (6 vehicles, or per-tour price)

Once a fare is set, the title ("From SAR X") and the offer schema update automatically.

## 5. Distances and drive times (`src/data/routes.ts`)

These are **approximate** values from public geography, not measured by the client.
Confirm or correct them:

- [ ] Jeddah Airport → Makkah: ~80 km, ~1 hour
- [ ] Makkah → Madinah: ~450 km, ~4–5 hours
- [ ] Madinah → Makkah: ~450 km, ~4–5 hours
- [ ] Jeddah Airport → Madinah: ~420 km, ~4–5 hours

## 6. Service policies stated in FAQ answers (`src/data/routes.ts`)

Each of these answers commits the business to a policy. Confirm or change it:

- [ ] Can we stop at the Miqat? (currently: "ask us, we will confirm")
- [ ] Multi-vehicle groups: can we arrange more than one vehicle?
- [ ] Hotel-to-airport departure transfers in Madinah
- [ ] Cave Hira route and fitness guidance wording
- [ ] Night pickups and 24/7 operation (the site already states 24/7)

## 7. Legal copy (`/terms`, `/privacy`)

- [ ] Replace every `TODO-CLIENT` section with the approved wording for bookings, fares and payment, cancellations, liability, personal data, sharing, retention and passenger rights. Have a qualified professional review it before launch.

## 8. Images

- [ ] `public/og-default.jpg` (1200×630) was generated from the existing fleet photo and text. Replace it with a real branded fleet photo if the client has one.
- [ ] Hero and fleet PNGs were re-exported at web sizes (about 1000 px wide). Send the original, full-resolution files if print use is needed later.

## 9. Not yet done (needs client input or a separate task)

- [ ] **Arabic and Urdu pages** (`/ar/`, `/ur/`): not built. Translations must be checked by a native speaker. Do not publish machine text.
- [ ] **`/fares` hub page**: not built, because it only makes sense once fares are confirmed.
- [ ] **GA4 measurement ID** (`NEXT_PUBLIC_GA_ID`): analytics and conversion events are not wired yet.
- [ ] **Guides and blog** (`/guides`): not built. Eight draft outlines are still to be written.
- [ ] **Google Business Profile**: create or claim it (category: Taxi service) and use the same name, phone and address as `BUSINESS`.
