import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const TravelTips = () => {
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
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Home</Link>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Destinations</Link>
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">About</Link>
              <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-3 lg:px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 ml-2 lg:ml-4 text-sm lg:text-base"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="text-terracotta-400 text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Plan Your Trip
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Travel Tips
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Essential advice and insights to ensure a smooth and unforgettable journey.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Start Planning
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Tips Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Essential Travel Tips</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">
              Prepare for your adventure with our expert travel advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Packing Essentials",
                description: "Pack light but smart. Include versatile clothing, comfortable shoes, and necessary travel documents.",
                image: "https://images.unsplash.com/photo-1490576944379-ff23ca63a1ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Health and Safety",
                description: "Consult your doctor for necessary vaccinations and health precautions. Ensure you have travel insurance.",
                image: "https://images.unsplash.com/photo-1532980400857-414ca3674e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Local Customs",
                description: "Respect local traditions and customs. Learn a few basic phrases in the local language.",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="h-56 bg-cover bg-center rounded-2xl mb-4" style={{ backgroundImage: `url('${tip.image}')` }}></div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">{tip.title}</h3>
                <p className="text-sage-700">{tip.description}</p>
              </div>
            ))}
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
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-cream-400">
                <p>Arusha, Tanzania</p>
                <p>+255 744 667 778</p>
                <p>novatrails01@outlook.com</p>
                <p>Mon-Fri: 06:30 AM - 18:30<br/>Sat-Sun: 06:30 AM - 14:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
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

export default TravelTips;
