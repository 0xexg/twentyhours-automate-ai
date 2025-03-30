
import React from 'react';
import { 
  ShoppingCart, 
  Megaphone, 
  Database, 
  Calendar 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface FeatureCategory {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  items: string[];
}

const AutomationFeatures = () => {
  const categories: FeatureCategory[] = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      emoji: "🛒",
      title: "Sales & CRM",
      items: [
        "Lead tracking & follow-up automations",
        "CRM data enrichment & cleanup",
        "Lead researcher"
      ]
    },
    {
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      emoji: "📢",
      title: "Marketing & SEO",
      items: [
        "Blog post repurposer",
        "SEO audit & keyword optimizer",
        "Reddit sentiment tracker"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      emoji: "📈",
      title: "Web Scraping",
      items: [
        "Scrape and categorise lead websites",
        "LinkedIn company page scraper",
        "URL metadata extractor"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      emoji: "📊",
      title: "Operations & Admin",
      items: [
        "Document processing (PDF extraction, data entry)",
        "Email triage & auto-responses",
        "Calendar & meeting scheduling"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Automate & Scale</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy AI agents and automations across your business—built in 20 hours or less.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Input 
              type="text" 
              placeholder="Search" 
              className="pl-10 pr-4 py-3 h-14 rounded-full border-gray-200 focus:border-primary focus:ring-primary shadow-sm w-full"
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.emoji} {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;
