import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/data/site";

export default function LegalLayout({ title, seoTitle, description, path, updated, blocks = [] }) {
  return (
    <>
      <Seo
        title={seoTitle}
        description={description}
        path={path}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: `${site.url}${path}`,
        }}
      />
      <PageHero eyebrow="Legal" title={title} summary={description} crumbs={[{ label: title }]} />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
          {blocks.map((b, i) =>
            b.type === "h2" ? (
              <h2 key={i} className="mt-10 font-heading text-2xl font-semibold text-white">
                {b.text}
              </h2>
            ) : b.type === "list" ? (
              <ul key={i} className="mt-4 space-y-2">
                {b.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={i} className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {b.text}
              </p>
            )
          )}
          <p className="mt-10 text-sm leading-relaxed text-slate-400">
            Questions about this policy? Email{" "}
            <a href={site.emailHref} className="text-gold-400 underline-offset-4 hover:underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-gold-400 underline-offset-4 hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}