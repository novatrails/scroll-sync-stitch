
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import BookingModal from '@/components/BookingModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Kilimanjaro = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingOpen={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="text-terracotta-400 text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Roof of Africa
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mount Kilimanjaro
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Conquer Africa's highest peak and experience the ultimate adventure. From tropical rainforest to arctic summit, witness nature's incredible diversity.
            </p>
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Plan Your Climb
            </Button>
          </div>
        </div>
      </section>

      {/* Climbing Routes Section */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Climbing Routes</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">Choose your path to the summit with our expertly guided routes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Machame Route",
                description: "The most scenic route with diverse landscapes and high success rates",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "6-7 Days",
                difficulty: "Moderate",
                success: "85%"
              },
              {
                title: "Lemosho Route",
                description: "Pristine wilderness with excellent acclimatization and stunning views",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "7-8 Days",
                difficulty: "Moderate",
                success: "90%"
              },
              {
                title: "Marangu Route",
                description: "The classic route with hut accommodation and gentle gradients",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "5-6 Days",
                difficulty: "Easy",
                success: "70%"
              }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${route.image}')` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-900 mb-3">{route.title}</h3>
                  <p className="text-sage-600 mb-4">{route.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-terracotta-600">{route.duration}</div>
                      <div className="text-sage-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-sage-600">{route.difficulty}</div>
                      <div className="text-sage-500">Difficulty</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-terracotta-600">{route.success}</div>
                      <div className="text-sage-500">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sage-600 to-terracotta-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Climb Kilimanjaro?</h2>
          <p className="text-lg sm:text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have reached the summit with our expert guides and proven success rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-sage-600 hover:bg-cream-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Kilimanjaro Trek
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Get Quote
            </Button>
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

export default Kilimanjaro;
