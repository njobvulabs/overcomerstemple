
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import PlanYourVisit from './components/PlanYourVisit.tsx';
import SermonArchive from './components/SermonArchive.tsx';
import About from './components/About.tsx';
import MediaGallery from './components/MediaGallery.tsx';
import Footer from './components/Footer.tsx';
import { PageId } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO: Dynamic Page Titles
    const titleMap: Record<PageId, string> = {
      home: 'Welcome Home | Overcomers Temple of God',
      visit: 'Plan Your Visit | Join Us in Chilobwe',
      sermons: 'Sermon Archive | Messages of Power',
      about: 'Our Story & Vision | About Overcomers Temple',
      media: 'Media Gallery | Visions of Victory',
    };
    
    document.title = titleMap[currentPage] || 'Overcomers Temple of God';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'visit':
        return <PlanYourVisit />;
      case 'sermons':
        return <SermonArchive />;
      case 'about':
        return <About />;
      case 'media':
        return <MediaGallery />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-16 lg:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;