
import React from 'react';

const Giving: React.FC = () => {
  return (
    <div className="bg-offWhite animate-fade-in">
      <section className="relative py-32 text-center text-white overflow-hidden">
        {/* Vibrant Background Header */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1510133595913-9797371e7c09?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40" alt="Giving Background" />
          <div className="absolute inset-0 bg-navy/80 bg-gradient-to-t from-navy to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6">Support the Vision</h4>
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-8 leading-tight">Invest in the <br /> <span className="text-gold italic">Kingdom</span></h1>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Your generosity fuels our mission to bring the victory of Christ to Blantyre and beyond. 
            Every seed sown is a life transformed.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
          
          <GivingCard 
            icon="⛪"
            title="Tithes & Offerings"
            desc="Supporting the daily operations and spiritual life of the Temple."
            cta="Give Now"
          />

          <GivingCard 
            icon="🔥"
            title="Missions Fund"
            desc="Directly impacting Chilobwe through outreach and community support."
            cta="Support Missions"
            highlight
          />

          <GivingCard 
            icon="🏗️"
            title="Victory Project"
            desc="Expanding our sanctuary to accommodate the growing harvest of souls."
            cta="Invest in Building"
          />

        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gold/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
          <h4 className="text-3xl font-header font-bold text-navy mb-10 text-center">Ways to Give</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <GivingMethod 
              icon="📱"
              title="Mobile Money (Airtel/TNM)"
              detail="+265 88 4545 324"
            />
            <GivingMethod 
              icon="🏦"
              title="Bank Transfer"
              detail="Available upon request"
              subDetail="Email: alfrednjobvu5@gmail.com"
            />
            <GivingMethod 
              icon="🤝"
              title="In Person"
              detail="Join us during Service"
              subDetail="Sundays at 9:30 AM in Chilobwe"
            />
            <GivingMethod 
              icon="💎"
              title="Special Offerings"
              detail="Partner with Bishop Njobvu"
              subDetail="Monthly partnership vision"
            />
          </div>
          
          <div className="mt-16 text-center pt-8 border-t border-navy/5">
            <p className="text-gray-400 text-sm italic">
              "Give, and it will be given to you: good measure, pressed down, shaken together, and running over will be put into your bosom." 
              — Luke 6:38
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const GivingCard: React.FC<{ icon: string; title: string; desc: string; cta: string; highlight?: boolean }> = ({ icon, title, desc, cta, highlight }) => (
  <div className={`p-10 rounded-3xl shadow-2xl text-center flex flex-col items-center transition-all transform hover:-translate-y-4 ${
    highlight ? 'bg-gold text-white scale-105 z-10' : 'bg-white text-navy'
  }`}>
    <div className={`text-6xl mb-6 drop-shadow-lg`}>{icon}</div>
    <h3 className="text-2xl font-header font-bold mb-4">{title}</h3>
    <p className={`text-sm mb-8 flex-grow leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
    <button className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg ${
      highlight ? 'bg-navy text-white hover:bg-white hover:text-gold' : 'bg-navy text-white hover:bg-gold'
    }`}>
      {cta}
    </button>
  </div>
);

const GivingMethod: React.FC<{ icon: string; title: string; detail: string; subDetail?: string }> = ({ icon, title, detail, subDetail }) => (
  <div className="flex items-start gap-6 group">
    <div className="bg-gold/10 p-5 rounded-2xl text-gold text-2xl group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
      {icon}
    </div>
    <div>
      <h5 className="font-bold text-navy text-lg mb-1">{title}</h5>
      <p className="text-gold font-bold">{detail}</p>
      {subDetail && <p className="text-gray-400 text-sm mt-1">{subDetail}</p>}
    </div>
  </div>
);

export default Giving;
