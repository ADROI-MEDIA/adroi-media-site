import React from 'react';
import marcinPhoto from "../assets/marcin.png";

// Poprawiony temat maila na: Zapytanie do ADROI MEDIA
const PREFILLED_MAILTO = "mailto:kontakt@adroi-media.pl?subject=Zapytanie%20do%20ADROI%20MEDIA&body=Dzi%C4%99ki%20za%20wiadomo%C5%9B%C4%87%20%F0%9F%99%82%0A%0A%C5%BBeby%C5%9Bmy%20mogli%20szybko%20zrozumie%C4%87%20Twoj%C4%85%20sytuacj%C4%99%20i%20zaproponowa%C4%87%20konkretne%20rozwi%C4%85zanie%2C%20napisz%20prosz%C4%99%20w%20kilku%20zdaniach%3A%0A%0A1)%20Co%20chcesz%20osi%C4%85gn%C4%85%C4%87%3F%0A2)%20Co%20dzi%C5%9B%20nie%20dzia%C5%82a%20lub%20gdzie%20pojawia%20si%C4%99%20chaos%3F%0A3)%20Z%20jakich%20narz%C4%99dzi%20%2F%20system%C3%B3w%20korzystasz%20(je%C5%9Bli%20wiesz)%3F%0A%0AJe%C5%9Bli%20masz%20link%20do%20strony%2C%20kampanii%20albo%20inne%20materia%C5%82y%20%E2%80%94%20pode%C5%9Blij.%0A%0AZwykle%20odpowiadamy%20w%20ci%C4%85gu%2024h%20i%20wracamy%20z%20konkretn%C4%85%20rekomendacj%C4%85%20kolejnych%20krok%C3%B3w.";

export default function SubpageContactSection({ title, description }) {
  return (
    <section id="kontakt" className="px-4 py-4 md:py-20">
      <div className="max-w-6xl mx-auto bg-[#0a1120] rounded-[40px] px-6 py-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl text-center md:text-left">
        
        {/* Lewa strona: Nagłówki i Przycisk */}
        <div className="flex-1 space-y-6 md:space-y-8 flex flex-col items-center md:items-start w-full text-center md:text-left mb-12 md:mb-0">
          <span className="font-sora text-blue-500 font-semibold tracking-widest text-xs uppercase block">
            Kontakt
          </span>
          <h2 className="font-sora text-4xl md:text-6xl font-bold text-white leading-[1.1] text-balance">
            {title || "Wyślij brief.\nWrócimy z konkretami."}
          </h2>
          {description && (
            <p className="font-inter text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {description}
            </p>
          )}
          <a 
            href={PREFILLED_MAILTO}
            className="block w-fit mx-auto md:mx-0 bg-blue-600 hover:bg-blue-700 text-white font-inter px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-blue-900/40 hover:scale-105"
          >
            Napisz do nas maila
          </a>
        </div>

        {/* Prawa strona: Karta Bio Marcina */}
        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[32px] w-full max-w-md mx-auto">
          <div className="flex flex-col items-center">
            {/* Zdjęcie: powiększone, bez obwódki (tylko cień) */}
            <img 
              src={marcinPhoto} 
              alt="Marcin Waniek, Managing Director w ADROI MEDIA - Ekspert ds. systemów sprzedaży i technologii marketingowych"
              loading="lazy"
              decoding="async"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover shadow-2xl mb-6 shrink-0"
            />
            
            <div className="mb-6">
              {/* Imię: powiększone, by optycznie wyrównać do szerokości stanowiska */}
              <h3 className="font-sora text-white text-[2.2rem] md:text-[2.6rem] font-bold leading-none">
                Marcin Waniek
              </h3>
              <p className="font-inter text-blue-400 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold mt-2">
                Managing Director
              </p>
            </div>
            
            <blockquote className="font-inter text-slate-300 italic leading-relaxed text-base md:text-lg text-center">
              "Od ponad 15 lat łączę marketing i technologię, pomagając firmom zamieniać chaos w działające, stabilne systemy."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}