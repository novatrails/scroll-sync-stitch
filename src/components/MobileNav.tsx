
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onBookingOpen: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle, onBookingOpen }) => {
  return (
    <div className={`absolute top-16 left-0 right-0 bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50 z-40 transform transition-all duration-300 ease-in-out ${
      isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-white text-lg hover:text-cream-300 transition-colors duration-200 py-2 text-center nav-button-hover"
            onClick={onToggle}
          >
            Home
          </Link>
          <Link 
            to="/destinations" 
            className="text-white text-lg hover:text-cream-300 transition-colors duration-200 py-2 text-center nav-button-hover"
            onClick={onToggle}
          >
            Destinations
          </Link>
          <Link 
            to="/about" 
            className="text-white text-lg hover:text-cream-300 transition-colors duration-200 py-2 text-center nav-button-hover"
            onClick={onToggle}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-white text-lg hover:text-cream-300 transition-colors duration-200 py-2 text-center nav-button-hover"
            onClick={onToggle}
          >
            Contact
          </Link>
          <div className="pt-4">
            <Button 
              onClick={() => {
                onBookingOpen();
                onToggle();
              }}
              className="w-full bg-gradient-to-r from-terracotta-500 to-sage-600 hover:from-terracotta-600 hover:to-sage-700 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 nav-button-hover"
            >
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
