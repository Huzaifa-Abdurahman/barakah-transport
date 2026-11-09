import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, CalendarCheck, Clock } from "lucide-react";
import { BLOG_POSTS, BLOG_BY_SLUG, type BlogPost } from "@/data/blog";
import { ROUTE_BY_SLUG } from "@/data/routes";
import { whatsappLink } from "@/config/business";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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
    image: post.image,
    locale: post.lang === "id" ? "id_ID" : post.lang === "ar" ? "ar_SA" : "en_US",
    article: { publishedAt: post.publishedAt, modifiedAt: post.updatedAt },
  });
}

function formatDate(iso: string, locale: string): string {
  const tag = locale === "id" ? "id-ID" : locale === "ar" ? "ar-SA" : "en-GB";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
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
  const isId = post.lang === "id";
  const isAr = post.lang === "ar";
  const waHref = whatsappLink(
    isAr
      ? `السلام عليكم، قرأت مقال "${post.title}" وأرغب في الاستفسار عن الحجز (من الموقع)`
      : isId
        ? `Assalamu alaikum, saya membaca artikel "${post.title}" dan ingin bertanya tentang pemesanan (dari website)`
        : `Assalamu alaikum, I read your guide "${post.title}" and would like to ask about a booking (from website)`,
  );
  const L = isAr
    ? { updated: "آخر تحديث", minRead: "دقائق للقراءة", summary: "الخلاصة", faq: "الأسئلة الشائعة", ask: "تواصل عبر واتساب", book: "احجز أونلاين", bookTitle: "احجز هذه الرحلة مع بركة", more: "مقالات أخرى", credit: "الصورة" }
    : isId
      ? { updated: "Diperbarui", minRead: "menit baca", summary: "Ringkasan", faq: "Pertanyaan yang sering diajukan", ask: "Tanya di WhatsApp", book: "Pesan online", bookTitle: "Pesan perjalanan ini bersama Barakah", more: "Artikel lainnya", credit: "Foto" }
      : { updated: "Updated", minRead: "min read", summary: "Quick answer", faq: "Frequently asked questions", ask: "Ask on WhatsApp", book: "Book online", bookTitle: "Book this trip with Barakah", more: "More guides", credit: "Photo" };

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <Breadcrumbs items={crumbs} />

      <main className="bg-slate-50 pb-24">
        <article lang={post.lang ?? "en"} dir={isAr ? "rtl" : "ltr"} className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
          <header className="mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[var(--yellow-main)]">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mt-3 mb-4">{post.title}</h1>
            <p className="text-sm text-slate-500 flex flex-wrap items-center gap-3">
              <span>
                {L.updated} {formatDate(post.updatedAt, post.lang ?? "en")}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} /> {post.readMinutes} {L.minRead}
              </span>
            </p>
          </header>

          {post.summary && (
            <p className="rounded-2xl border border-[var(--yellow-main)]/40 bg-white p-5 text-slate-800 leading-relaxed mb-8">
              <strong className="block text-xs font-black uppercase tracking-widest text-[var(--yellow-main)] mb-2">{L.summary}</strong>
              {post.summary}
            </p>
          )}

          {post.image && (
            <figure className="mb-10">
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1200}
                height={630}
                className="w-full h-auto rounded-2xl shadow-md"
              />
              {post.imageCredit && <figcaption className="mt-2 text-xs text-slate-500">{post.imageCredit}</figcaption>}
            </figure>
          )}

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

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{L.faq}</h2>
              <div className="space-y-3">
                {post.faqs.map((f) => (
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
          )}

          {route && (
            <aside className="mt-14 bg-white rounded-3xl p-8 border border-slate-200 text-center">
              <h2 className="text-xl font-black text-slate-900 mb-2">{L.bookTitle}</h2>
              <p className="text-slate-600 mb-6">
                See the fares and vehicles for <Link href={`/${route.slug}`} className="underline font-bold">{route.title}</Link>, or
                message us with your dates and group size.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={waHref} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--yellow-main)] text-black hover:bg-yellow-500 font-black px-8 py-4 rounded-xl transition-colors">
                  <MessageCircle size={20} /> {L.ask}
                </a>
                <Link href="/book" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-800 hover:bg-slate-50 font-black px-8 py-4 rounded-xl transition-colors">
                  <CalendarCheck size={20} /> {L.book}
                </Link>
              </div>
            </aside>
          )}
        </article>

        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">{L.more}</h2>
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
