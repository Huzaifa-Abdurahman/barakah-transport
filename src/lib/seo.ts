import type { Metadata } from "next";
import { absoluteUrl, SITE_URL } from "@/config/site";
import { BUSINESS } from "@/config/business";

interface PageMetaInput {
  // Short name only. The root layout's title template adds "| Barakah Transport Service".
  title: string;
  description: string;
  path: string; // e.g. "/about"; the canonical is built from this
  image?: string;
  keywords?: string[]; // meta keywords; Google ignores them, other tools read them
  article?: { publishedAt: string; modifiedAt: string }; // sets article Open Graph type and dates
  locale?: string; // Open Graph locale, e.g. "id_ID" for Indonesian pages
  brand?: string; // brand name for the title when it differs from the English default, e.g. Arabic
  languages?: Record<string, string>; // hreflang alternates, absolute URLs keyed by language
}

// Every page gets its own canonical and og:url, built from SITE_URL.
export function pageMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  keywords,
  article,
  locale = "en_US",
  brand,
  languages,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const siteName = brand ?? BUSINESS.name;
  const ogTitle = `${title} | ${siteName}`;
  const ogImages = [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${title}, ${siteName}` }];

  const openGraph: NonNullable<Metadata["openGraph"]> = article
    ? {
        type: "article",
        locale,
        url,
        title: ogTitle,
        description,
        siteName: BUSINESS.name,
        images: ogImages,
        publishedTime: article.publishedAt,
        modifiedTime: article.modifiedAt,
        authors: [BUSINESS.name],
      }
    : {
        type: "website",
        locale,
        url,
        title: ogTitle,
        description,
        siteName: BUSINESS.name,
        images: ogImages,
      };

  return {
    // With an explicit brand, the full title is set as absolute so the root title template is skipped.
    title: brand ? { absolute: ogTitle } : title,
    description,
    keywords,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export { SITE_URL };
