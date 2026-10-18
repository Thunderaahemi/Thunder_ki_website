import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Monitor, Smartphone, Film, Sparkles, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const CinemaModal: React.FC<CinemaModalProps> = ({
  isOpen,
  onClose,
  projects,
  onOpenCaseStudy,
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '2.39:1'>('16:9');
  const [resolution, setResolution] = useState<'4K' | '1080p'>('4K');
  const [progress, setProgress] = useState(0.25);
  const [timecode, setTimecode] = useState('00:01:14:12');

  const activeProject = projects[activeProjectIndex] || projects[0];

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Simulated playback timecode loop
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev >= 1 ? 0 : prev + 0.004;
        const totalFrames = Math.floor(next * 180 * 24);
        const totalSecs = Math.floor(totalFrames / 24);
        const frames = String(totalFrames % 24).padStart(2, '0');
        const mins = String(Math.floor(totalSecs / 60)).padStart(2, '0');
        const secs = String(totalSecs % 60).padStart(2, '0');
        setTimecode(`00:${mins}:${secs}:${frames}`);
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '9:16':
        return 'max-w-md aspect-[9/16]';
      case '2.39:1':
        return 'max-w-5xl aspect-[2.39/1]';
      case '16:9':
      default:
        return 'max-w-5xl aspect-video';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="4K Cinema Theater Viewer"
    >
      {/* Background Click to Close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Main Cinema Suite Container */}
      <div className="relative w-full max-w-6xl z-10 flex flex-col bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,1)] max-h-[96vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold text-white tracking-wider uppercase">
              CINEMA MASTER SUITE
            </span>
            <span className="text-neutral-500 hidden sm:inline">·</span>
            <span className="text-neutral-300 hidden sm:inline">
              CALIBRATED REC.709 & DCI-P3
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Resolution Selector */}
            <div className="flex items-center bg-black/50 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setResolution('4K')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  resolution === '4K'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                4K HDR
              </button>
              <button
                onClick={() => setResolution('1080p')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  resolution === '1080p'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                1080p
              </button>
            </div>

            {/* Aspect Ratio Switcher */}
            <div className="hidden md:flex items-center bg-black/50 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setAspectRatio('16:9')}
                className={`px-2.5 py-1 rounded text-[11px] flex items-center gap-1 transition-colors ${
                  aspectRatio === '16:9'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="16:9 Standard Screen"
              >
                <Monitor className="w-3 h-3" />
                <span>16:9</span>
              </button>
              <button
                onClick={() => setAspectRatio('9:16')}
                className={`px-2.5 py-1 rounded text-[11px] flex items-center gap-1 transition-colors ${
                  aspectRatio === '9:16'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="9:16 Vertical Reel"
              >
                <Smartphone className="w-3 h-3" />
                <span>9:16</span>
              </button>
              <button
                onClick={() => setAspectRatio('2.39:1')}
                className={`px-2.5 py-1 rounded text-[11px] flex items-center gap-1 transition-colors ${
                  aspectRatio === '2.39:1'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="2.39:1 Anamorphic Scope"
              >
                <Film className="w-3 h-3" />
                <span>2.39:1</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] bg-black flex items-center justify-center p-4 overflow-hidden">
          <div
            className={`relative w-full transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${getAspectClass()}`}
          >
            <img
              src={activeProject.imageUrl}
              alt={activeProject.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover select-none transition-transform duration-700 ${
                isPlaying ? 'scale-103' : 'scale-100'
              }`}
            />

            {/* In-video watermark & specs */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/15 text-white font-mono text-[10px] uppercase">
                {activeProject.format}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/15 text-neutral-300 font-mono text-[10px] uppercase">
                {activeProject.specs}
              </span>
            </div>

            {/* Center Playback Pause Indicator */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group/center cursor-pointer"
            >
              <div
                className={`w-18 h-18 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-200 ${
                  isPlaying ? 'opacity-0 group-hover/center:opacity-100 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-white fill-white" />
                ) : (
                  <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Scrubber & Controls Footer */}
        <div className="px-6 py-4 bg-[#141414] border-t border-white/10 flex flex-col gap-3 font-mono">
          {/* Progress Timeline */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setProgress(p);
            }}
            className="w-full h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer relative group/timeline"
          >
            <div
              className="absolute top-0 left-0 bottom-0 bg-white rounded-full transition-all duration-75"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            {/* Playback Controls & Info */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={() => setProgress(0)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>

              <span className="text-white font-mono tabular-nums text-xs font-semibold ml-1">
                {timecode}
              </span>
            </div>

            {/* Active Project Title & Quick Case Study Drawer Opener */}
            <div className="flex items-center gap-3">
              <span className="text-neutral-300 font-sans text-xs truncate max-w-xs">
                {activeProject.title}
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenCaseStudy(activeProject);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-sans font-medium transition-colors border border-white/10 whitespace-nowrap cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Reel Project Switcher Strip */}
          <div className="pt-2 border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest shrink-0 mr-1">
              REEL SELECTOR:
            </span>
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-sans whitespace-nowrap transition-all cursor-pointer ${
                  activeProjectIndex === idx
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {proj.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
