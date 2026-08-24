import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqList({ customFaqs }) {
  const defaultFaqs = [
    {
      q: "How fast can we kick off a new engagement?",
      a: "Typically within 5 to 7 business days following our initial alignment session and scope approval. We keep our client roster intentionally small to ensure immediate dedicated focus.",
    },
    {
      q: "What does an average project engagement look like?",
      a: "Our typical full-scale engagements span between 4 to 10 weeks depending on complexity. We also offer ongoing quarterly design advisory retainers for continuous product iterations.",
    },
    {
      q: "Do you build the web/mobile applications, or just design them?",
      a: "Both! We are an end-to-end studio. We deliver production-ready React, Next.js, and Vite codebases, complete design systems, API integrations, and AI workflow pipelines.",
    },
    {
      q: "How do you handle HubSpot and CRM integrations?",
      a: "We natively integrate inbound lead capture forms with your existing HubSpot portal or custom CRM, providing full tracking scripts, event telemetry, and automated contact ingestion.",
    },
    {
      q: "What tech stack do you recommend for high-performance applications?",
      a: "We specialize in React 18/19, Vite, Tailwind CSS, Radix UI primitives, TypeScript, TanStack Query, Node.js, and serverless edge deployments for maximum speed and SEO dominance.",
    },
  ];

  const list = customFaqs || defaultFaqs;

  return (
    <Section withAura auraColor="cyan">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Answered Questions"
          description="Everything you need to know about our partnership models, technical deliverables, and timeline commitments."
        />

        <div className="p-6 md:p-10 rounded-3xl glass-panel border-white/10">
          <Accordion type="single" collapsible className="w-full">
            {list.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-base sm:text-lg font-bold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

export default FaqList;
