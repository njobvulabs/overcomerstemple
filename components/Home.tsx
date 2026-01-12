
import React from 'react';
import Hero from './Hero.tsx';
import BishopsCorner from './BishopsCorner.tsx';
import ServiceTimes from './ServiceTimes.tsx';
import TestimonySection from './TestimonySection.tsx';
import { PageId } from '../types.ts';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const congregationImg = "https://i.imgur.com/PrAxlfc.jpg";

  return (
    <div className="bg-offWhite">
      <Hero onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CTAButton 
            title="Plan Your Visit" 
            desc="What to expect when you arrive in Chilobwe." 
            icon="📍" 
            onClick={() => onNavigate('visit')} 
          />
          <CTAButton 
            title="Join Us Live" 
            desc="Watch our Spirit-filled services." 
            icon="🎥" 
            onClick={() => onNavigate('sermons')} 
            highlight
          />
        </div>
      </div>

      <BishopsCorner />

      {/* New Here Section - Screenshot Accurate Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B48] rounded-xl p-8 md:p-16 text-white flex flex-col md:flex-row items-stretch gap-12 overflow-hidden relative shadow-2xl border-2 border-[#5C7DAF]">
            
            {/* Left Content Column */}
            <div className="md:w-1/2 relative z-10 flex flex-col items-start justify-center">
              <div className="inline-block px-6 py-2 rounded-full border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
                WELCOME HOME
              </div>
              
              <h2 className="text-6xl md:text-8xl font-header font-bold mb-10 leading-[0.9] tracking-tight">
                New to <br />Overcomers?
              </h2>
              
              <p className="text-xl text-white/40 mb-12 leading-relaxed font-light max-w-sm">
                We know that visiting a church for the first time can be intimidating. 
                Whether you're looking for answers to life's big questions or a community of faith, 
                we're here to help you feel at home in Chilobwe.
              </p>
              
              <button 
                onClick={() => onNavigate('visit')}
                className="bg-[#C5A059] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#A68546] transition-all shadow-xl transform hover:scale-105"
              >
                I'M NEW HERE
              </button>
            </div>

            {/* Right Visuals Column - Matches Screenshot Grid */}
            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative z-10 min-h-[500px]">
              
              {/* Left Side of the grid (Middle items) */}
              <div className="flex flex-col gap-6 justify-end">
                {/* Background abstract block */}
                <div className="h-40 bg-[#14233D] rounded-[2rem] w-full hidden md:block"></div>
                
                {/* Lower focused image */}
                <div className="relative group">
                  <img 
                    src={congregationImg} 
                    className="rounded-[2.5rem] h-80 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/5" 
                    alt="Worship Experience" 
                  />
                  <div className="absolute inset-0 bg-navy/20 rounded-[2.5rem] group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Right Side of the grid (Tall item) */}
              <div className="flex flex-col gap-6">
                {/* Large vertical image matching the right side of screenshot */}
                <div className="relative group flex-grow">
                  <img 
                    src={congregationImg} 
                    className="rounded-[2.5rem] h-full w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/5" 
                    alt="Overcomers Congregation" 
                  />
                  <div className="absolute inset-0 bg-navy/10 rounded-[2.5rem] group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Background abstract block */}
                <div className="h-48 bg-[#14233D] rounded-[2rem] w-full hidden md:block"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ServiceTimes />
      <TestimonySection />

      {/* Welcome Message / Final CTA */}
      <section className="py-32 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Worship Light"
          />
          <div className="absolute inset-0 bg-navy/90 bg-gradient-to-br from-navy via-navy/80 to-gold/20" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-header text-4xl md:text-5xl text-white mb-8 leading-tight">
            "Welcome Home to <br />
            <span className="text-gold italic">Overcomers Temple of God.</span>"
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Whatever your story, whatever your past, you belong here. Join Bishop Njobvu and a community of believers in Chilobwe as we seek the face of God together. 
            We are a Spirit-filled church committed to seeing you walk in the fullness of your divine destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl transform hover:scale-105"
            >
              Start Here
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl transform hover:scale-105"
            >
              Need Prayer?
            </button>
          </div>
          <p className="mt-16 text-gold font-bold uppercase tracking-[0.4em] text-xs animate-pulse">
            Victory starts here.
          </p>
        </div>
      </section>
    </div>
  );
};

const CTAButton: React.FC<{ title: string; desc: string; icon: string; onClick: () => void; highlight?: boolean }> = ({ title, desc, icon, onClick, highlight }) => (
  <button 
    onClick={onClick}
    className={`p-10 rounded-3xl shadow-2xl text-left transition-all transform hover:-translate-y-3 group border border-navy/5 relative overflow-hidden ${
      highlight ? 'bg-gold text-white border-transparent' : 'bg-white text-navy'
    }`}
  >
    {highlight && (
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
    )}
    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left drop-shadow-md">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 font-header tracking-tight">{title}</h3>
    <p className={`text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
  </button>
);

export default Home;
