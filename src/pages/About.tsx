
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-mountain text-white text-sm sm:text-lg"></i>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-emerald-300 transition-colors duration-200">Home</Link>
              <Link to="/destinations" className="text-white hover:text-emerald-300 transition-colors duration-200">Destinations</Link>
              <Link to="/about" className="text-emerald-300 font-semibold">About</Link>
              <Link to="/contact" className="text-white hover:text-emerald-300 transition-colors duration-200">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                Book Now
              </Button>
            </div>
            
            <button 
              className="md:hidden text-white z-50 relative"
              onClick={toggleMobileMenu}
            >
              <div className={`transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                {mobileMenuOpen ? (
                  <i className="fas fa-times text-xl"></i>
                ) : (
                  <i className="fas fa-bars text-xl"></i>
                )}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-4xl">
            <div className="text-emerald-400 text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Discover Our Story
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Nova Trails
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-fade-in">
              We are passionate explorers, dedicated to creating extraordinary travel experiences that connect you with Tanzania's most incredible destinations and rich cultural heritage.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018 by a group of passionate travelers who fell in love with Tanzania's breathtaking landscapes and vibrant culture, Nova Trails was born from a desire to share these incredible experiences with the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small local guiding service has grown into a trusted travel partner, connecting adventurers from around the globe with authentic Tanzanian experiences. We believe that travel should be transformative, sustainable, and deeply meaningful.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-leaf",
                title: "Sustainability",
                description: "We're committed to responsible tourism that protects Tanzania's natural beauty and supports local communities."
              },
              {
                icon: "fas fa-heart",
                title: "Authenticity",
                description: "Every experience we offer is genuine, connecting you with the real Tanzania through local guides and communities."
              },
              {
                icon: "fas fa-star",
                title: "Excellence",
                description: "We strive for perfection in every detail, ensuring your journey exceeds all expectations."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-emerald-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to creating unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amani Mwalimu",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                description: "Born and raised in Arusha, Amani has been guiding travelers for over 15 years."
              },
              {
                name: "Sarah Johnson",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b743?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                description: "Sarah ensures every detail of your journey is perfectly planned and executed."
              },
              {
                name: "Daniel Kimaro",
                role: "Lead Safari Guide",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                description: "Daniel's knowledge of wildlife and passion for conservation enhances every safari."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Explore Tanzania?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers who have discovered the magic of Tanzania with Nova Trails.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Your Adventure
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-mountain text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold">Nova Trails</span>
              </div>
              <p className="text-gray-400 text-sm">Your gateway to extraordinary Tanzanian adventures.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Home</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Destinations</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p><i className="fas fa-phone mr-2"></i>+1 (555) 123-NOVA</p>
                <p><i className="fas fa-envelope mr-2"></i>info@novatrails.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook-f', 'instagram', 'twitter'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <i className={`fab fa-${social} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6">
            <p className="text-center text-gray-400 text-sm">© 2025 Nova Trails. All rights reserved.</p>
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

export default About;
