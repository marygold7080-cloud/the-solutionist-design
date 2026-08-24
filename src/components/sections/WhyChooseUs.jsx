import { ShieldCheck, Layers, Gauge, Handshake } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";

const reasons = [
  {
    icon: Layers,
    title: "One partner, every discipline",
    text: "Branding, development, AI and marketing under one roof — so strategy, design and build stay joined up instead of being handed between vendors.",
  },
  {
    icon: Gauge,
    title: "Built for performance",
    text: "Speed, accessibility and search foundations are part of the build, not an optimisation phase added after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Delivered with integrity",
    text: "Clear scope, honest timelines and consistent communication. We say what a project needs, including when it needs less than you expected.",
  },
  {
    icon: Handshake,
    title: "Long-term growth partners",
    text: "We stay involved after launch, improving what the data shows is worth improving rather than disappearing at handover.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section ariaLabel="Why choose us" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why businesses choose The Solutionist Design"
        intro="We work with businesses that value innovation, and we deliver with integrity, consistency and long-term commitment."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <article key={r.title} className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/10 text-gold-400">
              <r.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold text-white">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{r.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}