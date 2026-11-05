import { BUSINESS } from "@/config/business";
import { absoluteUrl } from "@/config/site";
import { ROUTES } from "@/data/routes";
import { BLOG_POSTS } from "@/data/blog";

// llms.txt: a plain-text index for AI assistants (ChatGPT, Claude, Gemini, Grok,
// Perplexity) that read websites. Generated from the same data as the site, so new
// routes and posts appear without a manual edit. Generated at build time.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${BUSINESS.name}`,
    "",
    `> Private Umrah and Hajj taxi service in Saudi Arabia, covering Jeddah Airport (JED), Makkah, Madinah and Madinah Airport (MED). Open 24/7. Booking and questions by WhatsApp: +${BUSINESS.whatsapp}.`,
    "",
    "Barakah Transport Service offers private, VIP, shared and personal-driver taxi services. Pickup and drop-off, ziyarat tours and airport transfers are arranged in advance. Fares are agreed before the trip and paid after arrival (drop first, then payment), as set out in the booking confirmation.",
    "",
    "## Route and ziyarat pages (English)",
    ...ROUTES.map((r) => `- [${r.title}](${absoluteUrl(`/${r.slug}`)}): ${r.metaDescription}`),
    "",
    "## Guides and blog",
    `- [Blog index](${absoluteUrl("/blog")}): guides for pilgrims on ziyarat, travel and transport.`,
    ...BLOG_POSTS.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`),
    "",
    "## Company",
    `- [About](${absoluteUrl("/about")})`,
    `- [Contact](${absoluteUrl("/contact")})`,
    `- [Terms and conditions](${absoluteUrl("/terms")})`,
    `- [Privacy policy](${absoluteUrl("/privacy")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
