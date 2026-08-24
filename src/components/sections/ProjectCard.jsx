import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
      <Link to={`/our-work/${project.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
          <img
            src={project.image}
            alt={project.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400">{project.category}</span>
          <h3 className="mt-3 flex items-start justify-between gap-3 font-heading text-xl font-semibold text-white">
            {project.title}
            <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.excerpt}</p>
          <span className="mt-5 inline-block text-sm font-medium text-gold-400">View case study</span>
        </div>
      </Link>
    </article>
  );
}