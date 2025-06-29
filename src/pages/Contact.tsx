import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import BookingModal from '@/components/BookingModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingOpen={() => setBookingModalOpen(true)} />

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
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Ready to start your adventure? Get in touch with our travel experts and let us help plan your perfect journey.
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

      {/* Contact Information */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">How to Reach Us</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">We're here to help you plan the adventure of a lifetime</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Visit Our Office",
                info: "Arusha, Tanzania",
                detail: "Monday – Friday: 06:30 – 18:30, Saturday – Sunday: 06:30 – 14:00"
              },
              {
                title: "Call Us",
                info: "+255 744 667 778",
                detail: "Available 24/7 for emergencies"
              },
              {
                title: "Email Us",
                info: "novatrails01@outlook.com",
                detail: "Response within 24 hours"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-terracotta-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">{contact.title}</h3>
                <p className="text-sage-700 font-semibold mb-2">{contact.info}</p>
                <p className="text-sage-600 text-sm">{contact.detail}</p>
              </div>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-sage-200">
              <h3 className="text-2xl font-bold text-sage-900 mb-2">Our Location</h3>
              <p className="text-sage-600">Find us in the heart of Tanzania's safari capital</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127670.98946123156!2d36.68265!3d-3.3690235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f4c2ffef98633%3A0x7b0e12e61c1bce4c!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Trails Office Location - Arusha, Tanzania"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Send Us a Message</h2>
            <p className="text-lg sm:text-xl text-sage-600">Let us know how we can help make your travel dreams come true</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-sage-900 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-sage-900 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sage-900 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-sage-900 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sage-900 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                placeholder="Tell us about your dream adventure..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;
