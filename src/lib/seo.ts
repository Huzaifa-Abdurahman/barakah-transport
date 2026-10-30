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
}

// Every page gets its own canonical and og:url, built from SITE_URL.
export function pageMetadata({ title, description, path, image = "/og-default.jpg", keywords, article }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = `${title} | ${BUSINESS.name}`;
  const ogImages = [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${title}, ${BUSINESS.name}` }];

  const openGraph: NonNullable<Metadata["openGraph"]> = article
    ? {
        type: "article",
        locale: "en_US",
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
        locale: "en_US",
        url,
        title: ogTitle,
        description,
        siteName: BUSINESS.name,
        images: ogImages,
      };

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
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
