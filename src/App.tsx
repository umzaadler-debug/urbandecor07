/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { WallcoveringCalculatorModal } from './components/WallcoveringCalculatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './data/services';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [preselectedServiceForContact, setPreselectedServiceForContact] = useState<string>('Wallpapers');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedServiceForContact(serviceName);
    }
    setIsConsultationOpen(true);
  };

  const handleScrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedServiceForContact(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#23211F] selection:bg-[#7D634C] selection:text-white flex flex-col">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={handleExploreServices}
        />

        {/* Services Section with 9 Core Offerings */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onOpenConsultationWithService={(svcName) => handleScrollToContact(svcName)}
        />

        {/* About Section: Designed for Beautiful Spaces */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Process Section: 4-Step Journey */}
        <ProcessSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Why Discerning Clients Choose Urban Decor */}
        <WhyChooseUs />

        {/* Strong Elegant CTA Section */}
        <CtaSection
          onContactClick={() => handleScrollToContact()}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Contact Section with Interactive Form & Fast Chat/Call */}
        <ContactSection
          preselectedService={preselectedServiceForContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast-Access WhatsApp & Call Affordance */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/917303016646?text=Hello%20Urban%20Decor,%20I%20would%20like%20to%20inquire%20about%20your%20wallcovering%20and%20interior%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Message"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <a
          href="tel:+917303016646"
          aria-label="Call Urban Decor Studio"
          className="w-12 h-12 rounded-full bg-[#7D634C] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={preselectedServiceForContact}
      />

      {/* Wallcovering & Material Estimator Modal */}
      <WallcoveringCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onProceedToInquiry={() => {
          handleScrollToContact();
        }}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onInquire={(svcName) => handleScrollToContact(svcName)}
      />
    </div>
  );
}
