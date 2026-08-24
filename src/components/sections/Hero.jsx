import React, { useRef, useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/data/site";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Retry on user interaction if needed
            const handleUserInteraction = () => {
              if (videoRef.current) {
                videoRef.current.play().catch(() => {});
                setVideoLoaded(true);
              }
              window.removeEventListener("click", handleUserInteraction);
              window.removeEventListener("scroll", handleUserInteraction);
            };
            window.addEventListener("click", handleUserInteraction, { once: true });
            window.addEventListener("scroll", handleUserInteraction, { once: true, passive: true });
          });
      }
    }
  }, []);

  return (
    <section className="relative isolate min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden bg-black">
      {/* Background Video with Balanced Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onPlay={() => setVideoLoaded(true)}
          className={`h-full w-full object-cover scale-105 transition-opacity duration-700 ${
            videoLoaded ? "opacity-90" : "opacity-60"
          }`}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient to ensure text readability without hiding the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85" />
      </div>

      {/* Background glow meshes & radial lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1100px] h-[500px] bg-gradient-to-tr from-gold-600/20 via-gold-500/15 to-yellow-400/10 rounded-full blur-[140px] z-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex justify-center">
            <Eyebrow icon={Sparkles}>
              Digital Agency · Branding · AI &amp; Web
            </Eyebrow>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
            We Build Brands&nbsp;<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              That Convert.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {site.description}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ButtonLink
              to="/contact"
              className="w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(197,157,70,0.6)]"
            >
              Schedule Strategy Call
            </ButtonLink>

            <ButtonLink
              to="/our-work"
              variant="ghost"
              icon={false}
              className="w-full sm:w-auto"
            >
              Explore Our Work
            </ButtonLink>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 max-w-3xl mx-auto">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-left sm:text-center space-y-0.5">
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
