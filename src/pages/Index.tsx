
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Legal from '../components/Legal';
import Footer from '../components/footer';
import ConsentModal from '../components/ConsentModal';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Alchemist Scientist GPT - Medieval Alchemy Meets Modern Science | AI Chemistry Tutor";
    
    // Add meta description if not already set
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription?.getAttribute('content')) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn chemistry through medieval alchemy with our AI tutor. Interactive experiments, historical context, and immersive storytelling make science education engaging and memorable.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main role="main">
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Legal />
      </main>
      <Footer />
      <ConsentModal />
    </div>
  );
};

export default Index;
