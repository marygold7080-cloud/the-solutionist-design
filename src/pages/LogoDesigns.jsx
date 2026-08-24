import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Layers,
  Palette,
  Award,
  Crop,
  Sliders,
  CheckCircle2,
  Image as ImageIcon,
  Flame,
} from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqList from "@/components/sections/FaqList";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

// Curated logo portfolio items with categories
const logoGalleryItems = [
  {
    title: "Apex Horizon Crest",
    category: "3D & Metallic",
    tag: "3D Gradient Mark",
    src: "/logos/logo-3d-abstract.jpg",
  },
  {
    title: "Vertex Modern Studio",
    category: "Minimalist",
    tag: "Clean Geometric",
    src: "/logos/logo-minimalist-1.jpg",
  },
  {
    title: "Aura Royale Emblem",
    category: "Emblems & Crests",
    tag: "Luxury Badge",
    src: "/logos/logo-luxury-emblem.jpg",
  },
  {
    title: "Vanguard Corporate Mark",
    category: "Corporate",
    tag: "Enterprise Identity",
    src: "/logos/logo-corporate-crest.jpg",
  },
  {
    title: "Starlight Media Badge",
    category: "Modern Badge",
    tag: "Entertainment",
    src: "/logos/logo-modern-badge.jpg",
  },
  {
    title: "Prism Geometric Mark",
    category: "Abstract",
    tag: "Precision Vector",
    src: "/logos/logo-geometric-icon.jpg",
  },
  {
    title: "CyberPulse Dynamics",
    category: "Tech & SaaS",
    tag: "Next-Gen Tech",
    src: "/logos/logo-tech-dynamic.jpg",
  },
  {
    title: "AeroShield Monogram",
    category: "Minimalist",
    tag: "Monogram Mark",
    src: "/logos/logo-brand-mark.jpg",
  },
  {
    title: "Titan Gaming Mascot",
    category: "Mascot & Vector",
    tag: "Esports & Mascot",
    src: "/logos/logo-mascot-creative.jpg",
  },
  {
    title: "Fortress Wealth Shield",
    category: "Corporate",
    tag: "Finance & Shield",
    src: "/logos/logo-finance-shield.jpg",
  },
  {
    title: "Lumina Lifestyle Crest",
    category: "Emblems & Crests",
    tag: "Fashion & Beauty",
    src: "/logos/logo-lifestyle-monogram.jpg",
  },
  {
    title: "Neon Nova Esports",
    category: "Mascot & Vector",
    tag: "Creative Vector",
    src: "/logos/logo-gaming-vector.jpg",
  },
  {
    title: "CyberCrest Systems",
    category: "Tech & SaaS",
    tag: "Cybersecurity",
    src: "/logos/logo-cyber-crest.jpg",
  },
  {
    title: "Verdant Bio Wellness",
    category: "Minimalist",
    tag: "Eco & Wellness",
    src: "/logos/logo-wellness-leaf.jpg",
  },
  {
    title: "Monarch Advisory Crown",
    category: "Emblems & Crests",
    tag: "Consulting Badge",
    src: "/logos/logo-consulting-crown.jpg",
  },
  {
    title: "Quantum Chain Fusion",
    category: "Tech & SaaS",
    tag: "Fintech & Web3",
    src: "/logos/logo-crypto-fusion.jpg",
  },
  {
    title: "Synapse AI Intelligence",
    category: "Tech & SaaS",
    tag: "AI & Machine Learning",
    src: "/logos/logo-ai-neural.jpg",
  },
  {
    title: "Velvet Royale Gold",
    category: "3D & Metallic",
    tag: "Luxury Gold Foil",
    src: "/logos/logo-fashion-gold.jpg",
  },
  {
    title: "Spectrum Media Prism",
    category: "Abstract",
    tag: "Creative Studio",
    src: "/logos/logo-media-prism.jpg",
  },
  {
    title: "Apex Heights Realty",
    category: "Corporate",
    tag: "Real Estate & Apex",
    src: "/logos/logo-realestate-apex.jpg",
  },
  {
    title: "IronForge Heavy Struct",
    category: "Modern Badge",
    tag: "Industrial & Build",
    src: "/logos/logo-construction-bold.jpg",
  },
  {
    title: "Artisan Culinary Heritage",
    category: "Emblems & Crests",
    tag: "Vintage Hospitality",
    src: "/logos/logo-restaurant-vintage.jpg",
  },
  {
    title: "Velocity Automotive",
    category: "3D & Metallic",
    tag: "Motorsports Dynamic",
    src: "/logos/logo-automotive-speed.jpg",
  },
  {
    title: "Sentinel Cyber Guard",
    category: "Corporate",
    tag: "Security Vanguard",
    src: "/logos/logo-security-vanguard.jpg",
  },
];

const categories = [
  "All Styles",
  "3D & Metallic",
  "Minimalist",
  "Tech & SaaS",
  "Emblems & Crests",
  "Corporate",
  "Mascot & Vector",
  "Abstract",
];

