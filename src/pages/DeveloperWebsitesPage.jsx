import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Strony dla deweloperów i systemy sprzedaży | ADROI MEDIA";
const PAGE_DESCRIPTION = "Budujemy zintegrowane strony dla deweloperów. Łączymy marketing i technologię, aby tworzyć skuteczne systemy sprzedaży zoptymalizowane pod zaawansowany CRM.";
const PAGE_URL = "https://adroi-media.pl/strony-internetowe-dla-deweloperow";

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
  name: "Strony internetowe i system sprzedaży dla deweloperów",
  provider: {
    "@type": "Organization",
    name: "ADROI MEDIA",
    url: "https://adroi-media.pl/",
  },
  url: PAGE_URL,
  areaServed: "PL",
  description: PAGE_DESCRIPTION,
  serviceType: [
    "strony internetowe dla deweloperów",
    "strony inwestycji mieszkaniowych",
    "integracje CRM dla sprzedaży mieszkań",
    "obsługa leadów z portali i kampanii",
    "system sprzedaży inwestycji",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy strona inwestycji może być zintegrowana z CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Łączymy formularze, źródła leadów i stronę inwestycji z CRM, aby sprzedaż otrzymywała kompletne dane i mogła szybciej reagować na zapytania."
      }
    },
    {
      "@type": "Question",
      name: "Czy pomagacie w obsłudze leadów z kampanii i portali ogłoszeniowych?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Integrujemy leady z kampanii reklamowych i portali z procesem sprzedaży, tak aby wszystkie zapytania trafiały do jednego uporządkowanego systemu."
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
      name: "Czy możecie uporządkować istniejącą stronę zamiast budować wszystko od zera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. W wielu przypadkach porządkujemy istniejącą stronę, poprawiamy strukturę leadów, wdrażamy integracje i wzmacniamy to, co już działa, bez pełnej przebudowy."
      }
    },
    {
      "@type": "Question",
      name: "Czy taka strona pomaga lepiej mierzyć skuteczność marketingu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Porządkujemy formularze, źródła leadów i analitykę, dzięki czemu łatwiej ocenić jakość zapytań i realny wpływ kampanii na sprzedaż mieszkań."
      }
    }
  ]
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Strony internetowe dla deweloperów", url: PAGE_URL },
]);

const schemaData = [SERVICE_SCHEMA, FAQ_SCHEMA];

export default function DeveloperWebsitesPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <SubpageHero badges={["Usługa"]} title="Strony internetowe i system sprzedaży dla deweloperów">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Projektujemy strony internetowe dla inwestycji mieszkaniowych tak, aby realnie wspierały sprzedaż, zbierały leady i porządkowały komunikację wokół inwestycji.
        </p>
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Łączymy stronę inwestycji z <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors">CRM</Link>, formularzami, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-600 font-semibold hover:underline transition-colors">kampaniami reklamowymi</Link> i źródłami leadów, dzięki czemu zespół sprzedaży pracuje na aktualnych danych, a marketing widzi, co naprawdę działa.
        </p>
        <p className="font-inter text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <strong className="text-slate-900">Dla deweloperów, którzy chcą połączyć prezentację inwestycji z działającym systemem sprzedaży mieszkań.</strong>
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dla kogo</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Kiedy ta strona robi realną różnicę</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "deweloperzy sprzedający inwestycje mieszkaniowe",
                  "firmy uruchamiające nową inwestycję lub nowy etap sprzedaży",
                  "zespoły sprzedaży potrzebujące spójnego systemu leadów",
                  "organizacje, które chcą uporządkować prezentację inwestycji i proces kontaktu"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Zakres</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Z czym pomagamy</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "projektowanie i wdrożenia stron inwestycji mieszkaniowych",
                  "prezentacja inwestycji, mieszkań i materiałów sprzedażowych",
                  "formularze kontaktowe i leadowe zintegrowane z CRM",
                  "obsługa leadów z kampanii Google Ads, Meta Ads i portali",
                  "wdrożenia stron zgodnych z ustawą deweloperską i wymaganiami informacyjnymi",
                  "porządkowanie procesu raportowania i obsługi zapytań"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Problemy</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Najczęstsze problemy</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "strona inwestycji nie wspiera realnie sprzedaży",
                  "leady trafiają do różnych miejsc i giną po drodze",
                  "sprzedaż i marketing pracują na niespójnych danych",
                  "brakuje porządku w prezentacji oferty i materiałach informacyjnych",
                  "kampanii nie da się dobrze ocenić pod kątem jakości leadów"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Efekt</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Co zyskuje deweloper</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "czytelny system prezentacji inwestycji i oferty mieszkań",
                  "sprawniejszą obsługę leadów i szybszy kontakt ze sprzedażą",
                  "integrację strony z CRM i źródłami kampanii",
                  "większą kontrolę nad procesem pozyskiwania klientów",
                  "stabilne zaplecze technologiczne dla działań marketingowych"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Wyróżnik jako podwójnie szeroka karta na dole */}
            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col md:col-span-2">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Wyróżnik</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Nie budujemy tylko strony inwestycji</h2>
              <p className="font-inter text-slate-300 mb-6 leading-relaxed max-w-4xl">
                Tworzymy system sprzedaży inwestycji, który łączy prezentację oferty, formularze, <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">CRM</Link>, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-400 hover:text-blue-300 underline transition-colors">kampanie reklamowe</Link> i obsługę leadów w jeden spójny <Link to="/jak-pracujemy" className="text-blue-400 hover:text-blue-300 underline transition-colors">proces</Link>. Dzięki temu strona wspiera sprzedaż mieszkań, zamiast być tylko wizytówką projektu, a cały model może być rozwijany tak jak w naszych <Link to="/case-studies" className="text-blue-400 hover:text-blue-300 underline transition-colors">case studies</Link>.
              </p>
              <div className="mt-auto pt-6">
                <span className="text-slate-400 font-inter text-xs mb-3 uppercase tracking-widest font-semibold block">Powiązana usługa i case study:</span>
                <div className="flex flex-wrap gap-2">
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/case-studies/deweloper-integracja-sprzedazy">Case study</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/jak-pracujemy">Jak pracujemy</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-inter">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 tracking-tight">Pytania o strony internetowe dla deweloperów</h2>
          </div>
          <FAQAccordion items={FAQ_SCHEMA.mainEntity} />
        </div>
      </section>

      <SubpageContactSection
        title={"Porozmawiajmy o Twojej\nnowej stronie."}
        description="Napisz proszę w kilku słowach, co chcesz osiągnąć i jaki jest harmonogram inwestycji. Wracamy z konkretami w 24h."
        relatedLinks={[
          { label: "Kampanie", href: "/kampanie-digital-integracja-leadow-crm" },
          { label: "Case studies", href: "/case-studies" },
          { label: "Jak pracujemy", href: "/jak-pracujemy" },
        ]}
      />
    </div>
  );
}
