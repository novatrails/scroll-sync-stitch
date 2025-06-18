
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={onToggle} />
      
      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-mountain text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold text-white">Nova Trails</span>
            </div>
            <button onClick={onToggle} className="text-white text-xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <a href="#" className="block text-white text-lg hover:text-emerald-300 transition-colors duration-200 py-2">
                Home
              </a>
              <a href="#destinations" className="block text-white text-lg hover:text-emerald-300 transition-colors duration-200 py-2">
                Destinations
              </a>
              <a href="#about" className="block text-white text-lg hover:text-emerald-300 transition-colors duration-200 py-2">
                About
              </a>
              <a href="#contact" className="block text-white text-lg hover:text-emerald-300 transition-colors duration-200 py-2">
                Contact
              </a>
            </div>
            
            <div className="mt-8">
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
