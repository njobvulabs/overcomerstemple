
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import PlanYourVisit from './components/PlanYourVisit.tsx';
import SermonArchive from './components/SermonArchive.tsx';
import Giving from './components/Giving.tsx';
import PrayerRequest from './components/PrayerRequest.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import { PageId } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

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