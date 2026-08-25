import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Logo({ className = "h-[125px] w-[125px]" }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className="inline-flex items-center shrink-0 py-1 group"
    >
      <img
        src="/site-logo.png"
        alt={`${site.name} logo`}
        className={`${className} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_18px_rgba(212,175,55,0.35)]`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}