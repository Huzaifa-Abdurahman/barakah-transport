import type { Metadata } from "next";
import LandingPageView, { landingMetadata } from "@/components/seo/LandingPageView";
import { LANDING_BY_SLUG } from "@/data/landing";

const page = LANDING_BY_SLUG["ar/umrah-transport"];

export const metadata: Metadata = landingMetadata(page);

export default function Page() {
  return <LandingPageView page={page} />;
}
