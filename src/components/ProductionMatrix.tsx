import React, { useState } from 'react';
import { Smartphone, Terminal, Clapperboard, Brain, TrendingUp, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';

interface ProductionMatrixProps {
  onSelectDiscipline: (disciplineId: string) => void;
}

export const ProductionMatrix: React.FC<ProductionMatrixProps> = ({ onSelectDiscipline }) => {
  const [activeCurvePoint, setActiveCurvePoint] = useState<number | null>(null);

  return (
    <section id="disciplines" className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-2">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Production Matrix
          </h2>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
          Where technical computing meets visual mastery. Five specialized pillars engineered to establish brand supremacy across every viewport.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        {/* Pillar A: Viral Short-Form & Reels (7-col) */}
        <div className="md:col-span-7 bg-[#121216]/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative group hover:bg-[#16161b]/80 transition-all border border-white/[0.08] shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                Pillar 01 · Attention Retention
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Viral Short-Form & Reels
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              Engineered for retention. 9:16 vertical storytelling, pacing, sound design, and kinetic typography that captures attention in under 0.8s. Calibrated for maximum algorithmic surge and brand authority.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase tracking-wider">
                TikTok / Reels / Shorts
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase tracking-wider">
                Sound Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase tracking-wider">
                Kinetic Captions
              </span>
            </div>
          </div>

          {/* Retention Curve SVG */}
          <div className="w-full bg-[#0a0a0c]/80 rounded-2xl p-5 border border-white/5 mt-4">
            <div className="flex items-center justify-between text-neutral-400 font-mono text-xs mb-2">
              <span className="uppercase tracking-wider">Audience Retention Curve</span>
              <span className="text-white font-bold">
                {activeCurvePoint !== null
                  ? `${activeCurvePoint}% AT HOOK POINT`
                  : '92.4% AT 30 SECONDS'}
              </span>
            </div>

            <div className="relative w-full h-20 pt-2">
              <svg className="w-full h-16 text-white overflow-visible" fill="none" viewBox="0 0 400 60" preserveAspectRatio="none">
                <path
                  d="M0 10 Q 50 12, 120 18 T 240 22 T 360 25 L 400 28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 10 Q 50 12, 120 18 T 240 22 T 360 25 L 400 28 L 400 60 L 0 60 Z"
                  fill="currentColor"
                  fillOpacity="0.12"
                />
                <circle
                  cx="120"
                  cy="18"
                  r="5"
                  fill="white"
                  className="cursor-pointer hover:scale-150 transition-transform"
                  onMouseEnter={() => setActiveCurvePoint(95)}
                  onMouseLeave={() => setActiveCurvePoint(null)}
                />
                <circle
                  cx="240"
                  cy="22"
                  r="5"
                  fill="white"
                  className="cursor-pointer hover:scale-150 transition-transform"
                  onMouseEnter={() => setActiveCurvePoint(92)}
                  onMouseLeave={() => setActiveCurvePoint(null)}
                />
                <circle
                  cx="360"
                  cy="25"
                  r="5"
                  fill="white"
                  className="cursor-pointer hover:scale-150 transition-transform"
                  onMouseEnter={() => setActiveCurvePoint(88)}
                  onMouseLeave={() => setActiveCurvePoint(null)}
                />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
              <span>0s Hook</span>
              <span>15s Midpoint</span>
              <span>30s Climax</span>
              <span>Loop Drop</span>
            </div>
          </div>
        </div>

        {/* Pillar B: Bespoke Web Design & Development (5-col) */}
        <div className="md:col-span-5 bg-[#121216]/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#16161b]/80 transition-all border border-white/[0.08] shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                Pillar 02 · Architecture
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Website For Your Branding
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
              Apple-inspired digital architecture, interactive WebGL shaders, seamless scroll animations, and lightning-fast loading built directly to convert discerning visitors into dedicated clients.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                WebGL / Three.js
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                Tailwind Engine
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                Framer Motion
              </span>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="w-full bg-[#0a0a0c]/80 rounded-2xl p-4 font-mono text-xs text-neutral-400 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <p className="text-white pt-1">$ init-viewport --framerate=120hz</p>
            <p className="text-neutral-400">&gt; Calibrated contrast: Rec.709 Pass</p>
            <p className="text-emerald-400">&gt; Conversion index: Optimized (99.8%)</p>
          </div>
        </div>

        {/* Pillar C: Premium Motion Graphics for Business (4-col) */}
        <div className="md:col-span-4 bg-[#121216]/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#16161b]/80 transition-all border border-white/[0.08] shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Clapperboard className="w-6 h-6" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                Pillar 03
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Premium Motion Graphics
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Dynamic 2D/3D visual identity, hardware product launch reveals, high-stake explainer narratives, and broadcast-grade vector transitions.
            </p>

            <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>AI & 3D Visual Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Vector UI Simulations & SaaS Demos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Keynote Title Sequences</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectDiscipline('motion')}
            className="mt-6 flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
          >
            <span>Commission 3D Motion</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar D: AI-Powered Video Editing (4-col) */}
        <div className="md:col-span-4 bg-[#121216]/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#16161b]/80 transition-all border border-white/[0.08] shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Brain className="w-6 h-6" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                Pillar 04
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              AI-Powered Video Workflows
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Next-gen generative pipelines, voice cloning, automatic contextual b-roll generation, deep upscale remastering, and neural object tracking.
            </p>

            <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white shrink-0" />
                <span>Google Flow Generated AI Video</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white shrink-0" />
                <span>Neural Inpainting & Cleanplate Rigging</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white shrink-0" />
                <span>Ultra-Res Upscaling</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectDiscipline('ai')}
            className="mt-6 flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
          >
            <span>Deploy AI Pipelines</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar E: Comprehensive Social Media Management (4-col) */}
        <div className="md:col-span-4 bg-[#121216]/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#16161b]/80 transition-all border border-white/[0.08] shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                Pillar 05
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Social Media Growth Infrastructure
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              End-to-end content pipeline: strategy, creative direction, high-velocity publishing schedules, analytics tracking, and audience scaling.
            </p>

            <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>High Growth Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Full Funnel Marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Content Strategy & Velocity</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectDiscipline('growth')}
            className="mt-6 flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
          >
            <span>Scale Content Engine</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
