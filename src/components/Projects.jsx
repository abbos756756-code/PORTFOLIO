import React, { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';

export default function Projects({ t, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2 block">
              {t.projects.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111]">
              {t.projects.title}
            </h2>
            <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: 'all', label: t.projects.tabs.all },
              { id: 'design', label: t.projects.tabs.design },
              { id: 'web', label: t.projects.tabs.web },
              { id: 'mobile', label: t.projects.tabs.mobile },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#B1B394] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#B1B394]/70 transition-all duration-300 flex flex-col"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/11] overflow-hidden bg-gray-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={15} className="text-[#B1B394]" /> {t.projects.viewDetails}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#888b6b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center text-sm font-bold text-black hover:text-[#B1B394] transition-colors cursor-pointer"
                  >
                    <span>{t.projects.readCaseStudy}</span>
                    <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs font-semibold text-gray-400">
                    {t.projects.edition}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
