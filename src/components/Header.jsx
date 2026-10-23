import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Header({ t, lang, setLang, activeSection, setActiveSection, onOpenCv }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.services, href: '#services', id: 'services' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.blog, href: '#blog', id: 'blog' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'uz' ? 'en' : 'uz');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-7 lg:py-9'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo Text "SAIDABRORXON." */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group inline-flex items-center tracking-tight"
          id="brand-logo"
        >
          <span className="text-xl sm:text-2xl lg:text-3xl font-[900] font-['Poppins',sans-serif] text-black tracking-normal select-none">
            SAIDABRORXON<span className="text-[#B1B394] group-hover:text-black transition-colors">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-[12px] lg:text-[13px] font-[700] tracking-wider uppercase transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#B1B394]'
                    : 'text-black hover:text-[#B1B394]'
                }`}
                id={`nav-${link.id}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B1B394] rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 hover:border-[#B1B394] bg-white text-xs font-bold text-gray-800 hover:text-[#B1B394] transition-all shadow-2xs cursor-pointer ml-2"
            title="Tilni o'zgartirish / Switch language"
          >
            <Globe size={13} className="text-[#B1B394]" />
            <span className="uppercase">{lang}</span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-300 bg-white text-xs font-bold text-gray-800"
          >
            <Globe size={13} className="text-[#B1B394]" />
            <span className="uppercase">{lang}</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-[#B1B394] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[70px] bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-xl px-6 py-6 transition-all animate-in slide-in-from-top-4 duration-300"
          id="mobile-drawer"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-base font-[700] tracking-wider uppercase py-2 border-b border-gray-100 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#B1B394]' : 'text-black hover:text-[#B1B394]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B1B394]" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
