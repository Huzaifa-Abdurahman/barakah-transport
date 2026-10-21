// Canonical host. Vercel serves `www`, so every canonical, og:url, sitemap <loc>
// and robots Sitemap line must use this exact origin (no redirect hops).
export const SITE_URL = "https://www.barakahtransportservice.com";

// The homepage is SITE_URL with no trailing slash. Sitemap, canonical and og:url
// must all use the same string, or Google reads them as different URLs.
export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") return SITE_URL;
  return new URL(path, SITE_URL).toString();
}

// Date each page's content last changed. Bump it when a page is edited so the
// sitemap `lastmod` stays truthful.
export const PAGE_UPDATED = {
  home: "2026-10-21",
  about: "2026-10-21",
  routes: "2026-10-21",
  services: "2026-10-21",
  fleet: "2026-10-21",
  contact: "2026-10-21",
  book: "2026-10-21",
  fares: "2026-10-21",
  terms: "2026-10-21",
  privacy: "2026-10-21",
  route: "2026-10-21",
} as const;
