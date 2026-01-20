
import React, { useState } from 'react';
import { PageId } from '../types.ts';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Plan Your Visit', id: 'visit' },
    { label: 'Sermons', id: 'sermons' },
    { label: 'Media', id: 'media' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-navy/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex flex-col cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <span className="text-navy font-header text-2xl lg:text-3xl font-bold tracking-tight uppercase group-hover:text-gold transition-colors">
              Overcomers
            </span>
            <span className="text-gold text-[10px] lg:text-[13px] font-bold uppercase tracking-[0.3em] leading-none">
              Temple of God
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-[12px] lg:text-[14px] font-bold transition-all uppercase tracking-[0.2em] relative py-1 ${
                  currentPage === link.id 
                    ? 'text-gold' 
                    : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold animate-fade-in"></span>
                )}
              </button>
            ))}
            <button 
              className="bg-gold text-white px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-navy transition-all transform hover:scale-105 shadow-lg shadow-gold/20"
              onClick={() => alert('Join us Sunday at 9:30 AM for the Live Stream!')}
            >
              Watch Live
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16m-16 6h16m-16 6h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-navy/5 px-6 pt-6 pb-12 space-y-4 animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPage === link.id ? 'bg-navy text-gold shadow-lg' : 'text-navy hover:bg-navy/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="block w-full text-center bg-gold text-white px-6 py-5 rounded-xl text-xs font-bold uppercase tracking-widest mt-6 shadow-xl"
            onClick={() => {
              setIsMenuOpen(false);
              alert('Join us Sunday at 9:30 AM for the Live Stream!');
            }}
          >
            Watch Live
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
