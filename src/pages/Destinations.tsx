import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Destinations = () => {
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
              Explore Tanzania
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Destinations
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              From the vast plains of the Serengeti to the pristine beaches of Zanzibar, discover the beauty and wonder of Tanzania's most extraordinary destinations.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Plan Your Adventure
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of Tanzania's diverse landscapes and rich cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Arusha",
                subtitle: "Safari Capital",
                description: "Gateway to Tanzania's northern safari circuit with vibrant markets and rich culture",
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/arusha",
                price: "From $899",
                duration: "3-5 Days",
                highlights: ["Arusha National Park", "Cultural Tours", "Market Visits"]
              },
              {
                title: "Kilimanjaro",
                subtitle: "Roof of Africa",
                description: "Conquer Africa's highest peak and experience diverse ecosystems on your climb",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/kilimanjaro",
                price: "From $2,499",
                duration: "5-9 Days",
                highlights: ["Summit Uhuru Peak", "Multiple Routes", "Expert Guides"]
              },
              {
                title: "Zanzibar",
                subtitle: "Spice Island Paradise",
                description: "Pristine beaches, historic Stone Town, and rich Swahili culture await",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/zanzibar",
                price: "From $1,299",
                duration: "4-7 Days",
                highlights: ["Stone Town", "Beach Resorts", "Spice Tours"]
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${destination.image}')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-emerald-400 text-sm font-medium">{destination.subtitle}</span>
                    <h3 className="text-2xl font-bold text-white">{destination.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">{destination.price}</span>
                    <Link to={destination.link}>
                      <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 transform hover:scale-105 transition-all duration-300">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Destinations</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more incredible locations across Tanzania
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Serengeti National Park",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Safari"
              },
              {
                name: "Ngorongoro Crater",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Wildlife"
              },
              {
                name: "Tarangire National Park",
                image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Safari"
              },
              {
                name: "Lake Manyara",
                image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Nature"
              },
              {
                name: "Ruaha National Park",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Adventure"
              },
              {
                name: "Pemba Island",
                image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Beach"
              },
              {
                name: "Mikumi National Park",
                image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Safari"
              },
              {
                name: "Mafia Island",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                type: "Diving"
              }
            ].map((destination, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div 
                  className="h-48 bg-cover bg-center rounded-2xl overflow-hidden"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {destination.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your perfect Tanzanian adventure and let us create an unforgettable journey for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Your Trip
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Custom Itinerary
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

export default Destinations;
