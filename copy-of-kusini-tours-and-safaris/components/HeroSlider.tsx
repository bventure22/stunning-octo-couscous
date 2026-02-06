
import React, { useState, useEffect } from 'react';
import { SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg max-w-4xl font-serif">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="mt-8 px-8 py-3 bg-[#cc0000] text-white font-bold rounded-full hover:bg-[#004d00] transition-colors shadow-xl">
              Book Your Safari
            </button>
          </div>
        </div>
      ))}

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
