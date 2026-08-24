import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import StatsBand from "@/components/sections/StatsBand";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/data/site";
import { services } from "@/data/services";

const expertise = [
  { title: "Web & product engineering", slug: "web-development", text: "Websites, WordPress builds, online stores, web applications and mobile apps." },
  { title: "AI solutions", slug: "ai-automation", text: "Workflow automation, chatbots and agents, and generative AI built into existing systems." },
  { title: "Branding & marketing", slug: "branding-and-identity", text: "Identity systems, graphic design, search, paid media and social media strategy." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About The Solutionist Design | One-Stop Digital Partner"
        description="Learn who The Solutionist Design is: a one-stop digital partner delivering branding, web and app development, AI solutions and marketing for growing businesses."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/about`,
          name: `About ${site.name}`,
          description: site.description,
          about: { "@type": "Organization", name: site.name, url: site.url, logo: site.logo },
        }}
      />
      <PageHero
        eyebrow="About Us"
        title="Who we are"
        summary="The Solutionist Design is a digital agency and one-stop partner for branding, web and app development, AI automation and marketing. We help businesses build a strong digital presence, accelerate growth and lead with confidence."
        crumbs={[{ label: "About" }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
            <img
              src="https://the-solutionist.design/wp-content/uploads/2026/06/about-img-1-e1780898031735.jpg"
              alt="The Solutionist Design team working together on a client digital project"
              className="h-auto w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-white">What we do</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                We deliver impact through strategic branding, digital development, AI solutions and marketing. Most
                clients come to us with one problem — a slow website, a brand that no longer fits, hours lost to manual
                admin — and stay because the next problem sits with the same team.
              </p>
              <p>
                Trusted by businesses that value innovation, we deliver with integrity, consistency and long-term
                commitment. That means honest scope, realistic timelines and recommendations based on what your
                business needs rather than what is easiest to sell.
              </p>
            </div>

            <h2 className="mt-12 font-heading text-3xl font-semibold text-white">Our expertise</h2>
            <ul className="mt-6 space-y-4">
              {expertise.map((e) => (
                <li key={e.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Link to={`/services/${e.slug}`} className="font-heading text-lg font-semibold text-white hover:text-gold-400">
                    {e.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/5 bg-white/[0.02]">
        <SectionHeading
          eyebrow="Our Approach"
          title="Strategy first, then design, then engineering"
          intro="We start with the commercial goal and work backwards. That order keeps design decisions accountable and stops projects becoming expensive decoration."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Understand before proposing", d: "We audit what exists and ask what success means in numbers before recommending scope." },
            { t: "Ship in useful increments", d: "A working core in production beats a large specification waiting for sign-off." },
            { t: "Build for the team who inherits it", d: "Content models, documentation and design systems your staff can actually use." },
            { t: "Measure honestly", d: "Tracking set up before spend increases, and reporting written in plain language." },
            { t: "Performance is not optional", d: "Speed, accessibility and search foundations are part of every build." },
            { t: "One brand across everything", d: "Website, app, campaign and social assets share one identity system." },
          ].map((i) => (
            <article key={i.t} className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="font-heading text-lg font-semibold text-white">{i.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{i.d}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-400">
          Our{" "}
          {services.slice(0, 3).map((s, i) => (
            <span key={s.slug}>
              <Link to={`/services/${s.slug}`} className="text-gold-400 underline-offset-4 hover:underline">
                {s.title.toLowerCase()}
              </Link>
              {i < 2 ? ", " : " "}
            </span>
          ))}
          work is delivered by the same team that handles{" "}
          <Link to="/services/ai-automation" className="text-gold-400 underline-offset-4 hover:underline">
            AI automation
          </Link>{" "}
          and{" "}
          <Link to="/services/digital-marketing" className="text-gold-400 underline-offset-4 hover:underline">
            digital marketing
          </Link>
          , which is why the pieces fit together.
        </p>
      </Section>

      <WhatWeDo />
      <WhyChooseUs />
      <HowWeWork />
      <StatsBand />
      <CTASection title="Want to know if we are the right partner?" />
    </>
  );
}