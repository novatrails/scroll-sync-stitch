import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const totalSlides = 3;
  const totalTestimonials = 3;

  useEffect(() => {
    // Handle scroll for header visibility
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setHeaderVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Auto-advance testimonials only
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Transparent Header that becomes visible on scroll */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        headerVisible 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-mountain text-white text-sm sm:text-lg"></i>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-200">Home</a>
              <Link to="/destinations" className="text-white hover:text-emerald-300 transition-colors duration-200">Destinations</Link>
              <Link to="/about" className="text-white hover:text-emerald-300 transition-colors duration-200">About</Link>
              <Link to="/contact" className="text-white hover:text-emerald-300 transition-colors duration-200">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                Book Now
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
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

      {/* Hero Section with Manual Slideshow */}
      <section className="h-screen relative overflow-hidden bg-black">
        {/* Enhanced Slideshow with Smooth Transitions */}
        <div className="relative h-full">
          {/* Slide 1: Arusha */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === 0 
              ? 'opacity-100 transform translate-y-0 z-20' 
              : currentSlide > 0 
                ? 'opacity-0 transform -translate-y-full z-10' 
                : 'opacity-0 transform translate-y-full z-10'
          }`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <div className="text-orange-400 text-xs sm:text-sm tracking-widest uppercase mb-4 animate-fade-in">
                  Tanzania Destination
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Arusha
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed animate-fade-in">
                  Gateway to Tanzania's northern safari circuit, Arusha offers vibrant markets, stunning views of Mount Meru, and rich cultural experiences.
                </p>
                <Link to="/arusha">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in">
                    Explore →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2: Kilimanjaro */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === 1 
              ? 'opacity-100 transform translate-y-0 z-20' 
              : currentSlide > 1 
                ? 'opacity-0 transform -translate-y-full z-10' 
                : 'opacity-0 transform translate-y-full z-10'
          }`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <div className="text-orange-400 text-xs sm:text-sm tracking-widest uppercase mb-4">
                  Tanzania Destination
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Kilimanjaro
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                  Conquer Africa's highest peak and stand on the roof of the continent. Experience diverse ecosystems from tropical rainforest to arctic summit.
                </p>
                <Link to="/kilimanjaro">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                    Explore →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3: Zanzibar */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === 2 
              ? 'opacity-100 transform translate-y-0 z-20' 
              : currentSlide < 2 
                ? 'opacity-0 transform translate-y-full z-10' 
                : 'opacity-0 transform -translate-y-full z-10'
          }`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <div className="text-turquoise-400 text-xs sm:text-sm tracking-widest uppercase mb-4">
                  Tanzania Destination
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Zanzibar
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                  Paradise found in the Indian Ocean. Pristine white sand beaches, crystal clear waters, historic Stone Town, and rich Swahili culture.
                </p>
                <Link to="/zanzibar">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                    Explore →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-4 sm:left-8 flex items-center gap-4 z-20">
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              ‹
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              ›
            </button>
          </div>
          <div className="text-white/80 text-xs sm:text-sm tracking-wider">
            <span className="text-white font-semibold text-base sm:text-lg">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(totalSlides).padStart(2, '0')}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 right-4 sm:right-8 flex gap-2 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fas fa-chevron-down text-xl sm:text-2xl"></i>
        </div>
      </section>

      {/* Content from Second Page */}
      
      {/* Featured Destinations */}
      <section id="destinations" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Discover breathtaking locations that will transform your perspective and ignite your sense of adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Destination Cards */}
            {[
              {
                title: "Arctic Wilderness",
                location: "Northern Norway",
                description: "Experience the magical Northern Lights and pristine arctic landscapes",
                image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Mountain Paradise",
                location: "Himalayas, Nepal",
                description: "Trek through ancient trails and witness the world's highest peaks",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Rainforest Adventure",
                location: "Amazon Basin",
                description: "Explore the world's most biodiverse ecosystem and indigenous cultures",
                image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div 
                  className="h-64 sm:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black group-hover:via-black/20 transition-all duration-300"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-map-marker-alt text-emerald-400 mr-2"></i>
                      <span className="text-xs sm:text-sm font-medium">{destination.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300">{destination.description}</p>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Nova Trails?</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">We're not just another travel company. We're explorers, storytellers, and dream-makers who believe that the world's most incredible experiences are waiting to be discovered.</p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: "fas fa-route",
                    iconColor: "text-emerald-600",
                    bgColor: "bg-emerald-100",
                    title: "Unique Destinations",
                    description: "Access to hidden gems and off-the-beaten-path locations that few have experienced"
                  },
                  {
                    icon: "fas fa-users",
                    iconColor: "text-blue-600",
                    bgColor: "bg-blue-100",
                    title: "Expert Guides",
                    description: "Local experts who share their knowledge, culture, and passion for their homeland"
                  },
                  {
                    icon: "fas fa-leaf",
                    iconColor: "text-purple-600",
                    bgColor: "bg-purple-100",
                    title: "Sustainable Travel",
                    description: "Committed to responsible tourism that benefits local communities and preserves nature"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <i className={`${feature.icon} ${feature.iconColor} text-sm sm:text-base`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
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
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-star text-white text-lg sm:text-xl lg:text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Adventurers Say</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16">Real stories from real travelers who discovered the extraordinary</p>
          
          <div className="relative">
            {[
              {
                quote: "Nova Trails took us to places I never knew existed. The Northern Lights trek in Norway was absolutely life-changing. The guides were incredible and the experience was perfectly organized.",
                name: "Sarah Johnson",
                role: "Adventure Photographer",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b743?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "The Amazon expedition exceeded all expectations. We saw wildlife I'd only dreamed of and learned so much about conservation. Nova Trails really cares about sustainable tourism.",
                name: "Mike Chen",
                role: "Wildlife Enthusiast",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Himalayan trek was the adventure of a lifetime! The local guides shared incredible stories and the views were absolutely breathtaking. Can't wait for our next Nova Trails adventure!",
                name: "Emma Rodriguez",
                role: "Mountain Climber",
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
                        <i key={i} className="fas fa-star text-yellow-400 text-sm sm:text-base"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
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
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8 animate-pulse">
            <i className="fas fa-paper-plane text-4xl sm:text-5xl lg:text-6xl text-white opacity-80"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">Join thousands of adventurers who have discovered the extraordinary with Nova Trails. Your journey of a lifetime starts with a single step.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-compass mr-2"></i>Start Your Journey
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>Call Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-mountain text-white text-sm sm:text-base"></i>
                </div>
                <span className="text-xl sm:text-2xl font-bold">Nova Trails</span>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Discover what's never been found. We create extraordinary adventures that connect you with the world's most incredible destinations.</p>
              <div className="flex space-x-4">
                {['facebook-f', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <i className={`fab fa-${social} text-sm sm:text-base`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">Destinations</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">Tour Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">Travel Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">Gallery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">Blog</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-emerald-400 mt-1 text-sm sm:text-base"></i>
                  <span className="text-gray-400 text-sm sm:text-base">123 Adventure Street<br/>Explorer City, EC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-emerald-400 text-sm sm:text-base"></i>
                  <span className="text-gray-400 text-sm sm:text-base">+1 (555) 123-NOVA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-emerald-400 text-sm sm:text-base"></i>
                  <span className="text-gray-400 text-sm sm:text-base">info@novatrails.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-clock text-emerald-400 mt-1 text-sm sm:text-base"></i>
                  <span className="text-gray-400 text-sm sm:text-base">Mon-Fri: 9AM-6PM<br/>Sat-Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">Subscribe to our newsletter for the latest adventure deals and travel inspiration.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-sm sm:text-base"
                />
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                  <i className="fas fa-paper-plane mr-2"></i>Subscribe
                </Button>
              </div>
              <div className="mt-4">
                <p className="text-xs sm:text-sm text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2025 Nova Trails. All rights reserved. | 
                <a href="#" className="hover:text-emerald-400 transition-colors"> Privacy Policy</a> | 
                <a href="#" className="hover:text-emerald-400 transition-colors"> Terms of Service</a>
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
