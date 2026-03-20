import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Integracje CRM i automatyzacja leadów | ADROI MEDIA";
const PAGE_DESCRIPTION = "Łączymy marketing i technologię, budując skuteczne systemy sprzedaży. Wdrażamy integracje CRM i automatyzacje leadów, eliminując chaos w Twojej firmie.";
const PAGE_URL = "https://adroi-media.pl/integracje-crm-automatyzacja-leadow";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integracje CRM i automatyzacja leadów",
  provider: {
    "@type": "Organization",
    name: "ADROI MEDIA",
    url: "https://adroi-media.pl/",
  },
  url: PAGE_URL,
  areaServed: "PL",
  description: PAGE_DESCRIPTION,
  serviceType: [
    "integracje CRM",
    "integracje formularzy",
    "integracje leadów z kampanii reklamowych",
    "automatyzacja przekazywania leadów",
    "porządkowanie procesu sprzedaży i raportowania",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jak wygląda integracja CRM z formularzami i kampaniami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najpierw porządkujemy źródła leadów, pola danych i logikę przekazywania kontaktów. Następnie łączymy formularze, kampanie i CRM tak, aby każdy lead trafiał do odpowiedniego miejsca z kompletem danych."
      }
    },
    {
      "@type": "Question",
      name: "Czy można zintegrować istniejący CRM bez wymiany całego systemu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. W wielu przypadkach porządkujemy obecne środowisko, poprawiamy błędy w przepływach i dokładamy brakujące integracje bez budowania wszystkiego od nowa."
      }
    },
    {
      "@type": "Question",
      name: "Czy integrujecie leady z kampanii Google Ads i Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Spinamy leady z kampanii reklamowych z CRM, formularzami i narzędziami analitycznymi, dzięki czemu marketing i sprzedaż pracują na tych samych danych."
      }
    },
    {
      "@type": "Question",
      name: "Co najczęściej blokuje skuteczną obsługę leadów?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej problemem są rozproszone źródła danych, niepełne informacje trafiające do CRM, brak monitoringu integracji oraz ręczne przekazywanie leadów pomiędzy zespołami."
      }
    },
    {
      "@type": "Question",
      name: "Czy strony są zgodne z ustawą deweloperską?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Projektujemy strony inwestycji z uwzględnieniem obowiązków informacyjnych oraz wymagań wynikających z ustawy deweloperskiej, tak aby minimalizować ryzyko prawne i zapewnić spójność komunikacji."
      }
    },
    {
      "@type": "Question",
      name: "Czy pomagacie także uporządkować raportowanie i mierzalność kampanii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Porządkujemy proces raportowania i dane o leadach, aby łatwiej ocenić jakość kampanii, skuteczność źródeł i realny wpływ marketingu na sprzedaż."
      }
    }
  ]
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Integracje CRM i automatyzacja leadów", url: PAGE_URL },
]);

