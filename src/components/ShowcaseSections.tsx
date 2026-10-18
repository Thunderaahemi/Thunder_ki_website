import React, { useState } from 'react';
import { Play, Brain, CheckCircle } from 'lucide-react';

interface ShowcaseSectionsProps {
  onOpenInquiry: () => void;
  activeVideoId?: string | null;
  onPlayVideo?: (videoId: string) => void;
}

export const ShowcaseSections: React.FC<ShowcaseSectionsProps> = ({
  onOpenInquiry,
  activeVideoId: externalActiveVideoId,
  onPlayVideo: externalOnPlayVideo,
}) => {
  // Internal state if not passed from parent
  const [internalActiveVideo, setInternalActiveVideo] = useState<string | null>('motion-master');

  const currentPlayingId = externalActiveVideoId !== undefined ? externalActiveVideoId : internalActiveVideo;

  const handlePlay = (id: string) => {
    if (externalOnPlayVideo) {
      externalOnPlayVideo(id);
    } else {
      setInternalActiveVideo(id);
    }
  };

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 space-y-24 sm:space-y-32">
      {/* ======================================================== */}
      {/* 1. REVEALED MOTION GRAPHICS SHOWCASE SECTION */}
      {/* ======================================================== */}
      <section
        id="motion-showcase-section"
        className="w-full max-w-[1680px] mx-auto py-8 sm:py-12"
      >
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-1">
              Flagship Reel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
              Motion Graphics Master Showcase
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
            <span>Premium Motion</span>
            <span>·</span>
            <span>Brand Storytelling</span>
            <span>·</span>
            <span>High-Impact Visuals</span>
          </div>
        </div>

        {/* Motion Graphics 16:9 Showcase Card with Transparent Frame */}
        <div className="rounded-3xl bg-[#0e0e12]/60 backdrop-blur-xl border border-white/10 overflow-hidden p-6 sm:p-8 lg:p-10 relative shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Video Frame: Only plays if it's the active video */}
            <div className="w-full lg:w-7/12 rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl relative aspect-video">
              {currentPlayingId === 'motion-master' ? (
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/Wd69V4lPsQw?autoplay=1&rel=0&modestbranding=1&enablejsapi=1"
                  title="Kinetic Studio Motion Graphics Master Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => handlePlay('motion-master')}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_KsFpKR4EkKAGYVdjZRUPLbCW7M9slZTwuyzT2LMHNfxDdRFjK9vwazus5oZtCdDDSnA_ytSX8z6E_7V3yp38IK-h3EXc-cNnb1rSJXFCcP3Jif8nvMRXZ9VrhJiU_bpadg5AQ4PkVNs4LResgUTtXExQfW01VWm6hLI7RmP76j_VSdLm0QcQDm21pKMMUkyfQOFRYsUVA6lOexcTMrsvfKVgBAXSrA6DQEnJSQurzY-yODN3b9Y0"
                    alt="Master Reel Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white transition-all">
                      <Play className="w-7 h-7 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/80 text-white font-mono text-[10px] uppercase">
                    Click to Play
                  </span>
                </div>
              )}
            </div>

            {/* Narrative & Specs */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-xs uppercase mb-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Motion Graphics Architecture</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Kinetic Vector &amp; High-End 3D Motion
                </h3>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  Premium motion graphics crafted for ambitious businesses that want a sharper identity, stronger recall, and a more confident brand presence across every touchpoint.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 font-mono text-xs">
                  <div>
                    <div className="text-neutral-500 uppercase text-[11px]">Focus</div>
                    <div className="text-lg font-bold text-white">Brand Presence</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 uppercase text-[11px]">Style</div>
                    <div className="text-lg font-bold text-white">Premium &amp; Cinematic</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Brand Storytelling</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Campaign Visuals</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Executive Identity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. AI PODCASTING & VOICE SYNTHESIS */}
      {/* ======================================================== */}
      <section id="ai-podcasting" className="w-full max-w-[1680px] mx-auto py-8">
        <div className="rounded-3xl bg-[#0e0e12]/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-1">
                Next-Gen Audio-Visual Production
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight">
                AI Podcasting &amp; Voice Synthesis
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-xs uppercase">
              9:16 Mobile Native
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Phone Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] rounded-[2.5rem] p-3 bg-black/70 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-center pb-2 pt-1">
                  <div className="w-16 h-1.5 rounded-full bg-neutral-700" />
                </div>
                <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/10">
                  {currentPlayingId === 'ai-podcast' ? (
                    <iframe
                      className="w-full h-full border-0"
                      src="https://www.youtube-nocookie.com/embed/EFrk3ryUoZM?autoplay=1&rel=0&modestbranding=1&enablejsapi=1"
                      title="AI Podcasting &amp; Voice Synthesis Reel"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full group cursor-pointer bg-neutral-900 flex items-center justify-center"
                      onClick={() => handlePlay('ai-podcast')}
                    >
                      <div className="text-center p-4">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                        <span className="text-xs font-mono uppercase text-white block">
                          Play AI Podcasting Reel
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center pt-2.5 pb-1">
                  <div className="w-24 h-1 rounded-full bg-neutral-600" />
                </div>
              </div>
            </div>

            {/* Narrative & Context */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-3">
                  <Brain className="w-4 h-4 text-white" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider">
                    Neural Voice &amp; Dynamic Captions
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Premium AI-Driven Short-Form Content
                </h4>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  Thoughtful audio direction, sharp visual hooks, and polished motion design that help your message land quickly, feel more premium, and stay memorable across social platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-xl font-bold text-white mb-1">Fast Delivery</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider">
                      Efficient production flow
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-xl font-bold text-white mb-1">Sharper Hooks</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider">
                      Cleaner social impact
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                  Voice Direction
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                  Social Hook Design
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 uppercase">
                  Premium Editing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PERSONAL BRANDING & CREATOR GROWTH: FACE CENTER FRAMED LAYOUT */}
      {/* (Div selected/scaling card removed, center is completely open to showcase face) */}
      {/* ======================================================== */}
      <section
        id="creator-growth"
        className="w-full max-w-[1680px] mx-auto py-8 sm:py-12 relative"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase text-neutral-400 tracking-widest block mb-1">
              High-Velocity Creator Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Personal Branding &amp; Creator Growth
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white font-mono text-xs font-semibold uppercase tracking-wider">
              Curated Creator Archive
            </span>
          </div>
        </div>

        {/* Split Container: SHORT 01 (Left) — OPEN CENTER CORRIDOR (Face expressions) — SHORT 02 (Right) */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 w-full relative min-h-[620px]">
          {/* LEFT CARD: Short 01 */}
          <div className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col rounded-3xl bg-[#0e0e12]/60 backdrop-blur-xl border border-white/10 p-5 transition-all shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 font-mono text-xs">
              <span className="text-white uppercase flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Short 01
              </span>
              <span className="text-neutral-400">Viral Hook Pacing</span>
            </div>

            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-inner">
              {currentPlayingId === 'creator-short-01' ? (
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/rujw4FlpBKY?autoplay=1&rel=0&modestbranding=1&enablejsapi=1"
                  title="Personal Branding &amp; Creator Growth Reel 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div
                  className="relative w-full h-full group cursor-pointer bg-neutral-900 flex items-center justify-center"
                  onClick={() => handlePlay('creator-short-01')}
                >
                  <div className="text-center p-4">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-xs font-mono uppercase text-white block">
                      Play Short 01
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-base text-white mb-1">High-Impact Creator Hook</h4>
                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  Custom dynamic cutaways, kinetic text motion, and surgical audio punch-ins to maximize viewer watch time.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pt-2 border-t border-white/10">
                <span className="uppercase text-[11px]">Engagement Index</span>
                <span className="text-white font-bold">+320% Lift</span>
              </div>
            </div>
          </div>

          {/* CENTER CORRIDOR: Completely open to showcase the face & expressions in the animation */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none">
            <div className="px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm shadow-lg mb-2">
              <span className="font-mono text-white/75 uppercase tracking-widest text-[10px]">
                Cinematic Presence · Live Timeline
              </span>
            </div>
            <p className="font-mono text-white/40 tracking-wider uppercase text-[9px]">
              Background Animation Scrub Sync
            </p>
          </div>

          {/* RIGHT CARD: Short 02 */}
          <div className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col rounded-3xl bg-[#0e0e12]/60 backdrop-blur-xl border border-white/10 p-5 transition-all shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 font-mono text-xs">
              <span className="text-white uppercase flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Short 02
              </span>
              <span className="text-neutral-400">Authority Branding</span>
            </div>

            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-inner">
              {currentPlayingId === 'creator-short-02' ? (
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/mFz1-gX6U4Q?autoplay=1&rel=0&modestbranding=1&enablejsapi=1"
                  title="Personal Branding &amp; Creator Growth Reel 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div
                  className="relative w-full h-full group cursor-pointer bg-neutral-900 flex items-center justify-center"
                  onClick={() => handlePlay('creator-short-02')}
                >
                  <div className="text-center p-4">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-xs font-mono uppercase text-white block">
                      Play Short 02
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-base text-white mb-1">Executive Brand Narrative</h4>
                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  Refined cinematic pacing and premium visual direction that helps your brand feel more established, credible, and memorable.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pt-2 border-t border-white/10">
                <span className="uppercase text-[11px]">Brand Positioning</span>
                <span className="text-white font-bold">Premium Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
