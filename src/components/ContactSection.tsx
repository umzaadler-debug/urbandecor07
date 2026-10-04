import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send, ArrowRight, Instagram } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || 'Wallpapers',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Wallpapers',
    'Customised 3D Wallpaper',
    'Window Blinds',
    'Wall Panels',
    'PVC, SPC Flooring',
    'Artificial Grass',
    'Furnishing',
    'Sun Control & Glass Film',
    'Professional Installation',
    'Complete Turn-Key Interior',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields (Name, Phone, and Email).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate clean realistic submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Urban Decor! My name is ${formData.name || 'Client'}. I am interested in ${formData.serviceRequired}. Please share consultation details.`
  );

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F5F0] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#7D634C] mb-3">
            <span>Direct Studio Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23211F] tracking-tight">
            Connect With Urban Decor
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6C6660] font-light leading-relaxed">
            Our interior design and wallcovering consultants are ready to assist with samples, site inspections, and customized project quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Fast Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Prominent Quick-Action Card for WhatsApp & Phone */}
            <div className="bg-white p-8 rounded-lg border border-[#ECE5DC] shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-[#23211F] mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6660] font-light mb-6 leading-relaxed">
                Connect instantly with our lead wallcovering specialist for immediate quotes, product catalogs, or appointment scheduling.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/917303016646?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-[#128C7E]">Chat on WhatsApp</p>
                      <p className="text-xs text-[#23211F]/70 font-light">Instant responses within 15 minutes</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#128C7E] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+917303016646"
                  className="flex items-center justify-between w-full p-4 rounded bg-[#7D634C]/10 hover:bg-[#7D634C]/20 border border-[#7D634C]/30 text-[#7D634C] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7D634C] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-[#7D634C]">Call Studio Direct</p>
                      <p className="text-xs text-[#23211F]/70 font-light">+91 73030 16646</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7D634C] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Studio Information Details */}
            <div className="bg-white p-8 rounded-lg border border-[#ECE5DC] space-y-5 text-sm text-[#23211F]">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#7D634C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C]">Studio Location</h4>
                  <p className="text-xs sm:text-sm text-[#23211F] font-medium mt-0.5">
                    Andheri East, Mumbai – 400093
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#ECE5DC]/70">
                <Instagram className="w-5 h-5 text-[#7D634C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C]">Official Instagram</h4>
                  <a
                    href="https://www.instagram.com/the_urbandecor_07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#23211F] hover:text-[#7D634C] transition-colors mt-0.5 block font-medium"
                  >
                    @the_urbandecor_07
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#ECE5DC]/70">
                <Mail className="w-5 h-5 text-[#7D634C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C]">Direct Inquiries</h4>
                  <a href="mailto:urbandecor07@gmail.com" className="text-xs sm:text-sm text-[#23211F] hover:text-[#7D634C] transition-colors mt-0.5 block">
                    urbandecor07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#ECE5DC]/70">
                <Clock className="w-5 h-5 text-[#7D634C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7D634C]">24 Hours · Over All India</h4>
                  <p className="text-xs sm:text-sm text-[#23211F] font-medium mt-0.5">
                    24 Hours Service &amp; Support (24/7 Available)
                  </p>
                  <p className="text-xs text-[#6C6660] font-light">Supply &amp; Installation Execution: Over All India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-[#ECE5DC] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7D634C]/10 text-[#7D634C] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#23211F]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#6C6660] font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our senior wallcovering specialist has received your request regarding <strong>{formData.serviceRequired}</strong> and will connect with you within 2 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceRequired: 'Wallpapers',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#7D634C] border border-[#7D634C] rounded hover:bg-[#7D634C] hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#ECE5DC] pb-4 mb-2">
                  <h3 className="text-xl font-serif font-semibold text-[#23211F]">
                    Request a Consultation or Quote
                  </h3>
                  <p className="text-xs text-[#6C6660] font-light mt-1">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1.5">
                      Your Name <span className="text-[#7D634C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F5F0] border border-[#ECE5DC] focus:border-[#7D634C] focus:bg-white focus:outline-none rounded text-sm text-[#23211F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1.5">
                      Phone Number <span className="text-[#7D634C]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 73030 16646"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F5F0] border border-[#ECE5DC] focus:border-[#7D634C] focus:bg-white focus:outline-none rounded text-sm text-[#23211F] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1.5">
                      Email Address <span className="text-[#7D634C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. victoria@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F5F0] border border-[#ECE5DC] focus:border-[#7D634C] focus:bg-white focus:outline-none rounded text-sm text-[#23211F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1.5">
                      Service Required <span className="text-[#7D634C]">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F5F0] border border-[#ECE5DC] focus:border-[#7D634C] focus:bg-white focus:outline-none rounded text-sm text-[#23211F] transition-all"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1.5">
                    Project Message / Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space (room type, estimated wall dimensions, timeline, or design preferences)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F5F0] border border-[#ECE5DC] focus:border-[#7D634C] focus:bg-white focus:outline-none rounded text-sm text-[#23211F] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#23211F] text-white hover:bg-[#7D634C] transition-all duration-300 rounded shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
