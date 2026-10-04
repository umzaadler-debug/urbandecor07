import React from 'react';
import { MessageSquareText, Palette, Wrench, Smile } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      subtitle: 'Discovery & Spatial Assessment',
      description: 'We begin with an in-depth conversation at your space or in our design studio to analyze room dimensions, lighting conditions, acoustic needs, and your stylistic aspirations.',
      icon: MessageSquareText,
    },
    {
      number: '02',
      title: 'Select Your Design',
      subtitle: 'Curated Swatches & Custom Renders',
      description: 'Explore our vast physical sample library of designer wallpapers, fluted wall panels, blinds, and flooring. We provide physical swatches and texture mockups under your specific lighting.',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Professional Installation',
      subtitle: 'Certified Master Craftsmanship',
      description: 'Our master installation team handles substrate preparation, laser-level alignment, seamless pattern matching, and meticulous clean-up with zero disruption to your daily routine.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Enjoy Your New Space',
      subtitle: 'Transformed Atmosphere & Warranty',
      description: 'Walk through your newly transformed interior with our lead supervisor. We provide complete maintenance guidance and back every installation with our written workmanship guarantee.',
      icon: Smile,
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F8F5F0] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#7D634C] mb-3">
            <span>Seamless Journey</span>
            <span aria-hidden="true">·</span>
            <span>Four Clear Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23211F] tracking-tight">
            Our Proven 4-Step Process
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6C6660] font-light leading-relaxed">
            From your very first swatch consultation to the final inspection, we make transforming your interiors an effortless and inspiring experience.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-[#ECE5DC] -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-white rounded-lg p-8 border border-[#ECE5DC] hover:border-[#7D634C]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#DED3C4] group-hover:text-[#7D634C] transition-colors tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#F8F5F0] border border-[#ECE5DC] flex items-center justify-center text-[#7D634C] group-hover:bg-[#7D634C] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-serif font-semibold text-[#23211F] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#7D634C] font-medium mb-3">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6C6660] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step indicator footer */}
                <div className="mt-8 pt-4 border-t border-[#ECE5DC]/60 flex items-center justify-between text-xs text-[#6C6660]">
                  <span>Step {idx + 1} of 4</span>
                  <span className="w-2 h-2 rounded-full bg-[#7D634C]/30 group-hover:bg-[#7D634C] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-[#ECE5DC]/50 rounded-lg border border-[#ECE5DC] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#23211F]">
              Ready to take the first step for your home or project?
            </h4>
            <p className="text-xs sm:text-sm text-[#6C6660] font-light mt-1">
              Book a complimentary design consultation with our interior wallcovering specialist.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#7D634C] text-white hover:bg-[#5B4533] transition-colors rounded shadow whitespace-nowrap cursor-pointer"
          >
            Start Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
