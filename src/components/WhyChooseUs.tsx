import React from 'react';
import { Gem, ShieldCheck, Sparkles, Target, Palette, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Gem,
      title: 'Premium Materials',
      subtitle: 'Global Curations & Tactile Luxury',
      description: 'We source exclusively from heritage European and Japanese wallpaper mills, eco-certified timber fabricators, and commercial-grade vinyl specialists. Every roll and panel offers superior texture, lightfastness, and durability.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Installation',
      subtitle: 'Certified Master Artisans',
      description: 'Never outsourced to general laborers. Our dedicated in-house installation specialists possess over 15 years of precision experience, utilizing laser alignment for pattern continuity and flawless, invisible seams.',
    },
    {
      icon: Sparkles,
      title: 'Modern Designs',
      subtitle: 'Contemporary Elegance & Timeless Appeal',
      description: 'Our catalog stays at the forefront of international interior architecture trends — from minimalist wabi-sabi textures and fluted acoustic slats to dramatic murals and modern motorized window treatments.',
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      subtitle: 'Substrate Priming & Millimeter Fit',
      description: 'True luxury lies in the unseen details: rigorous moisture testing, substrate sanding, specialized sizing adhesives, and surgical corner trimming around sockets, architraves, and moldings.',
    },
    {
      icon: Palette,
      title: 'Wallpaper & Complete Interior Solutions',
      subtitle: 'Designer Wallpapers, Walls, Windows & Floors',
      description: 'Enjoy a single accountable partner. From luxury designer wallpapers, seamless murals, and 3D decorative wall panels to motorized window blinds, PVC & SPC flooring, and soft furnishings — everything coordinates seamlessly.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Focused Service',
      subtitle: 'Dedicated Studio Concierge',
      description: 'We prioritize your peace of mind with upfront transparent quotes, punctual project delivery, on-site swatch consultations under your actual lighting, and long-term aftercare support.',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#ECE5DC]/40 border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#7D634C] mb-3">
            <span>The Urban Decor Standard</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23211F] tracking-tight">
            Why Discerning Clients Choose Urban Decor
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6C6660] font-light leading-relaxed">
            Delivering bespoke craftsmanship, architectural precision, and an elevated client experience on every single residential and commercial project.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-[#ECE5DC] hover:border-[#7D634C] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#F8F5F0] border border-[#ECE5DC] flex items-center justify-center text-[#7D634C] group-hover:bg-[#7D634C] group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#23211F] mb-1 group-hover:text-[#7D634C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#7D634C] font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6C6660] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE5DC]/60 flex items-center justify-between text-xs text-[#23211F]/60">
                  <span>Guaranteed Standard</span>
                  <span className="font-mono text-[#7D634C] font-semibold">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
