import React from 'react';
import { ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';
import ctaLogo from '../assets/images/regenerated_image_1791047561468.png';
import ctaBg from '../assets/images/cta_luxury_interior_backdrop_1791044846335.jpg';

interface CtaSectionProps {
  onContactClick: () => void;
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick, onOpenConsultation }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#23211F] text-white">
      {/* Background Photography with Luxury Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Luxury grand salon interior with bespoke designer wallcoverings"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-100"
        />
        {/* Measured Scrim as per design constitution */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#23211F] via-[#23211F]/85 to-[#23211F]/70" />
        <div className="absolute inset-0 bg-[#7D634C]/20 mix-blend-color" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Brand Watermark or Emblem */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#EAE2D8] px-4 py-2 rounded-lg border border-white/30 shadow-xl max-w-xs flex items-center justify-center">
            <img
              src={ctaLogo}
              alt="URBAN DECOR – Wallcovering"
              className="w-full h-auto max-h-14 object-contain"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#DED3C4] mb-4">
          <span>Personalized Consultation</span>
          <span aria-hidden="true">·</span>
          <span>Complimentary Site Visit</span>
        </div>

        {/* User Prompt Exact Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F8F5F0] tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Transform Your Space?
        </h2>

        {/* User Prompt Exact Text */}
        <p className="text-lg sm:text-xl text-[#ECE5DC]/90 font-light max-w-xl mx-auto mb-10 font-sans tracking-wide">
          Let’s create an interior that reflects your style.
        </p>

        {/* User Prompt Exact Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-9 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#7D634C] text-white hover:bg-[#5B4533] transition-all duration-300 rounded shadow-xl flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DED3C4]"
          >
            <span>Contact Urban Decor</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917303016646?text=Hello%20Urban%20Decor,%20I%20would%20like%20to%20inquire%20about%20your%20wallcovering%20and%20interior%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/10 hover:bg-white text-white hover:text-[#23211F] border border-white/30 hover:border-white transition-all duration-300 rounded backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#C2A78F]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Availability */}
        <p className="mt-8 text-xs text-[#ECE5DC]/70 font-light flex items-center justify-center gap-2">
          <PhoneCall className="w-3.5 h-3.5 text-[#DED3C4]" />
          <span>Speak directly with our principal interior consultant: <strong><a href="tel:+917303016646" className="underline hover:text-white transition-colors">+91 73030 16646</a></strong></span>
        </p>
      </div>
    </section>
  );
};