const logoStyles = [
  {
    title: "Wordmarks & Typography",
    desc: "Custom-lettered brand names and modern font stylings crafted with precision kerning and bespoke character adjustments.",
    icon: Sliders,
  },
  {
    title: "Iconic & Abstract Marks",
    desc: "Memorable symbolic icons that capture complex brand ideas in simple, instantly recognizable geometry.",
    icon: Sparkles,
  },
  {
    title: "Emblems & Crests",
    desc: "Classic, prestige-driven badges combining typography and intricate framing for premium, heritage, and luxury brands.",
    icon: Award,
  },
  {
    title: "Mascots & Illustrated Marks",
    desc: "Expressive character designs and custom vectors that bring friendliness, personality, and approachability to your company.",
    icon: Palette,
  },
  {
    title: "Dynamic & Responsive Logos",
    desc: "Adaptive identity marks designed to fluidly scale from huge billboard dimensions down to a 16px browser favicon.",
    icon: Crop,
  },
  {
    title: "3D & Metallic Accents",
    desc: "Modern depth, gold foil styling, and ambient lighting effects engineered for digital-first technology and luxury products.",
    icon: Layers,
  },
];

const deliverables = [
  {
    title: "100% Vector Master Files",
    desc: "Source files in Adobe Illustrator (.AI), EPS, SVG, and high-res vector PDF for infinite scalability without quality loss.",
  },
  {
    title: "Digital & Print Ready Formats",
    desc: "High-resolution PNGs with transparent backgrounds, optimized JPEGs, and CMYK files formatted for commercial printing.",
  },
  {
    title: "Full Color & Monochrome Variations",
    desc: "Full-color primary marks, inverted dark-mode versions, clean single-color black and white, and luxury gold editions.",
  },
  {
    title: "Favicon & Social Media Suite",
    desc: "Pre-sized profile pictures, banners, app icons, and web favicons formatted for iOS, Android, and all social channels.",
  },
  {
    title: "Typography & Color Palette Guide",
    desc: "Exact HEX, RGB, CMYK, and Pantone color specifications paired with primary and secondary brand font pairings.",
  },
  {
    title: "Full Commercial Copyright Ownership",
    desc: "Complete transfer of intellectual property rights and commercial exclusivity from day one upon final approval.",
  },
];

const logoFaqs = [
  {
    q: "What files and formats do I receive when my logo is finished?",
    a: "You receive a complete master asset package including editable vector source files (.AI, .EPS, .SVG, .PDF) and high-resolution web/print files (.PNG with transparent background, .JPG) in both RGB (digital) and CMYK (print) color spaces.",
  },
  {
    q: "How many unique logo concepts will I see?",
    a: "During our initial presentation, we deliver 3 to 5 distinctly unique conceptual directions based on your creative brief. We then work collaboratively to refine and polish your chosen direction until it is 100% perfect.",
  },
  {
    q: "Do I own full commercial copyright to my new logo?",
    a: "Yes, absolutely. Once final delivery is completed, full commercial copyright, intellectual property, and unrestricted trademark rights are 100% yours.",
  },
  {
    q: "Can you redesign or vectorize an existing logo?",
    a: "Yes. If you have an existing logo that needs a modern refresh, cleaner geometry, or vector reconstruction from a low-res image, we specialize in high-precision brand evolution and redraws.",
  },
  {
    q: "How long does the logo design process typically take?",
    a: "Most custom logo design projects take between 7 to 14 business days from initial discovery to final master file delivery, depending on how quickly feedback is exchanged.",
  },
];

const logoProcess = [
  {
    title: "Discovery & Briefing",
    desc: "We analyze your business, target demographic, competitors, and aesthetic preferences to establish a clear creative direction.",
  },
  {
    title: "Concept Exploration",
    desc: "Our design team crafts multiple unique logo directions exploring different visual metaphors, typography, and symbology.",
  },
  {
    title: "Refinement & Polishing",
    desc: "We perfect the chosen concept with mathematical grid alignment, kerning adjustments, and precision color testing.",
  },
  {
    title: "Real-World Mockups",
    desc: "We test your logo across real application contexts: business cards, website headers, packaging, merchandise, and signage.",
  },
  {
    title: "Master File Handover",
    desc: "Delivery of the complete vector suite, brand color guide, favicon pack, and full commercial copyright release.",
  },
];

