import React, { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

export default function Blog({ t }) {
  const [readingArticle, setReadingArticle] = useState(null);

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[#B1B394] font-[600] text-[13px] tracking-[0.25em] uppercase mb-2">
            {t.blog.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight text-[#111111]">
            {t.blog.title}
          </h2>
          <div className="w-16 h-1 bg-[#B1B394] mt-4 rounded-full" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blog.items.map((post) => (
            <article
              key={post.id}
              className="bg-[#fafafa] rounded-2xl p-8 border border-gray-200/80 hover:border-[#B1B394] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full font-semibold text-[#828564]">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black group-hover:text-[#888b6b] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-gray-200/60 pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  {post.date}
                </span>

                <button
                  onClick={() => setReadingArticle(post)}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-black hover:text-[#B1B394] transition-colors group/btn cursor-pointer"
                >
                  <span>{t.blog.readArticle}</span>
                  <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reading Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <span className="text-xs font-semibold px-3 py-1 bg-[#B1B394]/20 text-[#7a7d5b] rounded-full inline-block mb-3">
              {readingArticle.tag} &bull; {readingArticle.readTime}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              {readingArticle.title}
            </h3>
            <p className="text-xs text-gray-400 mb-6 pb-4 border-b border-gray-100">
              {readingArticle.date} &bull; {t.blog.publishedBy}
            </p>
            <div className="text-gray-700 leading-relaxed text-base space-y-4">
              <p>{readingArticle.content}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-6 py-2.5 bg-[#B1B394] text-white rounded-md font-semibold text-sm hover:bg-[#9da07e] transition-colors cursor-pointer"
              >
                {t.blog.closeArticle}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
