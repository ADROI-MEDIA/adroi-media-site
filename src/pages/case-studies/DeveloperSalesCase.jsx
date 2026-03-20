import { useEffect } from "react";
import { Link } from "react-router-dom";
import SubpageContactSection from "../../components/SubpageContactSection";
import SubpageHero from "../../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../../lib/seo";

const PAGE_TITLE = "Integracja sprzedaży deweloperskiej — Case Study | ADROI MEDIA";
const PAGE_DESCRIPTION = "Sprawdź case study dla branży deweloperskiej. Zobacz, jak łączymy marketing i technologię, aby tworzyć skuteczne systemy sprzedaży i optymalizować CRM.";
const PAGE_URL = "https://adroi-media.pl/case-studies/deweloper-integracja-sprzedazy";

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
  { name: "Jak uporządkowaliśmy proces sprzedaży inwestycji i zwiększyliśmy kontrolę nad leadami", url: PAGE_URL },
]);

export default function DeveloperSalesCase() {
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
      <SubpageHero badges={["CASE STUDY - DEWELOPER"]} title="Jak uporządkowaliśmy proces sprzedaży inwestycji i zwiększyliśmy kontrolę nad leadami">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Projekt obejmował uporządkowanie przepływu <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors">leadów</Link>, źródeł zapytań i współpracy pomiędzy marketingiem a sprzedażą w środowisku <Link to="/strony-internetowe-dla-deweloperow" className="text-blue-600 font-semibold hover:underline transition-colors">inwestycji mieszkaniowej</Link>.
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* KARTA: Kontekst */}
            <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Kontekst</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Wiele źródeł zapytań i rozproszony proces</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed flex-grow">
                Sprzedaż inwestycji opierała się na wielu źródłach <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link>: portalach, formularzach, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampaniach reklamowych</Link> i materiałach kierujących na różne strony projektu. Dane były rozproszone, a ich obsługa wymagała wielu ręcznych działań.
              </p>
            </div>

            {/* KARTA: Problem */}
            <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Brak jednej logiki obsługi leadów</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed flex-grow">
                Głównym problemem był brak spójnego modelu przekazywania <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link> i informacji pomiędzy marketingiem a sprzedażą. Utrudniało to kontrolę nad jakością zapytań, czasem reakcji i oceną skuteczności poszczególnych działań.
              </p>
            </div>
          </div>

          {/* KARTA: Co zrobiliśmy (Pełna szerokość) */}
          <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl">
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Rozwiązanie</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Uporządkowanie procesu sprzedaży inwestycji</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Uporządkowaliśmy sposób zbierania <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link>, strukturę formularzy, logikę przekazywania danych oraz powiązania między stronami inwestycji, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampaniami</Link> i <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link>. 
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Dodatkowo doprecyzowaliśmy zakres odpowiedzialności pomiędzy marketingiem, sprzedażą i technologią, redukując chaos komunikacyjny i tworząc jeden spójny <Link to="/jak-pracujemy" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">proces</Link>.
              </p>
            </div>
          </div>

          {/* KARTA: Efekt (Z poświatą) */}
          <div className="bg-[#0a1120] p-8 md:p-12 rounded-[40px] shadow-2xl shadow-blue-900/30 border border-blue-900/50">
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Wyniki</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-white">Większa kontrola i bardziej przewidywalna sprzedaż</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Efektem było uporządkowanie całego procesu: od źródła <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leada</Link> po obsługę przez sprzedaż. Zespół zyskał <strong className="text-blue-400">większą przejrzystość działań</strong>, lepszy monitoring i bardziej spójny obraz skuteczności <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanii</Link> oraz źródeł zapytań.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed">
                Zauważalnie skrócono <strong className="text-blue-400">czas reakcji na <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leady</Link></strong>, co bezpośrednio przełożyło się na poprawę konwersji sprzedażowej i lepsze wykorzystanie budżetu reklamowego na portale oraz <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanie ADS</Link>.
              </p>
            </div>
          </div>

          {/* KARTA: Wniosek */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 text-center max-w-4xl mx-auto">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-inter">Wniosek</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-slate-900 tracking-tight text-balance">Porządek w leadach przekłada się na porządek w sprzedaży</h2>
            <p className="font-inter text-slate-600 text-lg mb-10 leading-relaxed">
              W środowisku deweloperskim nawet dobre <Link to="/kampanie-digital-integracja-leadow-crm" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">kampanie</Link> nie wystarczą, jeśli <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">leady</Link> są rozproszone i <Link to="/jak-pracujemy" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">proces obsługi</Link> jest niespójny. Największą wartość daje połączenie <Link to="/strony-internetowe-dla-deweloperow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">strony</Link>, źródeł zapytań i sprzedaży w jeden kontrolowany system.
            </p>
            
            <div className="flex flex-col items-center">
              <span className="text-slate-400 font-inter text-sm mb-4 uppercase tracking-widest font-semibold">Powiązane usługi:</span>
              <div className="flex flex-wrap justify-center gap-3">
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/strony-internetowe-dla-deweloperow">Usługa dla deweloperów</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/case-studies">Wszystkie case studies</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz podobny efekt\nw swojej firmie?"}
        description="Napisz proszę, jaki proces sprzedaży deweloperskiej chcesz usprawnić. Wracamy z konkretami w 24h."
        relatedLinks={[
          { label: "Usługa dla deweloperów", href: "/strony-internetowe-dla-deweloperow" },
          { label: "CRM", href: "/integracje-crm-automatyzacja-leadow" },
          { label: "Wszystkie case studies", href: "/case-studies" },
        ]}
      />
    </div>
  );
}
