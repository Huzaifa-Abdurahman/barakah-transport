import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, CalendarCheck, Clock } from "lucide-react";
import { BLOG_POSTS, BLOG_BY_SLUG, type BlogPost } from "@/data/blog";
import { ROUTE_BY_SLUG } from "@/data/routes";
import { whatsappLink } from "@/config/business";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

async function getPost(params: Props["params"]): Promise<BlogPost> {
  const { slug } = await params;
  const post = BLOG_BY_SLUG[slug];
  if (!post) notFound();
  return post;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    article: { publishedAt: post.publishedAt, modifiedAt: post.updatedAt },
  });
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params);
  const route = ROUTE_BY_SLUG[post.relatedRoute];
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];
  const waHref = whatsappLink(`Assalamu alaikum, I read your guide "${post.title}" and would like to ask about a booking (from website)`);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <Breadcrumbs items={crumbs} />

      <main className="bg-slate-50 pb-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
          <header className="mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[var(--yellow-main)]">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mt-3 mb-4">{post.title}</h1>
            <p className="text-sm text-slate-500 flex flex-wrap items-center gap-3">
              <span>Updated {formatDate(post.updatedAt)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} /> {post.readMinutes} min read
              </span>
            </p>
          </header>

          <p className="text-lg text-slate-700 leading-relaxed mb-10">{post.intro}</p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-slate-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-slate-700 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {route && (
            <aside className="mt-14 bg-white rounded-3xl p-8 border border-slate-200 text-center">
              <h2 className="text-xl font-black text-slate-900 mb-2">Book this trip with Barakah</h2>
              <p className="text-slate-600 mb-6">
                See the fares and vehicles for <Link href={`/${route.slug}`} className="underline font-bold">{route.title}</Link>, or
                message us with your dates and group size.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={waHref} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-black px-8 py-4 rounded-xl transition-colors">
                  <MessageCircle size={20} /> Ask on WhatsApp
                </a>
                <Link href="/book" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-800 hover:bg-slate-50 font-black px-8 py-4 rounded-xl transition-colors">
                  <CalendarCheck size={20} /> Book online
                </Link>
              </div>
            </aside>
          )}
        </article>

        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">More guides</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full bg-white rounded-2xl p-5 border border-slate-200 hover:border-[var(--yellow-main)] transition-colors font-bold text-slate-900"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
