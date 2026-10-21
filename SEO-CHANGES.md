# SEO-CHANGES: what changed and what is left

Audit date: 20 Oct 2026. Implementation pass: 21 Oct 2026. Branch: `seo-implementation`.

## 1. Indexing fix (Phase 1)

**Root cause:** every canonical, `og:url` and sitemap `<loc>` pointed to the bare
domain, but the site redirects everything to `www`. So every URL Google was
given was a redirect.

**Fixed:**

- One canonical host, `SITE_URL = https://www.barakahtransportservice.com`, in `src/config/site.ts`.
- Every page sets its own canonical through `pageMetadata()` in `src/lib/seo.ts`. The root layout no longer sets a canonical, so no page inherits the homepage's.
- `og:url` and `twitter` images are built from `SITE_URL`.
- `src/app/sitemap.ts` is generated from the static page list and the route data. `lastModified` comes from `PAGE_UPDATED` in `src/config/site.ts`, not one timestamp for everything.
- `src/app/robots.ts` points `Sitemap:` at the `www` host and keeps `Disallow: /api/`.
- `vercel.json` adds a permanent host redirect from the bare domain to `www`.
- The sitemap no longer lists `/locations`, which does not exist. It now lists `/book`, which does.

**Checked locally on the production build:** all 16 sitemap URLs return 200 and each
one's canonical matches its `<loc>` exactly.

## 2. New route, ziyarat and legal pages (Phase 3)

Each route is one entry in `src/data/routes.ts`. The template is `src/app/[slug]/page.tsx`.
It runs `generateStaticParams`, sets `dynamicParams = false` (unknown slugs are 404), and renders
the eight template blocks in the brief's order.

| URL | Type |
| --- | --- |
| `/jeddah-airport-to-makkah-taxi` | Route |
| `/makkah-to-madinah-taxi` | Route |
| `/madinah-to-makkah-taxi` | Route |
| `/jeddah-airport-to-madinah-taxi` | Route |
| `/madinah-airport-transfer` | Route |
| `/makkah-ziyarat-tour` | Ziyarat |
| `/madinah-ziyarat-tour` | Ziyarat |
| `/terms` | Legal (draft, marked DRAFT) |
| `/privacy` | Legal (draft, marked DRAFT) |

- Prices are `null` in the data, so each page says "Price on request via WhatsApp" and the title carries no price. The title adds "From SAR X" automatically once a fare is entered.
- Vehicle seats and luggage come from the existing Our Vehicles page. Ziyarat stops come from the existing site copy.
- The WhatsApp link is pre-filled with the page name (`?text=`), so the client can see which page sent each lead.
- Route and ziyarat pages link to each other, and `/routes`, `/services` and the homepage all link to every route through a shared `RouteLinks` section.
- The footer links to the real route pages instead of `/services`, and no longer links to `#` or `/locations`.

**Not built:** `/fares` (it only makes sense with confirmed prices) and `/fleet` (the existing `/our-vehicles` page is kept, with its own canonical, because it is linked from the navigation).

## 3. Structured data (Phase 4)

- **Every page:** `TaxiService` (the business entity, `@id` = `https://www.barakahtransportservice.com/#business`) in the root layout, built from `BUSINESS`. Fields still unconfirmed (`legalName`, street, geo, GBP) are left out, not written as placeholders.
- **Route and ziyarat pages:** `Service` (with one `Offer` per vehicle that has a confirmed price, so none yet), `FAQPage` built from the visible FAQ, and `BreadcrumbList`.
- **No `AggregateRating`.** It is only added once there is verifiable review data.
- All JSON-LD blocks were parsed with `JSON.parse` on the built pages.

**Not yet run:** the Rich Results Test and the Schema.org validator. Both need the public URL, so run them after deploy.

## 4. Copy, trust and performance (Phase 2, partial)

