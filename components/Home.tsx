
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

      {/* New Here Section with Screenshot Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B48] rounded-xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl border-2 border-[#5C7DAF]">
            {/* Background blurs for depth */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
            
            <div className="md:w-1/2 relative z-10">
              <div className="inline-block px-6 py-2 rounded-full border border-white/30 text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Welcome Home
              </div>
              <h2 className="text-5xl md:text-7xl font-header font-bold mb-8 leading-tight">New to <br />Overcomers?</h2>
              <p className="text-xl text-white/50 mb-10 leading-relaxed font-light max-w-md">
                We know that visiting a church for the first time can be intimidating. 
                Whether you're looking for answers to life's big questions or a community of faith, 
                we're here to help you feel at home in Chilobwe.
              </p>
              <button 
                onClick={() => onNavigate('visit')}
                className="bg-[#C5A059] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#A68546] transition-all shadow-xl transform hover:scale-105"
              >
                I'm New Here
              </button>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative z-10">
              {/* Image Grid with specific heights for artistic layout */}
              <div className="space-y-6 flex flex-col justify-end">
                <div className="h-24 bg-navy/40 rounded-3xl w-full hidden md:block"></div>
                <img 
                  src="https://i.imgur.com/KbcjYV2.jpg" 
                  className="rounded-3xl h-64 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500" 
                  alt="Worship at Overcomers" 
                />
              </div>
              <div className="space-y-6">
                <img 
                  src="https://i.imgur.com/oJhP77p.jpg" 
                  className="rounded-[2.5rem] h-[350px] w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-white/5" 
                  alt="Community Fellowship" 
                />
                <div className="h-32 bg-navy/40 rounded-3xl w-full hidden md:block"></div>
              </div>
              
              {/* Additional small images / placeholders in background if needed */}
              <div className="hidden">
                 <img src="https://i.imgur.com/OzISpZ2.jpg" alt="Youth Ministry" />
                 <img src="https://i.imgur.com/R4Itv5f.jpg" alt="Prayer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTimes />
      <TestimonySection />

      {/* Welcome Message / Final CTA with Vibrant Image Background */}
      <section className="py-32 relative overflow-hidden text-center text-white">
        {/* Vibrant Background Layer */}
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
