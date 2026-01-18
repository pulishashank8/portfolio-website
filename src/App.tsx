import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import InternshipsSection from './components/InternshipsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './final-space-background.css';

function App() {
  return (
    <div className="font-sans text-white">
      <div id="final-space-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <InternshipsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;