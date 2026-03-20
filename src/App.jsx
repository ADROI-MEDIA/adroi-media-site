import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import "./index.css";
import marcinPhoto from "./assets/marcin.png";
import logoSvg from "./assets/logo.svg";
import bpi from "./assets/clients/bpi.png";
import cemex from "./assets/clients/Cemex.png";
import cfe from "./assets/clients/cfe.png";
import chicco from "./assets/clients/Chicco.png";
import datPolska from "./assets/clients/DAT_POLSKA.png";
import dfMedica from "./assets/clients/DF_Medica.png";
import domowaApteczka from "./assets/clients/domowa_apteczka.png";
import farbex from "./assets/clients/FARBEX.png";
import ibis from "./assets/clients/Ibis.png";
import infinityMedia from "./assets/clients/infinity_media.png";
import cavallia from "./assets/clients/CAVALLIA.png";
import kross from "./assets/clients/kross.png";
import leSpa from "./assets/clients/LeSpa.png";
import mamSerce from "./assets/clients/mam_serce.png";
import ministerstwoCyfryzacji from "./assets/clients/ministerstwo_cyfryzacji.png";
import mosso from "./assets/clients/MOSSO.png";
import novotel from "./assets/clients/Novotel.png";
import obi from "./assets/clients/OBI.png";
import pkpIntercity from "./assets/clients/PKP_InterCity.png";
import rofood from "./assets/clients/ROFOOD.png";
import revive from "./assets/clients/revive.png";
import sos from "./assets/clients/sos.png";
import intel from "./assets/clients/Intel.png";
import jwconstruction from "./assets/clients/jwconstruction.png";
import xtb from "./assets/clients/XTB.png";
import electro from "./assets/clients/electro.png";
import somfy from "./assets/clients/Somfy.png";
import trawena from "./assets/clients/trawena.png";
import vipera from "./assets/clients/vipera.png";
import wan from "./assets/clients/WAN.png";
import agniezka from "./assets/testimonials/agniezka.png";
import daria from "./assets/testimonials/daria.png";
import magdalena from "./assets/testimonials/magdalena.png";
import karolina from "./assets/testimonials/karolina.png";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CrmLeadAutomationPage from "./pages/CrmLeadAutomationPage";
import DeveloperWebsitesPage from "./pages/DeveloperWebsitesPage";
import MarketingEnvironmentsPage from "./pages/MarketingEnvironmentsPage";
import DigitalCampaignsPage from "./pages/DigitalCampaignsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import Faq from "./components/Faq";
import CrmLeadIntegrationCase from "./pages/case-studies/CrmLeadIntegrationCase";
import DeveloperSalesCase from "./pages/case-studies/DeveloperSalesCase";
import NotFound from "./pages/NotFound";

const EMAIL = "kontakt@adroi-media.pl";

const MAILTO_LINK = "mailto:kontakt@adroi-media.pl?subject=Zapytanie%20-%20CRM%20%2F%20kampanie&body=Dzi%C4%99ki%20za%20wiadomo%C5%9B%C4%87%20%F0%9F%99%82%0A%0A%C5%BBeby%C5%9Bmy%20mogli%20szybko%20zrozumie%C4%87%20Twoj%C4%85%20sytuacj%C4%99%20i%20zaproponowa%C4%87%20konkretne%20rozwi%C4%85zanie%2C%20napisz%20prosz%C4%99%20w%20kilku%20zdaniach%3A%0A%0ACo%20chcesz%20osi%C4%85gn%C4%85%C4%87%3F%0A%0ACo%20dzi%C5%9B%20nie%20dzia%C5%82a%20lub%20gdzie%20pojawia%20si%C4%99%20chaos%3F%0A%0AZ%20jakich%20narz%C4%99dzi%20%2F%20system%C3%B3w%20korzystasz%20(je%C5%9Bli%20wiesz)%3F%0A%0AJe%C5%9Bli%20masz%20link%20do%20strony%2C%20kampanii%20albo%20inne%20materia%C5%82y%20%E2%80%94%20pode%C5%9Blij.%0A%0AZwykle%20odpowiadamy%20w%20ci%C4%85gu%2024h%20i%20wracamy%20z%20konkretn%C4%85%20rekomendacj%C4%85%20kolejnych%20krok%C3%B3w.";

