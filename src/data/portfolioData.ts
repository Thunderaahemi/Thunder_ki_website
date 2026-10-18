import { Project, DisciplinePillar, Testimonial, ProtocolStep } from '../types/portfolio';

export const HERO_SHOWREEL = {
  title: 'Scene 04 · Cybernetic Sequence',
  resolution: 'Premium Motion Presentation',
  specs: '00:03:29:06 / 24 FPS / PRORES 422 HQ',
  colorGrade: 'Cinematic finishing · polished visual direction',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_KsFpKR4EkKAGYVdjZRUPLbCW7M9slZTwuyzT2LMHNfxDdRFjK9vwazus5oZtCdDDSnA_ytSX8z6E_7V3yp38IK-h3EXc-cNnb1rSJXFCcP3Jif8nvMRXZ9VrhJiU_bpadg5AQ4PkVNs4LResgUTtXExQfW01VWm6hLI7RmP76j_VSdLm0QcQDm21pKMMUkyfQOFRYsUVA6lOexcTMrsvfKVgBAXSrA6DQEnJSQurzY-yODN3b9Y0',
};

export const PROJECTS: Project[] = [
  {
    id: 'machina-hypercar',
    title: 'Project Machina: Hypercar Velocity Campaign',
    client: 'Apex Motors',
    category: 'reels',
    categoryLabel: 'Viral Reel',
    specs: '4K 60FPS · DaVinci Resolve',
    format: '9:16 Vertical Reel',
    badge: '12M+ Views',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsZzv8OylfJUOAiG9OIZvZsjGnBDDkRwxd48E24YaK3yKbkr9A5U_szIVh6GfnH5ZAWPsgPA0ULFDrQelLMKNC3ORkTz2qT1flZ_q5wA9sP4tOWSktTbpUEKvlYObRSGZC-Q1jMWn51jdZp6iEmW2BuD2qbhqnHcvSg9Bw_HzERAya_0-EH9cwFdn_JHEA_OR4KS_tuM93UlKWClBjAC3rHZHOi1fAhZxEPGujuD57SRn3paiW1UEo',
    description: 'Full creative direction, multi-cam timeline assembly, custom modular sound design, and micro-sync cut pacing that generated 12M+ organic views within 72 hours across Instagram and TikTok.',
    challenge: 'Apex Motors needed to launch their flagship electric hypercar to a younger, luxury audience fatigued by standard generic automotive commercials.',
    solution: 'Designed a 30-second hyper-kinetic narrative leveraging high-contrast tungsten night grading, micro-sync engine sound design, and kinetic HUD typographic overlays timed to bass drops.',
    results: [
      '12.4M organic impressions across Reels and TikTok in 72h',
      '94.2% average video completion rate at 15 seconds',
      '48,000+ direct shares and editorial feature on TopGear Social'
    ],
    tools: ['DaVinci Resolve Studio', 'Adobe After Effects', 'Custom Sub-Bass Foley', 'ProRes 422 HQ Master'],
    deliverables: ['3x 9:16 Vertical Cutdowns', '1x 16:9 Director Cut', 'Full Sound Design Stems', 'Kinetic Caption Suite'],
    featured: true,
  },
  {
    id: 'solis-protocol',
    title: 'Solis: The Next Era of Global Liquidity',
    client: 'Solis Protocol',
    category: 'motion',
    categoryLabel: '3D Motion Graphics',
    specs: '3D DCI 2.39:1 · Octane Render',
    format: 'Keynote Film',
    badge: 'Series A Keynote',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPEiS_nweYiIlTkd7Zwk2MrlQg4ZvNl87_yXUutjbiCFwRQTtOJJnwczkc4F9Rbk8ZfkhmO9y_YHx3bOPzFpdmA-_uggnngS8ojeENuRZqaARmhT2DufYdywKGTN83N2Atn5giE-1mI_N849gXgwhIV7k_hpHGWqi82-1wUSRtNxOW_uCAtvyOZoYMmlUx9CkEi1vpjuimGHIr41VwwMCkzit7cZuGIY0tnbM4Jf_vxFNoVQORpeff',
    description: 'A 90-second keynote manifesto featuring high-end Octane 3D product animations, particle simulations, and surgical typography establishing Solis as an institutional financial titan.',
    challenge: 'Translating abstract decentralized liquidity concepts into an authoritative visual metaphor that resonated with tier-1 venture funds and institutional allocators.',
    solution: 'Created zero-gravity obsidian monolith structures, particle acceleration waves, and titanium typography with custom cinematic score and foley design.',
    results: [
      'Spearheaded visual narrative that contributed to a successful $12M Series A',
      'Screened as opening keynote at Consensus Global Summit',
      'Featured on Behance Curated 3D Motion category'
    ],
    tools: ['Cinema 4D', 'Octane Render', 'Adobe Premiere Pro', 'Synthesizer Foley FX'],
    deliverables: ['90s Main Manifesto (4K Anamorphic)', 'Looping Stage Hologram Loops', 'Social Teaser Snippets'],
    featured: true,
  },
  {
    id: 'kroma-cloud',
    title: 'Kroma: Autonomous Creative Intelligence',
    client: 'Kroma Cloud',
    category: 'web',
    categoryLabel: 'Web Architecture',
    specs: 'Live Site · 60fps · WebGL',
    format: 'Digital Experience',
    badge: 'Awwwards SOTD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU7BEN4FpmlKg8QZWOBeZFYzYiIyeg4kpnfVhoHF4RKurfEKb_xJIyjV6l6-g0sCr_WcV-DztQFXoO6d_lA3eg4UugDYDgyiqz9r4nCy_Z2n1paIGCc6SHG9ZD-rHhxd9hFWjm_ZqQI9SmMuh4gupjnQPc51sT8VVBRFGVdcwp5A7JRsbS24itc5jkA6JiYlUFLrFJhMFvAyH_C8Z989qSRlAYMj6wMJBCwxkjrG4t5rwoKzHGoHcn',
    description: 'Complete overhaul from wireframes to final production code. Engineered with Next.js, WebGL shaders, zero-jank scroll cascades, and conversion funnels resulting in a 340% signup lift.',
    challenge: 'Existing website had high bounce rates (68%) and failed to convey the premium, compute-intensive capabilities of their AI infrastructure platform.',
    solution: 'Engineered an Apple-grade dark UI architecture with interactive Three.js shaders, micro-interactions, responsive typography, and sub-100ms interaction latency.',
    results: [
      '340% increase in developer waitlist signups in first 30 days',
      'Awwwards Site of the Day & FWA of the Day accolades',
      'Sub-0.4s First Contentful Paint globally via zero-latency edge deployment'
    ],
    tools: ['Next.js', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion', 'Vercel Edge'],
    deliverables: ['Full Interactive Production Codebase', 'Figma Design System (200+ Components)', 'Motion Guidelines'],
    featured: true,
  },
  {
    id: 'aether-fragrance',
    title: 'Aether: The Chromatic Odyssey',
    client: 'Aether Luxury Fragrance',
    category: 'ai',
    categoryLabel: 'AI Generative Film',
    specs: 'Neural Rendered · 4K 60fps',
    format: 'Commercial Film',
    badge: 'Zero Camera Crew',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtNEr9XDQdvtk9GciUWldlZDcchexQwVFRAO0rdqdlF-f6eXSqEafl27LZMQYiZKL1c0Kx08DdrjoEJL3bzAikT4Fg_a6NI6SzGl1CR3sUPyXXLdT2QYlB3H0RNyJTkHDjpwRrFC5G0R46V1_OdPZcRdWORTcfZ2GNbPkVymNCCoJrNIHqMGEZ-NwXtfPJUxrU2SIHpCVARJdbgS_pP_xEGg4FYmBH-0ctZh6f6K7Y0kFh84ljv9Yn',
    description: 'A hybrid cinematic commercial utilizing Midjourney v6 concept art, Runway Gen-3 motion vectors, neural frame interpolation, and master audio grading. Zero physical camera crews required.',
    challenge: 'Luxury fragrance client had a tight 10-day timeline and international location constraints that made traditional on-location film production impossible.',
    solution: 'Constructed an end-to-end generative AI workflow with proprietary prompt chaining, depth map extraction, volumetric relighting, and Topaz 8K neural upscaling.',
    results: [
      'Delivered broadcast-ready 4K spot in 8 days (vs 6 weeks standard)',
      'Reduced total production expenditure by 75% compared to physical shoot',
      'Broadcast across prime digital billboard networks in Tokyo and London'
    ],
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6', 'Topaz Video AI', 'Dolby Atmos Audio Suite'],
    deliverables: ['60s Brand Spot (4K HDR)', '3x 15s Story Ad Variants', 'Print Billboard Key Visuals'],
    featured: true,
  },
  {
    id: 'veloce-systems',
    title: 'Veloce: Real-Time Vector Systems',
    client: 'Veloce Compute',
    category: 'web',
    categoryLabel: 'Web Architecture',
    specs: 'Interactive WebGL · Framer Motion',
    format: 'Interactive App',
    badge: '120fps Native',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_KsFpKR4EkKAGYVdjZRUPLbCW7M9slZTwuyzT2LMHNfxDdRFjK9vwazus5oZtCdDDSnA_ytSX8z6E_7V3yp38IK-h3EXc-cNnb1rSJXFCcP3Jif8nvMRXZ9VrhJiU_bpadg5AQ4PkVNs4LResgUTtXExQfW01VWm6hLI7RmP76j_VSdLm0QcQDm21pKMMUkyfQOFRYsUVA6lOexcTMrsvfKVgBAXSrA6DQEnJSQurzY-yODN3b9Y0',
    description: 'High-frequency telemetry interface engineered for enterprise cloud observability with real-time vector graphs and tactile micro-states.',
    challenge: 'Displaying 100,000+ real-time telemetry events without frame drops on client web browsers.',
    solution: 'Built custom WebGL canvas renderer integrated with React hooks and virtualized data buffers.',
    results: [
      'Sustained 60fps even under 100k points stream load',
      'Adopted by 15 Fortune 500 engineering orgs'
    ],
    tools: ['React', 'TypeScript', 'WebGL Shader Toy', 'Tailwind CSS'],
    deliverables: ['Component UI Library', 'Production Telemetry Dashboard', 'Dark Mode Architecture'],
  },
  {
    id: 'chronos-teaser',
    title: 'Chronos: High-Paced Social Engine',
    client: 'Chronos Wearables',
    category: 'reels',
    categoryLabel: 'Viral Reel',
    specs: '9:16 Vertical · 4K 60FPS',
    format: 'TikTok & Reels Blitz',
    badge: '8.4M Views',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsZzv8OylfJUOAiG9OIZvZsjGnBDDkRwxd48E24YaK3yKbkr9A5U_szIVh6GfnH5ZAWPsgPA0ULFDrQelLMKNC3ORkTz2qT1flZ_q5wA9sP4tOWSktTbpUEKvlYObRSGZC-Q1jMWn51jdZp6iEmW2BuD2qbhqnHcvSg9Bw_HzERAya_0-EH9cwFdn_JHEA_OR4KS_tuM93UlKWClBjAC3rHZHOi1fAhZxEPGujuD57SRn3paiW1UEo',
    description: 'Viral product hook sequence featuring speed-ramping, kinetic text tracking, and punchy audio cues designed for instant watch-time loops.',
    challenge: 'Hooking Gen-Z fitness enthusiasts in the first 0.6 seconds of algorithmic feed playback.',
    solution: 'Crafted rhythm-based match cuts synchronized with high-energy modular percussive beats and bold punch-in frames.',
    results: [
      '8.4M views with 68% completing entire 22s video',
      '310% increase in DTC direct purchase conversions'
    ],
    tools: ['Premiere Pro', 'After Effects', 'Splice SFX', 'Boris FX Sapphire'],
    deliverables: ['5x Viral Variations', 'Hook Testing Matrix', 'Sound Design Library'],
  }
];

export const DISCIPLINE_PILLARS: DisciplinePillar[] = [
  {
    id: 'reels',
    pillarNumber: 'Pillar 01',
    tagline: 'Attention Retention',
    title: 'Viral Short-Form & Reels',
    description: 'Engineered for retention. 9:16 vertical storytelling, pacing, sound design, and kinetic typography that captures attention in under 0.8s. Calibrated for maximum algorithmic surge and brand authority.',
    tags: ['TikTok / Reels / Shorts', 'Sound Engineering', 'Kinetic Captions'],
    icon: 'smartphone',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'web',
    pillarNumber: 'Pillar 02',
    tagline: 'Architecture',
    title: 'Website For Your Branding',
    description: 'Apple-inspired digital architecture, interactive WebGL shaders, seamless scroll animations, and lightning-fast loading built directly to convert discerning visitors into dedicated clients.',
    tags: ['WebGL / Three.js', 'Tailwind Engine', 'Framer Motion'],
    icon: 'terminal',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'motion',
    pillarNumber: 'Pillar 03',
    tagline: 'Visual Impact',
    title: 'Premium Motion Graphics',
    description: 'Dynamic 2D/3D visual identity, hardware product launch reveals, high-stake explainer narratives, and broadcast-grade vector transitions.',
    tags: ['Cinema 4D / Octane', 'Vector UI Simulations', 'Keynote Sequences'],
    features: [
      '3D Cinema 4D / Octane Renders',
      'Vector UI Simulations & SaaS Demos',
      'Keynote Title Sequences'
    ],
    icon: 'animation',
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'ai',
    pillarNumber: 'Pillar 04',
    tagline: 'Neural Acceleration',
    title: 'AI-Powered Video Workflows',
    description: 'Next-gen generative pipelines, voice cloning, automatic contextual b-roll generation, deep upscale remastering, and neural object tracking.',
    tags: ['Runway Gen-3', 'Midjourney Assets', 'Topaz AI Upscaling'],
    features: [
      'Runway Gen-3 & Midjourney Assets',
      'Neural Inpainting & Cleanplate Rigging',
      'Ultra-Res 8K DCI Model Upscaling'
    ],
    icon: 'psychology',
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'growth',
    pillarNumber: 'Pillar 05',
    tagline: 'Conversion Velocity',
    title: 'Social Growth Infrastructure',
    description: 'End-to-end content pipeline: strategy, creative direction, high-velocity publishing schedules, analytics tracking, and audience scaling.',
    tags: ['Algorithmic Dashboards', 'Cross-Platform Systems', 'Lead Routing'],
    features: [
      'Algorithmic Analytics Dashboard',
      'Cross-Platform Repurposing Systems',
      'High-Value Lead Channel Routing'
    ],
    icon: 'trending_up',
    colSpan: 'lg:col-span-4',
  }
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    step: '01',
    title: 'Creative Strategy & Storyboarding',
    description: 'Deconstructing target demographic psychology, hook formulations, architectural wireframing, and animatic storyboarding to establish an airtight narrative blueprint before keyframes move.',
    deliverable: 'Master Treatment & Mood Film',
  },
  {
    step: '02',
    title: 'Production & Neural Acceleration',
    description: 'Rapid iterative timeline assembly, 3D motion simulations, front-end code scaffolding, and proprietary AI neural acceleration to deliver broadcast fidelity in half the industry standard time.',
    deliverable: 'Rough Cut v1 & Interactive Staging',
  },
  {
    step: '03',
    title: 'Sound Design & Master Delivery',
    description: 'Surgical foley, custom bass-impact synthesis, micro-sync typographic audio sweeps, DCI-P3 color grading, multi-aspect packaging, and web deployment on zero-latency CDNs.',
    deliverable: 'Final ProRes 4444 + Deployed URL',
  }
];

