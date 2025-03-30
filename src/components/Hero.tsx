
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Automate Everything.
              <br />
              <span className="text-primary">It'll Be Done in 20 Hours.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-2xl">
              Transform your business with intelligent AI agents and automations. Save time, reduce errors, and boost growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-gray-800 px-6 py-3 rounded-md text-base font-medium">
                Get Started – Book a Call
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md text-base font-medium">
                View Dashboard
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:flex-1 md:max-w-lg">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-400">AI automation visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100"></div>
    </div>
  );
};

export default Hero;
