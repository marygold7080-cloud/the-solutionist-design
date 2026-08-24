import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ButtonLink from "@/components/ui/ButtonLink";
import HowWeWork from "@/components/sections/HowWeWork";
import CTASection from "@/components/sections/CTASection";
import { serviceCategories, services } from "@/data/services";
import { site } from "@/data/site";

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Web Development, AI Automation & Branding | The Solutionist Design"
        description="Explore all services from The Solutionist Design: web and app development, WordPress, e-commerce, AI automation, chatbots, generative AI, branding and digital marketing."
        path="/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: `${site.url}/services`,
          name: `Services | ${site.name}`,
          description:
            "Web development, AI automation and branding services delivered by The Solutionist Design.",
          hasPart: services.map((s) => ({
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: `${site.url}/services/${s.slug}`,
            provider: { "@type": "Organization", name: site.name, url: site.url },
          })),
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Everything you need to build, automate and grow"
        summary="Our services fall into three areas: web development, automation with AI, and branding and marketing. Each service below opens a full page explaining what it covers, who it is for and how we deliver it."
        crumbs={[{ label: "Services" }]}
      >
        <ButtonLink to="/contact">Work With Us</ButtonLink>
        <ButtonLink to="/our-work" variant="ghost">
          See Our Work
        </ButtonLink>
      </PageHero>

      {serviceCategories.map((cat, idx) => (
        <Section
          key={cat.name}
          ariaLabel={cat.name}
          className={idx % 2 === 1 ? "border-y border-white/5 bg-white/[0.02]" : ""}
        >
          <Eyebrow>{cat.name}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold text-white sm:text-4xl">
            {cat.name}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">{cat.description}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => {
              const target = services.find((s) => s.slug === item.slug);
              return (
                <li key={item.label}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition hover:-translate-y-1 hover:border-gold-500/40"
                  >
                    <span className="flex items-start justify-between gap-3 font-heading text-lg font-semibold text-white group-hover:text-gold-400">
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-500" />
                    </span>
                    <span className="mt-3 text-sm leading-relaxed text-slate-400">{target?.tagline}</span>
                    <span className="mt-4 text-xs uppercase tracking-widest text-slate-500">
                      Goes to {target?.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      ))}

      <HowWeWork />
      <CTASection title="Not sure which service you need?" text="Describe the problem and we will tell you which service fits — including when the answer is a smaller piece of work than you expected." />
    </>
  );
}