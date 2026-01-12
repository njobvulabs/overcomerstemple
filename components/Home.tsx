
import React from 'react';
import Hero from './Hero';
import BishopsCorner from './BishopsCorner';
import ServiceTimes from './ServiceTimes';
import TestimonySection from './TestimonySection';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-offWhite">
      <Hero onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CTAButton 
            title="Plan Your Visit" 
            desc="What to expect when you arrive." 
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
          <CTAButton 
            title="Online Giving" 
            desc="Partner with the Kingdom vision." 
            icon="🤝" 
            onClick={() => onNavigate('giving')} 
          />
        </div>
      </div>

      <BishopsCorner />

      {/* New Here Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[3rem] p-8 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="md:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-header font-bold mb-6">New to Overcomers?</h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                We know that visiting a church for the first time can be intimidating. 
                Whether you're looking for answers to life's big questions or a community of faith, 
                we're here to help you feel at home.
              </p>
              <button 
                onClick={() => onNavigate('visit')}
                className="bg-white text-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all shadow-lg"
              >
                I'm New Here
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1544427928-14299446d7e9?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover" alt="Community" />
                <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover" alt="Worship" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover" alt="Youth" />
                <img src="https://images.unsplash.com/photo-1510133595913-9797371e7c09?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover" alt="Prayer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTimes />
      <TestimonySection />

      {/* Welcome Message / Final CTA */}
      <section className="py-24 bg-white text-center border-t border-navy/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-header text-3xl md:text-4xl text-navy mb-8">"Welcome Home to Overcomers Temple of God."</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
            Whatever your story, whatever your past, you belong here. Join Bishop Njobvu and a community of believers as we seek the face of God together. 
            We are a Spirit-filled church committed to seeing you walk in the fullness of your divine destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('visit')}
              className="bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-deepGold transition-all shadow-xl"
            >
              Start Here
            </button>
            <button 
              onClick={() => onNavigate('prayer')}
              className="bg-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-navy/90 transition-all shadow-xl"
            >
              Need Prayer?
            </button>
          </div>
          <p className="mt-12 text-gold font-bold uppercase tracking-widest text-sm italic">Victory starts here.</p>
        </div>
      </section>
    </div>
  );
};

const CTAButton: React.FC<{ title: string; desc: string; icon: string; onClick: () => void; highlight?: boolean }> = ({ title, desc, icon, onClick, highlight }) => (
  <button 
    onClick={onClick}
    className={`p-8 rounded-3xl shadow-xl text-left transition-all transform hover:-translate-y-2 group border border-navy/5 ${
      highlight ? 'bg-gold text-white border-transparent' : 'bg-white text-navy'
    }`}
  >
    <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform origin-left">{icon}</div>
    <h3 className="text-xl font-bold mb-2 font-header">{title}</h3>
    <p className={`text-sm ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
  </button>
);

export default Home;
