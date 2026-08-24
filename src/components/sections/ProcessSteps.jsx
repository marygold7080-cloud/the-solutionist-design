const defaultSteps = [
  {
    title: "Strategy & Discovery",
    desc: "We analyze your business objectives, map technical requirements, and define clear deliverables and milestones.",
  },
  {
    title: "Architecture & Design",
    desc: "We craft intuitive UX/UI designs, system architectures, and interactive prototypes tailored to your brand.",
  },
  {
    title: "Rapid Engineering",
    desc: "Our team builds scalable, high-performance systems with modern tech stacks, clean code, and AI capabilities.",
  },
  {
    title: "Testing & Launch",
    desc: "Rigorous quality assurance, performance benchmarking, security checks, and seamless production deployment.",
  },
];

export function ProcessSteps({ steps }) {
  const currentSteps = Array.isArray(steps) && steps.length > 0 ? steps : defaultSteps;

  return (
    <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {currentSteps.map((step, i) => (
        <li key={step.title || i} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <span className="font-heading text-4xl font-semibold text-gold-500/30">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-heading text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc || step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default ProcessSteps;