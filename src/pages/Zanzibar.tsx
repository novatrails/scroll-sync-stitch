
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';

const Zanzibar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-sage-800/50">Home</Link>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-sage-800/50">Destinations</Link>
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-sage-800/50">About</Link>
              <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-sage-800/50">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 ml-4"
              >
                Book Now
              </Button>
            </div>
            
            <button 
              className="md:hidden text-white z-50 relative"
              onClick={toggleMobileMenu}
            >
              <div className={`transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                {mobileMenuOpen ? '✕' : '☰'}
              </div>
            </button>
          </div>
        </div>
        
        <MobileNav 
          isOpen={mobileMenuOpen} 
          onToggle={toggleMobileMenu} 
          onBookingOpen={() => setBookingModalOpen(true)}
        />
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="text-terracotta-400 text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Spice Island Paradise
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Zanzibar
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Escape to pristine beaches, historic Stone Town, and rich Swahili culture. Experience paradise in the Indian Ocean.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Explore Paradise
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Island Experiences</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">Discover the magic of Zanzibar through unforgettable experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stone Town Heritage",
                description: "Explore UNESCO World Heritage Site with narrow alleys, historic buildings, and vibrant markets",
                image: "https://images.unsplash.com/photo-1587974928442-77dc3e4dba72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                highlights: ["UNESCO Site", "Cultural Tours", "Spice Markets"]
              },
              {
                title: "Pristine Beaches",
                description: "Relax on white sand beaches with crystal clear waters and swaying palm trees",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                highlights: ["White Sand", "Crystal Waters", "Beach Resorts"]
              },
              {
                title: "Spice Farm Tours",
                description: "Discover the island's spice heritage with guided tours through aromatic plantations",
                image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                highlights: ["Spice Tours", "Local Culture", "Fresh Produce"]
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${experience.image}')` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-900 mb-3">{experience.title}</h3>
                  <p className="text-sage-600 mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-terracotta-100 text-terracotta-700 text-sm rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sage-600 to-terracotta-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready for Paradise?</h2>
          <p className="text-lg sm:text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Book your Zanzibar getaway and experience the perfect blend of culture, adventure, and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-sage-600 hover:bg-cream-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Zanzibar Trip
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                View Packages
              </Button>
            </Link>
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
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Home</Link></li>
                <li><Link to="/destinations" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Destinations</Link></li>
                <li><Link to="/about" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-cream-400">
                <p>+1 (555) 123-NOVA</p>
                <p>info@novatrails.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
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
        packageType="Zanzibar Paradise"
      />
    </div>
  );
};

export default Zanzibar;
