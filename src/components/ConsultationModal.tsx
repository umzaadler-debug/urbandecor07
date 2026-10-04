import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Send, PhoneCall } from 'lucide-react';
import { UrbanDecorLogo } from './UrbanDecorLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Wallpapers',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    spaceType: 'Residential Living Room',
    consultationType: 'On-Site Home/Office Visit',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F8F5F0] rounded-lg shadow-2xl border border-[#ECE5DC] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#23211F] text-white flex items-center justify-between border-b border-[#383532]">
          <div className="flex items-center gap-3">
            <div className="bg-[#EAE2D8] px-2 py-1 rounded">
              <img src="/logo.svg" alt="URBAN DECOR" className="h-6 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-semibold tracking-wide">
                Book a Complimentary Consultation
              </h3>
              <p className="text-xs text-[#ECE5DC]/70 font-light">With our senior interior &amp; wallcovering specialist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#7D634C]/10 text-[#7D634C] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#23211F]">
                Consultation Reserved
              </h4>
              <p className="text-sm text-[#6C6660] font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. We have received your booking for <strong>{formData.service}</strong> ({formData.consultationType}). Our design coordinator will call you within 2 business hours at <strong>{formData.phone}</strong> to confirm your appointment time and bring matching physical catalog swatches.
              </p>

              <div className="pt-6 flex justify-center gap-3">
                <a
                  href="tel:+917303016646"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#7D634C] text-white rounded hover:bg-[#5B4533] transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 73030 16646</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#23211F] border border-[#ECE5DC] rounded bg-white hover:bg-[#ECE5DC] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 73030 16646"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@residence.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  >
                    <option value="Wallpapers">Wallpapers</option>
                    <option value="Customised 3D Wallpaper">Customised 3D Wallpaper</option>
                    <option value="Window Blinds">Window Blinds</option>
                    <option value="Wall Panels">Wall Panels</option>
                    <option value="PVC, SPC Flooring">PVC, SPC Flooring</option>
                    <option value="Artificial Grass">Artificial Grass</option>
                    <option value="Furnishing">Furnishing</option>
                    <option value="Sun Control & Glass Film">Sun Control & Glass Film</option>
                    <option value="Professional Installation">Professional Installation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Consultation Type
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  >
                    <option value="On-Site Home/Office Visit">On-Site Home/Office Visit (We bring samples)</option>
                    <option value="In-Studio Private Viewing">In-Studio Private Viewing (Our Flagship)</option>
                    <option value="Virtual Video Walkthrough">Virtual Video Walkthrough</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Space Classification
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  >
                    <option value="Residential Living Room">Residential Living Room</option>
                    <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                    <option value="Entire Private Villa / Apartment">Entire Private Villa / Apartment</option>
                    <option value="Executive Office / Boardroom">Executive Office / Boardroom</option>
                    <option value="Retail / Hospitality Venue">Retail / Hospitality Venue</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Late Afternoon (4:00 PM - 7:00 PM)">Late Afternoon (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                  Design Preferences or Wall Dimensions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Seeking textured warm taupe grasscloth for a 14ft double-height feature wall, need sound dampening..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#7D634C] text-white hover:bg-[#5B4533] transition-colors rounded shadow cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? 'Confirming...' : 'Confirm Free Consultation Request'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