const CLIENTS = [
  { name: "BPI", logo: bpi }, { name: "Cemex", logo: cemex }, { name: "CFE", logo: cfe },
  { name: "Chicco", logo: chicco }, { name: "DAT Polska", logo: datPolska },
  { name: "DF Medica", logo: dfMedica }, { name: "Domowa Apteczka", logo: domowaApteczka },
  { name: "FarBex", logo: farbex }, { name: "Ibis", logo: ibis },
  { name: "Infinity Media", logo: infinityMedia }, { name: "Cavallia", logo: cavallia },
  { name: "Kross", logo: kross }, { name: "LeSpa", logo: leSpa },
  { name: "Mam Serce", logo: mamSerce }, { name: "Ministerstwo Cyfryzacji", logo: ministerstwoCyfryzacji },
  { name: "MOSSO", logo: mosso }, { name: "Novotel", logo: novotel },
  { name: "OBI", logo: obi }, { name: "PKP Intercity", logo: pkpIntercity },
  { name: "ROFOOD", logo: rofood }, { name: "Somfy", logo: somfy },
  { name: "Trawena", logo: trawena }, { name: "Vipera", logo: vipera },
  { name: "WAN", logo: wan }, { name: "Revive", logo: revive },
  { name: "SOS", logo: sos }, { name: "Intel", logo: intel },
  { name: "JW Construction", logo: jwconstruction }, { name: "XTB", logo: xtb },
  { name: "Electro", logo: electro }
];

