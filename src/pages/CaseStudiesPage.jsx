import { useEffect } from "react";
import { Link } from "react-router-dom";
import SubpageContactSection from "../components/SubpageContactSection";
import SubpageHero from "../components/SubpageHero";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Case Studies | ADROI MEDIA";
const PAGE_DESCRIPTION = "Zobacz case studies ADROI MEDIA. Pokazujemy, jak łączymy marketing i technologię. Budujemy skuteczne systemy sprzedaży i wdrażamy zaawansowany CRM.";
const PAGE_URL = "https://adroi-media.pl/case-studies";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
};
const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Case studies", url: PAGE_URL },
]);

export default function CaseStudiesPage() {
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
      <SubpageHero badges={["Case studies"]} title="Case studies">
        <p className="font-inter text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Wybrane przykłady wdrożeń pokazujące, jak porządkujemy <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors">leady</Link>, <Link to="/integracje-crm-automatyzacja-leadow" className="text-blue-600 font-semibold hover:underline transition-colors">CRM</Link> i <Link to="/jak-pracujemy" className="text-blue-600 font-semibold hover:underline transition-colors">procesy sprzedażowe</Link> w ekosystemach o większej złożoności.
        </p>
      </SubpageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="srOnly">Lista case studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* KARTA 1 */}
            <div className="block p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 group relative flex flex-col">
              <Link to="/case-studies/integracja-leadow-crm" className="absolute inset-0 z-0" aria-label="Zobacz case study: Integracja leadów CRM"></Link>
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block relative z-10">Dynamics CRM</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sora group-hover:text-blue-400 transition-colors relative z-10">Integracja leadów CRM</h3>
              <p className="font-inter text-slate-300 leading-relaxed mb-10 flex-grow text-lg relative z-10">
                Jak zintegrowaliśmy <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leady</Link> z <Link to="/kampanie-digital-integracja-leadow-crm" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">kampanii</Link> i wielu źródeł z <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">CRM Microsoft Dynamics</Link>, tworząc spójny system kontroli zapytań.
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-sm font-bold text-blue-400 uppercase tracking-widest relative z-10 pointer-events-none">
                <span>Zobacz case study</span>
                <span className="group-hover:translate-x-2 transition-transform text-xl leading-none">→</span>
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="block p-8 md:p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 group relative flex flex-col">
              <Link to="/case-studies/deweloper-integracja-sprzedazy" className="absolute inset-0 z-0" aria-label="Zobacz case study: Sprzedaż inwestycji"></Link>
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block relative z-10">Deweloperzy</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sora group-hover:text-blue-400 transition-colors relative z-10">Sprzedaż inwestycji</h3>
              <p className="font-inter text-slate-300 leading-relaxed mb-10 flex-grow text-lg relative z-10">
                Jak uporządkowaliśmy <Link to="/jak-pracujemy" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">proces sprzedaży</Link> inwestycji i zwiększyliśmy kontrolę nad <Link to="/integracje-crm-automatyzacja-leadow" className="text-white hover:text-blue-400 underline decoration-white/30 hover:decoration-blue-400 transition-colors duration-200">leadami</Link>, integracjami oraz współpracą marketingu ze sprzedażą.
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-sm font-bold text-blue-400 uppercase tracking-widest relative z-10 pointer-events-none">
                <span>Zobacz case study</span>
                <span className="group-hover:translate-x-2 transition-transform text-xl leading-none">→</span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center text-center">
            <span className="text-slate-400 font-inter text-sm mb-6 uppercase tracking-widest font-semibold block">Powiązane usługi:</span>
            <div className="flex flex-wrap justify-center gap-3">
              <Link className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-all" to="/integracje-crm-automatyzacja-leadow">CRM</Link>
              <Link className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-all" to="/porzadkowanie-srodowisk-marketingowych">Ekosystemy</Link>
              <Link className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-all" to="/kampanie-digital-integracja-leadow-crm">Kampanie</Link>
              <Link className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 transition-all" to="/jak-pracujemy">Jak pracujemy</Link>
            </div>
          </div>
        </div>
      </section>

      <SubpageContactSection
        title={"Chcesz podobny efekt\nw swojej firmie?"}
        description="Wybierz interesujący Cię obszar i napisz, co możemy dla Ciebie policzyć lub usprawnić. Wracamy z konkretami w 24h."
        relatedLinks={[
          { label: "CRM", href: "/integracje-crm-automatyzacja-leadow" },
          { label: "Kampanie", href: "/kampanie-digital-integracja-leadow-crm" },
          { label: "Jak pracujemy", href: "/jak-pracujemy" },
        ]}
      />
    </div>
  );
}
