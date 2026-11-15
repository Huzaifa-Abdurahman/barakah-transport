import type { Metadata } from "next";
import Link from "next/link";
import { Tajawal } from "next/font/google";
import { CheckCircle2, MessageCircle, CalendarCheck } from "lucide-react";
import { LANDING_PAGES, landingAlternates, type LandingPage } from "@/data/landing";
import { ROUTE_BY_SLUG } from "@/data/routes";
import { BLOG_BY_SLUG } from "@/data/blog";
import { LANG_NAME, ROUTE_LABEL, UI } from "@/data/landing-labels";
import { whatsappLink } from "@/config/business";
import { absoluteUrl } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { ORG_ID, breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

// Arabic text needs an Arabic font; the site's own fonts have no Arabic glyphs.
// Loaded only for the landing pages that use this component.
const arabicFont = Tajawal({ subsets: ["arabic", "latin"], weight: ["400", "500", "700", "900"], display: "swap" });

const LOCALE = { en: "en_US", ar: "ar_SA", id: "id_ID" } as const;
// Arabic titles carry the Arabic brand name. Other languages keep the English brand.
const BRAND = { en: undefined, ar: "بركة للنقل", id: undefined } as const;

export function landingMetadata(page: LandingPage): Metadata {
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.keywords,
    locale: LOCALE[page.lang],
    brand: BRAND[page.lang],
    languages: landingAlternates(page),
  });
}

// Service schema without "offers": no fare is published on these pages.
function serviceSchema(page: LandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    serviceType: page.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: page.areaServed.map((name) => ({ "@type": "City", name })),
    url: absoluteUrl(`/${page.slug}`),
    inLanguage: page.lang,
  };
}

export default function LandingPageView({ page }: { page: LandingPage }) {
  const L = UI[page.lang];
  const isAr = page.lang === "ar";
  const crumbs = [
    { name: L.home, href: "/" },
    { name: page.h1, href: `/${page.slug}` },
  ];
  const waHref = whatsappLink(page.whatsappText);
  const routes = page.relatedRoutes
    .map((s) => ({ slug: s, title: ROUTE_LABEL[page.lang][s] ?? ROUTE_BY_SLUG[s]?.title }))
    .filter((r): r is { slug: string; title: string } => Boolean(r.title));
  const guides = page.relatedGuides.map((s) => BLOG_BY_SLUG[s]).filter(Boolean);
  // Other language versions of this page, for the language links under the hero.
  const others = LANDING_PAGES.filter((p) => p.group === page.group && p.lang !== page.lang);
  // Uppercase and letter-spacing break Arabic letter joins, so they apply to English only.
  const caps = isAr ? "" : " uppercase tracking-tight";

  return (
    <div lang={page.lang} dir={isAr ? "rtl" : "ltr"} className={isAr ? arabicFont.className : undefined}>
      <JsonLd data={serviceSchema(page)} />
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <Breadcrumbs items={crumbs} />

      <main className="bg-slate-50 pb-24">
        {/* Hero: H1, intro and CTAs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
          <h1 className={`text-3xl md:text-5xl font-black text-slate-900 mb-5${caps}`}>{page.h1}</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">{page.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-black px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle size={20} /> {L.getFare}
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-800 hover:bg-slate-50 font-black px-8 py-4 rounded-xl transition-colors"
            >
              <CalendarCheck size={20} /> {L.bookOnline}
            </Link>
          </div>
          {others.length > 0 && (
            <p className="mt-6 text-sm text-slate-500">
              {L.alsoIn}:{" "}
              {others.map((o, i) => (
                <span key={o.slug}>
                  {i > 0 && " · "}
                  <Link href={`/${o.slug}`} className="underline font-bold text-slate-700 hover:text-[var(--yellow-main)]">
                    {LANG_NAME[o.lang]}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <p className="rounded-2xl border border-[var(--yellow-main)]/40 bg-white p-6 text-slate-800 leading-relaxed">
            <strong className="block text-xs font-black uppercase tracking-widest text-[var(--yellow-main)] mb-2">{L.quick}</strong>
            {page.summary}
          </p>
        </section>

        {/* Sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-black text-slate-900 mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-slate-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-slate-700 leading-relaxed">
                      <CheckCircle2 size={18} className="text-[var(--yellow-main)] shrink-0 mt-1" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{L.faq}</h2>
          <div className="space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900 list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-[var(--yellow-main)] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-slate-600 mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related routes and guides, as internal links */}
        {routes.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">{L.routes}</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {routes.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="block h-full bg-white rounded-2xl p-5 border border-slate-200 hover:border-[var(--yellow-main)] transition-colors font-bold text-slate-900"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {guides.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">{L.readNext}</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/blog/${g.slug}`}
                    className="block h-full bg-white rounded-2xl p-5 border border-slate-200 hover:border-[var(--yellow-main)] transition-colors font-bold text-slate-900"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{L.finalTitle}</h2>
            <p className="text-slate-300 mb-8">{L.finalText}</p>
            <a
              href={waHref}
              className="inline-flex items-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-400 font-black px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle size={20} /> {L.chat}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
