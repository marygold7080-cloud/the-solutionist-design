import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact The Solutionist Design | Start Your Project"
        description={`Contact The Solutionist Design — call ${site.phone}, email ${site.email}, or send project details and we will reply with a clear recommendation and scope.`}
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact`,
          name: `Contact ${site.name}`,
          mainEntity: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: site.logo,
            email: site.email,
            telephone: site.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: site.address.region,
              postalCode: site.address.postalCode,
              addressCountry: "US",
            },
          },
        }}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk"
        summary="Have an idea in mind? Tell us what you are trying to build, fix or grow. Include what you have now and what success looks like, and we will reply with a recommendation, scope and timeline."
        crumbs={[{ label: "Contact" }]}
      />

      <ContactSection eyebrow="Send an enquiry" title="Tell us about your project" />

      <Section>
        <SectionHeading
          eyebrow="Choosing a service"
          title="Not sure what to ask for?"
          intro="Pick the closest area below and we will confirm the right approach — including when a smaller piece of work would serve you better."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="block rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-gold-500/40 hover:text-gold-400"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}