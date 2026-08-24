import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/sections/ProjectCard";
import SectionHeading from "@/components/sections/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { site } from "@/data/site";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/404" replace />;

  const service = getService(project.serviceSlug);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const path = `/our-work/${project.slug}`;

  return (
    <>
      <Seo
        title={`${project.title} | Case Study | The Solutionist Design`}
        description={project.excerpt}
        path={path}
        image={project.image}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              name: project.title,
              about: project.category,
              description: project.excerpt,
              image: project.image,
              url: `${site.url}${path}`,
              creator: { "@type": "Organization", name: site.name, url: site.url },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Our Work", item: `${site.url}/our-work` },
                { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}${path}` },
              ],
            },
          ],
        }}
      />
      <PageHero
        eyebrow={project.category}
        title={project.title}
        summary={project.excerpt}
        crumbs={[{ label: "Our Work", to: "/our-work" }, { label: project.title }]}
      />

      <Section>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
          <img
            src={project.image}
            alt={project.alt}
            className="h-auto w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">Project overview</h2>
            {project.overview.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {p}
              </p>
            ))}

            <h2 className="mt-12 font-heading text-2xl font-semibold text-white sm:text-3xl">Our approach</h2>
            <ul className="mt-5 space-y-3">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-7">
              <h2 className="font-heading text-xl font-semibold text-white">Scope of work</h2>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.scope.map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
              {service && (
                <>
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                    Service used
                  </h3>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-3 block font-heading text-lg font-semibold text-white hover:text-gold-400"
                  >
                    {service.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.tagline}</p>
                </>
              )}
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-[#000000]"
              >
                Start a similar project
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <SectionHeading eyebrow="More Work" title="Other projects" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {others.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}