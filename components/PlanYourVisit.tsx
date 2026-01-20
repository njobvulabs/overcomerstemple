
import React from 'react';

const PlanYourVisit: React.FC = () => {
  return (
    <div className="bg-offWhite animate-fade-in">
      {/* Header */}
      <section className="relative py-20 md:py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544427928-14299446d7e9?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Welcome Background"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Welcome Home</h4>
          <h1 className="text-4xl md:text-7xl font-header font-bold mb-4 drop-shadow-xl">Plan Your Visit</h1>
          <p className="text-base md:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            From the moment you arrive in Chilobwe, we want you to feel the love of Christ.
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          <div className="space-y-10 md:space-y-16">
            <VisitInfo 
              icon="🙌" 
              title="What is the worship like?" 
              desc="Expect high-energy, expressive, and Spirit-led worship! We believe in giving God our best praise with instruments, lifted hands, and passionate hearts." 
            />
            <VisitInfo 
              icon="👕" 
              title="What do I wear?" 
              desc="Whether you prefer your 'Sunday Best' or casual attire, you are welcome! At Overcomers, we care more about you and your heart than what you wear." 
            />
            <VisitInfo 
              icon="🧒" 
              title="Where do my kids go?" 
              desc="Your children are a priority! We have a safe, fun, and biblically-centered environment for kids during our Sunday services." 
            />
          </div>

          <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[3rem] shadow-2xl border border-navy/5 lg:sticky lg:top-28">
            <h3 className="text-2xl md:text-3xl font-header font-bold text-navy mb-6 md:mb-8">Service Location</h3>
            <div className="aspect-video bg-gray-200 rounded-xl md:rounded-3xl mb-6 md:mb-8 overflow-hidden shadow-inner">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Church Location" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 md:space-y-6">
              <ContactDetail 
                icon="📍" 
                text="Chilobwe, Blantyre, Malawi" 
                href="https://www.google.com/maps/search/Chilobwe,+Blantyre"
                isExternal
              />
              <ContactDetail 
                icon="💬" 
                text="+265 88 4545 324 (WhatsApp)" 
                href="https://wa.me/265884545324"
                isExternal
              />
              <ContactDetail 
                icon="📧" 
                text="alfrednjobvu5@gmail.com" 
                href="mailto:alfrednjobvu5@gmail.com"
              />
            </div>
            <button 
              className="w-full bg-gold text-white font-bold py-4 md:py-5 rounded-xl mt-8 md:mt-12 hover:bg-navy transition-all shadow-xl"
              onClick={() => window.open('https://www.google.com/maps/search/Chilobwe,+Blantyre', '_blank')}
            >
              Get Directions
            </button>
            <p className="text-center text-gray-400 text-[10px] mt-6 uppercase tracking-widest font-bold">See you Sunday at 9:30 AM</p>
          </div>

        </div>
      </section>
    </div>
  );
};

const VisitInfo: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group">
    <h3 className="text-xl md:text-2xl font-header font-bold text-navy mb-4 md:mb-6 flex items-center gap-4">
      <span className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-4xl group-hover:bg-gold transition-colors duration-500">{icon}</span> 
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-16 md:pl-20">
      {desc}
    </p>
  </div>
);

const ContactDetail: React.FC<{ icon: string; text: string; href: string; isExternal?: boolean }> = ({ icon, text, href, isExternal }) => (
  <a 
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    className="flex items-center gap-3 md:gap-4 text-navy font-bold text-sm md:text-lg hover:text-gold transition-colors group cursor-pointer"
  >
    <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-offWhite rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">{icon}</span>
    <span className="truncate">{text}</span>
  </a>
);

export default PlanYourVisit;
