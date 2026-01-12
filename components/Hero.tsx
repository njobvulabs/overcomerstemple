
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[90vh] min-h-[750px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image - User Requested */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url('https://i.imgur.com/oJhP77p.jpg')`,
        }}
      >
        {/* Darkened Overlay to match screenshot atmosphere */}
        <div className="absolute inset-0 bg-navy/60 bg-gradient-to-b from-navy/40 via-transparent to-navy/70" />
      </div>

      {/* Main Content Container with Border Frame */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80%] flex items-center justify-center">
        {/* The Frame from the screenshot */}
        <div className="absolute inset-0 border-2 border-[#8EACCD]/80 rounded-xl pointer-events-none hidden md:block"></div>
        
        <div className="text-center px-4 max-w-4xl mx-auto relative z-20">
          {/* Badge */}
          <div className="inline-block mb-10 py-2.5 px-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 animate-fade-in">
             <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Overcomers Temple of God
            </h4>
          </div>
          
          {/* Headline - Mixed Serif/Italic Style */}
          <h1 className="text-6xl md:text-9xl font-header text-white font-bold mb-10 leading-none drop-shadow-2xl animate-fade-in-up">
            Welcome to Your <br />
            <span className="text-[#C5A059] italic font-normal">Season of Victory</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            Experience a sanctuary of power, a house of prayer, and a family of believers 
            dedicated to the move of the Holy Spirit.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-[#C5A059] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#A68546] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <span>Plan Your Visit</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-navy transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Request Prayer
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/60 z-30">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
