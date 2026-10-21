import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href: string;
}

// Visible breadcrumb trail. Its schema is emitted separately with breadcrumbSchema().
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 text-xs font-bold uppercase tracking-widest text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[var(--yellow-main)] transition-colors">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-800">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
