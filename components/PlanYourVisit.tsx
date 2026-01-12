
import React from 'react';

const PlanYourVisit: React.FC = () => {
  return (
    <div className="bg-offWhite animate-fade-in">
      {/* Header with Vibrant Background */}
      <section className="relative py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544427928-14299446d7e9?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Welcome Background"
          />
          <div className="absolute inset-0 bg-navy/85 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6">Welcome Home</h4>
          <h1 className="text-5xl md:text-7xl font-header font-bold mb-6 drop-shadow-xl">Plan Your Visit</h1>
          <p className="text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            From the moment you arrive in Chilobwe, we want you to feel the love of Christ and the power of the Holy Spirit.
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-16">
            <VisitInfo 
              icon="🙌" 
              title="What is the worship like?" 
              desc="Expect high-energy, expressive, and Spirit-led worship! We believe in giving God our best praise with instruments, lifted hands, and passionate hearts. Our services are a place for freedom and a fresh encounter with the Holy Spirit." 
            />
            <VisitInfo 
              icon="👕" 
              title="What do I wear?" 
              desc="Whether you prefer your 'Sunday Best' or casual attire, you are welcome! At Overcomers, we care more about you and your heart than what you wear. You’ll see everything from suits and traditional wear to jeans and t-shirts." 
            />
            <VisitInfo 
              icon="🧒" 
              title="Where do my kids go?" 
              desc="Your children are a priority! We have a safe, fun, and biblically-centered environment for kids during our Sunday services. Our team is dedicated to helping them grow in faith while having an amazing time." 
            />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(26,43,72,0.1)] border border-navy/5 sticky top-28">
            <h3 className="text-3xl font-header font-bold text-navy mb-8">Service Location</h3>
            <div className="aspect-video bg-gray-200 rounded-3xl mb-8 flex items-center justify-center overflow-hidden group shadow-inner">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Church Location" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]" />
            </div>
            <div className="space-y-6">
              <ContactDetail 
                icon="📍" 
                text="Chilobwe, Blantyre, Malawi" 
                href="https://www.google.com/maps/search/Chilobwe,+Blantyre"
                isExternal
              />
              <ContactDetail 
                icon="💬" 
                text="+265 88 5829 750 (WhatsApp)" 
                href="https://wa.me/265885829750"
                isExternal
              />
              <ContactDetail 
                icon="📧" 
                text="alfrednjobvujnr@gmail.com" 
                href="mailto:alfrednjobvujnr@gmail.com"
              />
            </div>
            <button 
              className="w-full bg-gold text-white font-bold py-5 rounded-2xl mt-12 hover:bg-navy transition-all shadow-xl transform hover:scale-105 active:scale-95"
              onClick={() => window.open('https://www.google.com/maps/search/Chilobwe,+Blantyre', '_blank')}
            >
              Get Directions
            </button>
            <p className="text-center text-gray-400 text-xs mt-6 uppercase tracking-widest font-bold">See you Sunday at 9:30 AM</p>
          </div>

        </div>
      </section>
    </div>
  );
};

const VisitInfo: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group">
    <h3 className="text-2xl font-header font-bold text-navy mb-6 flex items-center gap-4">
      <span className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-4xl group-hover:bg-gold transition-colors duration-500">{icon}</span> 
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed text-lg pl-20">
      {desc}
    </p>
  </div>
);

const ContactDetail: React.FC<{ icon: string; text: string; href: string; isExternal?: boolean }> = ({ icon, text, href, isExternal }) => (
  <a 
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    className="flex items-center gap-4 text-navy font-bold text-lg hover:text-gold transition-colors group cursor-pointer"
  >
    <span className="w-10 h-10 bg-offWhite rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">{icon}</span>
    {text}
  </a>
);

export default PlanYourVisit;
