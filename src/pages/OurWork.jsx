import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/sections/ProjectCard";
import StatsBand from "@/components/sections/StatsBand";
import CTASection from "@/components/sections/CTASection";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function OurWork() {
  return (
    <>
      <Seo
        title="Our Work | Web, E-Commerce & Branding Projects | The Solutionist Design"
        description="Selected projects by The Solutionist Design — service websites, e-commerce stores, identity design and brand campaign work, with the thinking behind each build."
        path="/our-work"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: `${site.url}/our-work`,
          name: `Our Work | ${site.name}`,
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            about: p.category,
            description: p.excerpt,
            url: `${site.url}/our-work/${p.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Our Work"
        title="Recent projects"
        summary="We deliver digital projects that redefine brand success. Below is a selection of website, e-commerce, identity and campaign work — each with a short case study explaining the approach."
        crumbs={[{ label: "Our Work" }]}
      >
        <ButtonLink to="/contact">Work With Us</ButtonLink>
        <ButtonLink to="/services" variant="ghost">
          Explore Services
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <StatsBand />
      <CTASection title="Want work like this for your business?" />
    </>
  );
}