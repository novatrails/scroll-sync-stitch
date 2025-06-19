import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Rabbit, Fish, Bird } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Wildlife Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Rabbit className="cheetah-animation w-16 h-16 text-sage-300" />
        <Fish className="lion-animation w-20 h-20 text-terracotta-300" />
      </div>

      {/* Header */}
      <nav className="bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with animated monkey */}
            <Link to="/" className="flex items-center space-x-2 relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                  alt="Nova Trails Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 relative z-10"
                />
                <Bird className="monkey-animation w-6 h-6 text-terracotta-500 top-0 left-8" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">Home</Link>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">Destinations</Link>
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200 nav-button-hover">About</Link>
              <Link to="/contact" className="text-terracotta-400 hover:text-terracotta-300 transition-colors duration-200 nav-button-hover">Contact</Link>
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-terracotta-600 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Nova Trails</h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            Ready to embark on your next adventure? Get in touch with our travel experts and let's plan your journey of a lifetime.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-sage-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Book a Tour</option>
                    <option>Group Booking</option>
                    <option>Custom Itinerary</option>
                    <option>Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Tell us about your dream adventure..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Interactive Map */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Visit Our Office</h3>
                <div className="h-64 bg-sage-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645564756890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone text-terracotta-600 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-sage-900 mb-2">Call Us</h4>
                  <p className="text-sage-700">+1 (555) 123-NOVA</p>
                  <p className="text-sm text-sage-500 mt-1">Mon-Fri: 9AM-6PM</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-sage-600 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-sage-900 mb-2">Email Us</h4>
                  <p className="text-sage-700">info@novatrails.com</p>
                  <p className="text-sm text-sage-500 mt-1">24/7 Support</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-terracotta-600 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-sage-900 mb-2">Visit Us</h4>
                  <p className="text-sage-700">123 Adventure Street</p>
                  <p className="text-sm text-sage-500 mt-1">Explorer City, EC 12345</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-sage-600 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-sage-900 mb-2">Office Hours</h4>
                  <p className="text-sage-700">Mon-Fri: 9AM-6PM</p>
                  <p className="text-sm text-sage-500 mt-1">Sat-Sun: 10AM-4PM</p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-terracotta-500 to-sage-600 p-6 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">24/7 Emergency Support</h4>
                <p className="mb-4">For travelers already on tour who need immediate assistance:</p>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-xl"></i>
                  <span className="text-lg font-semibold">+1 (555) 911-HELP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-sage-900 text-white py-12 relative overflow-hidden">
        {/* Wildlife Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Rabbit className="absolute top-10 right-20 w-32 h-32 text-terracotta-300" />
          <Fish className="absolute bottom-10 left-20 w-28 h-28 text-sage-300" />
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
                <Bird className="monkey-animation w-4 h-4 text-terracotta-400 top-0 left-20" />
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

export default Contact;
