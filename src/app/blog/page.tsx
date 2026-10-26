import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Ziyarat, Travel and Umrah Guides",
  description:
    "Guides for pilgrims: ziyarat places in Makkah and Madinah, airport transfers, travel between the holy cities and practical Umrah tips from Barakah Transport Service.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <Breadcrumbs items={crumbs} />

      <main className="bg-slate-50 pb-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
          <span className="text-[var(--yellow-main)] uppercase tracking-[0.35em] font-black text-xs border border-[var(--yellow-main)]/30 px-5 py-2 rounded-full inline-block mb-6">
            Pilgrim Guides
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-5">Blog</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Practical guides for pilgrims on ziyarat sites, travel between the holy cities and planning your Umrah transport.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-white rounded-2xl p-6 border border-slate-200 hover:border-[var(--yellow-main)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-300"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--yellow-main)]">{post.category}</span>
                  <h2 className="text-xl font-black text-slate-900 mt-3 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-bold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} /> {post.readMinutes} min read
                    </span>
                    <ArrowRight size={18} className="text-[var(--yellow-main)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
