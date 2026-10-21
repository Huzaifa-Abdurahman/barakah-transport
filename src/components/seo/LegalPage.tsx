import Link from "next/link";
import { BUSINESS } from "@/config/business";

// Shared shell for the placeholder legal pages. Every section is a TODO until a
// client-approved version exists (TODO-CLIENT.md).
export default function LegalPage({ title, sections }: { title: string; sections: { heading: string; body: string }[] }) {
  return (
    <main className="bg-slate-50 min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="mb-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm font-bold text-amber-800">
          DRAFT: placeholder text. The client must review and replace it before launch.
        </p>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-8">{title}</h1>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-black text-slate-900 mb-2">{s.heading}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-slate-500">
          Questions? Contact {BUSINESS.name} at{" "}
          <a href={`mailto:${BUSINESS.email}`} className="underline">
            {BUSINESS.email}
          </a>{" "}
          or <Link href="/contact" className="underline">visit our contact page</Link>.
        </p>
      </div>
    </main>
  );
}
