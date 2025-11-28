import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionWrapper } from './components/SectionWrapper';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-x-hidden">
      {/* Global Ambient Light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="testimonials">
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
