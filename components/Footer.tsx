
import React from 'react';
import { PageId } from '../types.ts';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div 
              className="flex flex-col cursor-pointer mb-6"
              onClick={() => onNavigate('home')}
            >
              <span className="text-white font-header text-2xl font-bold tracking-tight uppercase">
                Overcomers
              </span>
              <span className="text-gold text-[12px] font-bold uppercase tracking-widest leading-none">
                Temple of God
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A Spirit-filled community in Chilobwe committed to seeing you walk in the fullness of your divine destiny.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-white/60 hover:text-white transition-colors text-sm">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-white/60 hover:text-white transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => onNavigate('visit')} className="text-white/60 hover:text-white transition-colors text-sm">Plan Your Visit</button></li>
              <li><button onClick={() => onNavigate('sermons')} className="text-white/60 hover:text-white transition-colors text-sm">Sermons</button></li>
              <li><button onClick={() => onNavigate('media')} className="text-white/60 hover:text-white transition-colors text-sm">Media Gallery</button></li>
              <li><button onClick={() => onNavigate('prayer')} className="text-white/60 hover:text-white transition-colors text-sm">Prayer Requests</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-gold">📍</span> 
                <a href="https://www.google.com/maps/search/Chilobwe,+Blantyre" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Chilobwe, Blantyre, Malawi
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">💬</span> 
                <a href="https://wa.me/265885829750" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  +265 88 5829 750 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">📧</span> 
                <a href="mailto:alfrednjobvujnr@gmail.com" className="hover:text-gold transition-colors">
                  alfrednjobvujnr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Extra */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Service Times</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Sunday: 9:30 AM</li>
              <li>Friday: 3:00 PM</li>
            </ul>
            <div className="mt-8">
               <button 
                onClick={() => onNavigate('visit')}
                className="bg-gold text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-deepGold transition-all"
               >
                 Directions
               </button>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs gap-4">
          <p>© {new Date().getFullYear()} Overcomers Temple of God. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
