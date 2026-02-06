
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ProductScroll from './components/ProductScroll';
import Footer from './components/Footer';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('HOME');

  const renderContent = () => {
    switch (activeTab) {
      case 'HOME':
        return (
          <>
            <HeroSlider />
            
            {/* Welcome Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-[#cc0000] font-bold text-sm tracking-[0.3em] uppercase">Welcome to Kusini</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#004d00] leading-tight font-serif">
                  Unveil the Soul of <span className="text-[#cc0000]">Tanzania</span> with Every Journey
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Kusini Tours and Safaris, we specialize in authentic, immersive experiences across the breathtaking landscapes of Tanzania. 
                  From the majestic peaks of Kilimanjaro to the wild savannas of Serengeti and the hidden gems of the Southern Circuit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-xl border-l-4 border-[#cc0000]">
                    <span className="text-2xl font-bold text-[#004d00]">10+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-xl border-l-4 border-[#004d00]">
                    <span className="text-2xl font-bold text-[#cc0000]">500+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Safaris Completed</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-[#004d00] text-white font-bold rounded-lg hover:bg-[#cc0000] transition-all">
                  Learn More About Us
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1974&auto=format&fit=crop" 
                  alt="Zebra Safari" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#cc0000] rounded-3xl -z-0"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 border-8 border-[#004d00] rounded-3xl -z-0"></div>
              </div>
            </section>

            <ProductScroll />

            {/* Why Choose Us */}
            <section className="bg-[#004d00] py-20 text-white">
              <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
                <span className="text-[#cc0000] font-bold tracking-[0.3em] uppercase text-sm">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 font-serif">The Kusini Difference</h2>
              </div>
              <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Local Experts', desc: 'Our guides are born and raised in the regions they lead tours through.', icon: '🌍' },
                  { title: 'Sustainable Travel', desc: 'We prioritize eco-friendly lodges and conservation-first tour operations.', icon: '🌿' },
                  { title: 'Custom Itineraries', desc: 'No two safaris are the same. We tailor every detail to your preference.', icon: '✨' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery teaser using some of the requested visual themes */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
                <h2 className="text-3xl font-bold text-[#004d00] font-serif">Safari Moments</h2>
                <div className="w-24 h-1 bg-[#cc0000] mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-xl shadow-lg hover:opacity-90 cursor-pointer" alt="Lion" />
                <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-xl shadow-lg hover:opacity-90 cursor-pointer" alt="Kilimanjaro" />
                <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-xl shadow-lg hover:opacity-90 cursor-pointer" alt="Wildebeest" />
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-xl shadow-lg hover:opacity-90 cursor-pointer" alt="Elephant" />
              </div>
            </section>
          </>
        );
      case 'DESTINATIONS':
        return (
          <div className="py-20 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-[#004d00] mb-8 font-serif text-center">Explore Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Serengeti', 'Zanzibar', 'Ngorongoro Crater', 'Nyerere (Selous)', 'Ruaha', 'Mikumi'].map(dest => (
                <div key={dest} className="relative h-80 rounded-2xl overflow-hidden group">
                  <img src={`https://picsum.photos/seed/${dest}/800/600`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={dest} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{dest}</h3>
                      <button className="text-[#cc0000] font-bold text-sm">View Tours &rarr;</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'TOURS':
        return (
          <div className="py-20 max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-[#004d00] mb-8 font-serif text-center">Our Tour Packages</h2>
            <p className="text-center text-gray-600 mb-12">Discover the untamed beauty of Southern Tanzania with our carefully curated itineraries.</p>
            <div className="space-y-6">
               <ProductScroll />
            </div>
          </div>
        );
      case 'TIPS':
        return (
          <div className="py-20 max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-[#004d00] mb-8 font-serif">Safari Preparation Tips</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#cc0000]">
                <h3 className="text-xl font-bold text-[#004d00] mb-2">What to Pack?</h3>
                <p className="text-gray-600">Neutral colored clothing (khaki, beige, green), comfortable walking shoes, sun protection, and a good pair of binoculars.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#004d00]">
                <h3 className="text-xl font-bold text-[#004d00] mb-2">Best Time to Visit?</h3>
                <p className="text-gray-600">The dry season (June to October) is generally best for wildlife viewing as animals congregate around water sources.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#cc0000]">
                <h3 className="text-xl font-bold text-[#004d00] mb-2">Health & Safety</h3>
                <p className="text-gray-600">Consult your doctor about malaria prophylaxis and yellow fever vaccinations before traveling to Tanzania.</p>
              </div>
            </div>
          </div>
        );
      case 'ABOUT':
        return (
          <div className="py-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl font-bold text-[#004d00] mb-8 font-serif">About Kusini Tours</h2>
            <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1974&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-xl" alt="Maasai Culture" />
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded on a passion for the untamed wild, Kusini Tours and Safaris was established to bridge the gap between luxury travel and authentic African discovery.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the heart of Dar es Salaam, we take pride in our deep knowledge of the Southern Circuit, offering unique access to Nyerere, Ruaha, and Mikumi that few others can match.
            </p>
          </div>
        );
      case 'CONTACT':
        return (
          <div className="py-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-[#004d00] mb-6 font-serif">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Ready to start your adventure? Contact our safari experts today.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#cc0000] text-white flex items-center justify-center rounded-full">📞</div>
                  <div>
                    <p className="font-bold text-[#004d00]">Phone</p>
                    <p className="text-gray-600">+255 712 345 678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#004d00] text-white flex items-center justify-center rounded-full">✉️</div>
                  <div>
                    <p className="font-bold text-[#004d00]">Email</p>
                    <p className="text-gray-600">bookings@kusinitours.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#cc0000] text-white flex items-center justify-center rounded-full">📍</div>
                  <div>
                    <p className="font-bold text-[#004d00]">Office</p>
                    <p className="text-gray-600">Suite 402, Safari Towers, Dar es Salaam</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d00] focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d00] focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d00] focus:outline-none" placeholder="I'm interested in the 7-day Southern Tanzania Explorer..."></textarea>
              </div>
              <button className="w-full py-4 bg-[#004d00] text-white font-bold rounded-lg hover:bg-[#cc0000] transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* CTA Section */}
      {activeTab !== 'CONTACT' && (
        <section className="bg-gray-50 py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#004d00] mb-6">Start Planning Your Dream Safari</h2>
            <p className="text-gray-600 mb-8 text-lg">Contact our team for a personalized itinerary tailored to your budget and interests.</p>
            <button 
              onClick={() => setActiveTab('CONTACT')}
              className="bg-[#cc0000] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#004d00] transition-all shadow-xl hover:-translate-y-1"
            >
              Request a Custom Quote
            </button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default App;
