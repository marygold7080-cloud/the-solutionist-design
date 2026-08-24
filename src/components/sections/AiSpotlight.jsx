import React from "react";
import { Bot, Sparkles, Cpu, Layers, Terminal, ArrowUpRight, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/badge";

export function AiSpotlight() {
  const highlights = [
    {
      icon: Terminal,
      title: "Agent Reasoning Canvases",
      description: "Replace clumsy text boxes with multi-agent spatial DAG graphs and dynamic thought-stream visualizations.",
    },
    {
      icon: Cpu,
      title: "Zero-Latency Stream Mechanics",
      description: "Optimized WebSocket chunking, token rendering pipelines, and optimistic UI updates for instant perceived response.",
    },
    {
      icon: Layers,
      title: "Multimodal Co-Pilots",
      description: "Voice-driven, vision-assisted context docks that integrate seamlessly into complex domain software.",
    },
  ];

  return (
    <Section withAura auraColor="cyan" className="bg-slate-950/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-6 space-y-8">
          <Eyebrow variant="cyan" icon={Bot}>
            Next-Gen AI Experience Design
          </Eyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Transforming Complex <br />
            <span className="text-gradient-neon">Autonomous Intelligence</span> into Pure User Magic.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The world doesn't need another generic ChatGPT wrapper. We construct proprietary AI canvases, reasoning trees, and ergonomic feedback systems that turn sophisticated foundation models into indispensable enterprise workflows.
          </p>

          <div className="space-y-4 pt-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl glass-panel border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <ButtonLink
              to="/services/ai-experience-design"
              variant="neon"
              size="lg"
              className="rounded-2xl"
            >
              <span>Explore AI Studio Practices</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Interactive AI Sandbox Mockup */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl glass-panel border border-violet-500/30 p-6 md:p-8 shadow-2xl shadow-violet-950/40 space-y-6">
            {/* Mockup Top Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">agent_session_881.active</span>
              </div>
              <Badge variant="cyan" className="text-[10px]">
                Autonomous Co-Pilot
              </Badge>
            </div>

            {/* Agent Reasoning Stream Visualization */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-violet-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Agent Synthesizer
                  </span>
                  <span className="text-slate-400 font-mono">Confidence: 99.8%</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  "Analyzing 14,000 live telemetry nodes across Europe cluster. Optimizing routing topologies for &lt;1.8ms latency threshold."
                </p>
              </div>

              {/* Sub-agent Tasks */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Branch Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs text-violet-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping shrink-0" />
                  <span>Tree Resolving</span>
                </div>
              </div>
            </div>

            {/* Visual Graph Canvas Card */}
            <div className="relative aspect-[16/9] rounded-2xl bg-slate-950 border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1),transparent_70%)]" />
              <div className="flex items-center justify-between text-xs text-slate-400 relative z-10">
                <span>Spatial Node Cluster</span>
                <span className="font-mono text-emerald-400">12 Nodes Connected</span>
              </div>
              <div className="flex items-center justify-center gap-4 relative z-10 my-auto">
                <div className="px-4 py-2 rounded-xl bg-violet-600/30 border border-violet-400/50 text-white text-xs font-semibold shadow-lg shadow-violet-600/30">
                  Hypothesis A
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-cyan-400" />
                <div className="px-4 py-2 rounded-xl bg-cyan-600/30 border border-cyan-400/50 text-white text-xs font-semibold shadow-lg shadow-cyan-600/30">
                  Synthesized Output
                </div>
              </div>
              <div className="text-[11px] text-slate-400 text-right relative z-10 font-mono">
                Memory Footprint: 24MB
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AiSpotlight;