const NAV_ITEMS = [
  { label: "CRM", href: "/integracje-crm-automatyzacja-leadow" },
  { label: "Kampanie", href: "/kampanie-digital-integracja-leadow-crm" },
  { label: "Deweloperzy", href: "/strony-internetowe-dla-deweloperow" },
  { label: "Ekosystemy", href: "/porzadkowanie-srodowisk-marketingowych" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Jak pracujemy", href: "/jak-pracujemy" },
];

const HOME_FAQ_ITEMS = [
  { question: "Jak ADROI MEDIA pomaga uporządkować marketing i technologię?", answer: "ADROI MEDIA łączy działania marketingowe z technologią, integrując strony www, CRM, źródła leadów oraz narzędzia analityczne v jeden spójny system." },
  { question: "Czy pomagacie w integracji CRM?", answer: "Tak, specjalizujemy się w integracjach CRM z formularzami, portalami ogłoszeniowymi oraz kampaniami reklamowymi." },
  { question: "Dla jakich firm pracuje ADROI MEDIA?", answer: "Wspieramy firmy sprzedające inwestycje mieszkaniowe i deweloperskie oraz organizacje zarządzające rozbudowanymi ekosystemami." },
  { question: "Czy zajmujecie się tylko marketingiem?", answer: "Nie. Naszą przewagą jest połączenie kompetencji marketingowych i technologicznych (wdrożenia stron, automatyzacje, cybersecurity)." },
  { question: "Czy możecie poprawić istniejący system?", answer: "Tak, bardzo często porządkujemy istniejące ekosystemy – analizujemy problemy i poprawiamy integracje bez budowy wszystkiego od zera." }
];

const TESTIMONIALS = [
  {
    companyKicker: "BPI REAL ESTATE POLAND",
    quote: "„Współpracujemy z AdROI od lipca 2014 roku i muszę przyznać, że była to bardzo dobra decyzja. Pracowaliśmy wcześniej z wieloma firmami, jednak dopiero AdROI w pełni spełniło nasze oczekiwania. Zespół działa z dużym zaangażowaniem, szybko reaguje na bieżące potrzeby, doradza i stale śledzi zmiany w marketingu. Stały kontakt, profesjonalizm i wiedza dają nam poczucie kontroli oraz pewność, że nasze działania marketingowe są w dobrych rękach.”",
    avatar: daria, name: "Daria Małecka", role: "Marketing Manager", company: "BPI Real Estate Poland", note: "rekomendacja z okresu współpracy"
  },
  {
    companyKicker: "INFINITY MEDIA",
    quote: "„Współpracujemy z AdROI od 2013 roku. Niezależnie od tego, czy kampania ma charakter międzynarodowy, czy lokalny, zespół zawsze podchodzi do niej z dużym zaangażowaniem. Wielokrotnie potwierdzili swoje kompetencje, wiedzę i zaangażowanie, co przełożyło się na lepsze wyniki prowadzonych kampanii. Nawet pracując pod presją czasu, zawsze dotrzymują ustalonych terminów.”",
    avatar: magdalena, name: "Magdalena Kaczor", role: "Interactive Media Director", company: "Infinity Media", note: "rekomendacja z okresu współpracy"
  },
  {
    companyKicker: "SOS WIOSKI DZIECIĘCE",
    quote: "„Współpracowaliśmy z AdROI przy realizacji kampanii świątecznej. Zespół wykazał się bardzo dobrym zrozumieniem naszych potrzeb marketingowych oraz pełnym profesjonalizmem. Wszystkie działania zostały zrealizowane terminowo. Dzięki współpracy osiągnęliśmy lepsze wyniki niż w roku poprzednim.”",
    avatar: karolina, name: "Karolina Kamińska", role: "Corporate FR Manager", company: "SOS Wioski Dziecięce", note: "rekomendacja z realizacji kampanii"
  },
  {
    companyKicker: "REVIVE POLAND",
    quote: "„Współpracujemy z ADROI od kilku lat — od wdrożenia strony, przez integracje CRM, po bieżącą obsługę i rozwój. Wszystko realizowane jest konkretnie i sprawnie, bez zbędnych iteracji i chaosu. Dzięki temu marketing i sprzedaż mogą skupić się na swoich celach, mając pewność, że technologia je wspiera, a nie blokuje. Dodatkowo to rzadkie połączenie kompetencji programistycznych z praktycznym doświadwzeniem w performance marketingu.”",
    avatar: agniezka, name: "Agnieszka Jaworska", role: "Marketing & Sales Manager", company: "REVIVE Poland", note: "rekomendacja z okresu współpracy"
  }
];

// --- TYPEWRITER ---
function SafeTypewriter({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="relative">
      {displayedText}
      <span className="inline-block w-[3px] h-[0.9em] bg-blue-600 ml-2 translate-y-1 animate-pulse"></span>
    </span>
  );
}

// --- KOMPONENTY POMOCNICZE ---
function Icon({ name }) {
  const css = "w-6 h-6 text-slate-900";
  if (name === "bolt") return <svg className={css} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  if (name === "shield") return <svg className={css} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
  if (name === "link") return <svg className={css} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
  if (name === "target") return <svg className={css} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
  if (name === "chart") return <svg className={css} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5M8 13v3m7 4H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>;
  return null;
}

function Section({ id, kicker, title, children, bg = "bg-white" }) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{kicker}</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 font-inter antialiased">
      <div className="max-w-7xl mx-auto flex h-24 items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoSvg} alt="ADROI MEDIA" className="h-14 w-auto object-contain [image-rendering:-webkit-optimize-contrast] transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <nav className="hidden md:flex gap-x-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="hidden md:block bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-100">
          Wyślij brief
        </a>

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-8 shadow-2xl absolute w-full left-0">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#kontakt" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-slate-900 text-white px-7 py-3.5 mt-4 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg text-center"
            >
              Wyślij brief
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  useEffect(() => {
    document.title = "Systemy sprzedaży, marketing i technologia | ADROI MEDIA";

    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const desc = "Połącz marketing i technologię w sprawnie działające systemy sprzedaży. Wdrażamy automatyzacje oraz zaawansowany CRM, aby trwale eliminować Twój chaos.";
    
    setMetaTag("name", "description", desc);
    setMetaTag("property", "og:title", "Systemy sprzedaży, marketing i technologia | ADROI MEDIA");
    setMetaTag("property", "og:description", desc);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:image", "https://adroi-media.pl/og-image.jpg"); // Podmień na link do faktycznego zdjęcia biura/logo
    setMetaTag("name", "twitter:card", "summary_large_image");
  }, []);

  return (
      <main>
        {/* HERO */}
        <section className="pt-48 pb-24 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2 mb-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {["+15 lat doświadczenia", "Integracje • CRM • Webhook", "Stabilność • Cybersecurity"].map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100">{t}</span>
              ))}
            </div>
            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-slate-900 max-w-5xl mx-auto min-h-[3em] md:min-h-0">
              <SafeTypewriter text="Porządkujemy technologię i marketing, aby realnie poprawiały wyniki biznesowe." />
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Integrujemy systemy, stabilizujemy operacje marketingowe i sprawiamy, że wyniki stają się w końcu mierzalne.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
              <a href="#kontakt" className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-slate-200 text-center">Umów rozmowę</a>
              <a href="#proces" className="bg-white border-2 border-slate-100 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all text-center">Zobacz proces</a>
            </div>
          </div>
        <div className="w-full py-12 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-left md:text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wybrane marki, które wspieraliśmy</div>
            <div className="flex animate-marquee whitespace-nowrap items-center">
              <div className="flex gap-16 pr-16 shrink-0 items-center">
                {CLIENTS.map((c, i) => (
                  <img key={`logo-1-${i}`} src={c.logo} alt={`Logotyp firmy ${c.name} - Klient ADROI MEDIA`} decoding="async" className="h-9 md:h-11 grayscale opacity-40 hover:opacity-100 transition-all duration-500 object-contain shrink-0" />
                ))}
              </div>
              <div className="flex gap-16 pr-16 shrink-0 items-center" aria-hidden="true">
                {CLIENTS.map((c, i) => (
                  <img key={`logo-2-${i}`} src={c.logo} alt={`Logotyp firmy ${c.name} - Klient ADROI MEDIA`} decoding="async" className="h-9 md:h-11 grayscale opacity-40 hover:opacity-100 transition-all duration-500 object-contain shrink-0" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DLACZEGO */}
        <Section kicker="Dlaczego my" title="Marketing i technologia działające jak jeden system">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all h-full text-left">
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <Icon name="shield" />
              </div>
              <h3 className="text-xl font-bold font-sora mb-3 text-slate-900 leading-tight">Senior-only delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bez juniorów na koncie. Szybko diagnozujemy, wdrażamy i stabilizujemy ekosystem.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all h-full text-left">
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <Icon name="link" />
              </div>
              <h3 className="text-xl font-bold font-sora mb-3 text-slate-900 leading-tight">Integracje i architektura</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Spinamy stronę, formularze, <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-500 hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">CRM</Link> i dane w jeden przewidywalny przepływ <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-500 hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">leadów</Link>.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all h-full text-left">
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <Icon name="target" />
              </div>
              <h3 className="text-xl font-bold font-sora mb-3 text-slate-900 leading-tight">Spokój i kontrola</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Wiesz co działa, a co nie — bez magii i niejasnych raportów.</p>
            </div>
          </div>
        </Section>

        {/* USŁUGI */}
        <Section id="uslugi" kicker="Usługi" title="W czym możemy wesprzeć Twoją firmę" bg="bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[ {i: "link", t: "Integracje / Automated", d: <>Make / Webhooki / <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">CRM</Link>. Mapowanie formularzy i automatyzacja <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">leadów</Link>.</>, p: ["CRM", "Make"]}, {i: "chart", t: "Strony / Landingi", d: "Zorientowane na cel biznesowy. Szybki hosting i UX.", p: ["UX", "Szybkość"]}, {i: "shield", t: "Infrastruktura IT", d: "Bezpieczeństwo WWW, aktualizacje i kopie zapasowe.", p: ["Cybersecurity", "Backup"]}, {i: "target", t: "Tracking & Analityka", d: "GA4, GTM, konwersje, atrybucja. Porządek w danych pod decyzje.", p: ["GA4", "GTM"]}, {i: "bolt", t: "Google Ads", d: <>Performance, gdy ma sens. Pełna kontrola jakości <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">leadów</Link>.</>, p: ["Search", "PMax"]}, {i: "chart", t: "Meta Ads", d: <><Link to="/kampanie-digital-integracja-leadow-crm" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">Kampanie</Link> i <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">leady</Link> zintegrowane z Twoim <Link to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 underline decoration-slate-200 hover:decoration-blue-500 transition-colors">CRM</Link> w czasie rzeczywistym.</>, p: ["Lead Ads", "CAPI"]} ].map((us, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group h-full flex flex-col">
                <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                  <Icon name={us.i} />
                </div>
                <h3 className="text-xl font-bold font-sora mb-3 text-slate-900 leading-tight tracking-tight">{us.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{us.d}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {us.p.map(p => <span key={p} className="text-[10px] uppercase tracking-wider font-extrabold bg-slate-200/50 text-slate-600 px-2.5 py-1 rounded-md">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PODSUMOWANIE */}
        <Section id="summary" kicker="PODSUMOWANIE" title="Czym zajmuje się ADROI MEDIA?">
          <div className="mb-12 max-w-4xl text-left">
            <p className="text-xl text-slate-600 leading-relaxed mb-6 italic">Pomagamy firmom uporządkować technologię i marketing tak, aby wspierały sprzedaż, a nie ją blokowały.</p>
            <p className="text-slate-500 leading-relaxed text-balance">Wspieramy firmy <span className="font-bold text-slate-900">sprzedające inwestycje mieszkaniowe i deweloperskie</span> oraz organizacje zarządzające <span className="font-bold text-slate-900">złożonymi ekosystemami marketingowymi</span>. <Link to="/jak-pracujemy" className="text-blue-600 font-bold hover:underline transition-all">Zobacz, jak pracujemy.</Link></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:border-blue-100 transition-colors">
              <h3 className="font-sora font-bold text-lg mb-6 text-slate-900">Strony i marketing performance</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                {[<Link key="1" to="/strony-internetowe-dla-deweloperow" className="hover:text-blue-600 transition-colors">strony internetowe dla deweloperów</Link>, <Link key="2" to="/kampanie-digital-integracja-leadow-crm" className="hover:text-blue-600 transition-colors">kampanie digital i integracja leadów z CRM</Link>, "optymalizacja stron i SEO", "kreacje graficzne i materiały marketingowe"].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:border-blue-100 transition-colors">
              <h3 className="font-sora font-bold text-lg mb-6 text-slate-900">CRM i integracje systemów</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                {[<Link key="1" to="/integracje-crm-automatyzacja-leadow" className="hover:text-blue-600 transition-colors">integracje CRM i źródeł leadów</Link>, <Link key="2" to="/jak-pracujemy" className="hover:text-blue-600 transition-colors">automatyzacja procesów marketingowych</Link>, "porządkowanie danych i monitoringu", "integracje z portalami ogłoszeniowymi"].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:border-blue-100 transition-colors">
              <h3 className="font-sora font-bold text-lg mb-6 text-slate-900">Technologia i wdrożenia IT</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                {["implementacje makiet 3D", <Link key="1" to="/porzadkowanie-srodowisk-marketingowych" className="hover:text-blue-600 transition-colors">porządkowanie ekosystemów marketingowych</Link>, "wsparcie technologiczne i cybersecurity", "tworzenie dedykowanych rozwiązań"].map((item, idx) => (
                  <li key={idx} className="flex gap-3"><span className="text-blue-500 font-bold">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CASE */}
        <Section id="case" kicker="Przykład" title="Porządek zamiast miliona wtyczek i „magii”" bg="bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm leading-relaxed text-slate-600">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="text-blue-600 font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">Problem</div>
              <p className="italic mb-2 text-slate-500">Chaos w narzędziach, brak integracji i przestarzałe technologie.</p>
              <p className="font-bold text-slate-900 not-italic"><Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-900 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors">Leady</Link> giną po drodze, <Link to="/kampanie-digital-integracja-leadow-crm" className="text-slate-900 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors">kampanie</Link> są niemierzalne, a marketing i sprzedaż nie działają tak, jak powinny.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="text-blue-600 font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">Rozwiązanie</div>
              <p className="italic mb-2 text-slate-500">Uporządkowanie całego ekosystemu: szybka i bezpieczna strona, formularze i automatyzacje.</p>
              <p className="font-bold text-slate-900 not-italic">Integracje źródeł danych z <Link to="/integracje-crm-automatyzacja-leadow" className="text-slate-900 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors">CRM</Link>, monitoring oraz optymalizacja <Link to="/kampanie-digital-integracja-leadow-crm" className="text-slate-900 hover:text-blue-600 underline decoration-slate-300 hover:decoration-blue-600 transition-colors">kampanii</Link>.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="text-blue-600 font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">Efekt</div>
              <p className="italic mb-2 text-slate-500">Stabilność, bezpieczeństwo i spokój. Marketing robi swoje, sprzedaż ma kontrolę, a IT nie blokuje procesów.</p>
              <p className="font-bold text-slate-900 not-italic">Wszystko działa jak jeden sprawny mechanizm.</p>
            </div>
          </div>
        </Section>

        {/* REKOMENDACJE - STYL 1:1 ZE SCREENA Z PAUZĄ NA HOVER */}
        <Section kicker="Rekomendacje" title="Co mówią klienci, z którymi pracowaliśmy">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee py-10 hover:[animation-play-state:paused] cursor-pointer">
              <div className="flex gap-10 pr-10 shrink-0">
                {TESTIMONIALS.map((t, i) => (
                  <div key={`test-1-${i}`} className="w-[500px] shrink-0 bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col shadow-sm transition-all hover:border-blue-200">
                    <div className="mb-8">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-5 text-left">{t.companyKicker}</span>
                      <div className="text-slate-900 text-sm leading-relaxed font-medium whitespace-normal text-left">{t.quote}</div>
                    </div>
                    <div className="mt-auto pt-8 border-t border-slate-100/50 flex items-center gap-5 text-left">
                      <img src={t.avatar} alt={`Zdjęcie profilowe klienta: ${t.name}, ${t.role} w ${t.company} - ADROI MEDIA`} loading="lazy" decoding="async" className="w-16 h-16 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <div className="font-bold text-slate-900 text-base leading-tight font-sora">{t.name}</div>
                        <div className="text-slate-500 text-[11px] font-medium mt-0.5">{t.role}</div>
                        <div className="text-slate-500 text-[11px] font-medium uppercase tracking-widest">{t.company}</div>
                        <div className="text-blue-600 text-[11px] italic font-semibold mt-1.5">{t.note}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-10 pr-10 shrink-0" aria-hidden="true">
                {TESTIMONIALS.map((t, i) => (
                  <div key={`test-2-${i}`} className="w-[500px] shrink-0 bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col shadow-sm transition-all hover:border-blue-200">
                    <div className="mb-8">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-5 text-left">{t.companyKicker}</span>
                      <div className="text-slate-900 text-sm leading-relaxed font-medium whitespace-normal text-left">{t.quote}</div>
                    </div>
                    <div className="mt-auto pt-8 border-t border-slate-100/50 flex items-center gap-5 text-left">
                      <img src={t.avatar} alt={`Zdjęcie profilowe klienta: ${t.name}, ${t.role} w ${t.company} - ADROI MEDIA`} loading="lazy" decoding="async" className="w-16 h-16 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <div className="font-bold text-slate-900 text-base leading-tight font-sora">{t.name}</div>
                        <div className="text-slate-500 text-[11px] font-medium mt-0.5">{t.role}</div>
                        <div className="text-slate-500 text-[11px] font-medium uppercase tracking-widest">{t.company}</div>
                        <div className="text-blue-600 text-[11px] italic font-semibold mt-1.5">{t.note}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* PROCES - STYL CIEMNY 2X2 (SCREEN 13.58.20) */}
        <section id="proces" className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Proces</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight leading-tight">Prosto, konkretnie, bez przeciągania</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden h-full flex flex-col">
                <div className="text-5xl font-black text-white/5 absolute right-8 top-8 group-hover:text-blue-50 transition-colors">01</div>
                <h3 className="text-xl font-bold mb-4 font-sora">Diagnoza</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Szybko sprawdzamy, co nie działa (IT, strona, integracje, dane). Szukamy „wąskich gardeł”, które blokują Twój marketing i sprzedaż.</p>
              </div>
              <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden h-full flex flex-col">
                <div className="text-5xl font-black text-white/5 absolute right-8 top-8 group-hover:text-blue-50 transition-colors">02</div>
                <h3 className="text-xl font-bold mb-4 font-sora">Plan i priorytety</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Ustalamy kolejność: co da największy efekt najszybciej. Nie budujemy wszystkiego od nowa, jeśli można naprawić to, co już masz.</p>
              </div>
              <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden h-full flex flex-col">
                <div className="text-5xl font-black text-white/5 absolute right-8 top-8 group-hover:text-blue-50 transition-colors">03</div>
                <h3 className="text-xl font-bold mb-4 font-sora">Wdrożenie</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Naprawiamy, integrujemy, porządkujemy. Bez długich przestojów i zbędnych iteracji. Działamy w tle Twojego biznesu.</p>
              </div>
              <div className="p-10 rounded-[32px] bg-[#0a1120] text-white shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden h-full flex flex-col">
                <div className="text-5xl font-black text-white/5 absolute right-8 top-8 group-hover:text-blue-50 transition-colors">04</div>
                <h3 className="text-xl font-bold mb-4 font-sora">Opieka</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Monitoring i wsparcie. Dbamy, aby chaos nigdy nie wrócił, systemy były bezpieczne, a marketing – zawsze mierzalny.</p>
              </div>
            </div>
          </div>
        </section>

        <Faq />

        {/* KONTAKT */}
        <section id="kontakt" className="py-24 px-6 text-left">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white overflow-hidden relative shadow-2xl">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-8 block font-inter">Kontakt</span>
                <h2 className="text-4xl md:text-6xl font-sora font-extrabold mb-10 tracking-tighter leading-tight italic text-balance">Wyślij brief. <br/> Wrócimy z konkretami.</h2>
                <a href={MAILTO_LINK} className="inline-block bg-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 mx-auto md:mx-0">Napisz do nas maila</a>
              </div>
              <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                  <img src={marcinPhoto} alt="Marcin Waniek, Managing Director w ADROI MEDIA - Ekspert ds. systemów sprzedaży i technologii marketingowych" loading="lazy" decoding="async" className="w-48 h-48 rounded-full object-cover shadow-2xl" />
                  <div>
                    <div className="font-bold text-3xl md:text-4xl leading-tight font-sora">Marcin Waniek</div>
                    <div className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mt-2 font-inter">Managing Director</div>
                  </div>
                </div>
                <div className="text-slate-400 text-lg italic leading-relaxed font-inter">"Od ponad 15 lat łączę marketing i technologię, pomagając firmom zamieniać chaos w działające, stabilne systemy."</div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

export default function App() {
 const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ADROI MEDIA - Systemy Sprzedaży i Marketingu",
        "description": "Łączymy kampanie digital z systemami CRM i automatyzacją. Budujemy ekosystemy marketingowe, które realnie dowożą leady.",
        "url": "https://adroi-media.pl",
        "provider": {
          "@type": "Organization",
          "name": "ADROI MEDIA"
        },
        "areaServed": "PL"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Jakie usługi oferuje ADROI MEDIA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oferujemy integracje CRM, automatyzację leadów, kampanie digital oraz budowę stron dla deweloperów."
            }
          }
          // Możesz tu dodać kolejne pytania z Twojej sekcji FAQ
        ]
      }
    ]
  };
return (
    <Router>
      <ScrollToTop />
      {/* Skrypt Schema.org umieszczony globalnie */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-white font-inter antialiased overflow-x-hidden">
        <SiteHeader />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polityka-prywatnosci" element={<main className="pt-20"><PrivacyPolicy /></main>} />
          
          {/* Usługi */}
          <Route path="/integracje-crm-automatyzacja-leadow" element={<main className="pt-20"><CrmLeadAutomationPage /></main>} />
          <Route path="/strony-internetowe-dla-deweloperow" element={<main className="pt-20"><DeveloperWebsitesPage /></main>} />
          <Route path="/strony-internetowe-dla-deweloperów" element={<main className="pt-20"><DeveloperWebsitesPage /></main>} />
          <Route path="/ekosystemy-marketingowe" element={<main className="pt-20"><MarketingEnvironmentsPage /></main>} />
          <Route path="/porzadkowanie-srodowisk-marketingowych" element={<main className="pt-20"><MarketingEnvironmentsPage /></main>} />
          <Route path="/kampanie-digital-integracja-leadow-crm" element={<main className="pt-20"><DigitalCampaignsPage /></main>} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<main className="pt-20"><CaseStudiesPage /></main>} />
          <Route path="/case-studies/integracja-leadow-crm" element={<main className="pt-20"><CrmLeadIntegrationCase /></main>} />
          <Route path="/case-studies/deweloper-integracja-sprzedazy" element={<main className="pt-20"><DeveloperSalesCase /></main>} />
          
          {/* Proces i Metodologia */}
          <Route path="/jak-pracujemy" element={<main className="pt-20"><HowWeWorkPage /></main>} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}