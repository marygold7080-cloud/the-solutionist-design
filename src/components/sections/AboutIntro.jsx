import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Image } from "@/components/ui/image";

export function AboutIntro() {
  return (
    <Section withAura auraColor="violet">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Showcase */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative rounded-3xl overflow-hidden glass-panel border-white/15 p-2 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="The Solutionist Design Team at Work"
              className="rounded-2xl aspect-[4/3] object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl glass-panel border-white/10 space-y-1">
              <div className="text-3xl font-bold text-white font-display">48+</div>
              <div className="text-xs text-slate-400">International Design Awards</div>
            </div>
            <div className="p-6 rounded-2xl glass-panel border-white/10 space-y-1">
              <div className="text-3xl font-bold text-cyan-400 font-display">100%</div>
              <div className="text-xs text-slate-400">On-Time Sprint Delivery</div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <Eyebrow variant="neon" icon={Sparkles}>
            About The Solutionist
          </Eyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Where High-Level Aesthetics Meet <span className="text-gradient">Precision Engineering</span>.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded by a collective of former Silicon Valley design leads and systems engineers, The Solutionist was born out of frustration with slow, generic agency retainers.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We operate as an agile high-impact strike team. By combining autonomous AI workflows, living Figma-to-code design systems, and relentless craftsmanship, we help our clients punch far above their weight.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <ButtonLink to="/about" variant="neon" size="lg" className="rounded-2xl">
              <span>Our Philosophy & Team</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutIntro;
