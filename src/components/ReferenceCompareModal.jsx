import React from 'react';
import { X, CheckCircle, SplitSquareVertical } from 'lucide-react';

export default function ReferenceCompareModal({ t, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col relative animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <div>
            <h3 className="text-lg font-bold text-black flex items-center gap-2">
              <SplitSquareVertical size={18} className="text-[#B1B394]" /> {t.compareModal.title}
            </h3>
            <p className="text-xs text-gray-500">
              {t.compareModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Original Reference */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {t.compareModal.refLabel}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
                  {t.compareModal.refBadge}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                <img
                  src="/images/reference-original.png"
                  alt="Original Reference Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Recreated Design with User Portrait */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#818461]">
                  {t.compareModal.recreatedLabel}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#B1B394]/20 text-[#696b4c] font-semibold flex items-center gap-1">
                  <CheckCircle size={12} /> {t.compareModal.recreatedBadge}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-[#B1B394] bg-gray-100 shadow-md">
                <img
                  src="/images/user-hero-full.jpg"
                  alt="Recreated Design with User Face"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

          {/* Verification checklist */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              {t.compareModal.checklistTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c2}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c3}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c4}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c5}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.compareModal.c6}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#B1B394] hover:bg-[#9fa180] text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
          >
            {t.compareModal.close}
          </button>
        </div>

      </div>
    </div>
  );
}
