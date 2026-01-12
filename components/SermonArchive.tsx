
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
  },
  {
    id: '2',
    title: 'The Power of Perseverance',
    date: 'May 5, 2024',
    speaker: 'Bishop Njobvu',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Walking in Divine Destiny',
    date: 'April 28, 2024',
    speaker: 'Bishop Njobvu',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1544427928-14299446d7e9?auto=format&fit=crop&q=80&w=800'
  }
];

const SermonArchive: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Featured Sermon */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src={sermons[0].thumbnail} 
                className="w-full h-full object-cover opacity-60" 
                alt="Featured" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 text-white">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Featured Message</span>
              <h1 className="text-4xl font-header font-bold my-4 leading-tight">{sermons[0].title}</h1>
              <p className="text-white/60 mb-8">Join Bishop Njobvu for a powerful message on entering your season of victory.</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span className="text-gold uppercase tracking-wider">{sermons[0].speaker}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/40">{sermons[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-header font-bold text-navy mb-12">Recent Messages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map(sermon => (
            <div key={sermon.id} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden relative shadow-lg">
                <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={sermon.title} />
                <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur px-3 py-1 rounded text-white text-[10px] font-bold uppercase">
                  Watch Message
                </div>
              </div>
              <h3 className="text-xl font-header font-bold text-navy mb-1 group-hover:text-gold transition-colors">{sermon.title}</h3>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{sermon.speaker}</span>
                <span>{sermon.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SermonArchive;
