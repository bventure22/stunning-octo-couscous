
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004d00] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: About */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#cc0000] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">K</div>
            <h2 className="text-2xl font-bold tracking-tight">KUSINI TOURS</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Your premier gateway to the hidden gems of Southern Tanzania. Experience authentic safari adventures with local experts.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-[#cc0000] inline-block">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Safari Tips</li>
            <li className="hover:text-white cursor-pointer">Special Offers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-[#cc0000] inline-block">Contact Info</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="mr-3 text-[#cc0000]">📍</span>
              Dar es Salaam, Tanzania
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#cc0000]">📞</span>
              +255 712 345 678
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#cc0000]">✉️</span>
              info@kusinitours.com
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-[#cc0000] inline-block">Newsletter</h3>
          <p className="text-gray-300 mb-4">Subscribe for latest safari updates and offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 w-full rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-[#cc0000] px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Kusini Tours and Safaris. All rights reserved. Designed for Excellence.
      </div>
    </footer>
  );
};

export default Footer;
