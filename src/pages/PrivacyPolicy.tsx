import React, { useState } from 'react';
import BookingModal from '@/components/BookingModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Privacy Policy</h2>
            <div className="prose prose-lg text-sage-700 space-y-6">
              <p><strong>Last Updated:</strong> January 2025</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you book a tour, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, and travel preferences.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, process bookings, communicate with you, and send you updates about our tours and services.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h3 className="text-xl font-semibold text-sage-900 mt-8 mb-4">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at novatrails01@outlook.com or call +255 744 667 778.</p>
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

export default PrivacyPolicy;
