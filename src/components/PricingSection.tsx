
import React from 'react';
import { Check, Zap, Rocket, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      name: "Automation Partner",
      description: "For teams who want scalable AI workflows",
      price: "$4,900",
      features: [
        { text: "10 agent & automation requests/month" },
        { text: "1 dedicated automation specialist" },
        { text: "Slack support" },
        { text: "Dashboard access (track all automations)" },
        { text: "Weekly 45-min strategy call" },
        { text: "No contract, cancel any time" },
      ],
      ctaText: "Start now",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      name: "Fractional COO",
      description: "For high-growth businesses needing full ops leadership",
      price: "$7,900",
      features: [
        { text: "Everything in Automation Partner, plus:" },
        { text: "Unlimited automation requests" },
        { text: "Scaled technical team to support more development" },
        { text: "Custom AI agents (built for your unique workflows)" },
        { text: "Priority AI agent and automation development" },
        { text: "Custom analytics & reporting" },
      ],
      ctaText: "Start now",
      popular: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden flex flex-col ${plan.popular ? 'bg-gray-900 text-white' : 'bg-white border border-gray-100'} hover:shadow-xl transition-shadow`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-full ${plan.popular ? 'bg-white/10' : 'bg-primary/10'}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <p className={`mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <Separator className={plan.popular ? 'bg-gray-700' : 'bg-gray-200'} />
                
                <ul className="my-6 space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-green-400'}`} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Separator className={plan.popular ? 'bg-gray-700' : 'bg-gray-200'} />
                
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`mb-1 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>USD/month</span>
                </div>
                
                <Button 
                  className={`mt-6 w-full ${
                    plan.popular 
                      ? 'bg-white text-gray-900 hover:bg-gray-200' 
                      : 'bg-green-400 text-white hover:bg-green-500'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Start Now – Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
