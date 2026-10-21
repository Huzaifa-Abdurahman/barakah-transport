import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/data/routes";

// Links every route and ziyarat page from a hub page, so each one is reachable
// by internal link as well as by the sitemap.
export default function RouteLinks() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="route-links-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.35em] font-black text-xs">Routes &amp; Tours</span>
          <h2 id="route-links-heading" className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mt-3">
            Popular Routes and Ziyarat Tours
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROUTES.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/${r.slug}`}
                className="group flex h-full items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:border-[var(--yellow-main)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <span className="font-black text-slate-900">{r.title}</span>
                <ArrowRight size={18} className="text-[var(--yellow-main)] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
