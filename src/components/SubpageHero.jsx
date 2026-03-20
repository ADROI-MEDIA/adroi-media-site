import React from 'react';

export default function SubpageHero({ badges = [], title, children }) {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {badges.length > 0 && (
          <div className="flex justify-center gap-2 mb-6">
            {badges.map((badge) => (
              <span key={badge} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                {badge}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-sora text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
          {title}
        </h1>
        <div className="max-w-3xl mx-auto text-slate-600 font-inter text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}