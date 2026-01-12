
import React, { useState } from 'react';

const PrayerRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-offWhite p-4">
        <div className="text-center bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full">
          <div className="text-6xl mb-6">🙏</div>
          <h2 className="text-3xl font-header font-bold text-navy mb-4">Prayer Received</h2>
          <p className="text-gray-600 mb-8">
            Our intercessory team and Bishop Njobvu will be standing in faith with you. 
            Expect your breakthrough!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-gold font-bold uppercase tracking-widest hover:text-navy transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-offWhite py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-navy p-12 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-header font-bold mb-6">How Can We Pray For You?</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            "For where two or three are gathered together in my name, I am there in the midst of them." 
            — Matthew 18:20
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-3">
               <span className="w-2 h-2 bg-gold rounded-full"></span>
               <span className="text-sm font-semibold text-gold/80 uppercase tracking-widest">Confidential Prayer</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="w-2 h-2 bg-gold rounded-full"></span>
               <span className="text-sm font-semibold text-gold/80 uppercase tracking-widest">Daily Intercession</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="w-2 h-2 bg-gold rounded-full"></span>
               <span className="text-sm font-semibold text-gold/80 uppercase tracking-widest">Victory Breakthroughs</span>
             </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="md:w-3/5 p-12 space-y-6">
          <div>
            <label className="block text-navy font-bold text-sm uppercase tracking-widest mb-2">Your Name</label>
            <input 
              required
              type="text" 
              className="w-full border-b-2 border-gray-100 focus:border-gold outline-none py-3 px-4 transition-colors"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-navy font-bold text-sm uppercase tracking-widest mb-2">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full border-b-2 border-gray-100 focus:border-gold outline-none py-3 px-4 transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-navy font-bold text-sm uppercase tracking-widest mb-2">Your Prayer Request</label>
            <textarea 
              required
              rows={4}
              className="w-full border-b-2 border-gray-100 focus:border-gold outline-none py-3 px-4 transition-colors resize-none"
              placeholder="Tell us what we can stand in faith with you for..."
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gold text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-gold/20 hover:bg-deepGold transition-all transform hover:scale-[1.02]"
          >
            Submit to the Altar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrayerRequest;
