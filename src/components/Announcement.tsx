
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary/10 text-gray-800">
      <div className="max-w-7xl mx-auto px-3 py-3">
        <div className="flex items-center justify-center">
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">
              <span role="img" aria-label="Rocket" className="mr-2">🚀</span>
              New: AI agents with natural language processing now available!
              <a href="/announcement" className="ml-2 underline hover:text-primary">
                Read more →
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-4 text-gray-500 hover:text-gray-700"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
