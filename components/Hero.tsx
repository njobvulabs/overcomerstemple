
import React from 'react';
import { PageId } from '../types';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Visual Background - Using a high-energy worship placeholder image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510133595913-9797371e7c09?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 animate-fade-in">
          Overcomers Temple of God
        </h4>
        <h1 className="text-4xl md:text-7xl font-header text-white font-bold mb-6 leading-tight animate-fade-in-up">
          Welcome to Your <br />
          <span className="text-gold italic">Season of Victory</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up">
          Experience a sanctuary of power, a house of prayer, and a family of believers 
          dedicated to the move of the Holy Spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <button 
            onClick={() => onNavigate('visit')}
            className="bg-gold text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-deepGold transition-all transform hover:scale-105 shadow-lg shadow-gold/20"
          >
            Plan Your Visit
          </button>
          <button 
            onClick={() => onNavigate('prayer')}
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all transform hover:scale-105"
          >
            Request Prayer
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
