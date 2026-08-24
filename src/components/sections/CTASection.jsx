import { Phone, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";

export default function CTASection({
  title = "Have an idea in mind? Let's talk.",
  text = "Tell us what you are trying to build or fix. We will come back with a clear recommendation, scope and timeline.",
}) {
  return (
    <Section ariaLabel="Contact call to action">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] p-8 sm:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]"
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact">Work With Us</ButtonLink>
              <ButtonLink to="/services" variant="ghost">
                Explore Services
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold-500/40"
              >
                <Phone className="h-5 w-5 text-gold-500" />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-500">Call us</span>
                  <span className="text-lg font-medium text-white">{site.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold-500/40"
              >
                <Mail className="h-5 w-5 text-gold-500" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-slate-500">Email us</span>
                  <span className="block break-all text-lg font-medium text-white">{site.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}