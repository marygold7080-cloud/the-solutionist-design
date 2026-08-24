import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  highlightText,
  description,
  summary,
  breadcrumbs,
  crumbs,
  bgImage,
  children,
  className,
}) {
  const desc = description || summary;
  const breadcrumbItems = breadcrumbs || crumbs;

  // Curated premium high-res photography banner images matching each inner page theme
  const getContextualHeroImage = () => {
    if (bgImage) return bgImage;

    const lowerEyebrow = (eyebrow || "").toLowerCase();
    const lowerTitle = (title || "").toLowerCase();

    if (lowerEyebrow.includes("ai") || lowerTitle.includes("ai") || lowerTitle.includes("bot") || lowerTitle.includes("automation")) {
      return "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("web") || lowerTitle.includes("web") || lowerTitle.includes("wordpress") || lowerTitle.includes("app")) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("logo") || lowerTitle.includes("logo") || lowerEyebrow.includes("branding") || lowerTitle.includes("brand")) {
      return "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("marketing") || lowerTitle.includes("marketing") || lowerTitle.includes("seo")) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("work") || lowerTitle.includes("project") || lowerTitle.includes("case")) {
      return "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("about") || lowerTitle.includes("who we are")) {
      return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("blog") || lowerTitle.includes("news") || lowerTitle.includes("insight")) {
      return "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop";
    }
    if (lowerEyebrow.includes("contact") || lowerTitle.includes("talk")) {
      return "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop";
    }
    // Default luxury abstract wave for all other inner pages
    return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop";
  };

  const heroImage = getContextualHeroImage();

  return (
    <section className={cn("relative isolate pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/[0.08] bg-[#050508]", className)}>
      {/* Top Bar Background Image Banner with Dark Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />
        {/* Elegant gradient overlays for text clarity and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/80 to-[#000000]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(212,175,55,0.2),rgba(0,0,0,0))]" />
      </div>

      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[700px] h-[350px] bg-gradient-to-b from-gold-500/20 via-amber-500/10 to-transparent rounded-full blur-[110px] z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} />}

        <div className="max-w-4xl space-y-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            {title}{" "}
            {highlightText && (
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent block sm:inline">
                {highlightText}
              </span>
            )}
          </h1>

          {desc && (
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
              {desc}
            </p>
          )}

          {children && <div className="pt-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
