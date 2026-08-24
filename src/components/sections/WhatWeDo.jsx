import { Link } from "react-router-dom";
import { ArrowRight, Code2, Bot, Palette } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { serviceCategories } from "@/data/services";

const icons = [Code2, Bot, Palette];

export default function WhatWeDo({ heading = true }) {
  return (
    <Section id="what-we-do" ariaLabel="What we do">
      {heading && (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="We are expert in"
            intro="We believe every brand needs digital transformation to achieve success. Explore the three areas we deliver in — every service links to a full page."
          />
          <ButtonLink to="/contact" className="shrink-0">
            Work With Us
          </ButtonLink>
        </div>
      )}

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {serviceCategories.map((cat, i) => {
          const Icon = icons[i];
          return (
            <article
              key={cat.name}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 text-gold-400">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-white">{cat.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{cat.description}</p>
              <ul className="mt-6 space-y-1 border-t border-white/5 pt-4">
                {cat.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={`/services/${item.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl px-2 py-2.5 text-sm text-slate-300 transition hover:bg-gold-500/10 hover:text-gold-400"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}