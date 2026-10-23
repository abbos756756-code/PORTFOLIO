import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CvModal from './components/CvModal';
import ReferenceCompareModal from './components/ReferenceCompareModal';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState('uz'); // Default language: Uzbek ('uz')
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const t = translations[lang] || translations.uz;

  // IntersectionObserver to sync navigation active state on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-['Poppins',sans-serif] relative selection:bg-[#B1B394] selection:text-white">
      {/* Navigation Header */}
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          t={t}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* 2. About Me Section */}
        <About t={t} />

        {/* 3. Skills & Technologies Section */}
        <Skills t={t} />

        {/* 4. Services & Offerings Section */}
        <Services t={t} />

        {/* 5. Projects & Case Studies */}
        <Projects
          t={t}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Blog & Thought Leadership */}
        <Blog t={t} />

        {/* 7. Contact Section */}
        <Contact t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Interactive Modals */}
      <ProjectModal
        t={t}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        t={t}
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <ReferenceCompareModal
        t={t}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />

      {/* Floating Reference Match Inspector Badge */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setIsCompareOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-black/85 hover:bg-black text-white text-xs font-semibold rounded-full shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer group"
          id="reference-compare-badge"
          title="Namunaviy dizayn bilan solishtirish"
        >
          <span className="w-2 h-2 rounded-full bg-[#B1B394] group-hover:animate-ping" />
          <span>{t.hero.matchReference}</span>
        </button>
      </div>

    </div>
  );
}
