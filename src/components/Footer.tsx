import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black/50 backdrop-blur-2xl border-t border-white/10 mt-24 relative z-10">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-xs">
                TH
              </div>
              <span className="font-bold text-base text-white uppercase tracking-wider">
                Thunderaahemi
              </span>
            </div>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Cinematic video editing, high-fidelity motion graphics, and luxury digital architecture engineered for visionaries and iconic brands worldwide.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs uppercase text-neutral-300">
                Available for Q2 Projects
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase text-neutral-400 tracking-wider">
              Discipline & Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm text-neutral-400">
              <button
                onClick={() => scrollTo('#selected-works')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Selected Works
              </button>
              <button
                onClick={() => scrollTo('#disciplines')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollTo('#motion-showcase')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Motion & Reels
              </button>
              <button
                onClick={() => scrollTo('#ai-podcasting')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                AI & Creator
              </button>
              <button
                onClick={() => scrollTo('#workflow')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Studio Archive
              </button>
              <button
                onClick={() => scrollTo('#inquiry')}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Direct Inquiries
              </button>
            </div>
          </div>

          {/* Network & Social Channels */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase text-neutral-400 tracking-wider">
              Network & Comms
            </span>
            <div className="flex flex-col gap-2 font-mono text-xs text-neutral-300">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors py-1 flex items-center justify-between group"
              >
                <span>Whatsapp</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors py-1 flex items-center justify-between group"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors py-1 flex items-center justify-between group"
              >
                <span>LinkedIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono text-neutral-400">
          <span>
            © 2025 THUNDERAAHEMI. ALL RIGHTS RESERVED. CALIBRATED IN REC.709 &amp; DCI-P3.
          </span>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">
              Terms of Exhibition
            </span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">
              Privacy Architecture
            </span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">
              Security Protocols
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
