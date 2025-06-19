
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onBookingOpen: () => void;
}

const MobileNav = ({ isOpen, onToggle, onBookingOpen }: MobileNavProps) => {
  const handleLinkClick = () => {
    onToggle();
  };

  const handleBookingClick = () => {
    onBookingOpen();
    onToggle();
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onToggle();
  };

  return (
    <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="bg-sage-900 backdrop-blur-lg h-full w-full pt-20">
        <div className="flex flex-col space-y-6 px-6">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="text-white hover:text-cream-300 transition-colors duration-200 text-lg text-left py-3 border-b border-sage-700"
          >
            Home
          </Link>
          <Link 
            to="/destinations" 
            onClick={handleLinkClick}
            className="text-white hover:text-cream-300 transition-colors duration-200 text-lg py-3 border-b border-sage-700"
          >
            Destinations
          </Link>
          <Link 
            to="/about" 
            onClick={handleLinkClick}
            className="text-white hover:text-cream-300 transition-colors duration-200 text-lg py-3 border-b border-sage-700"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            className="text-white hover:text-cream-300 transition-colors duration-200 text-lg py-3 border-b border-sage-700"
          >
            Contact
          </Link>
          <Button 
            onClick={handleBookingClick}
            className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-6 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 mt-4"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
