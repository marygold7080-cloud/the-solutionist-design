import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { ProcessSteps } from "./ProcessSteps";

export function HowWeWork() {
  return (
    <Section withAura auraColor="gold">
      <SectionHeading
        eyebrow="Our Methodology"
        title="Predictable Velocity. Extreme Rigor."
        description="We follow a refined four-stage delivery sprint structure that takes your vision from whitepaper to production launch in weeks, not quarters."
      />
      <ProcessSteps />
    </Section>
  );
}

export default HowWeWork;
