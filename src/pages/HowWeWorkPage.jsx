import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Jak pracujemy | ADROI MEDIA";
const PAGE_DESCRIPTION = "Zobacz, jak pracujemy. Wspólnie łączymy marketing i technologię, aby tworzyć wydajne systemy sprzedaży. Wdrażamy CRM, skutecznie eliminując chaos w firmie.";
const PAGE_URL = "https://adroi-media.pl/jak-pracujemy";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy zaczynacie od kampanii, strony czy CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To zależy od problemu. Najpierw diagnozujemy, gdzie naprawdę pojawia się chaos i co blokuje sprzedaż, a dopiero potem ustalamy kolejność działań."
      }
    },
    {
      "@type": "Question",
      name: "Czy możecie pracować na istniejącym ekosystemie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Bardzo często porządkujemy istniejące strony, kampanie, formularze i CRM, zamiast budować wszystko od nowa."
      }
    },
    {
      "@type": "Question",
      name: "Czy współpracujecie z zespołem klienta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Możemy działać zarówno samodzielnie, jak i wspólnie z marketingiem, sprzedażą oraz działem IT po stronie klienta."
      }
    },
    {
      "@type": "Question",
      name: "Czy zajmujecie się tylko technologią albo tylko marketingiem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Naszą przewagą jest właśnie połączenie technologii, marketingu i procesu sprzedaży w jeden spójny model działania."
      }
    }
  ]
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Jak pracujemy", url: PAGE_URL },
]);

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Porządkowanie marketingu i technologii",
    description: PAGE_DESCRIPTION,
    provider: { "@type": "Organization", name: "ADROI MEDIA" },
    areaServed: "PL"
  },
  FAQ_SCHEMA
];

export default function HowWeWorkPage() {
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
      <SubpageHero badges={["JAK PRACUJEMY"]} title="Jak łączymy marketing, technologię i sprzedaż">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Pomagamy firmom uporządkować marketing, technologię i proces sprzedaży tak, aby działały jako jeden spójny system.
        </p>
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Nie dokładamy kolejnych narzędzi i warstw chaosu. Porządkujemy ekosystem, integrujemy kluczowe elementy i wdrażamy rozwiązania, które realnie wspierają sprzedaż.
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Krok 01 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">01</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Podejście</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Zaczynamy od całości, nie od pojedynczego narzędzia</h2>
              <div className="font-inter text-slate-300 text-base leading-relaxed flex-grow space-y-4">
                <p>W wielu firmach problem nie leży w <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-400 hover:text-blue-300 underline transition-colors">jednej kampanii</Link>, jednym formularzu czy jednym systemie. Problemem jest brak spójności między marketingiem, technologią i sprzedażą.</p>
                <p>Dlatego patrzymy na cały proces: od źródła leada, przez <Link to="/strony-internetowe-dla-deweloperow" className="text-blue-400 hover:text-blue-300 underline transition-colors">stronę i formularze</Link>, po <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">CRM</Link>, raportowanie i obsługę zapytania.</p>
              </div>
            </div>

            {/* Krok 02 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">02</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Partnerstwo</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Pracujemy jak partner wdrożeniowy</h2>
              <ul className="space-y-4 text-slate-300 font-inter text-base flex-grow">
                {[
                  "analizujemy, gdzie realnie pojawia się chaos",
                  "identyfikujemy wąskie gardła w procesie",
                  "upraszczamy ekosystem zamiast go komplikować",
                  "łączymy marketing, technologię i sprzedaż",
                  "wdrażamy rozwiązania, które można rozwijać i skalować"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Krok 03 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">03</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Praktyka</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Co to oznacza w praktyce</h2>
              <ul className="space-y-4 text-slate-300 font-inter text-base flex-grow">
                {[
                  "strony i landing pages są przygotowane pod sprzedaż, nie tylko pod wygląd",
                  "leady trafiają do właściwego miejsca i nie giną po drodze",
                  "kampanie można realnie rozliczyć z jakości i skuteczności",
                  "CRM otrzymuje uporządkowane dane",
                  "marketing, sprzedaż i IT pracują na jednym procesie, a nie obok siebie"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Krok 04 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">04</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Pozycjonowanie</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Nie jesteśmy klasyczną agencją</h2>
              <div className="font-inter text-slate-300 text-base leading-relaxed flex-grow space-y-4">
                <p>Łączymy kompetencje technologiczne, wdrożeniowe i performance marketingowe.</p>
                <p>Dzięki temu nie kończymy pracy na <Link to="/kampanie-digital-integracja-leadow-crm" className="text-blue-400 hover:text-blue-300 underline transition-colors">uruchomieniu kampanii</Link>, wdrożeniu strony albo <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">integracji systemu</Link>. Spinamy te elementy w całość, która ma wspierać wynik biznesowy, co dobrze widać także w naszych <Link to="/case-studies" className="text-blue-400 hover:text-blue-300 underline transition-colors">case studies</Link>.</p>
              </div>
            </div>

            {/* Krok 05 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">05</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Najczęściej wspieramy</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Gdzie ten model daje największą wartość</h2>
              <ul className="space-y-4 text-slate-300 font-inter text-base flex-grow">
                {[
                  "firmy sprzedające inwestycje mieszkaniowe i deweloperskie",
                  "organizacje z wieloma stronami i rozbudowanym zapleczem marketingowym",
                  "firmy, które chcą połączyć kampanie, leady i CRM w jeden proces",
                  "zespoły, które potrzebują uporządkowania ekosystemu bez budowy wszystkiego od zera"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Krok 06 */}
            <div className="bg-[#0a1120] p-10 rounded-[32px] shadow-xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-slate-700/50 group-hover:text-blue-500 transition-colors duration-300">06</div>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">Skala</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-sora text-white pr-16">Najpierw porządek, potem skala</h2>
              <div className="font-inter text-slate-300 text-base leading-relaxed flex-grow space-y-4 mb-8">
                <p>Największą wartość dają nie kolejne narzędzia, ale dobrze ułożony system.</p>
                <p>Dlatego najpierw porządkujemy proces, dane i <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-400 hover:text-blue-300 underline transition-colors">integracje</Link>, a dopiero potem pomagamy go rozwijać, skalować i mierzyć.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10">
                <span className="text-slate-400 font-inter text-xs mb-3 uppercase tracking-widest font-semibold block">Powiązane usługi:</span>
                <div className="flex flex-wrap gap-2">
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
                  <Link className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-slate-200 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" to="/porzadkowanie-srodowisk-marketingowych">Ekosystemy</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 tracking-tight">Najczęściej zadawane pytania</h2>
          </div>
          <FAQAccordion items={FAQ_SCHEMA.mainEntity} />
        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz wdrożyć ten\nproces u siebie?"}
        description="Jeśli podoba Ci się nasze podejście, napisz proszę, od czego chciałbyś zacząć porządkowanie technologii. Wracamy z konkretami w 24h."
        relatedLinks={[
          { label: "Kampanie", href: "/kampanie-digital-integracja-leadow-crm" },
          { label: "Deweloperzy", href: "/strony-internetowe-dla-deweloperow" },
          { label: "Ekosystemy", href: "/porzadkowanie-srodowisk-marketingowych" },
          { label: "Case studies", href: "/case-studies" },
          { label: "CRM", href: "/integracje-crm-automatyzacja-leadow" },
          { label: "Case CRM", href: "/case-studies/integracja-leadow-crm" },
          { label: "Case deweloperski", href: "/case-studies/deweloper-integracja-sprzedazy" },
        ]}
      />
    </div>
  );
}
