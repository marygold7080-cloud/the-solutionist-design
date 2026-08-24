import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";

export default function FeaturedWork({ limit = 3, showFilter = true }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  const displayList = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <Section id="work" ariaLabel="Featured work">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We're Proud Of"
          intro="A selection of web, AI and branding work delivered for growing businesses."
          align="left"
          className="mb-0 md:mb-0"
        />

        <ButtonLink
          to="/our-work"
          variant="ghost"
          icon={false}
          className="shrink-0"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </ButtonLink>
      </div>

      {showFilter && (
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-gold-500 text-[#000000] shadow-lg shadow-gold-500/30"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
