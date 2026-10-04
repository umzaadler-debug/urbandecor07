import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/services';
import { ArrowRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultationWithService,
}) => {
  const [filter, setFilter] = useState<'all' | 'wall' | 'window' | 'floor' | 'furnishing' | 'craft'>('all');

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F8F5F0] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#ECE5DC]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#7D634C] mb-3">
              <span>Bespoke Solutions</span>
              <span aria-hidden="true">·</span>
              <span>Nine Signatures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23211F] tracking-tight">
              Curated Interior &amp; Wall Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#6C6660] max-w-md font-light leading-relaxed">
            From world-class designer wallcoverings to made-to-measure window dressings, each solution is backed by certified professional installation.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs sm:text-sm font-medium scrollbar-none">
          <span className="text-[#7D634C] flex items-center gap-1.5 mr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Filter:</span>
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-[#23211F] text-white shadow-sm'
                : 'bg-[#ECE5DC]/60 text-[#23211F] hover:bg-[#ECE5DC]'
            }`}
          >
            All Services ({servicesData.length})
          </button>
          <button
            onClick={() => setFilter('wall')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === 'wall'
                ? 'bg-[#23211F] text-white shadow-sm'
                : 'bg-[#ECE5DC]/60 text-[#23211F] hover:bg-[#ECE5DC]'
            }`}
          >
            Wallcoverings &amp; Panels
          </button>
          <button
            onClick={() => setFilter('window')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === 'window'
                ? 'bg-[#23211F] text-white shadow-sm'
                : 'bg-[#ECE5DC]/60 text-[#23211F] hover:bg-[#ECE5DC]'
            }`}
          >
            Window Blinds &amp; Film
          </button>
          <button
            onClick={() => setFilter('floor')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === 'floor'
                ? 'bg-[#23211F] text-white shadow-sm'
                : 'bg-[#ECE5DC]/60 text-[#23211F] hover:bg-[#ECE5DC]'
            }`}
          >
            Flooring &amp; Turf
          </button>
          <button
            onClick={() => setFilter('craft')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === 'craft'
                ? 'bg-[#23211F] text-white shadow-sm'
                : 'bg-[#ECE5DC]/60 text-[#23211F] hover:bg-[#ECE5DC]'
            }`}
          >
            Master Installation
          </button>
        </div>

        {/* Services Grid (Clean 4x2 on desktop, 2 col on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#ECE5DC] hover:border-[#7D634C]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE5DC]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Subtle Number Identifier */}
                  <span className="absolute top-3 left-3 bg-[#23211F]/80 backdrop-blur-md text-white text-[11px] font-mono tracking-widest px-2.5 py-1 rounded">
                    {service.number}
                  </span>
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#23211F] font-semibold mb-2 group-hover:text-[#7D634C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6C6660] font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Feature highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#23211F]/80 border-t border-[#ECE5DC]/70 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7D634C] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ECE5DC]/50 mt-auto">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#7D634C] hover:text-[#5B4533] flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithService(service.title)}
                  className="text-xs text-[#23211F] hover:text-[#7D634C] transition-colors font-medium underline underline-offset-4 cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
