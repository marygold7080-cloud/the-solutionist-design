import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Logo({ className = "h-20 sm:h-24" }) {
  return (
    <Link to="/" aria-label={`${site.name} — home`} className="inline-flex items-center shrink-0 py-1">
      <img
        src={site.logo}
        alt={`${site.name} logo`}
        className={`${className} w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}