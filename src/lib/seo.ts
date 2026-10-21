import type { Metadata } from "next";
import { absoluteUrl, SITE_URL } from "@/config/site";
import { BUSINESS } from "@/config/business";

interface PageMetaInput {
  // Short name only. The root layout's title template adds "| Barakah Transport Service".
  title: string;
  description: string;
  path: string; // e.g. "/about"; the canonical is built from this
  image?: string;
}

// Every page gets its own canonical and og:url, built from SITE_URL.
export function pageMetadata({ title, description, path, image = "/og-default.jpg" }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: `${title} | ${BUSINESS.name}`,
      description,
      siteName: BUSINESS.name,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS.name}`,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export { SITE_URL };
