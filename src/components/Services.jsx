import React from 'react';
import { Layout, Globe, Smartphone, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services({ t }) {
  const icons = [
    <Layout key="1" className="w-8 h-8 text-[#B1B394]" />,
    <Globe key="2" className="w-8 h-8 text-[#B1B394]" />,
    <Smartphone key="3" className="w-8 h-8 text-[#B1B394]" />,
    <Palette key="4" className="w-8 h-8 text-[#B1B394]" />,
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111]">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-gray-200/80 hover:border-[#B1B394] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 group-hover:border-[#B1B394]/30 transition-transform duration-300">
                  {icons[idx]}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#8d906f] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="border-t border-gray-200/60 pt-5 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {t.services.keyDeliverables}
                  </span>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={15} className="text-[#B1B394] mr-2 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-black hover:text-[#B1B394] transition-colors group/link"
                >
                  <span>{t.services.requestService}</span>
                  <ArrowRight size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
