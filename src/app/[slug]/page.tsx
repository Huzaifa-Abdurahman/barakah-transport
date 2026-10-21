import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, CalendarCheck, MapPin } from "lucide-react";
import { ROUTES, ROUTE_BY_SLUG, type RoutePage } from "@/data/routes";
import { TESTIMONIALS } from "@/data/testimonials";
import { BUSINESS, whatsappLink } from "@/config/business";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

// Only slugs in ROUTES exist. Anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }));
}

type Props = { params: Promise<{ slug: string }> };

async function getRoute(params: Props["params"]): Promise<RoutePage> {
  const { slug } = await params;
  const route = ROUTE_BY_SLUG[slug];
  if (!route) notFound();
  return route;
}

// Add "From SAR X" only when at least one vehicle has a confirmed price.
// Otherwise the title stays price-free. Never show a made-up number.
function lowestPrice(route: RoutePage): number | null {
  const known = route.prices.map((p) => p.priceSar).filter((p): p is number => p !== null);
  return known.length ? Math.min(...known) : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await getRoute(params);
  const low = lowestPrice(route);
  const title = low === null ? route.title : `${route.title} — From SAR ${low}`;
  return pageMetadata({ title, description: route.metaDescription, path: `/${route.slug}` });
}

export default async function RoutePageView({ params }: Props) {
  const route = await getRoute(params);
  const related = route.relatedSlugs.map((s) => ROUTE_BY_SLUG[s]).filter(Boolean);
  const reviews = TESTIMONIALS.filter((t) => t.source);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Routes", href: "/routes" },
    { name: route.title, href: `/${route.slug}` },
  ];
  const waHref = whatsappLink(route.whatsappText);

  return (
    <>
      <JsonLd data={serviceSchema(route)} />
      <JsonLd data={faqSchema(route.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href })))} />

      <Breadcrumbs items={crumbs} />

      <main className="bg-slate-50 pb-24">
        {/* 1. H1, intro and primary CTAs */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.35em] font-black text-xs border border-[var(--yellow-main)]/30 px-5 py-2 rounded-full inline-block mb-6">
            {route.kind === "ziyarat" ? "Ziyarat Tour" : "Private Transfer"}
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-5">{route.h1}</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">{route.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-black px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle size={20} /> Get your price on WhatsApp
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-800 hover:bg-slate-50 font-black px-8 py-4 rounded-xl transition-colors"
            >
              <CalendarCheck size={20} /> Book online
            </Link>
          </div>
        </section>

        {/* 2. Price table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Fares by vehicle</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-600 uppercase text-xs tracking-widest">
                <tr>
                  <th className="px-5 py-4 font-black">Vehicle</th>
                  <th className="px-5 py-4 font-black">Seats</th>
                  <th className="px-5 py-4 font-black">Luggage</th>
                  <th className="px-5 py-4 font-black">Fare</th>
                </tr>
              </thead>
              <tbody>
                {route.prices.map((p) => (
                  <tr key={p.vehicle} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-bold text-slate-900">{p.vehicle}</td>
                    <td className="px-5 py-4 text-slate-600">{p.seats}</td>
                    <td className="px-5 py-4 text-slate-600">{p.luggage} bags</td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {p.priceSar === null ? (
                        <a href={waHref} className="text-[var(--yellow-main)] hover:underline">
                          Price on request via WhatsApp
                        </a>
                      ) : (
                        `SAR ${p.priceSar}`
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Distance, drive time and what is included */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-[var(--yellow-main)]" /> Journey
            </h2>
            <ul className="space-y-2 text-slate-600">
              {route.distanceKm !== null && <li>Distance: approx. {route.distanceKm} km</li>}
              {route.durationText !== null && <li>Drive time: {route.durationText}</li>}
              <li>Service area: {route.areaServed.join(", ")}</li>
              <li>Available 24 hours a day, 7 days a week</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">What is included</h2>
            <ul className="space-y-2">
              {route.includes.map((item) => (
                <li key={item} className="flex gap-2 text-slate-600">
                  <CheckCircle2 size={18} className="text-[var(--yellow-main)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Ziyarat stops (ziyarat pages only) */}
        {route.stops && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Stops on this tour</h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {route.stops.map((stop, i) => (
                <li key={stop.name} className="bg-white rounded-2xl p-5 border border-slate-200">
                  <div className="font-black text-slate-900">
                    {i + 1}. {stop.name}
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{stop.note}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* 5. FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {route.faqs.map((f) => (
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

        {/* 6. Reviews: only those with a verifiable source */}
        {reviews.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">What passengers say</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {reviews.map((r) => (
                <blockquote key={r.name} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <p className="text-slate-700">&ldquo;{r.text}&rdquo;</p>
                  <footer className="mt-3 text-sm text-slate-500">
                    {r.name} · <a href={r.source ?? "#"} className="underline">{r.date}</a>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {/* 7. Related routes */}
        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Related routes</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
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

        {/* 8. Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">Ready to travel with Barakah?</h2>
            <p className="text-slate-300 mb-8">
              Message us with your pickup, drop-off, date and group size. We are online 24/7.
            </p>
            <a
              href={waHref}
              className="inline-flex items-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-400 font-black px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <p className="text-slate-500 text-xs mt-6">
              {BUSINESS.name} · {BUSINESS.phone}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
