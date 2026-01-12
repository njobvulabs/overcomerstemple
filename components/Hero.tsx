
import React from 'react';
import { PageId } from '../types.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Visual Background - High-energy worship with hands raised */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-110 animate-ken-burns"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1551934208-844ca1bbadaa?auto=format&fit=crop&q=80&w=2000')`,
          filter: 'brightness(0.6)'
        }}
      >
        {/* Secondary Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 py-2 px-6 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 animate-fade-in">
           <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Overcomers Temple of God
          </h4>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-header text-white font-bold mb-8 leading-tight animate-fade-in-up">
          Welcome to Your <br />
          <span className="text-gold italic drop-shadow-sm">Season of Victory</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          Experience a sanctuary of power, a house of prayer, and a family of believers 
          dedicated to the move of the Holy Spirit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <button 
            onClick={() => onNavigate('visit')}
            className="bg-gold text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-deepGold transition-all transform hover:scale-105 shadow-2xl shadow-gold/30 flex items-center justify-center gap-2 group"
          >
            <span>Plan Your Visit</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button 
            onClick={() => onNavigate('prayer')}
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all transform hover:scale-105 shadow-xl"
          >
            Request Prayer
          </button>
        </div>
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-8 border border-white/10 pointer-events-none rounded-3xl z-20 hidden md:block"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/60 z-30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out backwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Hero;
