import React from 'react';
import { PROTOCOL_STEPS } from '../data/portfolioData';

export const ProductionProtocol: React.FC = () => {
  return (
    <section id="methodology" className="w-full bg-[#101010] border-y border-white/5 py-24 sm:py-32">
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
              Calibrated Production Protocol
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            AVERAGE SPRINT: 7 TO 14 DAYS
          </span>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PROTOCOL_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col p-8 rounded-3xl bg-[#141414] border border-white/10 relative group hover:border-white/20 transition-all shadow-md"
            >
              <span className="text-5xl sm:text-6xl font-bold text-neutral-700 select-none mb-6 group-hover:text-white transition-colors duration-300">
                {step.step}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-1">
                {step.description}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 uppercase tracking-wider">Deliverable</span>
                <span className="text-white font-medium">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
