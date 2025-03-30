
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <Hero />
      <Separator className="w-full border-t border-gray-100" />
      <Companies />
      <Separator className="w-full border-t border-gray-100" />
      <AutomationFeatures />
      <Separator className="w-full border-t border-gray-100" />
      <HowItWorks />
      <Separator className="w-full border-t border-gray-100" />
      <PricingSection />
      <Separator className="w-full border-t border-gray-100" />
      <CTASection />
    </div>
  );
};

export default Index;
