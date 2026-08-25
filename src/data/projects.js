// Curated international client portfolios (US, UK, Global). 100% royalty-free/custom assets.
export const projects = [
  {
    slug: "crystal-clear-cleaning-us-platform",
    title: "Crystal Clear Facilities — US Service Platform",
    category: "Web & Product Engineering",
    image: "/projects/project-5.png",
    alt: "Crystal Clear commercial and residential service booking platform by The Solutionist Design",
    excerpt:
      "A high-converting web platform engineered for a premier US cleaning brand, built around local search visibility and streamlined instant quote funnels.",
    serviceSlug: "web-development",
    scope: ["Custom UI/UX Engineering", "Headless CMS Integration", "Local US SEO Architecture", "High-Conversion Booking Funnel"],
    overview: [
      "Crystal Clear is a US-based commercial and residential facility services brand. The client needed a high-performance web platform that clearly communicates their service portfolio and turns high-intent search traffic into direct bookings.",
      "We engineered a clean, conversion-focused interface with automated quote estimation at critical decision milestones, structured the sitemap for US regional SEO dominance, and achieved sub-second mobile page loads across North America.",
    ],
    approach: [
      "Custom service hubs structured around real search intent across US metropolitan service regions",
      "Dynamic quote estimator and booking requests embedded in hero and modular service sections",
      "Accessible typography and responsive layout built for 100% cross-device fidelity",
      "Full JSON-LD local business schema and OpenGraph metadata for search visibility",
    ],
  },
  {
    slug: "aurora-luxury-atelier-ecommerce",
    title: "Aurora Luxury Atelier — Global Direct-to-Consumer Store",
    category: "E-Commerce",
    image: "/projects/project-7.png",
    alt: "Aurora luxury leather goods global e-commerce experience designed by The Solutionist Design",
    excerpt:
      "A flagship international e-commerce experience for an upscale luxury handbag brand, featuring immersive editorial merchandising and frictionless checkout.",
    serviceSlug: "e-commerce-development",
    scope: ["Global Storefront Architecture", "High-End Editorial UI/UX", "Multi-Currency Checkout", "Speed & Conversion Optimization"],
    overview: [
      "Luxury international e-commerce demands an uncompromising aesthetic standard combined with instant technical performance. The store was designed with expansive editorial photography, refined micro-animations, and comprehensive product storytelling.",
      "The global checkout pipeline was streamlined to eliminate buyer hesitation, incorporating multi-currency localization and upfront transparent fulfillment terms to maximize international cart conversion.",
    ],
    approach: [
      "Immersive product template showcasing material provenance and artisan craftsmanship",
      "Fast faceted collection filtering tailored for curated seasonal drops",
      "Optimized one-page international checkout with localized payment providers",
      "Composable CMS blocks allowing marketing teams to launch editorial campaigns without developer overhead",
    ],
  },
  {
    slug: "vanguard-creative-brand-identity",
    title: "Vanguard Studio — Global Identity & Brand System",
    category: "Branding & Identity",
    image: "/projects/project-6.png",
    alt: "Global corporate brand identity and design system by The Solutionist Design",
    excerpt:
      "An international brand identity overhaul, delivering an iconic emblem system, scalable typography standards, and omnichannel digital campaign assets.",
    serviceSlug: "logo-designs",
    scope: ["Executive Brand Strategy", "Crest & Logomark Design", "Design Tokens & Type Hierarchy", "Global Social Kit"],
    overview: [
      "Vanguard required a timeless, commanding visual identity that resonates across international corporate markets. The engagement encompassed total brand architecture—from core emblem geometry to scalable digital applications.",
      "Beyond the primary logomark, we engineered an adaptable design system, delivering vector asset libraries across dark and light palettes, bespoke typography scales, and modular social media kits.",
    ],
    approach: [
      "Rigorous optical testing ensuring mark legibility from 16px favicon to billboard scales",
      "Dual-palette design token architecture engineered for modern digital interfaces",
      "Production-ready design kit and Figma component library handed over for internal creative teams",
      "Comprehensive corporate brand book detailing voice, positioning, and graphic rules",
    ],
  },
  {
    slug: "apex-multichannel-growth-campaign",
    title: "Apex Horizon — International Digital Growth Campaign",
    category: "Branding & Growth",
    image: "/projects/project-8.png",
    alt: "Apex Horizon international digital marketing and growth campaign designed by The Solutionist Design",
    excerpt:
      "A multi-market digital growth campaign unifying paid search, programmatic display, and content distribution for global brand expansion.",
    serviceSlug: "digital-marketing",
    scope: ["Creative Direction", "Multi-Channel Campaign Strategy", "High-Impact Ad Creative", "Attribution & Analytics Setup"],
    overview: [
      "An effective international campaign requires a singular creative hook adapted seamlessly across digital formats. We architected a cohesive creative narrative and deployed responsive asset variations across global ad networks.",
      "Every creative touchpoint was engineered from a centralized visual framework, ensuring unified recognition across programmatic display, paid social, and landing pages with end-to-end conversion tracking.",
    ],
    approach: [
      "Unified creative concept designed for cross-border brand recognition",
      "Dynamic ad creative templates configured for high CTR and low acquisition costs",
      "Optimized copy hierarchy tailored for rapid mobile engagement",
      "Comprehensive tracking and analytics dashboards measuring multi-touch ROI",
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);