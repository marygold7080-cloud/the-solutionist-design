import { Facebook, Linkedin, Instagram } from "lucide-react";
import { site } from "@/data/site";

const icons = { facebook: Facebook, linkedin: Linkedin, instagram: Instagram };

export default function SocialIcons({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {site.social.map((s) => {
        const Icon = icons[s.icon] || Instagram;
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${site.name} on ${s.label}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-gold-500/50 hover:text-gold-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}