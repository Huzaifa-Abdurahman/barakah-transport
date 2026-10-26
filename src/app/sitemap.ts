import type { MetadataRoute } from "next";
import { ROUTES } from "@/data/routes";
import { BLOG_POSTS } from "@/data/blog";
import { absoluteUrl, PAGE_UPDATED } from "@/config/site";

// Every entry is a real page on the www host, returning 200 with no redirect.
// Add a page here (or as a route in data/routes.ts) when you create it.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; updated: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
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

  const routePages = ROUTES.map((r) => ({
    path: `/${r.slug}`,
    updated: PAGE_UPDATED.route,
    changeFrequency: "monthly" as const,
    priority: r.kind === "route" ? 0.8 : 0.7,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    updated: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...routePages, ...blogPages].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: new Date(p.updated),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