export default function LogoDesigns() {
  const [activeCategory, setActiveCategory] = useState("All Styles");

  const filteredLogos =
    activeCategory === "All Styles"
      ? logoGalleryItems
      : logoGalleryItems.filter((item) => item.category === activeCategory);

  const logoProjects = projects.filter(
    (p) => p.serviceSlug === "logo-designs" || p.serviceSlug === "branding-and-identity"
  );

  return (
    <>
      <Seo
        title="Custom Logo Design Services & Portfolio | The Solutionist Design"
        description="Explore our showcase of custom 3D, minimalist, corporate, mascot, and luxury emblem logo designs. Bespoke, scalable, vector brand identities crafted to stand out."
        path="/services/logo-designs"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Logo Design Services",
          description:
            "Custom logo design, vector marks, wordmarks, and brand identity asset creation by The Solutionist Design.",
          provider: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: site.logo,
          },
          url: `${site.url}/services/logo-designs`,
        }}
      />

      <PageHero
        eyebrow="Creative & Brand Engineering"
        title="Iconic, Scalable Logos That Define Your Identity"
        highlightText="Crafted For Market Leaders."
        description="Your logo is the first thing customers see and the lasting image they remember. We design bespoke, memorable vector marks, 3D emblems, and typography systems tailored to scale effortlessly."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Logo Designs" }]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink to="/contact">Start Your Logo Project</ButtonLink>
          <a
            href="#logo-showcase"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-white"
          >
            <ImageIcon className="h-4 w-4 text-gold-400" />
            Explore Logo Gallery
          </a>
        </div>
      </PageHero>

      {/* Interactive Logo Gallery Showcase */}
      <Section id="logo-showcase" className="relative border-b border-white/5 bg-[#050507]">
        <SectionHeading
          eyebrow="Featured Creations"
          title="Explore Our Logo Design Portfolio"
          summary="Browse through our diverse spectrum of bespoke identity marks, 3D emblems, minimalist vector symbols, and corporate badges crafted for modern brands."
        />

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-gold-500 to-amber-500 text-black shadow-lg shadow-gold-500/20 font-bold"
                    : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-gold-500/40 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Logo Grid with Expanded 180x180px Logo Display */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:gap-6">
          {filteredLogos.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-gold-500/15"
            >
              {/* Prominent High-Impact Logo Frame */}
              <div className="relative h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] max-w-full overflow-hidden rounded-2xl bg-black/70 border border-white/10 p-2 flex items-center justify-center shadow-inner">
                <img
                  src={item.src}
                  alt={`${item.title} - ${item.category} Logo Design`}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl" />
              </div>

              {/* Card Meta */}
              <div className="mt-4 w-full px-2">
                <span className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold-300 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="mt-2 font-heading text-sm sm:text-base font-bold text-white group-hover:text-gold-400 transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>{item.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 rounded-2xl border border-gold-500/20 bg-gradient-to-r from-gold-500/10 via-amber-500/5 to-transparent p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Flame className="h-5 w-5 text-amber-400" />
              Need a Custom Logo Concept for Your Brand?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We create 100% original, copyright-cleared logo identities with complete vector source files delivered in 7-14 days.
            </p>
          </div>
          <ButtonLink to="/contact" className="shrink-0 whitespace-nowrap">
            Claim Free Consultation
          </ButtonLink>
        </div>
      </Section>

      {/* Logo Styles Grid */}
      <Section>
        <SectionHeading
          eyebrow="Design Capabilities"
          title="Logo Design Styles Tailored to Your Business"
          summary="Whether you need sleek minimal geometry, a bold monogram, or a luxury badge, our team crafts the ideal format for your industry."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logoStyles.map((style) => {
            const Icon = style.icon;
            return (
              <div
                key={style.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 text-gold-400 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {style.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {style.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* What You Receive - Deliverables */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionHeading
          eyebrow="Complete Package"
          title="What's Included in Every Logo Design Project"
          summary="You receive a production-grade asset package ready for web developers, printers, and social media managers."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/15"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Process */}
      <Section>
        <SectionHeading
          eyebrow="Our Workflow"
          title="How We Bring Your Logo to Life"
          summary="A transparent, collaborative five-step creative journey from blank canvas to final vector delivery."
        />
        <div className="mt-12">
          <ProcessSteps steps={logoProcess} />
        </div>
      </Section>

      {/* Related Portfolio Projects */}
      {logoProjects.length > 0 && (
        <Section className="border-t border-white/5 bg-white/[0.01]">
          <SectionHeading
            eyebrow="Case Studies"
            title="Recent Identity Case Studies"
            summary="See how we have helped brands define their visual identity and drive measurable business results."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {logoProjects.map((project) => (
              <div
                key={project.slug}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black/60">
                  <img
                    src={project.image || project.heroImage || project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <Link
                      to={`/our-work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Frequently Asked Questions */}
      <Section className="border-t border-white/5 bg-white/[0.015]">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions About Logo Design"
          summary="Everything you need to know about our logo design packages, turnaround times, and file ownership."
        />
        <div className="mt-12 mx-auto max-w-3xl">
          <FaqList faqs={logoFaqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        title="Ready to elevate your brand with an unforgettable logo?"
        subtitle="Let's build a timeless visual identity that captivates your audience and sets you apart from competitors."
        primaryAction={{ label: "Request Free Brand Quote", to: "/contact" }}
        secondaryAction={{ label: "Explore Our Work", to: "/our-work" }}
      />
    </>
  );
}
