import Section from "@/components/ui/Section";
import { site } from "@/data/site";

export default function StatsBand() {
  return (
    <Section ariaLabel="Company figures">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-[#0a0a0a] p-8 sm:p-12">
        <h2 className="max-w-2xl font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
          Trusted by over 10+ brands in more than 5 countries
        </h2>
        <dl className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-heading text-4xl font-semibold text-gold-400 sm:text-5xl">{s.value}</span>
                <span className="mt-2 block text-sm text-slate-400">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}