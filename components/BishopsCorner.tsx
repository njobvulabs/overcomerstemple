
import React from 'react';

const BishopsCorner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Image Container */}
          <div className="relative w-full lg:w-1/2 group">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-4 border-gold/20 rounded-2xl" />
            
            <img 
              src="https://i.imgur.com/22kbweA.jpg" 
              alt="Bishop Njobvu"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-auto aspect-[4/5] lg:h-[650px] object-cover object-top transition-all duration-700"
              loading="lazy"
            />

            {/* Floating Quote Box */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gold p-4 md:p-8 rounded-xl md:rounded-2xl z-20 shadow-2xl max-w-[200px] md:max-w-xs">
              <p className="text-white font-header text-sm md:text-xl italic font-semibold leading-tight">
                "There is a seat at the table of victory waiting for you."
              </p>
            </div>
          </div>

          {/* Text Content Container */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Our Shepherd</h4>
            <h2 className="text-3xl md:text-5xl font-header font-bold text-navy mb-6 md:mb-8">Bishop Njobvu</h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p className="italic border-l-4 border-gold pl-4 md:pl-6 py-1">
                "I am so glad you’ve found your way to Overcomers Temple of God. We believe that no matter what battle you are facing, there is a God who has already provided the victory."
              </p>
              <p>
                "Our church is not just a building; it is a sanctuary of power, a house of prayer, and a family of believers dedicated to the move of the Holy Spirit. Whether you are looking for a spiritual home or a fresh encounter with the Living God, there is a seat at the table waiting for you."
              </p>
              
              <p className="font-header italic text-2xl md:text-3xl text-navy pt-2">You were born to overcome.</p>
              
              <div className="pt-6 md:pt-8">
                <div className="w-10 md:w-12 h-1 bg-gold mb-2"></div>
                <p className="text-gold font-bold text-[10px] md:text-xs uppercase tracking-widest">— Bishop Njobvu, Lead Pastor</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BishopsCorner;
