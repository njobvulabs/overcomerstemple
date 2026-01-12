
import React from 'react';

const Giving: React.FC = () => {
  return (
    <div className="bg-offWhite animate-fade-in">
      <section className="bg-navy py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-header font-bold mb-6">Invest in the Kingdom</h1>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
            Your generosity fuels our mission to bring the victory of Christ to Blantyre and beyond.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center flex flex-col items-center">
            <div className="text-5xl mb-6">⛪</div>
            <h3 className="text-2xl font-header font-bold text-navy mb-4">Tithes & Offerings</h3>
            <p className="text-gray-600 mb-8 flex-grow">Supporting the daily operations and spiritual life of the Temple.</p>
            <button className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-gold transition-all">Give Now</button>
          </div>

          <div className="bg-gold p-12 rounded-3xl shadow-xl text-center text-white flex flex-col items-center transform scale-105 z-10">
            <div className="text-5xl mb-6">🔥</div>
            <h3 className="text-2xl font-header font-bold mb-4">Missions Fund</h3>
            <p className="text-white/80 mb-8 flex-grow">Directly impacting Chilobwe through outreach and community support.</p>
            <button className="w-full bg-white text-gold font-bold py-4 rounded-xl hover:bg-navy hover:text-white transition-all">Support Missions</button>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl text-center flex flex-col items-center">
            <div className="text-5xl mb-6">🏗️</div>
            <h3 className="text-2xl font-header font-bold text-navy mb-4">Victory Building Project</h3>
            <p className="text-gray-600 mb-8 flex-grow">Expanding our sanctuary to accommodate the growing harvest of souls.</p>
            <button className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-gold transition-all">Invest in Building</button>
          </div>

        </div>

        <div className="mt-24 max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gold/10">
          <h4 className="text-2xl font-header font-bold text-navy mb-6 text-center">Ways to Give</h4>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-gold/10 p-4 rounded-full text-gold">📱</div>
              <div>
                <h5 className="font-bold text-navy text-lg">Mobile Money (Airtel/TNM)</h5>
                <p className="text-gray-600">+265 88 5829 750</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gold/10 p-4 rounded-full text-gold">🏦</div>
              <div>
                <h5 className="font-bold text-navy text-lg">Bank Transfer</h5>
                <p className="text-gray-600">Details available upon request. Email alfrednjobvujnr@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gold/10 p-4 rounded-full text-gold">🤝</div>
              <div>
                <h5 className="font-bold text-navy text-lg">In Person</h5>
                <p className="text-gray-600">Join us during our Sunday service at 9:30 AM in Chilobwe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Giving;
