import React from 'react';
import { X, Check, ArrowRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/services';
import { UrbanDecorLogo } from './UrbanDecorLogo';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#F8F5F0] rounded-lg shadow-2xl border border-[#ECE5DC] overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#23211F]">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#23211F] via-[#23211F]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C2A78F] font-semibold">
              Signature Service {service.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C] mb-2">
              Overview &amp; Material Philosophy
            </h4>
            <p className="text-sm sm:text-base text-[#23211F] font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#ECE5DC]">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7D634C]" />
              <span>Specification &amp; Craft Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#23211F]">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-[#ECE5DC] text-[#7D634C] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#ECE5DC]/40 rounded-lg border border-[#ECE5DC] flex items-center gap-3 text-xs text-[#6C6660]">
            <ShieldCheck className="w-5 h-5 text-[#7D634C] shrink-0" />
            <span>All installations are executed by our in-house certified master applicators and protected by the Urban Decor comprehensive workmanship warranty.</span>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onInquire(service.title);
                onClose();
              }}
              className="flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#7D634C] text-white hover:bg-[#5B4533] transition-colors rounded shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Inquire for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+917303016646"
              className="py-3 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#23211F] bg-white hover:bg-[#ECE5DC] border border-[#ECE5DC] rounded transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#7D634C]" />
              <span>Call +91 73030 16646</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
