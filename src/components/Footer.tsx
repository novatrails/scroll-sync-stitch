
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                alt="Nova Trails Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Nova Trails</span>
            </div>
            <p className="text-cream-400 text-sm">Your gateway to extraordinary Tanzanian adventures.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/destinations" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Destinations</Link></li>
              <li><Link to="/about" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">About</Link></li>
              <li><Link to="/tour-packages" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Tour Packages</Link></li>
              <li><Link to="/travel-tips" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Travel Tips</Link></li>
              <li><Link to="/blog" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-cream-400">
              <div>
                <p className="font-medium text-white">Location:</p>
                <p>Arusha, Tanzania</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone:</p>
                <p>+255 744 667 778</p>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <p>novatrails01@outlook.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Business Hours:</p>
                <p>Monday – Friday: 06:30 – 18:30</p>
                <p>Saturday – Sunday: 06:30 – 14:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-800 mt-8 pt-6">
          <p className="text-center text-cream-400 text-sm">© 2025 Nova Trails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
