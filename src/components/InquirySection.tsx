import React, { useState } from 'react';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';

interface InquirySectionProps {
  initialDiscipline?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialDiscipline = 'reels' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const waLink = 'https://wa.me/message/KUBEW5NTGB7ZK1';
  const directEmail = 'shreyaspsc1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="inquiry" className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
      <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#141414]/75 backdrop-blur-2xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs text-neutral-300 uppercase tracking-widest">
                Ready for your next move
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Ready to elevate<br />your brand presence?
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Whether you need premium motion graphics, a refined digital presence, or a sharper brand narrative, let’s build something elevated together.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-lg"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                title="Copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>{directEmail}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>
            </div>

            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-all font-semibold text-xs uppercase tracking-wider"
              >
                <span>Book a consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
