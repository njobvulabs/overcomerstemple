
import React, { useState } from 'react';
import { MediaItem } from '../types.ts';

const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'video',
    url: 'https://player.cloudinary.com/embed/?cloud_name=dyeijh9nq&public_id=WhatsApp_Video_2026-01-12_at_15.00.52_1_ikae9w&profile=cld-default',
    thumbnail: 'https://res.cloudinary.com/dyeijh9nq/video/upload/WhatsApp_Video_2026-01-12_at_15.00.52_1_ikae9w.jpg',
    title: 'Sunday Work of God',
    category: 'Worship',
  },
  {
    id: '2',
    type: 'photo',
    url: 'https://i.imgur.com/PrAxlfc.jpg',
    thumbnail: 'https://i.imgur.com/PrAxlfc.jpg',
    title: 'Sunday Service Congregation',
    category: 'Worship',
  },
  {
    id: '3',
    type: 'photo',
    url: 'https://i.imgur.com/47TDT9g.jpg',
    thumbnail: 'https://i.imgur.com/47TDT9g.jpg',
    title: 'Youth Ministry Gathering',
    category: 'Youth',
  },
  {
    id: '4',
    type: 'photo',
    url: 'https://i.imgur.com/btlsxME.jpg',
    thumbnail: 'https://i.imgur.com/btlsxME.jpg',
    title: 'Bishop Leading Prayer',
    category: 'Prayer',
  },
  {
    id: '5',
    type: 'photo',
    url: 'https://i.imgur.com/WKCoJr5.jpg',
    thumbnail: 'https://i.imgur.com/WKCoJr5.jpg',
    title: 'Community Outreach',
    category: 'Outreach',
  },
  {
    id: '6',
    type: 'photo',
    url: 'https://i.imgur.com/8AQLiYQ.jpg',
    thumbnail: 'https://i.imgur.com/8AQLiYQ.jpg',
    title: 'Mission in Chilobwe',
    category: 'Outreach',
  },
  {
    id: '7',
    type: 'photo',
    url: 'https://i.imgur.com/5Z8mvJx.jpg',
    thumbnail: 'https://i.imgur.com/5Z8mvJx.jpg',
    title: 'Street Evangelism',
    category: 'Outreach',
  },
  {
    id: '8',
    type: 'photo',
    url: 'https://i.imgur.com/22kbweA.jpg',
    thumbnail: 'https://i.imgur.com/22kbweA.jpg',
    title: 'Bishop Njobvu Portrait',
    category: 'Leaders',
  }
];

const MediaGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeFilter);

  return (
    <div className="bg-offWhite min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Media Gallery Background"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-navy" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6">Our Visual Journey</h4>
          <h1 className="text-5xl md:text-8xl font-header font-bold mb-6 drop-shadow-2xl">Visions of <span className="text-gold italic">Victory</span></h1>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Witness the power of God in motion through our curated collection of moments, worship, and community milestones.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 lg:top-24 z-40 bg-white/80 backdrop-blur-xl border-b border-navy/5 py-4">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-center items-center gap-4">
          <FilterButton label="All Media" active={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
          <FilterButton label="Photos" active={activeFilter === 'photo'} onClick={() => setActiveFilter('photo')} />
          <FilterButton label="Videos" active={activeFilter === 'video'} onClick={() => setActiveFilter('video')} />
        </div>
      </div>

      {/* Media Grid */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-navy/5 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(26,43,72,0.3)]"
              onClick={() => setSelectedMedia(item)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.category}</span>
                <h3 className="text-white font-header text-xl font-bold leading-tight">{item.title}</h3>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {item.type === 'video' ? '▶️' : '🖼️'}
                  </div>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                    View {item.type}
                  </span>
                </div>
              </div>

              {item.type === 'video' && (
                <div className="absolute top-6 right-6 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <div className="absolute inset-0 bg-navy/95 backdrop-blur-2xl" onClick={() => setSelectedMedia(null)}></div>
          
          <div className="relative z-10 w-full max-w-6xl bg-black rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] border border-white/10">
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition-colors z-20"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>

            {selectedMedia.type === 'video' ? (
              <div className="aspect-video w-full bg-black">
                <iframe 
                  src={selectedMedia.url} 
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center bg-black/40">
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title} 
                  className="max-h-[85vh] w-auto object-contain"
                />
              </div>
            )}
            
            <div className="p-8 md:p-12 bg-navy text-white">
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">{selectedMedia.category}</span>
              <h2 className="text-3xl md:text-4xl font-header font-bold">{selectedMedia.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FilterButton: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
      active ? 'bg-navy text-gold shadow-lg' : 'text-navy/60 hover:text-navy hover:bg-navy/5'
    }`}
  >
    {label}
  </button>
);

export default MediaGallery;
