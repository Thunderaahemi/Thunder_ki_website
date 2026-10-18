import React, { useState } from 'react';
import { Play, Sparkles, Film, ExternalLink } from 'lucide-react';
import { HERO_SHOWREEL } from '../data/portfolioData';

interface ShowreelPlayerProps {
  onOpenCinemaModal: () => void;
}

export const ShowreelPlayer: React.FC<ShowreelPlayerProps> = ({ onOpenCinemaModal }) => {
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(true);

  return (
    <div
      id="hero-showcase-stage"
      className="relative w-full rounded-3xl bg-[#0e0e0e]/80 backdrop-blur-2xl border border-neutral-800 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.9)] transition-all duration-300 group"
    >
      {/* Top Scrim HUD */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/50 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px] uppercase tracking-wider border border-white/10 backdrop-blur-md">
            4K HDR
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 font-mono text-[11px] uppercase tracking-wider border border-white/5 backdrop-blur-md">
            REC.2020
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-400 tracking-wider">
            COLOR GRADED IN DAVINCI RESOLVE
          </span>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs text-white tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="tabular-nums font-mono text-neutral-200">
            00:03:29:06 / 24 FPS / PRORES 422 HQ
          </span>
        </div>
      </div>

      {/* Real Interactive YouTube Embed / Video Canvas */}
      <div className="relative aspect-video w-full bg-black overflow-hidden">
        {isPlayingEmbed ? (
          <iframe
            src="https://www.youtube.com/embed/Wd69V4lPsQw?autoplay=1&mute=1&loop=1&playlist=Wd69V4lPsQw&modestbranding=1&rel=0"
            title="Kinetic Studio Motion Graphics Master Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 select-none"
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={HERO_SHOWREEL.imageUrl}
              alt="4K Master showreel still"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlayingEmbed(true)}
              className="absolute w-20 h-20 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Scrubber & Bottom Transport Bar */}
      <div className="relative z-20 px-5 sm:px-6 py-4 bg-[#0a0a0c]/90 backdrop-blur-xl border-t border-neutral-800">
        <div className="flex items-center justify-between text-neutral-300 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="tracking-wider uppercase text-white font-medium text-[11px] sm:text-xs">
              Kinetic Motion Graphics Showcase · High-Fidelity Reel
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="uppercase text-[11px] text-neutral-400 hidden xs:inline">
              4K MASTER · DCI 1.90:1
            </span>
            <button
              onClick={onOpenCinemaModal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] border border-white/10 transition-colors cursor-pointer"
            >
              <Film className="w-3.5 h-3.5 text-neutral-300" />
              <span>Cinema Suite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
