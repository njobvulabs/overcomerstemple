
import React from 'react';

const ServiceTimes: React.FC = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Elephant Strength Motifs (Subtle) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <path d="M10,50 Q25,10 50,10 T90,50 Q75,90 50,90 T10,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-white mb-4">Worship With Us</h2>
          <p className="text-gold font-semibold uppercase tracking-widest">Victory Starts Here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-center group hover:bg-white/10 transition-all">
            <div className="text-gold text-4xl mb-6">⛪</div>
            <h3 className="text-white font-header text-3xl font-bold mb-2">Sunday Morning</h3>
            <p className="text-gold text-lg font-bold mb-4">9:30 AM</p>
            <p className="text-white/60 text-sm italic">Celebration Service & Children's Church</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-center group hover:bg-white/10 transition-all">
            <div className="text-gold text-4xl mb-6">🔥</div>
            <h3 className="text-white font-header text-3xl font-bold mb-2">Friday Evening</h3>
            <p className="text-gold text-lg font-bold mb-4">3:00 PM</p>
            <p className="text-white/60 text-sm italic">Deliverance & Power Prayer Meeting</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Chilobwe, Blantyre</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
