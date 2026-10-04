import React from 'react';
import { Compass, Sparkles, Check, Ruler, Eye, HeartHandshake } from 'lucide-react';
import featureWallPanelsImg from '../assets/images/service_feature_wall_panels_1791044813187.jpg';
import windowBlindsImg from '../assets/images/service_window_blinds_modern_1791044824606.jpg';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#ECE5DC]/40 border-b border-[#ECE5DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border border-white">
              <img
                src={featureWallPanelsImg}
                alt="Urban Decor craftsmanship in luxury master suite wall paneling"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23211F]/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded border border-[#ECE5DC] shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D634C] mb-1">
                  Complete Interior Solutions
                </p>
                <p className="text-sm text-[#23211F] font-serif italic">
                  "Walls are not boundaries; they are the architectural canvas that breathes soul and identity into living architecture."
                </p>
              </div>
            </div>

            {/* Accent Floating Secondary Element */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-48 aspect-square rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img
                src={windowBlindsImg}
                alt="Detail of tailored window treatment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#7D634C] mb-4">
              <span>The Urban Decor Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23211F] tracking-tight leading-tight mb-6">
              Designed for Beautiful Spaces
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6C6660] font-light leading-relaxed">
              <p>
                At <strong className="font-semibold text-[#23211F]">URBAN DECOR</strong>, we believe that an exceptional interior begins with the textures, tones, and tactile elements that envelop your everyday environment. We provide complete, turn-key wallcovering and interior solutions that guide you seamlessly from initial product curation to meticulous on-site installation.
              </p>
              <p>
                Whether revitalizing a private residence with textured Belgian grasscloth, outfitting modern corporate boardrooms with acoustic fluted panels, or engineering floor-to-ceiling motorized blinds, our design consultants collaborate intimately with you to achieve a cohesive aesthetic.
              </p>
              <p>
                Every wallcovering roll, window treatment, and floor finish is sourced from world-class artisan mills and installed with surgical precision by our in-house master applicators.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#ECE5DC]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#ECE5DC] text-[#7D634C] shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#23211F]">Bespoke Curation</h3>
                  <p className="text-xs text-[#6C6660] font-light mt-0.5">Handpicked premium materials suited to your unique room acoustics and lighting.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#ECE5DC] text-[#7D634C] shrink-0 mt-0.5">
                  <Ruler className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#23211F]">Laser Measurement</h3>
                  <p className="text-xs text-[#6C6660] font-light mt-0.5">Zero-error site evaluations guaranteeing flawless seams and exact roll quantities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#ECE5DC] text-[#7D634C] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#23211F]">Master Installation</h3>
                  <p className="text-xs text-[#6C6660] font-light mt-0.5">Trained artisans ensuring invisible joint seams, bubble-free adhesion, and spotless finishes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#ECE5DC] text-[#7D634C] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#23211F]">Enduring Guarantee</h3>
                  <p className="text-xs text-[#6C6660] font-light mt-0.5">Dedicated post-installation care, warranty protection, and client satisfaction.</p>
                </div>
              </div>
            </div>

            {/* CTA in About */}
            <div className="mt-10">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#23211F] text-white hover:bg-[#7D634C] transition-colors rounded shadow cursor-pointer"
              >
                Schedule A Studio Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
