
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
    // Auto-advance slideshow
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    // Auto-advance testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

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
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-mountain text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-white">Nova Trails</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-200">Home</a>
              <a href="#destinations" className="text-white hover:text-emerald-300 transition-colors duration-200">Destinations</a>
              <a href="#about" className="text-white hover:text-emerald-300 transition-colors duration-200">About</a>
              <a href="#contact" className="text-white hover:text-emerald-300 transition-colors duration-200">Contact</a>
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200">
                Book Now
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section from First Page */}
      <section className="h-screen relative overflow-hidden">
        {/* Logo Area */}
        <div className="fixed top-10 left-16 z-50 flex items-center gap-6 transition-all duration-300 animate-pulse">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <i className="fas fa-mountain text-white text-2xl"></i>
            </div>
          </div>
          <div className="font-bold text-4xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nova Trails
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative h-full">
          {/* Slide 1: Arusha */}
          <div className={`absolute inset-0 transition-all duration-800 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-12 flex items-center">
              <div className="flex-1 max-w-2xl">
                <div className="text-white/70 text-sm tracking-widest uppercase mb-4 animate-fade-in">
                  Tanzania Destination
                </div>
                <h1 className="text-8xl font-bold text-white mb-6 leading-none animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Arusha
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed animate-fade-in">
                  Gateway to Tanzania's northern safari circuit, Arusha offers vibrant markets, stunning views of Mount Meru, and rich cultural experiences.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in">
                  Explore →
                </Button>
              </div>
              
              <div className="flex flex-col gap-6 ml-8">
                {[
                  { title: "Arusha National Park", rating: "⭐⭐⭐⭐⭐", bg: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
                  { title: "Cultural Heritage Centre", rating: "⭐⭐⭐⭐⭐", bg: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
                ].map((card, index) => (
                  <div key={index} className="w-72 h-48 rounded-2xl overflow-hidden relative cursor-pointer group hover:scale-105 transform transition-all duration-300">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url('${card.bg}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      ▶
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                      <div className="text-sm">{card.rating}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 2: Kilimanjaro */}
          <div className={`absolute inset-0 transition-all duration-800 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-12 flex items-center">
              <div className="flex-1 max-w-2xl">
                <div className="text-white/70 text-sm tracking-widest uppercase mb-4">
                  Tanzania Destination
                </div>
                <h1 className="text-8xl font-bold text-white mb-6 leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Kilimanjaro
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                  Conquer Africa's highest peak and stand on the roof of the continent. Experience diverse ecosystems from tropical rainforest to arctic summit.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                  Explore →
                </Button>
              </div>
            </div>
          </div>

          {/* Slide 3: Zanzibar */}
          <div className={`absolute inset-0 transition-all duration-800 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-12 flex items-center">
              <div className="flex-1 max-w-2xl">
                <div className="text-white/70 text-sm tracking-widest uppercase mb-4">
                  Tanzania Destination
                </div>
                <h1 className="text-8xl font-bold text-white mb-6 leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Zanzibar
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                  Paradise found in the Indian Ocean. Pristine white sand beaches, crystal clear waters, historic Stone Town, and rich Swahili culture.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                  Explore →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-12 flex items-center gap-8 z-20">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              ‹
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              ›
            </button>
          </div>
          <div className="text-white/80 text-sm tracking-wider">
            <span className="text-white font-semibold text-lg">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(totalSlides).padStart(2, '0')}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 right-12 flex gap-2 z-20">
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
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Content from Second Page */}
      
      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover breathtaking locations that will transform your perspective and ignite your sense of adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black group-hover:via-black/20 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-map-marker-alt text-emerald-400 mr-2"></i>
                      <span className="text-sm font-medium">{destination.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Nova Trails?</h2>
              <p className="text-xl text-gray-600 mb-8">We're not just another travel company. We're explorers, storytellers, and dream-makers who believe that the world's most incredible experiences are waiting to be discovered.</p>
              
              <div className="space-y-6">
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
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <i className={`${feature.icon} ${feature.iconColor}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Adventure Travel" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Adventurers Say</h2>
          <p className="text-xl text-gray-600 mb-16">Real stories from real travelers who discovered the extraordinary</p>
          
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
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-pulse">
            <i className="fas fa-paper-plane text-6xl text-white opacity-80"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join thousands of adventurers who have discovered the extraordinary with Nova Trails. Your journey of a lifetime starts with a single step.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              <i className="fas fa-compass mr-2"></i>Start Your Journey
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-phone mr-2"></i>Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-mountain text-white"></i>
                </div>
                <span className="text-2xl font-bold">Nova Trails</span>
              </div>
              <p className="text-gray-400 mb-6">Discover what's never been found. We create extraordinary adventures that connect you with the world's most incredible destinations.</p>
              <div className="flex space-x-4">
                {['facebook-f', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Destinations', 'Tour Packages', 'Travel Tips', 'Gallery', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-emerald-400"></i>
                  <span className="text-gray-400">123 Adventure Street<br/>Explorer City, EC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-emerald-400"></i>
                  <span className="text-gray-400">+1 (555) 123-NOVA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-emerald-400"></i>
                  <span className="text-gray-400">info@novatrails.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock text-emerald-400"></i>
                  <span className="text-gray-400">Mon-Fri: 9AM-6PM<br/>Sat-Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest adventure deals and travel inspiration.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-200">
                  <i className="fas fa-paper-plane mr-2"></i>Subscribe
                </Button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Nova Trails. All rights reserved. | 
                <a href="#" className="hover:text-emerald-400 transition-colors"> Privacy Policy</a> | 
                <a href="#" className="hover:text-emerald-400 transition-colors"> Terms of Service</a>
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Designed with</span>
                <i className="fas fa-heart text-red-500"></i>
                <span>for adventurers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
