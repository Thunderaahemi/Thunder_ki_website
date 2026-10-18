import React, { useState } from 'react';
import { ArrowUpRight, Play, Eye, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';

interface SelectedWorksProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
  onOpenCinema: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  projects,
  onOpenCaseStudy,
  onOpenCinema,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'reels', label: 'Viral Reels' },
    { id: 'web', label: 'Web Architecture' },
    { id: 'motion', label: '3D Motion' },
    { id: 'ai', label: 'AI Workflows' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="selected-works" className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-2">
            Portfolio Exhibition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Selected Works (2024–2025)
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
          <span>CURATED ARCHIVE</span>
          <span>·</span>
          <span>REC.709 GRADED</span>
          <span>·</span>
          <span>4K MASTER</span>
        </div>
      </div>

      {/* Interactive Category Filter Segmented Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-[#141414] border border-white/10 rounded-2xl w-fit mb-12 overflow-x-auto max-w-full scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-white text-black font-semibold shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenCaseStudy(project)}
            className="flex flex-col rounded-3xl bg-[#141414] overflow-hidden group border border-white/10 hover:border-white/25 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
          >
            {/* Visual Media Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider">
                  {project.categoryLabel} · {project.badge}
                </span>
              </div>

              {/* Bottom Quick Play / Inspect Triggers */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCinema(project);
                  }}
                  className="w-10 h-10 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-all shadow-md group/btn cursor-pointer"
                  title="Play in Cinema Modal"
                  aria-label="Play Reel"
                >
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </button>
                <div className="w-10 h-10 rounded-full bg-black/70 group-hover:bg-white group-hover:text-black text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">
                    {project.specs.split('·')[0]}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-neutral-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tools list */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                {project.tools.slice(0, 3).map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 font-mono text-[11px] border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
                <span className="text-xs font-mono text-neutral-400 ml-auto group-hover:text-white transition-colors flex items-center gap-1">
                  <span>View Case</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
