
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
    document.title = "Alchemist Scientist GPT - Medieval Alchemy Meets Modern Science";
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main>
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
