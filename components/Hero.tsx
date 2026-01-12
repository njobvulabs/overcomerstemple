
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[700px] lg:min-h-[850px] h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image - High clarity optimization */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[12000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url('https://i.imgur.com/oJhP77p.jpg')`,
        }}
      >
        {/* Layered Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/80" />
      </div>

      {/* Main Content Container - Ultra-wide aware */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col items-center justify-center lg:pb-48">
        
        {/* The Frame - Scaled for large screens */}
        <div className="absolute inset-10 border-[1px] md:border-2 border-[#8EACCD]/20 rounded-[3rem] pointer-events-none hidden lg:block shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
        
        <div className="text-center px-4 max-w-6xl mx-auto relative z-30 py-12 md:py-20">
          {/* Badge */}
          <div className="inline-block mb-6 lg:mb-10 py-3 px-10 rounded-full bg-navy/60 backdrop-blur-xl border border-gold/30 animate-fade-in shadow-2xl">
             <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Overcomers Temple of God
            </h4>
          </div>
          
          {/* Headline - Carefully scaled to avoid 'messy' appearance on big screens */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-header text-white font-bold mb-6 lg:mb-10 leading-[1.1] md:leading-[0.9] tracking-tight drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] animate-fade-in-up">
            Welcome to <br className="hidden md:block" />
            <span className="inline-block">Your </span>
            <span className="text-gold italic font-normal inline-block ml-4 md:ml-8">Season of Victory</span>
          </h1>
          
          {/* Subtext - Proportional visibility */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-10 lg:mb-16 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md animate-fade-in-up delay-200">
            Experience a sanctuary of power, a house of prayer, and a family of believers 
            dedicated to the move of the Holy Spirit in Chilobwe.
          </p>
          
          {/* Buttons - High Visibility & Z-Index Focus */}
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-8 justify-center items-center animate-fade-in-up delay-300 relative z-40">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-10 lg:px-16 py-4 lg:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-deepGold transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(197,160,89,0.4)] flex items-center justify-center gap-4 w-full sm:w-auto group"
            >
              <span>Plan Your Visit</span>
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 lg:px-16 py-4 lg:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-navy transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl"
            >
              Request Prayer
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned to be visible above the cards */}
      <div className="absolute bottom-24 lg:bottom-40 left-1/2 -translate-x-1/2 animate-bounce text-gold/40 hidden lg:block z-10">
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
