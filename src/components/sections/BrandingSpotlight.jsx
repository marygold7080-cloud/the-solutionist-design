import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

const points = [
  "Positioning and messaging so the whole team describes the business the same way",
  "Logo, colour and type systems that hold up from favicon to billboard",
  "Social and campaign templates your team can produce from without a designer",
  "Search, paid media and content planned against tracked enquiries",
];

export default function BrandingSpotlight() {
  return (
    <Section ariaLabel="Branding and marketing">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Branding & Marketing"
            title="A brand that is recognised, and marketing you can measure"
            intro="We craft strategic branding and marketing that strengthen visibility and drive growth — the identity system first, then the channels that carry it."
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/services/branding-and-identity">Branding & Identity</ButtonLink>
            <ButtonLink to="/services/digital-marketing" variant="ghost">
              Digital Marketing
            </ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
          <img
            src="https://the-solutionist.design/wp-content/uploads/2026/06/project-6.png"
            alt="Logo and identity design creative produced by The Solutionist Design"
            className="h-auto w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Section>
  );
}