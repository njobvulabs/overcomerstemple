
import React, { useState } from 'react';

const PrayerRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending to alfrednjobvu5@gmail.com
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-navy p-4 relative overflow-hidden">
        {/* Atmospheric success background */}
        <div className="absolute inset-0 bg-navy">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[3rem] shadow-2xl max-w-lg w-full relative z-10 animate-fade-in">
          <div className="text-7xl mb-8 drop-shadow-xl animate-bounce">🙏</div>
          <h2 className="text-4xl font-header font-bold text-white mb-6">Prayer Received</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Your request has been sent directly to Bishop Njobvu's desk. 
            Our intercessory team will be standing in faith with you. 
            Believe God for your miracle—the victory is already yours!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy py-32 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Spiritual atmosphere background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510133595913-9797371e7c09?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20" 
          alt="Prayer Background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-gold/20" />
      </div>

      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row relative z-10">
        <div className="lg:w-2/5 bg-navy/95 p-12 md:p-16 text-white flex flex-col justify-center relative">
          {/* Subtle pattern or motif could go here */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-8">
            The Digital Altar
          </div>
          <h2 className="text-4xl md:text-5xl font-header font-bold mb-8 leading-tight">How Can We <span className="text-gold italic">Pray</span> For You?</h2>
          <p className="text-white/60 mb-10 leading-relaxed text-lg font-light italic border-l-2 border-gold/50 pl-6">
            "Your request is sent directly to Bishop Njobvu and our dedicated intercessors. We believe in the power of prayer to change any circumstance."
            <span className="block mt-2 font-bold text-gold not-italic text-sm uppercase tracking-widest">— Matthew 18:20</span>
          </p>
          
          <div className="space-y-6">
             <PrayerFeature icon="🔒" text="Direct to Bishop" />
             <PrayerFeature icon="⏳" text="Daily Intercession" />
             <PrayerFeature icon="🏆" text="Victory Breakthroughs" />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="lg:w-3/5 p-12 md:p-20 space-y-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3 group-focus-within:text-gold transition-colors">Your Name</label>
              <input 
                required
                type="text" 
                className="w-full border-b-2 border-gray-100 focus:border-gold outline-none py-3 px-4 transition-all bg-transparent text-navy font-medium placeholder:text-gray-300"
                placeholder="Full Name"
              />
            </div>
            <div className="group">
              <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3 group-focus-within:text-gold transition-colors">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full border-b-2 border-gray-100 focus:border-gold outline-none py-3 px-4 transition-all bg-transparent text-navy font-medium placeholder:text-gray-300"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3 group-focus-within:text-gold transition-colors">Your Prayer Request</label>
            <textarea 
              required
              rows={5}
              className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-2xl focus:border-gold focus:bg-white outline-none py-4 px-6 transition-all text-navy font-medium placeholder:text-gray-400 resize-none shadow-inner"
              placeholder="Tell us what we can stand in faith with you for..."
            />
          </div>
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-navy text-white font-bold py-6 rounded-2xl uppercase tracking-[0.3em] shadow-2xl hover:bg-gold transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group"
            >
              <span>Send to Bishop Njobvu</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform">🕊️</span>
            </button>
            <p className="text-center text-gray-400 text-[10px] mt-6 uppercase tracking-widest">Sent directly to alfrednjobvu5@gmail.com</p>
          </div>
        </form>
      </div>
    </div>
  );
};

const PrayerFeature: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-gold group-hover:border-gold transition-all duration-300">{icon}</span>
    <span className="text-sm font-bold text-gold/80 uppercase tracking-widest">{text}</span>
  </div>
);

export default PrayerRequest;
