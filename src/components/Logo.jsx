import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Logo({ className = "h-14 sm:h-16" }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className="inline-flex items-center shrink-0 py-1 group"
    >
      <img
        src="/site-logo.png"
        alt={`${site.name} logo`}
        className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)]`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}