- Typo fixed: "Barakh" → "Barakah".
- Unverified claims moved to `src/config/claims.ts` with `enabled: false`. Nothing shows until proof is filed (see `TODO-CLIENT.md`).
- Removed from the site because nothing in the repo backs them up: "PTA Approved" (a Pakistan regulator, not relevant in Saudi Arabia), "Govt. Approved", "100% Reliability Rate", "50K+ pilgrims", "99% satisfied", "2024+ latest models", "100% local ziyarats", "0% accident ratio", "5+ years", "5.0 Google rating", "1000+ pilgrims".
- Homepage stats now use facts the site already states: 24/7 service, 9 vehicles, 4–12 seat sizes, 2 airports, 11 ziyarat sites, 3 cities.
- Testimonials: the five named reviews had no source, so they are held in `src/data/testimonials.ts` and not shown. The section now shows only testimonials with a `source` and hides itself when there are none.
- Footer address and contact come from `BUSINESS`. The default is Makkah, flagged TODO.
- Legal links point at `/terms` and `/privacy`.
- **Images:** the oversized PNGs were re-exported at web sizes under the same filenames (`public/` went from 12 MB to 2.9 MB). The logo went from 2.3 MB to 23 KB. The homepage HTML is now about 82 KB.
- `public/og-default.jpg` (1200×630) was generated from the existing fleet photo.
- Unused Navbar, Footer and WhatsApp imports were removed from the `/book` and `/our-vehicles` pages. The root layout already renders them once.
- `/our-vehicles` showed the literal text `**Blessed Journey**` because of stray markdown asterisks, in both the metadata and the page body. Both are fixed.

**Not done (Phase 2):**

- `next/image` conversion. Most images still use `<img>`. The re-export gets most of the weight win, but the brief's `priority` / `sizes` work is still open.
- Per-page OG images beyond the shared default.

## 5. Not started

- **Phase 5, Arabic and Urdu** (`/ar/`, `/ur/`, `hreflang`). Needs native-speaker translation review. Nothing was machine-translated and published.
- **Phase 6, analytics.** GA4 via `NEXT_PUBLIC_GA_ID`, conversion events, Vercel Analytics and Speed Insights.
- **Phase 7, guides.** `/guides` with the eight draft outlines.
- **Services hub copy and page-level content depth.** Route pages are short and factual. Add more depth only from client-confirmed facts.

## 6. Known open items in existing copy

- The "Complete Reliability" list item in `WhyUs.tsx` is unverified and was left as-is for review.
- The Services section on the homepage and the services page contain marketing copy that was not checked line by line for claims.
- The Instagram handle is misspelled in the Instagram URL, pending rename (see `TODO-CLIENT.md`).

## 7. Manual steps after deploy

1. **Vercel domain settings:** confirm the bare domain redirect is a single **301/308** to `www`. The live bare domain currently returns **307**, which is temporary. `vercel.json` now asks for a permanent redirect. If the domain settings still win, set the bare domain's redirect to permanent there. Check with `curl -sI https://barakahtransportservice.com/`.
2. **Google Search Console:**
   - verify the **Domain property** (DNS)
   - submit `https://www.barakahtransportservice.com/sitemap.xml`
   - use URL Inspection → Request Indexing for the homepage and each route page
3. **Bing Webmaster Tools:** import the site from Search Console.
4. **Google Business Profile:** create or claim the profile with category "Taxi service", use the same name, phone and address as `BUSINESS`, and link the website.
5. **Rich Results Test** and **Schema Validator** on the homepage, one route page, one ziyarat page.
6. **PageSpeed / Lighthouse (mobile)** on `/` and `/jeddah-airport-to-makkah-taxi`. Targets: Performance ≥ 85, SEO = 100, LCP < 2.5 s. Not measured yet: this pass only ran a local production build.
7. **Disavow** the auto-generated spam domains (.store, .space, .shop, .site, .online, .website) once Search Console has data. Optional.
8. **Social:** rename the Instagram handle, claim a Facebook vanity URL, and update `BUSINESS.social`.

## 8. Verification done in this pass

- `npx tsc --noEmit`: passes.
- `npm run build`: passes (Next.js 16.1.6, Turbopack).
- Local production server: all sitemap URLs return 200 and match their canonical. Each page has one canonical and a matching `og:url`. Robots output is correct. JSON-LD parses on the homepage and both sample route pages.

**Not verified:** Lighthouse scores, the Rich Results Test, rendering in a browser at phone width, and the live `www` host after deploy.
