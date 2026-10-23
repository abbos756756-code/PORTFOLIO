import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$3k - $5k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'UI/UX Design',
      budget: '$3k - $5k',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#fafafa] border-t border-gray-100 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111]">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {t.contact.heading}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                {t.contact.subtext}
              </p>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#B1B394] shadow-xs shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block tracking-wider">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href="mailto:abrorxon.obidullayev@gmail.com"
                      className="text-base font-bold text-black hover:text-[#B1B394] transition-colors"
                    >
                      abrorxon.obidullayev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#B1B394] shadow-xs shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block tracking-wider">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-base font-bold text-black">
                      {t.contact.locationVal}
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#B1B394] shadow-xs shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block tracking-wider">
                      {t.contact.statusLabel}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-semibold text-gray-800">
                        {t.contact.statusVal}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-8 mt-8 border-t border-gray-200/80">
              <span className="text-xs font-bold uppercase text-gray-400 block tracking-wider mb-3">
                {t.contact.socialLabel}
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Dribbble', url: 'https://dribbble.com' },
                  { name: 'Telegram', url: 'https://t.me' },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#B1B394] hover:border-[#B1B394] transition-all"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-md">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-2">{t.contact.form.successTitle}</h4>
                  <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
                    {t.contact.form.successMsg}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-md bg-[#B1B394] text-white text-sm font-semibold hover:bg-[#9fa180] transition-colors cursor-pointer"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#B1B394] focus:ring-2 focus:ring-[#B1B394]/20 outline-none text-sm transition-all"
                        id="contact-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#B1B394] focus:ring-2 focus:ring-[#B1B394]/20 outline-none text-sm transition-all"
                        id="contact-email"
                      />
                    </div>
                  </div>

                  {/* Service and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t.contact.form.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#B1B394] focus:ring-2 focus:ring-[#B1B394]/20 outline-none text-sm bg-white transition-all cursor-pointer"
                      >
                        <option value="UI/UX Design">UI/UX Dizayn</option>
                        <option value="Web Development">Veb Dasturlash</option>
                        <option value="Mobile App Design">Mobil Ilova Dizayni</option>
                        <option value="Design System & Brand">Dizayn Tizimi &amp; Brending</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t.contact.form.budget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#B1B394] focus:ring-2 focus:ring-[#B1B394]/20 outline-none text-sm bg-white transition-all cursor-pointer"
                      >
                        <option value="$1k - $3k">$1,000 - $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t.contact.form.details}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.detailsPlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#B1B394] focus:ring-2 focus:ring-[#B1B394]/20 outline-none text-sm transition-all resize-none"
                      id="contact-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-9 py-3.5 bg-[#B1B394] hover:bg-[#9fa180] text-white font-['Poppins',sans-serif] font-[600] text-sm rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    id="contact-submit"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {t.contact.form.submitting}
                      </span>
                    ) : (
                      <>
                        <span>{t.contact.form.submit}</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
