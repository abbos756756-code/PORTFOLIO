import React, { useState } from 'react';

export default function Skills({ t }) {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' 
    ? t.skills.items 
    : t.skills.items.filter(item => item.category === filter);

  return (
    <section id="skills" className="py-24 bg-[#fafafa] border-t border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2 block">
              {t.skills.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111]">
              {t.skills.title}
            </h2>
            <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: 'all', label: t.skills.tabs.all },
              { id: 'design', label: t.skills.tabs.design },
              { id: 'dev', label: t.skills.tabs.dev },
              { id: 'tools', label: t.skills.tabs.tools },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#B1B394] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#B1B394] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base sm:text-lg text-black group-hover:text-[#8d906f] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 bg-[#B1B394]/15 text-[#737656] rounded-md">
                    {skill.level}%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#B1B394] h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
