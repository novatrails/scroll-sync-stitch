import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Cheetah, Lion, Monkey } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';
import HeroCarousel from '@/components/HeroCarousel';

const Index = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const totalTestimonials = 3;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setHeaderVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Wildlife Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Cheetah className="cheetah-animation w-16 h-16 text-sage-300" />
        <Lion className="lion-animation w-20 h-20 text-terracotta-300" />
      </div>

      {/* Transparent Header that becomes visible on scroll */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        headerVisible 
          ? 'bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with animated monkey */}
            <div className="flex items-center space-x-2 relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                  alt="Nova Trails Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 relative z-10"
                />
                <Monkey className="monkey-animation w-6 h-6 text-terracotta-500 top-0 left-8" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={handleHomeClick} className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">Home</button>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">Destinations</Link>
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">About</Link>
              <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 nav-button-hover"
              >
                Book Now
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white z-50 relative nav-button-hover"
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

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Featured Destinations with Enhanced Cards */}
      <section id="destinations" className="py-12 sm:py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Featured Destinations</h2>
            <p className="text-lg sm:text-xl text-sage-700 max-w-3xl mx-auto">Discover breathtaking locations that will transform your perspective and ignite your sense of adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Serengeti Safari",
                location: "Northern Tanzania",
                description: "Witness the Great Migration and encounter Africa's Big Five in their natural habitat",
                image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "From $2,500",
                duration: "7 Days"
              },
              {
                title: "Ngorongoro Crater",
                location: "Arusha Region",
                description: "Explore the world's largest inactive volcanic caldera, home to diverse wildlife",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "From $1,800",
                duration: "5 Days"
              },
              {
                title: "Stone Town Heritage",
                location: "Zanzibar",
                description: "Discover the historic heart of Zanzibar with its rich Swahili culture and architecture",
                image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "From $1,200",
                duration: "4 Days"
              }
            ].map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer nav-button-hover bg-white">
                <div 
                  className="h-64 sm:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black group-hover:via-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.duration}
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-map-marker-alt text-terracotta-400 mr-2"></i>
                      <span className="text-xs sm:text-sm font-medium">{destination.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300 mb-3">{destination.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-terracotta-300 font-bold text-lg">{destination.price}</span>
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

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4 sm:mb-6">Why Choose Nova Trails?</h2>
              <p className="text-lg sm:text-xl text-sage-700 mb-6 sm:mb-8">We're not just another travel company. We're explorers, storytellers, and dream-makers who believe that the world's most incredible experiences are waiting to be discovered.</p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: "fas fa-route",
                    iconColor: "text-terracotta-600",
                    bgColor: "bg-terracotta-100",
                    title: "Unique Destinations",
                    description: "Access to hidden gems and off-the-beaten-path locations that few have experienced"
                  },
                  {
                    icon: "fas fa-users",
                    iconColor: "text-sage-600",
                    bgColor: "bg-sage-100",
                    title: "Expert Guides",
                    description: "Local experts who share their knowledge, culture, and passion for their homeland"
                  },
                  {
                    icon: "fas fa-leaf",
                    iconColor: "text-cream-600",
                    bgColor: "bg-cream-100",
                    title: "Sustainable Travel",
                    description: "Committed to responsible tourism that benefits local communities and preserves nature"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <i className={`${feature.icon} ${feature.iconColor} text-sm sm:text-base`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-sage-900 mb-2">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-sage-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Adventure Travel" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-terracotta-500 to-sage-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-star text-white text-lg sm:text-xl lg:text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream-50 to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">What Our Adventurers Say</h2>
          <p className="text-lg sm:text-xl text-sage-700 mb-12 sm:mb-16">Real stories from real travelers who discovered the extraordinary</p>
          
          <div className="relative">
            {[
              {
                quote: "Nova Trails took us to places I never knew existed. The Serengeti safari was absolutely life-changing. The guides were incredible and the experience was perfectly organized.",
                name: "Sarah Johnson",
                role: "Adventure Photographer",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b743?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "The Kilimanjaro expedition exceeded all expectations. We saw wildlife I'd only dreamed of and learned so much about conservation. Nova Trails really cares about sustainable tourism.",
                name: "Mike Chen",
                role: "Wildlife Enthusiast",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Zanzibar was the adventure of a lifetime! The local guides shared incredible stories and the beaches were absolutely breathtaking. Can't wait for our next Nova Trails adventure!",
                name: "Emma Rodriguez",
                role: "Beach Explorer",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`${index === currentTestimonial ? 'block' : 'hidden'} transition-opacity duration-500`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-auto max-w-2xl">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-terracotta-400 text-sm sm:text-base"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-sage-700 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sage-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-sage-600 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 nav-button-hover ${
                    index === currentTestimonial ? 'bg-terracotta-500' : 'bg-sage-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sage-600 to-terracotta-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8 animate-pulse">
            <i className="fas fa-paper-plane text-4xl sm:text-5xl lg:text-6xl text-white opacity-80"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-lg sm:text-xl text-cream-100 mb-8 sm:mb-10 max-w-2xl mx-auto">Join thousands of adventurers who have discovered the extraordinary with Nova Trails. Your journey of a lifetime starts with a single step.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-sage-600 hover:bg-cream-100 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg nav-button-hover"
            >
              <i className="fas fa-compass mr-2"></i>Start Your Journey
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 nav-button-hover">
                <i className="fas fa-phone mr-2"></i>Call Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Wildlife Theme */}
      <footer id="contact" className="bg-sage-900 text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Wildlife Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Cheetah className="absolute top-10 right-20 w-32 h-32 text-terracotta-300" />
          <Lion className="absolute bottom-10 left-20 w-28 h-28 text-sage-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6 relative">
                <img 
                  src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                  alt="Nova Trails Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="text-xl sm:text-2xl font-bold">Nova Trails</span>
                <Monkey className="monkey-animation w-4 h-4 text-terracotta-400 top-0 left-20" />
              </div>
              <p className="text-cream-200 mb-4 sm:mb-6 text-sm sm:text-base">Discover what's never been found. We create extraordinary adventures that connect you with the world's most incredible destinations.</p>
              <div className="flex space-x-4">
                {['facebook-f', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors nav-button-hover">
                    <i className={`fab fa-${social} text-sm sm:text-base`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/about" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">About Us</Link></li>
                <li><Link to="/destinations" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">Destinations</Link></li>
                <li><a href="#" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">Tour Packages</a></li>
                <li><a href="#" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">Travel Tips</a></li>
                <li><a href="#" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">Gallery</a></li>
                <li><a href="#" className="text-cream-200 hover:text-terracotta-400 transition-colors text-sm sm:text-base nav-button-hover">Blog</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-terracotta-400 mt-1 text-sm sm:text-base"></i>
                  <span className="text-cream-200 text-sm sm:text-base">123 Adventure Street<br/>Explorer City, EC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-terracotta-400 text-sm sm:text-base"></i>
                  <span className="text-cream-200 text-sm sm:text-base">+1 (555) 123-NOVA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-terracotta-400 text-sm sm:text-base"></i>
                  <span className="text-cream-200 text-sm sm:text-base">info@novatrails.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-clock text-terracotta-400 mt-1 text-sm sm:text-base"></i>
                  <span className="text-cream-200 text-sm sm:text-base">Mon-Fri: 9AM-6PM<br/>Sat-Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Stay Updated</h3>
              <p className="text-cream-200 mb-4 text-sm sm:text-base">Subscribe to our newsletter for the latest adventure deals and travel inspiration.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sage-800 border border-sage-700 rounded-lg focus:outline-none focus:border-terracotta-500 transition-colors text-sm sm:text-base"
                />
                <Button className="w-full bg-gradient-to-r from-terracotta-500 to-sage-600 hover:from-terracotta-600 hover:to-sage-700 text-white px-4 sm:px-6 py-2 sm:py-3 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base nav-button-hover">
                  <i className="fas fa-paper-plane mr-2"></i>Subscribe
                </Button>
              </div>
              <div className="mt-4">
                <p className="text-xs sm:text-sm text-cream-300">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-sage-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-cream-200 text-xs sm:text-sm text-center md:text-left">
                © 2025 Nova Trails. All rights reserved. | 
                <a href="#" className="hover:text-terracotta-400 transition-colors nav-button-hover"> Privacy Policy</a> | 
                <a href="#" className="hover:text-terracotta-400 transition-colors nav-button-hover"> Terms of Service</a>
              </p>
            </div>
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

export default Index;
