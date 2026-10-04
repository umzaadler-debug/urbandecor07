import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUp, Clock } from 'lucide-react';
import footerLogo from '../assets/images/regenerated_image_1791047564259.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Wallpapers',
    'Customised 3D Wallpaper',
    'Window Blinds',
    'Wall Panels',
    'PVC, SPC Flooring',
    'Artificial Grass',
    'Furnishing',
    'Sun Control & Glass Film',
    'Installation',
  ];

  return (
    <footer className="bg-[#23211F] text-[#ECE5DC] border-t border-[#383532]">
      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block bg-[#EAE2D8] p-3 rounded border border-white/10 shadow-lg max-w-xs">
              <img
                src={footerLogo}
                alt="URBAN DECOR – Wallcovering"
                className="w-full h-auto max-h-12 object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#ECE5DC]/70 font-light leading-relaxed max-w-sm">
              URBAN DECOR is a premier destination for luxury wallcoverings, architectural panels, custom window treatments, and high-performance interior finishes. Every installation is handled by master certified applicators.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/the_urbandecor_07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Urban Decor on Instagram @the_urbandecor_07"
                title="@the_urbandecor_07"
                className="w-9 h-9 rounded-full bg-[#383532] hover:bg-[#7D634C] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Urban Decor on Facebook"
                className="w-9 h-9 rounded-full bg-[#383532] hover:bg-[#7D634C] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Urban Decor on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#383532] hover:bg-[#7D634C] text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Prompt Mandated Services Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2A78F]">
              Services
            </h4>
            <div className="flex flex-wrap gap-x-2 gap-y-2 text-xs sm:text-sm text-[#ECE5DC]/80 font-light">
              {services.map((svc, i) => (
                <React.Fragment key={svc}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {svc}
                  </a>
                  {i < services.length - 1 && (
                    <span className="text-[#7D634C]" aria-hidden="true">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="pt-6 border-t border-[#383532] text-xs text-[#ECE5DC]/60 font-light space-y-2">
              <p>Specializing in residential estates, boutique hotels, executive boardrooms, and commercial architecture.</p>
              <p>Complimentary on-site measurements and physical catalog sampling available across the metropolitan region.</p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2A78F]">
              Studio &amp; Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#ECE5DC]/80 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2A78F] shrink-0 mt-0.5" />
                <span>Andheri East, Mumbai – 400093</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C2A78F] shrink-0" />
                <a href="tel:+917303016646" className="hover:text-white transition-colors">
                  +91 73030 16646
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C2A78F] shrink-0" />
                <a href="https://www.instagram.com/the_urbandecor_07/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @the_urbandecor_07
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C2A78F] shrink-0" />
                <a href="mailto:urbandecor07@gmail.com" className="hover:text-white transition-colors">
                  urbandecor07@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#C2A78F] font-medium">
                <Clock className="w-4 h-4 text-[#C2A78F] shrink-0" />
                <span>24 Hours Service · Over All India</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#C2A78F] hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#383532] py-6 bg-[#1A1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ECE5DC]/50 font-light">
          <p>
            &copy; {new Date().getFullYear()} <strong className="font-medium text-[#ECE5DC]/80">URBAN DECOR – Wallcovering</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#ECE5DC] transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-[#ECE5DC] transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#services" className="hover:text-[#ECE5DC] transition-colors">Installation Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
