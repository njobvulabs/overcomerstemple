
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
      
      {/* Container - Removed negative margin so boxes sit on the white background */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
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

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <BishopsCorner />
      </div>

      {/* New Here Section */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#1A2B48] rounded-[2rem] lg:rounded-[4rem] p-8 sm:p-12 md:p-24 text-white flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-24 overflow-hidden relative shadow-2xl border-2 border-[#5C7DAF]/30">
            
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="lg:w-1/2 relative z-10 flex flex-col items-start justify-center">
              <div className="inline-block px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white/90 text-[11px] font-bold uppercase tracking-[0.4em] mb-8 lg:mb-16">
                WELCOME HOME
              </div>
              
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-header font-bold mb-8 lg:mb-12 leading-[1] tracking-tight">
                New to <br className="hidden sm:block" />Overcomers?
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/50 mb-10 lg:mb-16 leading-relaxed font-light max-w-xl">
                We know that visiting a church for the first time can be intimidating. 
                Whether you're looking for answers to life's big questions or a community of faith, 
                we're here to help you feel at home in Chilobwe.
              </p>
              
              <button 
                onClick={() => onNavigate('visit')}
                className="bg-gold text-white px-12 lg:px-16 py-5 lg:py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-deepGold transition-all shadow-2xl transform hover:scale-105"
              >
                I'M NEW HERE
              </button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-6 lg:gap-10 relative z-10 min-h-[400px] lg:min-h-[700px] w-full lg:w-auto">
              <div className="flex flex-col gap-6 lg:gap-10 justify-end">
                <div className="h-32 lg:h-60 bg-[#14233D] rounded-[2.5rem] lg:rounded-[3.5rem] w-full hidden sm:block shadow-inner"></div>
                <div className="relative group overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl">
                  <img 
                    src={congregationImg} 
                    className="h-60 lg:h-[450px] w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Worship Experience" 
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:gap-10">
                <div className="relative group overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl flex-grow">
                  <img 
                    src={congregationImg} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Overcomers Congregation" 
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="h-32 lg:h-60 bg-[#14233D] rounded-[2.5rem] lg:rounded-[3.5rem] w-full hidden sm:block shadow-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTimes />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <TestimonySection />
      </div>

      <section className="py-32 lg:py-56 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Worship Light"
          />
          <div className="absolute inset-0 bg-navy/90 bg-gradient-to-br from-navy via-navy/80 to-gold/20" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="font-header text-4xl lg:text-7xl text-white mb-8 lg:mb-12 leading-tight">
            "Welcome Home to <br />
            <span className="text-gold italic">Overcomers Temple of God.</span>"
          </h2>
          <p className="text-xl lg:text-3xl text-white/70 font-light leading-relaxed mb-12 lg:mb-20 max-w-3xl mx-auto">
            Whatever your story, whatever your past, you belong here. Join Bishop Njobvu and a community of believers in Chilobwe. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 justify-center">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-12 lg:px-20 py-5 lg:py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-navy transition-all shadow-2xl transform hover:scale-105"
            >
              Start Here
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-12 lg:px-20 py-5 lg:py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-navy transition-all shadow-xl transform hover:scale-105"
            >
              About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const CTAButton: React.FC<{ title: string; desc: string; icon: string; onClick: () => void; highlight?: boolean }> = ({ title, desc, icon, onClick, highlight }) => (
  <button 
    onClick={onClick}
    className={`p-10 lg:p-16 rounded-[2rem] lg:rounded-[3rem] shadow-2xl text-left transition-all transform hover:-translate-y-3 group border border-navy/5 relative overflow-hidden ${
      highlight ? 'bg-gold text-white border-transparent' : 'bg-white text-navy'
    }`}
  >
    <div className="text-5xl lg:text-7xl mb-6 lg:mb-10 transform group-hover:scale-110 transition-transform origin-left">{icon}</div>
    <h3 className="text-2xl lg:text-4xl font-bold mb-4 font-header tracking-tight">{title}</h3>
    <p className={`text-sm lg:text-lg leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
    {highlight && (
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    )}
  </button>
);

export default Home;
