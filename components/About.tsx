
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Heritage</h4>
          <h1 className="text-5xl md:text-6xl font-header font-bold text-white mb-6">Who We Are</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-header font-bold text-navy mb-8">Established in Faith</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Overcomers Temple of God was founded with a clear mandate from Heaven: to raise a generation of believers who walk in victory through the power of the Holy Spirit. Located in the heart of Chilobwe, Blantyre, we have grown from a small prayer gathering into a thriving community of believers.
              </p>
              <p>
                Under the visionary leadership of Bishop Njobvu, our church has become a lighthouse for those seeking truth, healing, and spiritual transformation. We believe that no life is beyond the reach of God's grace and no battle is too big for His power.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1510133595913-9797371e7c09?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg h-64 w-full object-cover" alt="Worship" />
             <img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8" alt="Prayer" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🕊️</div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">To see every believer equipped to overcome the world through faith in Christ and the power of the Spirit.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📖</div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">To preach the gospel of Jesus Christ, demonstrate His power, and build a family of mature disciples.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">❤️</div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4">Our Values</h3>
              <p className="text-gray-600">Biblical Truth, Passionate Worship, Fervent Prayer, and Unconditional Community Love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-header font-bold text-navy mb-8">Ready to start your journey?</h2>
        <button 
          onClick={() => window.location.href = '#'}
          className="bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-deepGold transition-all shadow-xl"
        >
          Join Our Family Today
        </button>
      </section>
    </div>
  );
};

export default About;