export default function CrmLeadAutomationPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            SERVICE_SCHEMA,
            FAQ_SCHEMA,
          ]),
        }}
      />
      <SubpageHero badges={["Usługa"]} title="Integracje CRM i automatyzacja leadów">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Łączymy CRM, formularze, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-600 font-semibold hover:underline">kampanie digital</Link> i portale ogłoszeniowe w jeden spójny system, który eliminuje utratę leadów i porządkuje <Link to="/jak-pracujemy" className="text-blue-600 font-semibold hover:underline">procesy operacyjne</Link>.
        </p>
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Automatyzujemy przepływ danych między marketingiem a sprzedażą, dzięki czemu każdy lead trafia we właściwe miejsce — bez opóźnień, błędów i ręcznej pracy, zgodnie z podejściem opisanym na stronie <Link to="/jak-pracujemy" className="text-blue-600 font-semibold hover:underline">jak pracujemy</Link>.
        </p>
        <p className="font-inter text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <strong className="text-slate-900">Nie budujemy tylko strony.</strong>
          <br />
          Budujemy system sprzedaży inwestycji, który łączy marketing, CRM i obsługę leadów w jeden spójny proces — zgodny z wymaganiami prawnymi dla rynku deweloperskiego i spójny z podejściem do <Link to="/strony-internetowe-dla-deweloperow" className="text-blue-600 font-semibold hover:underline">stron internetowych dla deweloperów</Link>.
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Zakres</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Z czym pomagamy</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "integracje formularzy ze stron www",
                  <span key="1">integracje z <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link></span>,
                  <span key="2">integracje <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link> z <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanii Google Ads i Meta Ads</Link></span>,
                  "integracje z portalami ogłoszeniowymi",
                  <span key="3">automatyzacja przekazywania <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link> do sprzedaży</span>,
                  "wdrożenia stron zgodnych z ustawą deweloperską i wymaganiami informacyjnymi",
                  <span key="4">porządkowanie <Link to="/jak-pracujemy" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">procesu</Link> i raportowania</span>
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Diagnoza</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Najczęstsze problemy</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  <span key="5"><Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">Leady</Link> giną po drodze</span>,
                  <span key="6"><Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM</Link> nie otrzymuje pełnych danych</span>,
                  <span key="7"><Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">Kampanii</Link> nie da się poprawnie rozliczyć</span>,
                  "marketing i sprzedaż pracują na różnych danych",
                  "część działań wykonywana jest ręcznie"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Efekt</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Co zyskuje firma</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  <span key="8">szybsze przekazywanie <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link></span>,
                  "mniej błędów i ręcznej pracy",
                  <span key="9">większą kontrolę nad <Link to="/jak-pracujemy" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">procesem</Link></span>,
                  <span key="10">lepszą mierzalność <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanii</Link></span>,
                  "stabilniejsze wsparcie sprzedaży"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dla kogo</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Gdzie ta usługa daje największy efekt</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "firmy sprzedające inwestycje mieszkaniowe i deweloperskie",
                  <span key="11">organizacje z wieloma źródłami <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadów</Link></span>,
                  "firmy posiadające rozbudowane środowiska marketingowe",
                  "zespoły, które chcą uporządkować technologię bez budowy wszystkiego od zera"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-10 md:p-16 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-inter">Przykład wdrożenia</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora text-slate-900 tracking-tight">Płynny przepływ leadów w Dynamics</h2>
            <p className="font-inter text-slate-600 text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
              W jednym z projektów połączyliśmy wiele źródeł <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">leadów</Link> (portale ogłoszeniowe, formularze, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">kampanie</Link>) z <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">CRM</Link> Microsoft Dynamics, tworząc spójny system przekazywania i kontroli zapytań.
            </p>
            <p className="font-inter text-slate-600 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              Efektem było pełne uporządkowanie przepływu <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">leadów</Link>, eliminacja ich utraty oraz możliwość monitorowania, czy każdy kontakt został poprawnie obsłużony zgodnie z <Link to="/jak-pracujemy" className="text-slate-800 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors duration-200">procesem</Link>.
            </p>
            
            <div className="flex flex-col items-center">
              <span className="text-slate-400 font-inter text-sm mb-4 uppercase tracking-widest font-semibold">Powiązane usługi:</span>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/porzadkowanie-srodowisk-marketingowych">Środowiska</Link>
                <Link className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-colors" to="/case-studies">Case studies</Link>
              </div>
              <Link className="inline-block bg-slate-900 text-white font-inter px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors" to="/case-studies/integracja-leadow-crm">Zobacz pełne case study →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-inter">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 tracking-tight">Pytania o integracje CRM i automatyzację leadów</h2>
          </div>
          <FAQAccordion items={FAQ_SCHEMA.mainEntity} />
        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz uporządkować\nCRM i przepływ leadów?"}
        description="Opisz, jak dziś wygląda proces i gdzie pojawia się chaos. Wrócimy z konkretną rekomendacją kolejnych kroków."
      />
    </div>
  );
}
