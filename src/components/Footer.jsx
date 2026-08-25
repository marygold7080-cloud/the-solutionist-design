import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import SocialIcons from "@/components/SocialIcons";
import { site, navLinks, legalLinks } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000000]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo className="h-16 sm:h-20" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.name} is a one-stop digital partner for branding, web and app development, AI automation and
            digital marketing — helping businesses build, scale and lead with confidence.
          </p>
          <SocialIcons className="mt-6" />
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-slate-400 transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 text-gold-500" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-start gap-3 break-all transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 text-gold-500" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <address className="not-italic">{site.address.full}</address>
            </li>
          </ul>
          <ul className="mt-6 space-y-3 text-sm">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-500 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6 text-center text-xs text-slate-500 lg:px-8">
        All rights reserved — {new Date().getFullYear()} © {site.name}
      </div>
    </footer>
  );
}