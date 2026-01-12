
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header with improved background */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy to-navy" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 animate-fade-in">Our Heritage</h4>
          <h1 className="text-5xl md:text-7xl font-header font-bold text-white mb-8 animate-fade-in-up">Who We Are</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-gold mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-header font-bold text-navy mb-8">Established in Faith</h2>
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
             <div className="relative group">
                <img 
                  src="https://i.imgur.com/KbcjYV2.jpg" 
                  className="rounded-2xl shadow-xl h-64 w-full object-cover transform transition-transform group-hover:scale-105" 
                  alt="Ministry Scene 1" 
                />
                <div className="absolute inset-0 rounded-2xl bg-gold/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="relative group mt-8">
                <img 
                  src="https://i.imgur.com/oJhP77p.jpg" 
                  className="rounded-2xl shadow-xl h-64 w-full object-cover transform transition-transform group-hover:scale-105" 
                  alt="Ministry Scene 2" 
                />
                <div className="absolute inset-0 rounded-2xl bg-navy/10 group-hover:bg-transparent transition-colors"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Pillars Section with Subtle Depth */}
      <section className="py-32 bg-offWhite relative overflow-hidden">
        {/* Abstract background motif */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PillarCard 
              icon="🕊️"
              title="Our Vision"
              desc="To see every believer equipped to overcome the world through faith in Christ and the power of the Spirit."
            />
            <PillarCard 
              icon="📖"
              title="Our Mission"
              desc="To preach the gospel of Jesus Christ, demonstrate His power, and build a family of mature disciples."
            />
            <PillarCard 
              icon="❤️"
              title="Our Values"
              desc="Biblical Truth, Passionate Worship, Fervent Prayer, and Unconditional Community Love."
            />
          </div>
        </div>
      </section>

      {/* Final Call with Vibrant Background */}
      <section className="py-32 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Final Call Worship"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-gold/20" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-header font-bold text-white mb-8 drop-shadow-md">
            Ready to start your <br />
            <span className="text-gold italic">journey of victory?</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-12">
            Join a family where your growth is our priority and your testimony is our joy.
          </p>
          <button 
            onClick={() => window.location.hash = '#'}
            className="bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl transform hover:scale-110"
          >
            Join Our Family Today
          </button>
        </div>
      </section>
    </div>
  );
};

const PillarCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="text-center p-10 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-navy/5 group transform hover:-translate-y-2">
    <div className="w-24 h-24 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-lg group-hover:bg-gold transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-header font-bold text-navy mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default About;
