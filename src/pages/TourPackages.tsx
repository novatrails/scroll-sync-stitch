import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const TourPackages = () => {
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
              Explore Our Packages
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tour Packages
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Discover our curated tour packages designed to offer you the best of Tanzania's natural beauty and cultural richness.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Book Your Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Packages Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Our Exclusive Tour Packages</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">Choose from our expertly designed tour packages for an unforgettable Tanzanian experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Serengeti Migration Safari",
                location: "Serengeti National Park",
                description: "Witness the Great Migration, one of the most spectacular wildlife events on Earth.",
                image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "$4,500",
                duration: "8 Days"
              },
              {
                title: "Kilimanjaro Climbing Adventure",
                location: "Mount Kilimanjaro",
                description: "Conquer Africa's highest peak with our experienced guides and support team.",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "$3,800",
                duration: "7 Days"
              },
              {
                title: "Zanzibar Beach Getaway",
                location: "Zanzibar Island",
                description: "Relax on pristine beaches, explore historic Stone Town, and immerse yourself in Swahili culture.",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "$2,700",
                duration: "6 Days"
              }
            ].map((tour, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white">
                <div 
                  className="h-64 sm:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${tour.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black group-hover:via-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <div className="flex items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium">{tour.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{tour.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300 mb-3">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-terracotta-300 font-bold text-lg">{tour.price}</span>
                      <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-full text-sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
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

export default TourPackages;
