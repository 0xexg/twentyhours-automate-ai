
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Divider from '@/components/Divider';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <Hero />
      <Divider />
      <Companies />
      <Divider />
      <AutomationFeatures />
      <Divider />
      <HowItWorks />
      <Divider />
      <PricingSection />
      <Divider />
      <CTASection />
    </div>
  );
};

export default Index;
