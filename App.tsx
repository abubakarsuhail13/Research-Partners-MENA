
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Services from './components/Services';
import Engagement from './components/Engagement';
import Insights from './components/Insights';
import CEOSection from './components/CEO';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Engagement />
        <Insights />
        <CEOSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
