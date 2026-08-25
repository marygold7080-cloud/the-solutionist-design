import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Logo({ className = "h-12 sm:h-14" }) {
  return (
    <Link to="/" aria-label={`${site.name} — home`} className="inline-flex items-center shrink-0 py-1 group">
      <div className={`${className} flex items-center`}>
        <svg
          viewBox="0 0 440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCEE21" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="60%" stopColor="#AA771C" />
              <stop offset="100%" stopColor="#FFDF73" />
            </linearGradient>
            <linearGradient id="logoGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Glowing Shield Monogram */}
          <g transform="translate(10, 8)">
            <path
              d="M37 2 L67 19 L67 55 L37 72 L7 55 L7 19 Z"
              fill="#08090d"
              stroke="url(#logoGoldGrad)"
              strokeWidth="2.5"
            />
            <path
              d="M37 6 L63 21 L63 53 L37 68 L11 53 L11 21 Z"
              fill="url(#logoGlowGrad)"
              opacity="0.2"
            />
            <path
              d="M47 24 C47 24 38 18 27 23 C18 27 18 35 28 38 C38 41 49 43 47 52 C45 61 32 64 23 58"
              stroke="url(#logoGoldGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="47" cy="24" r="3" fill="#FFE885" />
            <circle cx="23" cy="58" r="3" fill="#D4AF37" />
          </g>

          {/* Typography */}
          <g transform="translate(98, 20)">
            <text
              x="0"
              y="30"
              fontFamily="'Sora', 'Inter', system-ui, -apple-system, sans-serif"
              fontSize="25"
              fontWeight="900"
              letterSpacing="1.5"
              fill="#FFFFFF"
            >
              THE SOLUTIONIST
            </text>
            <text
              x="2"
              y="47"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontSize="11"
              fontWeight="700"
              letterSpacing="7"
              fill="url(#logoGoldGrad)"
            >
              DESIGN AGENCY
            </text>
          </g>
        </svg>
      </div>
    </Link>
  );
}