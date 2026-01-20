
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[650px] lg:min-h-[800px] h-[85vh] flex items-center justify-center overflow-hidden bg-navy">
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

      {/* Main Content Container - Balanced vertical centering */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col items-center justify-center">
        
        {/* Decorative Frame */}
        <div className="absolute inset-8 md:inset-12 lg:inset-16 border border-[#8EACCD]/15 rounded-[3rem] pointer-events-none hidden lg:block shadow-[inset_0_0_80px_rgba(0,0,0,0.1)]"></div>
        
        <div className="text-center px-4 max-w-6xl mx-auto relative z-30">
          {/* Badge */}
          <div className="inline-block mb-8 lg:mb-12 py-3 px-10 rounded-full bg-navy/50 backdrop-blur-xl border border-gold/20 animate-fade-in shadow-2xl">
             <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Overcomers Temple of God
            </h4>
          </div>
          
          {/* Headline - Proportional for large displays */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-header text-white font-bold mb-8 lg:mb-12 leading-[1.1] md:leading-[0.95] tracking-tight drop-shadow-2xl animate-fade-in-up">
            Welcome to <br className="hidden md:block" />
            <span className="inline-block">Your </span>
            <span className="text-gold italic font-normal inline-block ml-4 md:ml-6">Season of Victory</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-base md:text-xl lg:text-2xl text-white/80 mb-12 lg:mb-20 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Experience a sanctuary of power, a house of prayer, and a family of believers 
            dedicated to the move of the Holy Spirit in Chilobwe.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-8 justify-center items-center animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-10 lg:px-20 py-4 lg:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-deepGold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-4 w-full sm:w-auto group"
            >
              <span>Plan Your Visit</span>
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 lg:px-20 py-4 lg:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-navy transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
