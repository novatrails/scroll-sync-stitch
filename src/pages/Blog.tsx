import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Blog = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-sage-900/95 backdrop-blur-lg border-b border-sage-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                alt="Nova Trails Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold text-white">Nova Trails</span>
            </Link>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link to="/" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Home</Link>
              <Link to="/destinations" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Destinations</Link>
              <Link to="/about" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">About</Link>
              <Link to="/contact" className="text-white hover:text-cream-300 transition-colors duration-200 px-2 lg:px-4 py-2 rounded-lg hover:bg-sage-800/50 text-sm lg:text-base">Contact</Link>
              <Button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-3 lg:px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 ml-2 lg:ml-4 text-sm lg:text-base"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
              Explore Our Stories
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Nova Trails Blog
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Dive into our journal of adventures, travel tips, and insider stories from the heart of Tanzania.
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

      {/* Blog Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">Latest Articles</h2>
            <p className="text-lg sm:text-xl text-sage-600 max-w-3xl mx-auto">Stay up-to-date with the latest news, travel tips, and stories from our adventures</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "The Ultimate Guide to Safari Photography",
                author: "Sarah Johnson",
                date: "January 5, 2025",
                image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: "Capture the magic of the Serengeti with our expert tips on wildlife photography"
              },
              {
                title: "Climbing Kilimanjaro: A Personal Journey",
                author: "Mike Chen",
                date: "December 28, 2024",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: "Follow Mike's inspiring ascent to the summit of Africa's highest peak"
              },
              {
                title: "Zanzibar's Hidden Beaches: A Local's Perspective",
                author: "Emma Rodriguez",
                date: "December 15, 2024",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                content: "Discover the untouched beauty of Zanzibar's coastline with Emma's guide"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div 
                  className="h-64 bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">{article.title}</h3>
                  <p className="text-sage-600 text-sm mb-4">{article.content}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sage-700 text-xs">
                      By {article.author}
                      <br />
                      {article.date}
                    </div>
                    <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-full text-sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
                  alt="Nova Trails Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Nova Trails</span>
              </div>
              <p className="text-cream-400 text-sm">Your gateway to extraordinary Tanzanian adventures.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Home</Link></li>
                <li><Link to="/destinations" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Destinations</Link></li>
                <li><Link to="/about" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">About</Link></li>
                <li><Link to="/tour-packages" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Tour Packages</Link></li>
                <li><Link to="/travel-tips" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Travel Tips</Link></li>
                <li><Link to="/blog" className="text-cream-400 hover:text-terracotta-400 transition-colors text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-cream-400">
                <p>Arusha, Tanzania</p>
                <p>+255 744 667 778</p>
                <p>novatrails01@outlook.com</p>
                <p>Mon-Fri: 06:30 AM - 18:30<br/>Sat-Sun: 06:30 AM - 14:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sage-800 mt-8 pt-6">
            <p className="text-center text-cream-400 text-sm">© 2025 Nova Trails. All rights reserved.</p>
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

export default Blog;
