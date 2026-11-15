import type { MetadataRoute } from "next";
import { ROUTES } from "@/data/routes";
import { BLOG_POSTS } from "@/data/blog";
import { LANDING_PAGES, landingAlternates } from "@/data/landing";
import { absoluteUrl, PAGE_UPDATED } from "@/config/site";

type Entry = {
  path: string;
  updated: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  languages?: Record<string, string>; // hreflang alternates, absolute URLs
};

// Every entry is a real page on the www host, returning 200 with no redirect.
// Add a page here (or as a route in data/routes.ts) when you create it.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Entry[] = [
    { path: "/", updated: PAGE_UPDATED.home, changeFrequency: "weekly", priority: 1 },
    { path: "/routes", updated: PAGE_UPDATED.routes, changeFrequency: "weekly", priority: 0.9 },
    { path: "/services", updated: PAGE_UPDATED.services, changeFrequency: "monthly", priority: 0.8 },
    { path: "/our-vehicles", updated: PAGE_UPDATED.fleet, changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", updated: PAGE_UPDATED.about, changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", updated: PAGE_UPDATED.blog, changeFrequency: "weekly", priority: 0.8 },
    { path: "/book", updated: PAGE_UPDATED.book, changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", updated: PAGE_UPDATED.contact, changeFrequency: "monthly", priority: 0.7 },
    { path: "/terms", updated: PAGE_UPDATED.terms, changeFrequency: "yearly", priority: 0.2 },
    { path: "/privacy", updated: PAGE_UPDATED.privacy, changeFrequency: "yearly", priority: 0.2 },
  ];

  const routePages: Entry[] = ROUTES.map((r) => ({
    path: `/${r.slug}`,
    updated: PAGE_UPDATED.route,
    changeFrequency: "monthly",
    priority: r.kind === "route" ? 0.8 : 0.7,
  }));

  const landingPages: Entry[] = LANDING_PAGES.map((p) => ({
    path: `/${p.slug}`,
    updated: PAGE_UPDATED.landing,
    changeFrequency: "monthly",
    priority: 0.8,
    languages: landingAlternates(p),
  }));

  const blogPages: Entry[] = BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    updated: p.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...routePages, ...landingPages, ...blogPages].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: new Date(p.updated),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.languages ? { alternates: { languages: p.languages } } : {}),
  }));
}
