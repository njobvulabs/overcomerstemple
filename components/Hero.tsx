
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Worship Background - High Energy Movement */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        {/* Subtle Navy Overlay - Lightened to see the people praising */}
        <div className="absolute inset-0 bg-navy/40 bg-gradient-to-b from-navy/30 via-transparent to-navy/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-8 py-2 px-6 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 animate-fade-in">
           <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Overcomers Temple of God
          </h4>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-header text-white font-bold mb-8 leading-tight drop-shadow-2xl animate-fade-in-up">
          Welcome to Your <br />
          <span className="text-gold italic">Season of Victory</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
          Experience a sanctuary of power, a house of prayer, and a family of believers 
          dedicated to the move of the Holy Spirit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <button 
            onClick={() => onNavigate('visit')}
            className="bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-deepGold transition-all transform hover:scale-105 shadow-[0_15px_35px_-12px_rgba(197,160,89,0.5)] flex items-center justify-center gap-2 group"
          >
            <span>Plan Your Visit</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button 
            onClick={() => onNavigate('prayer')}
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all transform hover:scale-105"
          >
            Request Prayer
          </button>
        </div>
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-8 border border-white/10 pointer-events-none rounded-[2rem] z-20 hidden md:block"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/80 z-30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;