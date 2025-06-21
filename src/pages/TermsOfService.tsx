
import React, { useState } from 'react';
import BookingModal from '@/components/BookingModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingOpen={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="h-64 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Terms of Service
            </h1>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Terms of Service</h2>
            <div className="prose prose-lg text-sage-700 space-y-6">
              <p><strong>Last Updated:</strong> January 2025</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Acceptance of Terms</h3>
              <p>By accessing and using Nova Trails services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Booking and Payment</h3>
              <p>All bookings are subject to availability and confirmation. Payment terms and cancellation policies will be clearly communicated at the time of booking.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Travel Requirements</h3>
              <p>You are responsible for ensuring you have valid travel documents, including passports, visas, and any required vaccinations for your destination.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Liability and Insurance</h3>
              <p>Nova Trails recommends that all travelers obtain comprehensive travel insurance. We are not liable for any personal injury, loss, or damage during your trip.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Contact Information</h3>
              <p>For questions about these Terms of Service, please contact us at novatrails01@outlook.com or call +255 744 667 778.</p>
            </div>
          </div>
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

export default TermsOfService;
