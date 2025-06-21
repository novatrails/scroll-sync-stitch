
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const TermsOfService = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                alt="Nova Trails Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200">Home</Link>
                <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200">Destinations</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200">About</Link>
                <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200">Contact</Link>
              </div>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 ml-4"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-64 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Terms of Service
            </h1>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Terms of Service</h2>
            <div className="prose prose-lg text-sage-700 space-y-6">
              <p><strong>Last Updated:</strong> January 2025</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Acceptance of Terms</h3>
              <p>By accessing and using Nova Trails services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Booking and Payment</h3>
              <p>All bookings are subject to availability and confirmation. Payment terms and cancellation policies will be clearly communicated at the time of booking.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Travel Requirements</h3>
              <p>You are responsible for ensuring you have valid travel documents, including passports, visas, and any required vaccinations for your destination.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Liability and Insurance</h3>
              <p>Nova Trails recommends that all travelers obtain comprehensive travel insurance. We are not liable for any personal injury, loss, or damage during your trip.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Contact Information</h3>
              <p>For questions about these Terms of Service, please contact us at novatrails01@outlook.com or call +255 744 667 778.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
      />
    </div>
  );
};

export default TermsOfService;
