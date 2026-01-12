
import React from 'react';

const BishopsCorner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Image Container - Reduced width and height for a more compact look */}
          <div className="relative w-full lg:w-[40%] group flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative background border frame */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-gold/20 rounded-2xl" />
              
              <img 
                src="https://i.imgur.com/22kbweA.jpg" 
                alt="Bishop Njobvu"
                className="relative z-10 rounded-2xl shadow-xl w-full max-w-sm lg:max-w-md h-auto aspect-[4/5] lg:h-[500px] object-cover object-top transition-all duration-700"
                loading="lazy"
              />

              {/* Floating Quote Box - Adjusted for smaller image size */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-8 bg-gold p-5 md:p-6 rounded-xl md:rounded-2xl z-20 shadow-2xl max-w-[180px] md:max-w-[240px]">
                <p className="text-white font-header text-sm md:text-lg italic font-semibold leading-tight">
                  "There is a seat at the table of victory waiting for you."
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Container - Expanded to fill the remaining space */}
          <div className="w-full lg:w-[60%] mt-12 lg:mt-0">
            <div className="inline-block px-4 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Our Shepherd
            </div>
            <h2 className="text-4xl md:text-6xl font-header font-bold text-navy mb-8 leading-tight">
              Bishop <span className="text-gold">Njobvu</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-gray-600 leading-relaxed text-lg">
              <p className="italic border-l-4 border-gold pl-6 py-2 text-xl text-navy/80 font-medium">
                "I am so glad you’ve found your way to Overcomers Temple of God. We believe that no matter what battle you are facing, there is a God who has already provided the victory."
              </p>
              <p className="font-light">
                "Our church is not just a building; it is a sanctuary of power, a house of prayer, and a family of believers dedicated to the move of the Holy Spirit. Whether you are looking for a spiritual home or a fresh encounter with the Living God, there is a seat at the table waiting for you."
              </p>
              
              <p className="font-header italic text-3xl md:text-4xl text-navy pt-2">You were born to overcome.</p>
              
              <div className="pt-8 flex items-center gap-6">
                <div className="w-16 h-[2px] bg-gold"></div>
                <div>
                  <p className="text-navy font-bold text-sm uppercase tracking-widest leading-none">Bishop Njobvu</p>
                  <p className="text-gold font-medium text-[11px] uppercase tracking-widest mt-1">Lead Pastor</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BishopsCorner;
