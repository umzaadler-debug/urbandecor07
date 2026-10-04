import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import navLogo from '../assets/images/regenerated_image_1791047562818.png';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#ECE5DC] py-3'
          : 'bg-[#F8F5F0]/80 backdrop-blur-sm border-b border-[#ECE5DC]/60 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Exact Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7D634C]"
            aria-label="URBAN DECOR – Wallcovering Home"
          >
            <img
              src={navLogo}
              alt="URBAN DECOR – Wallcovering"
              className="h-8 sm:h-10 w-auto rounded object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Zone 2: 4-6 Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#23211F]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#7D634C] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7D634C] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenCalculator}
              className="text-xs uppercase tracking-wider text-[#7D634C] font-semibold hover:text-[#5B4533] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Estimator</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+917303016646"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#23211F] hover:text-[#7D634C] transition-colors px-3 py-2 rounded border border-[#ECE5DC] bg-white/70"
            >
              <Phone className="w-3.5 h-3.5 text-[#7D634C]" />
              <span className="whitespace-nowrap">+91 73030 16646</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white bg-[#23211F] hover:bg-[#7D634C] transition-colors rounded shadow-sm whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7D634C]"
            >
              Free Consultation
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#23211F] hover:text-[#7D634C] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F0] border-b border-[#ECE5DC] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#23211F] hover:text-[#7D634C] py-1 border-b border-[#ECE5DC]/50"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="text-left text-sm font-medium text-[#7D634C] py-2 flex items-center justify-between"
            >
              <span>Wallcovering &amp; Blinds Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+917303016646"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#23211F] border border-[#ECE5DC] bg-white rounded"
            >
              <Phone className="w-4 h-4 text-[#7D634C]" />
              <span>Call Us: +91 73030 16646</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
