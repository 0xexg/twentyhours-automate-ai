
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Keyword Researcher</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Research keywords</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Analyze metrics</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Generate report</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">AI</div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#4285F4"/>
                      <path d="M16.0755 13H7.92453C5.20201 13 3 15.2 3 17.9C3 20.6 5.20201 22.8 7.92453 22.8H16.0755C18.798 22.8 21 20.6 21 17.9C21 15.2 18.798 13 16.0755 13Z" fill="#34A853"/>
                      <path d="M20 17.8889C20 19.6 18.5 21 16.6667 21H7.33333C5.5 21 4 19.6 4 17.8889C4 16.1778 5.5 14.7778 7.33333 14.7778H16.6667C18.5 14.7778 20 16.1778 20 17.8889Z" fill="#FBBC05"/>
                      <path d="M6.46447 15.4645L17.5355 4.46448" stroke="#EA4335" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  View template
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">YouTube to Ghost Blog Converter</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Extract transcript</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Generate blog content</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">Optimize for SEO</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">AI</div>
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  View template
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;
