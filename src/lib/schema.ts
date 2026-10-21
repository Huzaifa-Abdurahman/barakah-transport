import { absoluteUrl, SITE_URL } from "@/config/site";
import { BUSINESS } from "@/config/business";
import type { RoutePage } from "@/data/routes";

// Stable @id so every schema block refers to the same business entity.
export const ORG_ID = `${SITE_URL}/#business`;

// Only emit a field when it is confirmed. Null/unknown values are dropped, never
// written as placeholders.
const compact = <T extends Record<string, unknown>>(obj: T): Partial<T> =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== "")) as Partial<T>;

export function organizationSchema() {
  const sameAs = [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.googleBusinessProfileUrl].filter(
    (u): u is string => Boolean(u),
  );
  const address = compact({
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  });
  const geo =
    BUSINESS.geo.lat !== null && BUSINESS.geo.lng !== null
      ? { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng }
      : undefined;

  return compact({
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo%20(2).png"),
    image: absoluteUrl("/og-default.jpg"),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address,
    geo,
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
    openingHours: "Mo-Su 00:00-23:59",
    sameAs,
  });
}

export function serviceSchema(route: RoutePage) {
  // One Offer per vehicle with a confirmed price. Unpriced vehicles are skipped.
  const offers = route.prices
    .filter((p) => p.priceSar !== null)
    .map((p) => ({
      "@type": "Offer",
      name: `${p.vehicle} (${p.seats} seats)`,
      priceCurrency: "SAR",
      price: p.priceSar,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/${route.slug}`),
    }));

  return compact({
    "@context": "https://schema.org",
    "@type": "Service",
    name: route.h1,
    description: route.metaDescription,
    serviceType: route.kind === "ziyarat" ? "Ziyarat tour" : "Taxi transfer",
    provider: { "@id": ORG_ID },
    areaServed: route.areaServed.map((name) => ({ "@type": "City", name })),
    url: absoluteUrl(`/${route.slug}`),
    offers: offers.length ? offers : undefined,
  });
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// AggregateRating is deliberately not emitted. It is only added once real,
// verifiable review data exists (self-serving ratings break Google's guidelines).
