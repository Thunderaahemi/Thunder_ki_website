import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, User } from 'lucide-react';

interface NavbarProps {
  onOpenCinema: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCinema, onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#disciplines' },
    { name: 'Motion & Reels', href: '#motion-showcase' },
    { name: 'AI & Creator', href: '#ai-podcasting' },
    { name: 'Process', href: '#workflow' },
    { name: 'Contact', href: '#inquiry' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-3 px-4 sm:px-6 lg:px-12 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-[1680px] h-18 md:h-20 flex items-center justify-between px-5 md:px-8 rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#0a0a0c]/85 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'bg-[#0a0a0c]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
        }`}
      >
        {/* Zone 1: Studio Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-white tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <span className="font-bold text-xs tracking-widest">TH</span>
          </div>
          <span className="font-bold text-sm sm:text-base uppercase tracking-wider text-white">
            THUNDERAAHEMI
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#121216]/70 rounded-full px-2 py-1.5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Profile Avatar */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)] whitespace-nowrap cursor-pointer"
          >
            <span>Book a consultation</span>
          </button>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner hidden sm:flex">
            <User className="w-4 h-4 text-white" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed top-22 inset-x-4 pointer-events-auto p-5 rounded-3xl bg-[#0e0e12]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCinema();
              }}
              className="w-full h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Watch Cinematic Reel</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full h-11 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Book a consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
