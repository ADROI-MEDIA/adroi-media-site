import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Porządkowanie ekosystemów marketingowych | ADROI MEDIA";
const PAGE_DESCRIPTION = "Porządkujemy ekosystemy marketingowe firm. Wykorzystujemy marketing i technologię, aby integrować zaawansowany CRM i budować skuteczne systemy sprzedaży.";
const PAGE_URL = "https://adroi-media.pl/porzadkowanie-srodowisk-marketingowych";

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
  name: "Porządkowanie ekosystemów marketingowych i wielu serwisów",
  provider: {
    "@type": "Organization",
    name: "ADROI MEDIA",
    url: "https://adroi-media.pl/",
  },
  url: PAGE_URL,
  areaServed: "PL",
  description: PAGE_DESCRIPTION,
  serviceType: [
    "porządkowanie ekosystemów marketingowych",
    "uporządkowanie wielu stron i serwisów",
    "porządkowanie danych marketingowych",
    "integracja kampanii, stron i systemów",
    "monitoring i kontrola środowiska marketingowego",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Co oznacza uporządkowanie ekosystemu marketingowego w praktyce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To połączenie stron, kampanii, źródeł danych, raportowania i procesów zespołowych w bardziej spójny system, który daje kontrolę nad działaniami i wynikami."
      }
    },
    {
      "@type": "Question",
      name: "Czy pomagacie przy wielu stronach i różnych zespołach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Pracujemy z organizacjami, które mają rozproszone serwisy, różne źródła leadów i kilka zespołów zaangażowanych w marketing, sprzedaż lub technologię."
      }
    },
    {
      "@type": "Question",
      name: "Czy trzeba budować wszystko od nowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Bardzo często porządkujemy istniejący ekosystem, poprawiamy strukturę, integracje i monitoring, bez konieczności pełnej przebudowy całego systemu."
      }
    },
    {
      "@type": "Question",
      name: "Jakie obszary najczęściej wymagają uporządkowania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej są to strony i landing page’e, oznaczenia kampanii, źródła leadów, raportowanie, integracje z CRM oraz odpowiedzialności pomiędzy zespołami."
      }
    },
    {
      "@type": "Question",
      name: "Czy taka usługa pomaga lepiej mierzyć skuteczność marketingu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Uporządkowany ekosystem ułatwia śledzenie jakości leadów, ocenę kampanii i podejmowanie decyzji na podstawie bardziej wiarygodnych danych."
      }
    }
  ]
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Porządkowanie ekosystemów marketingowych", url: PAGE_URL },
]);

const schemaData = [SERVICE_SCHEMA, FAQ_SCHEMA];

export default function MarketingEnvironmentsPage() {
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
      <SubpageHero badges={["Usługa"]} title="Porządkowanie ekosystemów marketingowych i wielu serwisów">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Pomagamy firmom uporządkować rozproszone ekosystemy marketingowe, <Link to="/strony-internetowe-dla-deweloperow" className="text-blue-600 font-semibold hover:underline">strony</Link>, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-600 font-semibold hover:underline">kampanie digital</Link> i dane tak, aby działały jak jeden spójny system wspierający decyzje biznesowe.
        </p>
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Porządkujemy strukturę serwisów, źródła danych, <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline">integracje leadów z CRM</Link> i proces raportowania, dzięki czemu marketing odzyskuje kontrolę, a zespoły przestają pracować w chaosie zgodnie z podejściem opisanym na stronie <Link to="/jak-pracujemy" className="text-blue-600 font-semibold hover:underline">jak pracujemy</Link>.
        </p>
        <p className="font-inter text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <strong className="text-slate-900">Dla organizacji, które mają wiele serwisów, kampanii, narzędzi i potrzebują jednego uporządkowanego ekosystemu.</strong>
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dla kogo</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Kiedy ten porządek daje największy efekt</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "firmy zarządzające wieloma stronami i landing page’ami",
                  "organizacje z rozbudowanymi kampaniami i wieloma źródłami danych",
                  "zespoły marketingowe pracujące na kilku systemach jednocześnie",
                  "firmy, które chcą odzyskać kontrolę nad danymi i procesem raportowania"
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
                  "audyt i porządkowanie wielu serwisów oraz landing page’y",
                  "uporządkowanie kampanii, źródeł leadów i punktów styku z użytkownikiem",
                  "porządkowanie danych, oznaczeń, monitoringu i raportowania",
                  "integracje pomiędzy stronami, CRM, analityką i narzędziami marketingowymi",
                  "uporządkowanie procesów współpracy między marketingiem, sprzedażą i IT"
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
                  "różne zespoły pracują na niespójnych danych",
                  "strony, kampanie i raporty nie są ze sobą logicznie połączone",
                  "brakuje jednego obrazu skuteczności działań marketingowych",
                  "część procesów działa ręcznie i jest podatna na błędy",
                  "nikt nie ma pełnej kontroli nad całym ekosystemem"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Efekt</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Co zyskuje firma</h2>
              <ul className="space-y-4 text-slate-300 font-inter">
                {[
                  "jedno bardziej spójne środowisko marketingowe",
                  "lepszą kontrolę nad danymi, źródłami leadów i raportami",
                  "mniej ręcznej pracy i mniej operacyjnego chaosu",
                  "większą przewidywalność działań marketingowych",
                  "czytelniejszą współpracę między marketingiem, sprzedażą i IT"
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Wyróżnik jako podwójnie szeroka karta na dole */}
            <div className="p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative flex flex-col md:col-span-2">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Wyróżnik</span>
              <h2 className="text-2xl font-bold mb-6 font-sora">Nie dokładamy kolejnych narzędzi do chaosu</h2>
              <p className="font-inter text-slate-300 mb-6 leading-relaxed max-w-4xl">
                Porządkujemy ekosystem marketingowy jako całość: strony, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-400 hover:text-blue-300 underline transition-colors">kampanie reklamowe</Link>, dane, <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">integracje z systemami CRM</Link> i <Link to="/jak-pracujemy" className="text-blue-400 hover:text-blue-300 underline transition-colors">sposób pracy zespołów</Link>. Dzięki temu firma odzyskuje system, kontrolę i spójny proces zamiast kolejnych rozproszonych rozwiązań.
              </p>
              <div className="mt-auto pt-6">
                <span className="text-slate-400 font-inter text-xs mb-3 uppercase tracking-widest font-semibold block">Powiązane usługi:</span>
                <div className="flex flex-wrap gap-2">
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 tracking-tight">Pytania o porządkowanie ekosystemów marketingowych</h2>
          </div>
          <FAQAccordion items={FAQ_SCHEMA.mainEntity} />
        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz połączyć kampanie digital z CRM\ni procesem sprzedaży?"}
        description="Opisz, jak dziś działają kampanie, formularze i przekazywanie leadów. Wrócimy z konkretną rekomendacją, jak uporządkować cały proces."
        relatedLinks={[
          { label: "Deweloperzy", href: "/strony-internetowe-dla-deweloperow" },
          { label: "Case studies", href: "/case-studies" },
          { label: "Jak pracujemy", href: "/jak-pracujemy" },
        ]}
      />
    </div>
  );
}
