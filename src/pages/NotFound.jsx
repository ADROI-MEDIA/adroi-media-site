import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a1120] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#2563eb]">Błąd 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl uppercase italic">
          Proces utknął w martwym punkcie
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-400 max-w-lg mx-auto">
          Strona, której szukasz, nie istnieje lub została przeniesiona pod inny adres. 
          Zintegrujmy Cię z powrotem z właściwą treścią.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 font-semibold">
          <Link
            to="/"
            className="rounded-full bg-[#2563eb] px-8 py-3 text-sm text-white shadow-sm hover:bg-blue-500 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Wróć do strony głównej
          </Link>
          <Link to="/case-studies" className="text-sm text-white hover:text-[#2563eb] transition-colors">
            Zobacz Case Studies <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      
      {/* Subtelny akcent graficzny w tle */}
      <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl opacity-20 pointer-events-none" aria-hidden="true">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563eb] to-[#0a1120]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </div>
  );
};

export default NotFound;