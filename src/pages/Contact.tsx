
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MobileNav from '@/components/MobileNav';
import BookingModal from '@/components/BookingModal';

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <Link to="/destinations"  className="text-white hover:text-emerald-300 transition-colors duration-200">Destinations</Link>
              <Link to="/about" className="text-white hover:text-emerald-300 transition-colors duration-200">About</Link>
              <Link to="/contact" className="text-emerald-300 font-semibold">Contact</Link>
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
      <section className="h-96 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Ready to start planning your Tanzanian adventure? We're here to help make your dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: "fas fa-map-marker-alt",
                      title: "Visit Us",
                      details: ["123 Safari Avenue", "Arusha, Tanzania", "P.O. Box 12345"]
                    },
                    {
                      icon: "fas fa-phone",
                      title: "Call Us",
                      details: ["+255 27 123 4567", "+1 (555) 123-NOVA", "Mon-Fri: 8AM-6PM EAT"]
                    },
                    {
                      icon: "fas fa-envelope",
                      title: "Email Us",
                      details: ["info@novatrails.com", "bookings@novatrails.com", "We reply within 24 hours"]
                    },
                    {
                      icon: "fas fa-clock",
                      title: "Business Hours",
                      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: By Appointment"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-emerald-600 text-lg`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent travel inquiries or emergency support during your trip, call our 24/7 hotline.
                </p>
                <Button 
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg sm:text-xl text-gray-600">Located in the heart of Arusha, Tanzania</p>
          </div>
          
          {/* Placeholder for map - in a real application, you would integrate with Google Maps or similar */}
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">123 Safari Avenue, Arusha, Tanzania</p>
            </div>
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

export default Contact;
