
import React from 'react';

const BishopsCorner: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Container */}
          <div className="relative w-full lg:w-1/2">
            {/* Decorative Gold Background Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gold/20 rounded-2xl" />
            
            <img 
              src="https://raw.githubusercontent.com/njobvulabs/imgs/main/bishop.jpg" 
              alt="Bishop Njobvu"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-in-out"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1544427928-14299446d7e9?auto=format&fit=crop&q=80&w=800"; 
              }}
            />

            {/* Floating Quote Box */}
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl z-20 shadow-xl hidden sm:block">
              <p className="text-white font-header text-xl italic font-semibold leading-tight">
                "There is a seat at the table <br /> of victory waiting for you."
              </p>
            </div>
          </div>

          {/* Text Content Container */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Shepherd</h4>
            <h2 className="text-4xl md:text-5xl font-header font-bold text-navy mb-8">Bishop Njobvu</h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                "I am so glad you’ve found your way to Overcomers Temple of God. We believe that no matter what battle you are facing, there is a God who has already provided the victory. Our church is not just a building; it is a sanctuary of power, a house of prayer, and a family of believers dedicated to the move of the Holy Spirit."
              </p>
              <p>
                "Whether you are looking for a spiritual home or a fresh encounter with the Living God, there is a seat at the table waiting for you. Come and experience the transformative power of Christ with us."
              </p>
              
              <p className="font-header italic text-2xl text-navy pt-4">You were born to overcome.</p>
              
              <div className="pt-8">
                <div className="w-12 h-1 bg-gold mb-2"></div>
                <p className="text-gold font-bold text-sm uppercase tracking-widest">— Lead Pastor</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BishopsCorner;