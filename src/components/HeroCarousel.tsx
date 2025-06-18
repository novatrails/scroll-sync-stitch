
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  gradientColors: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Arusha",
    description: "Gateway to Tanzania's northern safari circuit, Arusha offers vibrant markets, stunning views of Mount Meru, and rich cultural experiences.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100",
    link: "/arusha",
    buttonText: "Explore Arusha",
    gradientColors: "from-terracotta-500 to-terracotta-600"
  },
  {
    id: 2,
    title: "Kilimanjaro",
    description: "Conquer Africa's highest peak and stand on the roof of the continent. Experience diverse ecosystems from tropical rainforest to arctic summit.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100",
    link: "/kilimanjaro",
    buttonText: "Explore Kilimanjaro",
    gradientColors: "from-sage-600 to-sage-700"
  },
  {
    id: 3,
    title: "Zanzibar",
    description: "Paradise found in the Indian Ocean. Pristine white sand beaches, crystal clear waters, historic Stone Town, and rich Swahili culture.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100",
    link: "/zanzibar",
    buttonText: "Explore Zanzibar",
    gradientColors: "from-blue-500 to-cyan-500"
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="h-screen relative overflow-hidden bg-black">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 z-20 carousel-slide-active' 
                : 'opacity-0 z-10'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[3000ms] hover:scale-105"
              style={{
                backgroundImage: `url('${slide.image}')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <div className="text-terracotta-400 text-xs sm:text-sm tracking-widest uppercase mb-4 animate-fade-in">
                  Tanzania Destination
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button className={`bg-gradient-to-r ${slide.gradientColors} hover:scale-105 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transform transition-all duration-300 animate-fade-in nav-button-hover`}>
                    {slide.buttonText} →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-4 sm:left-8 flex items-center gap-4 z-30">
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-100/20 backdrop-blur-md border border-cream-200/30 rounded-full flex items-center justify-center text-white hover:bg-cream-100/30 transition-all duration-300 nav-button-hover"
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-100/20 backdrop-blur-md border border-cream-200/30 rounded-full flex items-center justify-center text-white hover:bg-cream-100/30 transition-all duration-300 nav-button-hover"
          >
            ›
          </button>
        </div>
        <div className="text-white/80 text-xs sm:text-sm tracking-wider">
          <span className="text-white font-semibold text-base sm:text-lg">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 right-4 sm:right-8 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 nav-button-hover ${
              index === currentSlide ? 'bg-cream-200 w-6' : 'bg-cream-100/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-xl sm:text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroCarousel;
