import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Sparkles, Layers, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CaseStudyDrawerProps {
  project: Project | null;
  onClose: () => void;
  onSelectForBrief: (discipline: string) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  project,
  onClose,
  onSelectForBrief,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-2xl h-full bg-[#121212] border-l border-white/10 shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#141414]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="uppercase text-white font-semibold">{project.client}</span>
            <span>·</span>
            <span>{project.format}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-thin">
          {/* Main Media Preview Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl group">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-white font-mono text-xs">
              {project.specs}
            </div>
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-black font-semibold text-xs">
              {project.badge}
            </div>
          </div>

          {/* Title & Client Headline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Quantitative Results */}
          <div className="bg-[#181818] rounded-2xl p-6 border border-white/5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Impact & Key Results
            </span>
            <div className="space-y-2.5">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-200">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge & Strategic Solution */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                The Creative Challenge
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Execution & Methodology
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Production Tools & Technical Stack */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Production Stack & Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg bg-white/5 text-neutral-300 text-xs font-mono border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables Suite */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Master Package Deliverables
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              {project.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drawer Action Footer */}
        <div className="p-6 border-t border-white/10 bg-[#141414] flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-xs text-neutral-400 block font-mono">Sprint turnaround:</span>
            <span className="text-xs text-white font-semibold">Average 7–14 Days</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectForBrief(project.category);
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Commission a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
