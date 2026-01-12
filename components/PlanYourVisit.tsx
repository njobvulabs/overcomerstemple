
import React from 'react';

const PlanYourVisit: React.FC = () => {
  return (
    <div className="bg-offWhite animate-fade-in">
      {/* Header */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-header font-bold mb-6">Plan Your Visit</h1>
          <p className="text-xl text-white/80 font-light">We can't wait to welcome you to our family.</p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4 flex items-center gap-3">
                <span className="text-gold text-3xl">🙌</span> What is the worship like?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expect high-energy, expressive, and Spirit-led worship! We believe in giving God our best praise with instruments, lifted hands, and passionate hearts. Our services are a place for freedom and a fresh encounter with the Holy Spirit.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4 flex items-center gap-3">
                <span className="text-gold text-3xl">👕</span> What do I wear?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you prefer your "Sunday Best" or casual attire, you are welcome! At Overcomers, we care more about you and your heart than what you wear. You’ll see everything from suits and traditional wear to jeans and t-shirts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-header font-bold text-navy mb-4 flex items-center gap-3">
                <span className="text-gold text-3xl">🧒</span> Where do my kids go?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your children are a priority! We have a safe, fun, and biblically-centered environment for kids during our Sunday services. Our team is dedicated to helping them grow in faith while having an amazing time.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-navy/5">
            <h3 className="text-2xl font-header font-bold text-navy mb-8">Service Location</h3>
            <div className="aspect-video bg-gray-200 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
               {/* Placeholder for Map */}
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Church Location" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-navy font-semibold">
                <span className="text-gold">📍</span> Chilobwe, Blantyre, Malawi
              </p>
              <p className="flex items-center gap-3 text-navy font-semibold">
                <span className="text-gold">📞</span> +265 88 5829 750
              </p>
              <p className="flex items-center gap-3 text-navy font-semibold">
                <span className="text-gold">📧</span> alfrednjobvujnr@gmail.com
              </p>
            </div>
            <button className="w-full bg-gold text-white font-bold py-4 rounded-xl mt-10 hover:bg-deepGold transition-colors shadow-lg">
              Get Directions
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PlanYourVisit;
