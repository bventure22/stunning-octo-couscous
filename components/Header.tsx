
import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { label: string; value: TabType }[] = [
    { label: 'HOME', value: 'HOME' },
    { label: 'DESTINATIONS', value: 'DESTINATIONS' },
    { label: 'TOURS', value: 'TOURS' },
    { label: 'TIPS', value: 'TIPS' },
    { label: 'ABOUT US', value: 'ABOUT' },
    { label: 'CONTACT US', value: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#004d00] text-white py-2 px-4 text-xs flex justify-between items-center md:px-12">
        <div className="flex space-x-4">
          <span>📧 info@kusinitours.com</span>
          <span className="hidden sm:inline">📞 +255 712 345 678</span>
        </div>
        <div className="flex space-x-4">
          <span className="hover:text-[#cc0000] cursor-pointer">FB</span>
          <span className="hover:text-[#cc0000] cursor-pointer">IG</span>
          <span className="hover:text-[#cc0000] cursor-pointer">TW</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Placeholder */}
        <div className="flex items-center mb-4 md:mb-0 cursor-pointer" onClick={() => setActiveTab('HOME')}>
          <div className="w-12 h-12 bg-[#cc0000] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-3 border-2 border-[#004d00]">
            K
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#004d00]">
              KUSINI <span className="text-[#cc0000]">TOURS</span>
            </h1>
            <p className="text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase">And Safaris Ltd</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-1 md:space-x-4 lg:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 border-b-2 ${
                activeTab === tab.value
                  ? 'border-[#cc0000] text-[#004d00]'
                  : 'border-transparent text-gray-600 hover:text-[#004d00]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
