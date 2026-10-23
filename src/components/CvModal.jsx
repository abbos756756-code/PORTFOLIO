import React from 'react';
import { X, Download, Printer, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function CvModal({ t, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const cvText = `
UBAYDULLAYEV SAIDABRORXON
${t.cvModal.role}
Email: saidabror.ubaydullayev@gmail.com
Manzil / Location: Toshkent, O'zbekiston / Remote Global
Portfolio: https://saidabrorxon.dev

${t.cvModal.summaryTitle}:
${t.cvModal.summary}

${t.cvModal.skillsTitle}:
- UI/UX: Figma, Wireframing, Rapid Prototyping, Design Systems, User Research, Usability Testing.
- Frontend: React.js, Tailwind CSS, JavaScript (ES6+), TypeScript, Next.js, HTML5, CSS3, Vite, REST APIs.
- Tools: Git, GitHub, FigJam, Lighthouse, Vercel.

${t.cvModal.expTitle}:
1. ${t.cvModal.exp1Role} - ${t.cvModal.exp1Company}
   - ${t.cvModal.exp1Desc}

2. ${t.cvModal.exp2Role} - ${t.cvModal.exp2Company}
   - ${t.cvModal.exp2Desc}

${t.cvModal.eduTitle}:
- ${t.cvModal.edu1}
  ${t.cvModal.edu1Desc}
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ubaydullayev_Saidabrorxon_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col relative animate-in zoom-in-95">
        
        {/* Header toolbar */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/90 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black font-['Poppins']">
              {t.cvModal.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[#B1B394] hover:bg-[#9fa180] text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              id="cv-download-btn"
            >
              <Download size={14} /> {t.cvModal.downloadBtn}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-md hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer hidden sm:block"
              title={t.cvModal.printBtn}
            >
              <Printer size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Paper */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-gray-800">
          
          {/* Header section */}
          <div className="border-b border-gray-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-[900] text-black font-['Poppins']">
                SAIDABRORXON<span className="text-[#B1B394]">.</span>
              </h2>
              <h3 className="text-lg font-bold text-gray-700 mt-1">
                Ubaydullayev Saidabrorxon
              </h3>
              <p className="text-sm font-semibold text-[#888b68] mt-0.5">
                {t.cvModal.role}
              </p>
            </div>
            <div className="text-xs sm:text-right text-gray-500 space-y-1">
              <p>Email: saidabror.ubaydullayev@gmail.com</p>
              <p>Manzil: Toshkent, O'zbekiston</p>
              <p>Portfolio: saidabrorxon.dev</p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-100 pb-1.5">
              {t.cvModal.summaryTitle}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t.cvModal.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2 border-b border-gray-100 pb-2">
              <Briefcase size={16} className="text-[#B1B394]" /> {t.cvModal.expTitle}
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h5 className="font-bold text-sm text-black">{t.cvModal.exp1Role}</h5>
                </div>
                <p className="text-xs text-[#8c8f6f] font-medium">{t.cvModal.exp1Company}</p>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  {t.cvModal.exp1Desc}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h5 className="font-bold text-sm text-black">{t.cvModal.exp2Role}</h5>
                </div>
                <p className="text-xs text-[#8c8f6f] font-medium">{t.cvModal.exp2Company}</p>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  {t.cvModal.exp2Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2 border-b border-gray-100 pb-2">
              <GraduationCap size={16} className="text-[#B1B394]" /> {t.cvModal.eduTitle}
            </h4>
            <div className="space-y-1.5">
              <h5 className="font-bold text-sm text-black">{t.cvModal.edu1}</h5>
              <p className="text-xs text-gray-600">{t.cvModal.edu1Desc}</p>
            </div>
          </div>

          {/* Key Proficiencies */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2 border-b border-gray-100 pb-2">
              <Award size={16} className="text-[#B1B394]" /> {t.cvModal.skillsTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'UI/UX Dizayn', 'Wireframing', 'React.js', 'Tailwind CSS', 'TypeScript', 'JavaScript (ES6+)', 'Design Systems', 'Mikro-animatsiyalar', 'Vite / Next.js', 'RWD Moslashuvchanlik'].map((s, idx) => (
                <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-800 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {t.cvModal.footerNotice}
          </span>
          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-[#B1B394] hover:bg-[#9fa180] text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
          >
            {t.cvModal.downloadFileBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
