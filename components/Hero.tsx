
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[700px] h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image with improved scaling for large screens */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url('https://i.imgur.com/oJhP77p.jpg')`,
        }}
      >
        {/* Multi-layered overlay for ultimate text clarity on bright screens */}
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/80" />
      </div>

      {/* Main Content Container - Expanded max-width for big screens */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-[80%] flex items-center justify-center">
        {/* Refined Frame Border */}
        <div className="absolute inset-0 border-[3px] border-[#8EACCD]/30 rounded-[2rem] pointer-events-none hidden lg:block shadow-[0_0_50px_rgba(142,172,205,0.1)]"></div>
        
        <div className="text-center px-4 max-w-5xl mx-auto relative z-20">
          {/* Badge */}
          <div className="inline-block mb-8 md:mb-12 py-3 px-8 md:px-12 rounded-full bg-navy/40 backdrop-blur-md border border-gold/40 animate-fade-in shadow-xl">
             <h4 className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
              Overcomers Temple of God
            </h4>
          </div>
          
          {/* Headline - Proportional scaling for large displays */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-header text-white font-bold mb-8 md:mb-12 leading-[1] md:leading-[0.9] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-fade-in-up">
            Welcome to Your <br />
            <span className="text-gold italic font-normal inline-block mt-2">Season of Victory</span>
          </h1>
          
          {/* Subtext - Increased weight slightly for better visibility on wide screens */}
          <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-12 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            Experience a sanctuary of power, a house of prayer, and a family of believers 
            dedicated to the move of the Holy Spirit.
          </p>
          
          {/* Buttons - Larger tap targets for clarity */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-10 md:px-16 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-deepGold transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(197,160,89,0.3)] flex items-center justify-center gap-4 w-full sm:w-auto group"
            >
              <span>Plan Your Visit</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 md:px-16 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-navy transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl"
            >
              Request Prayer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
