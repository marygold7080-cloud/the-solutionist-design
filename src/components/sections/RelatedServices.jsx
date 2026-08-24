import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import { getService } from "@/data/services";

export default function RelatedServices({ slugs = [] }) {
  const items = slugs.map(getService).filter(Boolean);
  if (!items.length) return null;
  return (
    <Section ariaLabel="Related services" className="border-t border-white/5 bg-white/[0.02]">
      <SectionHeading eyebrow="Related Services" title="Work that pairs well with this" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group rounded-3xl border border-white/10 bg-[#0a0a0a] p-7 transition hover:-translate-y-1 hover:border-gold-500/40"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400">{s.category}</span>
            <h3 className="mt-4 flex items-start justify-between gap-3 font-heading text-xl font-semibold text-white">
              {s.title}
              <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}