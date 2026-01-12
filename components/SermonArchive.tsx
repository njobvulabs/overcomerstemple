
import React from 'react';
import { Sermon } from '../types';

const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Your Season of Victory',
    date: 'May 12, 2024',
    speaker: 'Bishop Njobvu',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800'
  }
];

const SermonArchive: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Featured Sermon */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={sermons[0].thumbnail} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Featured" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform shadow-2xl"
                  onClick={() => alert('This sermon video will be available shortly. Join us for our next live service!')}
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 border border-gold/30 mb-6">
                <span className="text-gold font-bold uppercase tracking-widest text-[10px]">Latest Message</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-header font-bold mb-6 leading-tight">{sermons[0].title}</h1>
              <p className="text-white/70 text-lg mb-8 font-light leading-relaxed">
                Join Bishop Njobvu for this life-changing word. Discover how to align your faith with God's timing and step into the breakthrough He has prepared for you.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold">
                <span className="text-gold uppercase tracking-[0.2em]">{sermons[0].speaker}</span>
                <span className="text-white/20">|</span>
                <span className="text-white/50">{sermons[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for more content to ensure page flow */}
      <section className="py-24 bg-offWhite">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <h2 className="text-3xl font-header font-bold text-navy mb-6">Stay Connected</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We are constantly updating our digital sanctuary with new content to fuel your faith. 
            Subscribe to our notifications or follow us to be the first to know when new power-filled messages are released.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-navy text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SermonArchive;
