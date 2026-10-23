import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero({ t, onOpenCv }) {
  // Default to the user's uploaded transparent military photo ('userPhoto')
  const [photoMode, setPhotoMode] = useState('userPhoto');

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#e0e2e5]"
      style={{
        background: 'linear-gradient(135deg, #e4e6e9 0%, #d8dadf 100%)',
      }}
    >
      {/* BACKGROUND IMAGE LAYER (Right Side Desktop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <div className="relative w-full h-full flex justify-end items-end">
          {photoMode === 'userPhoto' ? (
            <div className="w-full h-full flex justify-end items-end pr-4 sm:pr-8 md:pr-14 lg:pr-20 xl:pr-32">
              <img
                src="/images/user-cutout.png"
                alt="Ubaydullayev Saidabrorxon"
                className="h-[80vh] sm:h-[86vh] lg:h-[93vh] max-h-[960px] w-auto object-contain object-bottom drop-shadow-[-15px_15px_35px_rgba(0,0,0,0.18)] transition-all duration-700"
              />
            </div>
          ) : (
            <img
              src="/images/clyde-portrait.jpg"
              alt="Ubaydullayev Saidabrorxon - UI/UX Designer & Developer"
              className="w-full h-full object-cover object-[75%_center] lg:object-[68%_center] xl:object-[62%_center] opacity-95 transition-all duration-700"
            />
          )}
        </div>
      </div>

      {/* GEOMETRIC DIAGONAL SHAPES (Desktop Only: z-10) */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[42%] bg-black/[0.04] pointer-events-none z-10"
        style={{
          clipPath: 'polygon(0 0, 96% 0, 68% 100%, 0 100%)',
        }}
      />

      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[38%] bg-[#f7f8f9] pointer-events-none z-10"
        style={{
          clipPath: 'polygon(0 0, 95% 0, 65% 100%, 0 100%)',
        }}
      />

      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[35%] bg-white shadow-[15px_0_35px_rgba(0,0,0,0.03)] pointer-events-none z-10"
        style={{
          clipPath: 'polygon(0 0, 94% 0, 62% 100%, 0 100%)',
        }}
      />

      {/* Mobile/Tablet solid white gradient backdrop */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/70 backdrop-blur-sm z-10" />

      {/* HERO CONTENT CONTAINER (z-20: on top of shapes) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16 lg:py-0">
        <div className="max-w-[760px] flex flex-col justify-center">
          
          {/* Small Intro Badge */}
          <div className="mb-4 sm:mb-6">
            <span
              className="inline-block text-[#B1B394] font-['Poppins',sans-serif] font-[600] text-[13px] sm:text-[15px] lg:text-[16px] tracking-[0.25em] uppercase select-none"
              id="hero-intro"
            >
              {t.hero.intro}
            </span>
          </div>

          {/* Main Large Headline: Ubaydullayev Saidabrorxon */}
          <div className="mb-8 sm:mb-10">
            <h1
              className="font-['Poppins',sans-serif] font-[900] tracking-[-0.03em] text-[#111111] leading-[1.08] sm:leading-[1.06] text-[36px] sm:text-[52px] md:text-[60px] lg:text-[66px] xl:text-[74px]"
              id="hero-headline"
            >
              {t.hero.headlinePart1}
              <br />
              <span className="text-[#B1B394]">{t.hero.headlineAccent}</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-[18px] sm:text-[22px] md:text-[26px] font-[800] text-black tracking-tight">
              {t.hero.rolePrefix}
              <span className="text-[#B1B394]">{t.hero.roleAccent}</span>
              {t.hero.roleSuffix}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5" id="hero-actions">
            {/* 1. Hire me button */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 bg-[#B1B394] hover:bg-[#9fa180] text-white font-['Poppins',sans-serif] font-[600] text-[14px] sm:text-[15px] rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] group"
              id="hero-hire-me"
            >
              <span>{t.hero.hireMe}</span>
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* 2. Download CV button */}
            <button
              onClick={onOpenCv}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-[#B1B394] text-[#B1B394] hover:text-white border-2 border-[#B1B394] font-['Poppins',sans-serif] font-[600] text-[14px] sm:text-[15px] rounded-[6px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group cursor-pointer"
              id="hero-download-cv"
            >
              <Download
                size={16}
                className="mr-2 group-hover:-translate-y-0.5 transition-transform"
              />
              <span>{t.hero.downloadCv}</span>
            </button>
          </div>

          {/* Persona Badge */}
          <div className="mt-10 sm:mt-12 flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.hero.availability}</span>
          </div>

        </div>
      </div>

      {/* PHOTO SWITCHER TOOLBAR */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-lg text-xs font-semibold">
        <span className="text-gray-500 mr-2 hidden sm:inline">{t.hero.portraitLabel}</span>
        <button
          onClick={() => setPhotoMode('userPhoto')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            photoMode === 'userPhoto'
              ? 'bg-[#B1B394] text-white shadow-xs'
              : 'text-gray-600 hover:text-black'
          }`}
          title="Sizning suratingiz (Harbiy libos)"
          id="toggle-user-photo"
        >
          {t.hero.originalPhoto}
        </button>
        <button
          onClick={() => setPhotoMode('blazer')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            photoMode === 'blazer'
              ? 'bg-[#B1B394] text-white shadow-xs'
              : 'text-gray-600 hover:text-black'
          }`}
          title="Dizaynerlik qiyofasi (Kostyum-shim)"
          id="toggle-blazer-portrait"
        >
          {t.hero.designerLook}
        </button>
      </div>
    </section>
  );
}
