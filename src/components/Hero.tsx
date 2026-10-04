import React, { useState } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Layers, Award } from 'lucide-react';
import heroLogo from '../assets/images/regenerated_image_1791047561468.png';
import heroBg from '../assets/images/hero_luxury_wallpaper_living_room_1791044802154.jpg';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#ECE5DC]">
      {/* Background Photography with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury living room featuring premium textured wallcovering and designer furniture"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imgLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-[1.01]'
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Editorial Gradients & Warm Taupe/Cream Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#23211F]/90 via-[#23211F]/50 to-[#23211F]/30" />
        <div className="absolute inset-0 bg-[#7D634C]/15 mix-blend-multiply" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        {/* Prominent Authentic Brand Logo at the Top */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-[#EAE2D8] px-4 sm:px-6 py-2 rounded-lg shadow-2xl border border-white/40 transition-transform hover:scale-[1.01] max-w-sm sm:max-w-md w-full flex items-center justify-center">
            <img
              src={heroLogo}
              alt="URBAN DECOR – Wallcovering"
              className="w-full h-auto max-h-24 sm:max-h-28 object-contain"
            />
          </div>
        </div>

        {/* Quiet Editorial Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#DED3C4] border-b border-[#7D634C]/50">
          <span>Artisan Craftsmanship</span>
          <span aria-hidden="true">·</span>
          <span>Bespoke Interior Finishes</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#F8F5F0] leading-[1.08] mb-6 text-balance max-w-4xl mx-auto">
          Transform Your Space.{' '}
          <span className="italic font-light text-[#DED3C4]">Elevate Your Lifestyle.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-[#ECE5DC]/90 max-w-2xl mx-auto mb-10 tracking-wide font-sans">
          Premium Wallcovering, Window &amp; Interior Solutions
        </p>

        {/* Action Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase bg-[#7D634C] text-white hover:bg-[#5B4533] transition-all duration-300 rounded shadow-lg hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DED3C4]"
          >
            Explore Our Services
          </button>
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase bg-white/10 hover:bg-white text-white hover:text-[#23211F] border border-white/40 hover:border-white transition-all duration-300 rounded backdrop-blur-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Quantitative Brand Trust Attributes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/15 max-w-4xl mx-auto">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#DED3C4] mb-1">
              <Award className="w-4 h-4 text-[#7D634C]" />
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">15+</span>
            </div>
            <p className="text-xs text-[#ECE5DC]/70 font-sans tracking-wide">Years of Master Artistry</p>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#DED3C4] mb-1">
              <Layers className="w-4 h-4 text-[#7D634C]" />
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">3,500+</span>
            </div>
            <p className="text-xs text-[#ECE5DC]/70 font-sans tracking-wide">Curated Wallpaper Designs</p>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#DED3C4] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#7D634C]" />
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">100%</span>
            </div>
            <p className="text-xs text-[#ECE5DC]/70 font-sans tracking-wide">Installation Guarantee</p>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#DED3C4] mb-1">
              <Sparkles className="w-4 h-4 text-[#7D634C]" />
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">1,200+</span>
            </div>
            <p className="text-xs text-[#ECE5DC]/70 font-sans tracking-wide">Luxury Spaces Completed</p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors">
        <a href="#services" aria-label="Scroll to services" className="flex flex-col items-center">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
