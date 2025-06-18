import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Kilimanjaro = () => {
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
              <a href="/#destinations" className="text-white hover:text-emerald-300 transition-colors duration-200">Destinations</a>
              <a href="/#about" className="text-white hover:text-emerald-300 transition-colors duration-200">About</a>
              <a href="/#contact" className="text-white hover:text-emerald-300 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

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
            <div className="text-orange-400 text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Roof of Africa
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mount Kilimanjaro
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Conquer Africa's highest peak and experience the ultimate adventure. From tropical rainforest to arctic summit, witness nature's incredible diversity.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in">
              Plan Your Climb
            </Button>
          </div>
        </div>
      </section>

      {/* Climbing Routes Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Climbing Routes</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Choose your path to the summit with our expertly guided routes</p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{route.title}</h3>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-emerald-600">{route.duration}</div>
                      <div className="text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{route.difficulty}</div>
                      <div className="text-gray-500">Difficulty</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-orange-600">{route.success}</div>
                      <div className="text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Climb Kilimanjaro?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have reached the summit with our expert guides and proven success rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Book Kilimanjaro Trek
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Same as Arusha */}
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
                <li><a href="/#destinations" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Destinations</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About</a></li>
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
    </div>
  );
};

export default Kilimanjaro;
