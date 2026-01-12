
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
    { label: 'Prayer', id: 'prayer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex flex-col cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <span className="text-navy font-header text-xl lg:text-2xl font-bold tracking-tight uppercase">
              Overcomers
            </span>
            <span className="text-gold text-[10px] lg:text-[12px] font-bold uppercase tracking-widest leading-none">
              Temple of God
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-[11px] lg:text-[13px] font-bold transition-all uppercase tracking-widest ${
                  currentPage === link.id ? 'text-gold border-b-2 border-gold pb-1' : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              className="bg-gold text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-deepGold transition-all transform hover:scale-105 shadow-md shadow-gold/20"
              onClick={() => alert('The Live Stream is currently offline. Join us Sunday at 9:30 AM!')}
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-white border-t border-navy/5 px-4 pt-4 pb-8 space-y-2 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest ${
                currentPage === link.id ? 'bg-navy text-gold' : 'text-navy hover:bg-navy/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="block w-full text-center bg-gold text-white px-4 py-4 rounded-lg text-xs font-bold uppercase tracking-widest mt-4"
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
