
import React from 'react';

const TestimonySection: React.FC = () => {
  const testimonies = [
    {
      id: '1',
      name: 'Sister Chisomo',
      story: 'Nditagoyamba kupemphera ku mpingoku moyo unasintha kwambiri',
    },
    {
      id: '2',
      name: 'Brother Joseph',
      story: 'After years of sickness, I joined the Friday deliverance service. Today, I am completely healed and walking in divine health. Glory to God!',
    }
  ];

  return (
    <section className="py-24 bg-offWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-header font-bold text-navy mb-4">Stories of Victory</h2>
          <p className="text-gold font-bold uppercase tracking-widest text-sm">We are Overcomers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonies.map((item) => (
            <div key={item.id} className="bg-white p-10 rounded-3xl shadow-xl border border-gold/10 relative">
              <div className="absolute -top-6 left-10 text-6xl text-gold/20 font-serif">“</div>
              <p className="text-gray-600 italic leading-relaxed text-lg mb-8 relative z-10">
                {item.story}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                  {item.name[0]}
                </div>
                <span className="font-bold text-navy">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
