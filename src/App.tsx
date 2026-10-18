import React, { useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { BackgroundScrollAnimation } from './components/BackgroundScrollAnimation';
import { ShowcaseSections } from './components/ShowcaseSections';
import { ProductionMatrix } from './components/ProductionMatrix';
import { ProductionProtocol } from './components/ProductionProtocol';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { CinemaModal } from './components/CinemaModal';
import { CaseStudyDrawer } from './components/CaseStudyDrawer';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types/portfolio';

export default function App() {
  const [isCinemaModalOpen, setIsCinemaModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedDiscipline, setPreselectedDiscipline] = useState<string>('motion');

  // Single active video player state to guarantee only one video plays at any time
  const [activeVideoId, setActiveVideoId] = useState<string | null>('motion-master');

  const handleOpenCinema = (project?: Project) => {
    // When cinema modal opens, pause inline videos
    setActiveVideoId(null);
    setIsCinemaModalOpen(true);
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  const handleSelectForBrief = (discipline: string) => {
    setPreselectedDiscipline(discipline);
    const contactSec = document.querySelector('#inquiry');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayVideo = (videoId: string) => {
    // Enforce strictly one video playing at a time
    setActiveVideoId(videoId);
  };

  return (
    <div className="relative min-h-screen bg-black text-[#e2e2e2] selection:bg-white selection:text-black">
      {/* ======================================================== */}
      {/* LAYER 0: FIXED ANIMATION CANVAS OF SHREYAS & LOGO        */}
      {/* (Scrubbable / Visible Everywhere in Background)          */}
      {/* ======================================================== */}
      <BackgroundScrollAnimation />

      {/* ======================================================== */}
      {/* LAYER 1: TRANSPARENT INTERACTIVE PORTFOLIO UI            */}
      {/* ======================================================== */}
      <div id="page-wrapper" className="relative z-10 w-full bg-transparent flex flex-col min-h-screen">
        {/* Top Floating Navigation */}
        <Navbar
          onOpenCinema={() => handleOpenCinema()}
          onOpenConsultation={() => window.open('https://wa.me/message/KUBEW5NTGB7ZK1', '_blank', 'noopener,noreferrer')}
        />

        {/* MAIN CONTENT AREA */}
        <main className="w-full flex-1 bg-transparent">
          {/* ======================================================== */}
          {/* 1. HERO SECTION: View opening animation, overlayed text  */}
          {/* ======================================================== */}
          <section
            id="hero-section"
            className="relative min-h-[120vh] sm:min-h-[135vh] w-full flex flex-col justify-start items-center pt-[18vh] pb-[10vh] px-4 sm:px-6 lg:px-12 bg-transparent"
          >
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full relative z-10">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/15 shadow-md mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="font-mono text-xs text-white/80 uppercase tracking-widest">
                  Master Grade Motion &amp; Code · Q2 Calendar Open
                </span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/60 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] leading-[1.08]">
                CINEMATIC VISION.<br />PRECISION CRAFT.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/85 max-w-3xl mb-10 leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
                Specializing in Viral short-form Reels, High-conversion Web Design, bespoke Motion Graphics,
                Social Media Growth, and cutting-edge AI Video Workflows. Engineered for visionary founders and cultural disruptors.
              </p>

              {/* CTA Action Cluster */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a
                  href="#motion-showcase-section"
                  onClick={() => handlePlayVideo('motion-master')}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
                >
                  Explore Motion Graphics
                </a>
                <a
                  href="#motion-showcase-section"
                  onClick={() => handlePlayVideo('motion-master')}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-black/50 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider backdrop-blur-md hover:bg-white/15 active:scale-[0.98] transition-all shadow-md cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>Watch Showreel</span>
                </a>
              </div>

              {/* Scroll down indicator to appreciate the opening frames & animation */}
              <div id="scroll-hint" className="flex flex-col items-center gap-1.5 text-white/50 animate-bounce duration-1000">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                  Scroll down to explore
                </span>
                <ChevronDown className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 2. SHOWCASE SECTIONS (Motion 16:9, AI Podcasting,        */}
          {/*    Creator Growth with Open Center Corridor)             */}
          {/* ======================================================== */}
          <ShowcaseSections
            onOpenInquiry={() => handleSelectForBrief('reels')}
            activeVideoId={activeVideoId}
            onPlayVideo={handlePlayVideo}
          />

          {/* ======================================================== */}
          {/* 3. FIVE CORE PILLARS (BESPOKE PRODUCTION MATRIX)         */}
          {/* ======================================================== */}
          <ProductionMatrix onSelectDiscipline={handleSelectForBrief} />

          {/* ======================================================== */}
          {/* 4. CALIBRATED PRODUCTION PROTOCOL & TESTIMONIALS         */}
          {/* ======================================================== */}
          <ProductionProtocol />

          {/* ======================================================== */}
          {/* 6. HIGH-IMPACT CLOSING CTA & INQUIRY FORM                */}
          {/* ======================================================== */}
          <InquirySection initialDiscipline={preselectedDiscipline} />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* ======================================================== */}
      {/* INTERACTIVE MODALS & DRAWERS                             */}
      {/* ======================================================== */}
      <CinemaModal
        isOpen={isCinemaModalOpen}
        onClose={() => setIsCinemaModalOpen(false)}
        projects={PROJECTS}
        onOpenCaseStudy={handleOpenCaseStudy}
      />

      <CaseStudyDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForBrief={handleSelectForBrief}
      />
    </div>
  );
}
