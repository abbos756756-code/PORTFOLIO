import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ProjectModal({ t, project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <span className="text-xs font-bold text-[#B1B394] uppercase tracking-wider block">
              {t.projects.modalBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Visual */}
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 bg-[#B1B394]/15 text-[#6c6e4e] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-black text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> {t.projects.challenge}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-black text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> {t.projects.solution}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results Bar */}
          <div className="p-6 rounded-xl bg-[#fafaf7] border border-[#e8ebd9]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#797c5c] mb-2 flex items-center gap-2">
              <Sparkles size={16} /> {t.projects.impact}
            </h4>
            <p className="text-black font-semibold text-base sm:text-lg">
              {project.results}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            {t.projects.authorBadge}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#B1B394] text-white rounded-md text-sm font-semibold hover:bg-[#9fa180] transition-colors cursor-pointer"
          >
            {t.projects.closeOverview}
          </button>
        </div>

      </div>
    </div>
  );
}
