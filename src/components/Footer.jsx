import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-[900] tracking-normal text-black font-['Poppins',sans-serif]">
            SAIDABRORXON<span className="text-[#B1B394]">.</span>
          </span>
          <span className="text-xs text-gray-400 border-l border-gray-200 pl-3">
            {t.footer.role}
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center font-medium">
          &copy; {new Date().getFullYear()} Ubaydullayev Saidabrorxon. {t.footer.rights}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#fafafa] hover:bg-[#B1B394] text-gray-600 hover:text-white border border-gray-200 hover:border-[#B1B394] transition-all shadow-xs cursor-pointer group"
          aria-label={t.footer.backToTop}
          title={t.footer.backToTop}
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
