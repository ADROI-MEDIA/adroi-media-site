import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Kolumna 1: Brand */}
          <div className="space-y-4">
            <h3 className="font-sora text-xl font-bold text-slate-900 tracking-tight">
              ADROI MEDIA
            </h3>
            <p className="font-inter text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Łączymy technologię, CRM i marketing w jeden system. Porządkujemy procesy i eliminujemy chaos operacyjny.
            </p>
          </div>

          {/* Kolumna 2: Kontakt */}
          <div className="space-y-5 md:space-y-4">
            <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-slate-900">
              Kontakt
            </h4>
            <ul className="font-inter space-y-4 md:space-y-3 text-slate-600 text-sm">
              <li>
                <a href="mailto:kontakt@adroi-media.pl" className="hover:text-blue-600 transition-colors flex justify-center md:justify-start items-center gap-2">
                  kontakt@adroi-media.pl
                </a>
              </li>
              <li className="flex flex-col">
                <span>ul. Marszałkowska 107</span>
                <span>00-110 Warszawa</span>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Usługi */}
          <div className="space-y-5 md:space-y-4">
            <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-slate-900">
              Usługi
            </h4>
            <nav className="font-inter flex flex-col space-y-4 md:space-y-3 text-slate-500 text-sm">
              <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-500 transition-colors">CRM i Automatyzacja</Link>
              <Link to="/kampanie-digital-integracja-leadow-crm" className="hover:text-blue-500 transition-colors">Kampanie Digital</Link>
              <Link to="/strony-internetowe-dla-deweloperow" className="hover:text-blue-500 transition-colors">Strony dla deweloperów</Link>
              <Link to="/ekosystemy-marketingowe" className="hover:text-blue-500 transition-colors">Ekosystemy marketingowe</Link>
            </nav>
          </div>

          {/* Kolumna 4: Firma */}
          <div className="space-y-5 md:space-y-4">
            <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-slate-900">
              Firma
            </h4>
            <nav className="font-inter flex flex-col space-y-4 md:space-y-3 text-slate-500 text-sm">
              <Link to="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link>
              <Link to="/jak-pracujemy" className="hover:text-blue-500 transition-colors">Jak pracujemy</Link>
              <Link to="/polityka-prywatnosci" className="hover:text-blue-500 transition-colors">Polityka prywatności</Link>
            </nav>
          </div>

        </div>

        {/* Dolna linia i Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center">
          <p className="font-inter text-xs text-slate-400">
            &copy; 2026 ADROI MEDIA. Wszystkie prawa zastrzeżone.
          </p>
          <div className="font-inter text-xs text-slate-400 flex gap-6">
            <Link to="/polityka-prywatnosci" className="hover:text-slate-600 transition-colors">Polityka prywatności</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;