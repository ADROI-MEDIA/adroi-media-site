import { useEffect } from "react";
import { Link } from "react-router-dom";
import SubpageContactSection from "../../components/SubpageContactSection";
import SubpageHero from "../../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../../lib/seo";

const PAGE_TITLE = "Integracja leadów z CRM — Case Study | ADROI MEDIA";
const PAGE_DESCRIPTION = "Sprawdź case study: jak marketing i technologia tworzą skuteczne systemy sprzedaży. Zobacz pełną integrację leadów z CRM i eliminację chaosu w danych.";
const PAGE_URL = "https://adroi-media.pl/case-studies/integracja-leadow-crm";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: PAGE_URL,
  author: {
    "@type": "Organization",
    name: "ADROI MEDIA"
  },
  publisher: {
    "@type": "Organization",
    name: "ADROI MEDIA",
    url: "https://adroi-media.pl/"
  }
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Case studies", url: "https://adroi-media.pl/case-studies" },
  { name: "Jak zintegrowaliśmy leady z kampanii i uporządkowaliśmy CRM", url: PAGE_URL },
]);

export default function CrmLeadIntegrationCase() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", PAGE_DESCRIPTION);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SubpageHero badges={["Case study"]} title="Jak zintegrowaliśmy leady z kampanii i uporządkowaliśmy CRM">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Projekt dotyczył uporządkowania przepływu <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors duration-200">leadów</Link> pomiędzy wieloma źródłami pozyskania kontaktów a <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors duration-200">CRM</Link>, tak aby sprzedaż mogła pracować na kompletnych i kontrolowanych danych.
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* KARTA: Kontekst */}
            <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Kontekst</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Środowisko z wieloma źródłami leadów</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed flex-grow">
                Klient korzystał jednocześnie z <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanii reklamowych</Link>, formularzy na stronach i portali ogłoszeniowych. Każde z tych źródeł działało według innej logiki przekazywania danych, co utrudniało kontrolę nad jakością i szybkością obsługi zapytań.
              </p>
            </div>

            {/* KARTA: Wyzwanie */}
            <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Wyzwanie</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Microsoft Dynamics i wiele formatów danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-6">
                Istotnym wyzwaniem był <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link> oparty o Microsoft Dynamics, który wymagał precyzyjnej integracji oraz odpowiedniej struktury danych.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed flex-grow">
                Dodatkowo <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leady</Link> pochodziły z wielu źródeł, takich jak RynekPierwotny.pl, Otodom, OLX, Gratka, Morizon, Obido czy dopoznania.pl. Część z nich przekazywała dane przez API, a część wyłącznie mailowo.
              </p>
            </div>
          </div>

          {/* KARTA: Co zrobiliśmy (Pełna szerokość) */}
          <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl">
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Co zrobiliśmy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Dedykowana warstwa integracyjna</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Zaprojektowaliśmy i wdrożyliśmy dedykowaną warstwę integracyjną, która zbiera <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leady</Link> ze wszystkich źródeł, normalizuje dane do jednego spójnego formatu i przekazuje je do <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link> Microsoft Dynamics.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                System odbiera również informację zwrotną o poprawnym przyjęciu <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leada</Link>, dzięki czemu można kontrolować, czy kontakt został poprawnie zapisany i jest gotowy do obsługi przez sprzedaż.
              </p>
            </div>
          </div>

          {/* KARTA: Efekt (Z poświatą) */}
          <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl shadow-blue-900/30 border border-blue-900/50">
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Efekt</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Stabilny przepływ leadów i większa kontrola</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Warstwa integracyjna pełniła również funkcję zabezpieczenia danych. W przypadku błędów lub niedostępności <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link> <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leady</Link> nie były tracone, lecz <strong className="text-blue-400">buforowane i ponownie przesyłane</strong> po przywróceniu dostępności systemu.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Rozwiązanie zostało zbudowane w oparciu o webhooki i nowoczesną architekturę przetwarzania danych, co zapewniło szybkie działanie, stabilność i możliwość dalszego skalowania wraz ze wzrostem liczby <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link>.
              </p>
            </div>
          </div>

          {/* KARTA: Wniosek */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 text-center max-w-4xl mx-auto">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-inter">Wniosek</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-slate-900 tracking-tight text-balance">Pełna kontrola nad leadami niezależnie od liczby źródeł</h2>
            <p className="font-inter text-slate-600 text-lg mb-10 leading-relaxed">
              W praktyce wdrożenie oznaczało pełną kontrolę nad przepływem <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">leadów</Link>, większą odporność <Link to="/jak-pracujemy" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">procesu sprzedaży</Link> na błędy systemowe i uporządkowany model współpracy między marketingiem a sprzedażą.
            </p>
            
            <div className="flex flex-col items-center">
              <span className="text-slate-400 font-inter text-sm mb-4 uppercase tracking-widest font-semibold">Powiązane usługi:</span>
              <div className="flex flex-wrap justify-center gap-3">
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/integracje-crm-automatyzacja-leadow">Usługa CRM</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/porzadkowanie-srodowisk-marketingowych">Ekosystemy</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/case-studies">Wszystkie case studies</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz podobny efekt\nw swojej firmie?"}
        description="Napisz proszę, co obecnie sprawia największy problem w Twoim CRM. Wracamy z konkretami w 24h."
        relatedLinks={[
          { label: "Usługa CRM", href: "/integracje-crm-automatyzacja-leadow" },
          { label: "Kampanie", href: "/kampanie-digital-integracja-leadow-crm" },
          { label: "Wszystkie case studies", href: "/case-studies" },
        ]}
      />
    </div>
  );
}
