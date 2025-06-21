
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onBookingOpen: () => void;
}

const Navigation = ({ onBookingOpen }: NavigationProps) => {
  return (
    <nav className="fixed w-full z-50 bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
              alt="Nova Trails Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200">Home</Link>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200">Destinations</Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200">About</Link>
              <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200">Contact</Link>
            </div>
            <Button 
              onClick={onBookingOpen}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-3 text-xs">
                <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200">Home</Link>
                <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200">Destinations</Link>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200">About</Link>
                <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200">Contact</Link>
              </div>
            </div>
            <Button 
              onClick={onBookingOpen}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-3 py-1 text-xs rounded-full transform hover:scale-105 transition-all duration-200 ml-2"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
