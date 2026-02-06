
import React, { useRef } from 'react';
import { PRODUCTS } from '../constants';

const ProductScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[#cc0000] font-bold text-sm tracking-widest uppercase">Our Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#004d00] mt-2">Popular Tours & Safaris</h2>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#004d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#004d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar snap-x snap-mandatory"
        >
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="min-w-[300px] md:min-w-[380px] group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 snap-start transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#cc0000] text-white px-3 py-1 rounded-full font-bold text-sm">
                  {product.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">{product.location}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#004d00] mb-2 line-clamp-1">{product.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {product.duration}
                </div>
                <button className="w-full py-3 bg-[#004d00] text-white rounded-lg font-bold hover:bg-[#cc0000] transition-colors">
                  View Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;
