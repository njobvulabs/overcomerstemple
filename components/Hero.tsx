
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[600px] h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url('https://i.imgur.com/oJhP77p.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-navy/60 bg-gradient-to-b from-navy/40 via-transparent to-navy/70" />
      </div>

      {/* Main Content Container with Border Frame */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[85%] flex items-center justify-center">
        {/* The Frame from the screenshot - only on large screens */}
        <div className="absolute inset-0 border-2 border-[#8EACCD]/40 rounded-xl pointer-events-none hidden lg:block"></div>
        
        <div className="text-center px-4 max-w-4xl mx-auto relative z-20">
          {/* Badge */}
          <div className="inline-block mb-6 md:mb-10 py-2 px-6 md:px-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 animate-fade-in">
             <h4 className="text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs">
              Overcomers Temple of God
            </h4>
          </div>
          
          {/* Headline - Responsive Scaling */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-header text-white font-bold mb-6 md:mb-10 leading-[1.1] md:leading-none drop-shadow-2xl animate-fade-in-up">
            Welcome to Your <br />
            <span className="text-[#C5A059] italic font-normal">Season of Victory</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-2xl text-white/80 mb-10 md:mb-14 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            Experience a sanctuary of power, a house of prayer, and a family of believers 
            dedicated to the move of the Holy Spirit.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-[#C5A059] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#A68546] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto group"
            >
              <span>Plan Your Visit</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-transparent border-2 border-white/50 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-navy transition-all transform hover:scale-105 w-full sm:w-auto"
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
