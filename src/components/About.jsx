import React from 'react';
import { Compass, Code, Sparkles } from 'lucide-react';

export default function About({ t }) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111] leading-[1.2]">
            <span>{t.about.name}</span>
            <br />
            <span className="text-[#B1B394] text-2xl sm:text-3xl lg:text-4xl font-[700] block mt-1 sm:mt-2">
              {t.about.tagline}
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-3 bg-[#B1B394]/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
              
              <div className="relative bg-gradient-to-b from-[#f2f4f7] to-[#e1e4e8] rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <div className="w-full h-[430px] flex items-end justify-center pt-6">
                  <img
                    src="/images/user-cutout.png"
                    alt="Ubaydullayev Saidabrorxon"
                    className="h-full w-auto object-contain object-bottom hover:scale-105 transition-transform duration-500 drop-shadow-[-5px_10px_20px_rgba(0,0,0,0.15)]"
                  />
                </div>
                <div className="p-6 bg-white border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg text-black">Ubaydullayev Saidabrorxon</h4>
                      <p className="text-sm text-gray-500 font-medium">{t.about.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#B1B394]/15 text-[#888b6b]">
                      <Sparkles size={13} /> {t.about.verified}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {t.about.bio1}
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {t.about.bio2}
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#fbfbf8] border border-[#e8ebd9] flex items-start space-x-3">
                <div className="p-2 rounded-md bg-[#B1B394]/20 text-[#7d805f]">
                  <Compass size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-black">{t.about.card1Title}</h5>
                  <p className="text-xs text-gray-600 mt-0.5">{t.about.card1Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#fbfbf8] border border-[#e8ebd9] flex items-start space-x-3">
                <div className="p-2 rounded-md bg-[#B1B394]/20 text-[#7d805f]">
                  <Code size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-black">{t.about.card2Title}</h5>
                  <p className="text-xs text-gray-600 mt-0.5">{t.about.card2Desc}</p>
                </div>
              </div>
            </div>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-[900] text-black">
                    {stat.number}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
