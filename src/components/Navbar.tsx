import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full border-t-transparent transform -rotate-45"></div>
            </div>
            <span className="font-display font-medium text-xl text-primary">Business Buddy</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Features', 'Pricing', 'Use Cases', 'Developers', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Home', 'Features', 'Pricing', 'Use Cases', 'Developers', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-primary text-white px-5 py-3 rounded-lg text-base font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
