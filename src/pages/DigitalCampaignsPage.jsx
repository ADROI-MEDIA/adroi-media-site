import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Kampanie digital i integracja leadów z CRM | ADROI MEDIA";
const PAGE_DESCRIPTION = "Prowadzimy skuteczne kampanie digital. Łączymy marketing i technologię, integrując leady z CRM. Budujemy przewidywalne systemy sprzedaży dla Twojej firmy.";
const PAGE_URL = "https://adroi-media.pl/kampanie-digital-integracja-leadow-crm";

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
  name: "Kampanie digital i integracja leadów z CRM",
  provider: {
    "@type": "Organization",
    name: "ADROI MEDIA",
    url: "https://adroi-media.pl/",
  },
  url: PAGE_URL,
  areaServed: "PL",
  description: PAGE_DESCRIPTION,
  serviceType: [
    "kampanie Google Ads",
    "kampanie Meta Ads",
    "kampanie LinkedIn Ads",
    "integracja leadów z CRM",
    "automatyzacja przekazywania leadów",
    "raportowanie skuteczności kampanii",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy Facebook Lead Ads można zintegrować bezpośrednio z CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Integrujemy formularze Lead Ads z CRM tak, aby lead trafiał automatycznie do właściwego procesu i nie zatrzymywał się wyłącznie w panelu reklamowym."
      }
    },
    {
      "@type": "Question",
      name: "Czy Google Ads powinno działać razem z landing page’ami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Kampanie Google Ads osiągają najlepsze wyniki, gdy prowadzą do dopasowanych landing page’y z właściwymi formularzami, analityką i integracją z CRM."
      }
    },
    {
      "@type": "Question",
      name: "Czy LinkedIn Ads sprawdza się w działaniach B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. LinkedIn Ads może być skutecznym kanałem B2B, jeśli jest dobrze spięty z procesem leadowym, CRM i sposobem oceny jakości kontaktów."
      }
    },
    {
      "@type": "Question",
      name: "Czy pomagacie w raportowaniu jakości leadów i skuteczności kampanii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Porządkujemy dane, źródła leadów i raportowanie tak, aby łatwiej ocenić jakość kontaktów oraz realny wpływ kampanii na sprzedaż."
      }
    },
    {
      "@type": "Question",
      name: "Czy można poprawić istniejący proces bez budowy wszystkiego od nowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Często porządkujemy istniejące kampanie, formularze i integracje, wzmacniając działający proces bez konieczności pełnej przebudowy całego systemu."
      }
    }
  ]
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Kampanie digital i integracja leadów z CRM", url: PAGE_URL },
]);

const schemaData = [SERVICE_SCHEMA, FAQ_SCHEMA];

export default function DigitalCampaignsPage() {
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
      <SubpageHero badges={["Usługa"]} title="Kampanie digital i integracja leadów z CRM">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Pomagamy firmom prowadzić kampanie digitalowe w taki sposób, aby leady nie kończyły się na panelu reklamowym, ale trafiały do uporządkowanego <Link to="/jak-pracujemy" className="text-blue-600 font-semibold hover:underline transition-colors">procesu sprzedaży</Link>.
        </p>
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Łączymy Google Ads, Meta Ads, LinkedIn Ads, formularze Lead Ads, <Link to="/strony-internetowe-dla-deweloperow" className="text-blue-600 font-semibold hover:underline transition-colors">landing pages</Link> i <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors">CRM</Link> w jeden spójny system, który daje realną kontrolę nad skutecznością działań.
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
                  "kampanie Google Ads",
                  "kampanie Meta Ads i Facebook Lead Ads",
                  "kampanie LinkedIn Ads",
                  "kampanie display i mobile",
                  "landing pages i formularze pod kampanie",
                  "integracje leadów z CRM",
                  "automatyzacja przekazywania leadów",
                  "mierzalność i raportowanie skuteczności"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Problemy</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Najczęstsze problemy</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "leady zostają w panelu reklamowym",
                  "formularze Lead Ads nie są spięte z CRM",
                  "kampanie generują kontakty, ale sprzedaż ich nie widzi",
                  "trudno ocenić jakość leadów i skuteczność źródeł",
                  "marketing i sprzedaż pracują na innych danych",
                  "raportowanie nie pokazuje realnego wpływu na sprzedaż"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Efekt</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Co zyskuje firma</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "szybkie przekazywanie leadów do sprzedaży",
                  "pełną kontrolę nad źródłami leadów",
                  "większą mierzalność kampanii",
                  "mniej ręcznej pracy",
                  "lepszą jakość procesu sprzedaży",
                  "spójne połączenie marketingu i CRM"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Wyróżnik</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Nie prowadzimy kampanii w oderwaniu od procesu sprzedaży</h2>
              <p className="font-inter text-slate-300 mb-6 leading-relaxed">
                Łączymy kampanie, formularze, strony i <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">CRM</Link> tak, aby lead trafiał dokładnie tam, gdzie powinien — szybko, automatycznie i w pełni mierzalnie, bez chaosu charakterystycznego dla nieuporządkowanych <Link to="/porzadkowanie-srodowisk-marketingowych" className="text-blue-400 hover:text-blue-300 underline transition-colors">ekosystemów marketingowych</Link>.
              </p>
              <div className="mt-auto pt-6">
                <span className="text-slate-400 font-inter text-xs mb-3 uppercase tracking-widest font-semibold block">Powiązane usługi:</span>
                <div className="flex flex-wrap gap-2">
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/porzadkowanie-srodowisk-marketingowych">Ekosystemy</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 tracking-tight">Pytania o kampanie digital i integrację leadów z CRM</h2>
          </div>
          <FAQAccordion items={FAQ_SCHEMA.mainEntity} />
        </div>
      </section>

      <SubpageContactSection
        title={"Zróbmy kampanię,\nktóra realnie dowozi."}
        description="Podaj proszę cel kampanii i grupę docelową. Dobierzemy narzędzia i zintegrujemy je z Twoim systemem. Wrócimy z konkretami w 24h."
        relatedLinks={[
          { label: "Integracje CRM", href: "/integracje-crm-automatyzacja-leadow" },
          { label: "Deweloperzy", href: "/strony-internetowe-dla-deweloperow" },
          { label: "Case studies", href: "/case-studies" },
        ]}
      />
    </div>
  );
}
