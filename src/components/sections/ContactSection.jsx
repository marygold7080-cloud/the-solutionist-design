import { Phone, Mail, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export default function ContactSection({ defaultService = "", eyebrow = "Contact", title = "Let's talk about your project" }) {
  return (
    <Section id="contact" ariaLabel="Contact" className="border-t border-white/5 bg-white/[0.02]">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            intro="Send us the details and we will reply with a clear recommendation, scope and timeline. Prefer to talk first? Call or email us directly."
          />
          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-4 text-slate-300 transition hover:text-gold-400">
                <Phone className="h-5 w-5 text-gold-500" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-4 break-all text-slate-300 transition hover:text-gold-400">
                <Mail className="h-5 w-5 shrink-0 text-gold-500" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-4 text-slate-300">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              <address className="not-italic">{site.address.full}</address>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <ContactForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </Section>
  );
}