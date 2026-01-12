
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlanYourVisit from './components/PlanYourVisit';
import SermonArchive from './components/SermonArchive';
import Giving from './components/Giving';
import PrayerRequest from './components/PrayerRequest';
import About from './components/About';
import Footer from './components/Footer';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'visit':
        return <PlanYourVisit />;
      case 'sermons':
        return <SermonArchive />;
      case 'giving':
        return <Giving />;
      case 'prayer':
        return <PrayerRequest />;
      case 'about':
        return <About />;
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
