import { Link, Navigate, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqList from "@/components/sections/FaqList";
import RelatedServices from "@/components/sections/RelatedServices";
import ContactSection from "@/components/sections/ContactSection";
import { getService } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/404" replace />;

  const path = `/services/${service.slug}`;
  const relatedProject = projects.find((p) => p.serviceSlug === service.slug);
  const relatedPost = posts.find((p) => p.serviceSlug === service.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.summary,
        url: `${site.url}${path}`,
        provider: { "@type": "Organization", name: site.name, url: site.url, logo: site.logo },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} capabilities`,
          itemListElement: service.capabilities.map((c) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: c.title, description: c.desc },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}${path}` },
        ],
      },
      ...(service.faqs?.length
        ? [
          {
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
        : []),
    ],
  };

  return (
    <>
      <Seo title={service.seoTitle} description={service.metaDescription} path={path} schema={schema} />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        summary={service.tagline}
        bgImage={service.heroImage}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      >
        <ButtonLink to="/contact">Work With Us</ButtonLink>
        <ButtonLink to="/services" variant="ghost">
          All Services
        </ButtonLink>
      </PageHero>

      <Section ariaLabel={`What is ${service.title}`}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              What is {service.title.toLowerCase()}?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">{service.summary}</p>
            {service.intro.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {p}
              </p>
            ))}

            <h2 className="mt-12 font-heading text-2xl font-semibold text-white sm:text-3xl">Who is it for?</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">{service.forWho}</p>

            <h2 className="mt-12 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Problems this solves
            </h2>
            <ul className="mt-5 space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a] p-7">
              <h2 className="font-heading text-xl font-semibold text-white">Benefits</h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink to="/contact" className="w-full">
                  Start a conversation
                </ButtonLink>
              </div>
            </div>

            {relatedProject && (
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <img
                  src={relatedProject.image}
                  alt={relatedProject.alt}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-400">Related work</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-white">{relatedProject.title}</h3>
                  <Link
                    to={`/our-work/${relatedProject.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-gold-400 underline-offset-4 hover:underline"
                  >
                    Read the {relatedProject.title.toLowerCase()} case study
                  </Link>
                </div>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section ariaLabel="Capabilities" className="border-y border-white/5 bg-white/[0.02]">
        <SectionHeading
          eyebrow="Capabilities"
          title={`What we provide in ${service.title.toLowerCase()}`}
          intro={`Everything below is delivered in-house by the same team, alongside our wider ${service.category.toLowerCase()} work.`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c) => (
            <article key={c.title} className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="font-heading text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section ariaLabel="Process">
        <SectionHeading eyebrow="Process" title={`How ${service.title.toLowerCase()} works with us`} />
        <ProcessSteps steps={service.process} />
      </Section>

      {service.faqs?.length > 0 && (
        <Section ariaLabel="Frequently asked questions" className="border-t border-white/5 bg-white/[0.02]">
          <SectionHeading eyebrow="FAQ" title={`${service.title} questions, answered`} />
          <div className="max-w-3xl">
            <FaqList faqs={service.faqs} />
          </div>
          {relatedPost && (
            <p className="mt-10 text-sm text-slate-400">
              Related reading:{" "}
              <Link to={`/blog/${relatedPost.slug}`} className="text-gold-400 underline-offset-4 hover:underline">
                {relatedPost.title}
              </Link>
            </p>
          )}
        </Section>
      )}

      <RelatedServices slugs={service.related} />
      <ContactSection
        defaultService={service.title}
        eyebrow="Get Started"
        title={`Talk to us about ${service.title.toLowerCase()}`}
      />
    </>
  );
}