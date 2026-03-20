import { useEffect } from "react";
import SubpageHero from "../components/SubpageHero";
import SubpageContactSection from "../components/SubpageContactSection";
import { applyPageSeo, createBreadcrumbSchema } from "../lib/seo";

const PAGE_TITLE = "Polityka prywatności | ADROI MEDIA";
const PAGE_DESCRIPTION = "Poznaj politykę prywatności ADROI MEDIA. Dowiedz się, jak chronimy Twoje dane, gdy wdrażamy bezpieczne systemy sprzedaży, marketing, technologię i CRM.";
const PAGE_URL = "https://adroi-media.pl/polityka-prywatnosci";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Polityka prywatności i ochrona danych",
  description: PAGE_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "ADROI MEDIA"
  },
  areaServed: "PL"
};

const BREADCRUMB_SCHEMA = createBreadcrumbSchema([
  { name: "Home", url: "https://adroi-media.pl/" },
  { name: "Polityka prywatności", url: PAGE_URL },
]);

export default function PrivacyPolicy() {
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
      <SubpageHero badges={["DOKUMENTY"]} title="Polityka prywatności" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0a1120] p-8 md:p-16 rounded-[40px] shadow-2xl space-y-12">
            
            {/* 1. Administrator danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">1. Administrator danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                <strong className="text-white font-semibold">ADROI MEDIA</strong><br />
                00-110 Warszawa<br />
                ul. Marszałkowska 107<br />
                NIP: 9211970361
              </p>
              <h3 className="text-xl md:text-2xl font-bold font-sora text-slate-100 mt-8 mb-4">Kontakt w sprawach dotyczących danych osobowych</h3>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">kontakt@adroi-media.pl</p>
            </div>

            {/* 2. Zakres przetwarzanych danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">2. Zakres przetwarzanych danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Strona internetowa nie posiada formularza kontaktowego.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Użytkownik może dobrowolnie przekazać dane osobowe poprzez kontakt mailowy na adres wskazany na stronie.
              </p>
              <h3 className="text-xl md:text-2xl font-bold font-sora text-slate-100 mt-8 mb-4">Zakres danych może obejmować w szczególności:</h3>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>imię i nazwisko</li>
                <li>adres e-mail</li>
                <li>numer telefonu</li>
                <li>nazwę firmy</li>
                <li>treść wiadomości</li>
                <li>dane zawarte w przesłanych załącznikach</li>
              </ul>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Podanie danych jest dobrowolne, jednak niezbędne do prowadzenia korespondencji.
              </p>
            </div>

            {/* 3. Cel przetwarzania danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">3. Cel przetwarzania danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">Dane osobowe przetwarzane są w celu:</p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>odpowiedzi na wiadomość użytkownika</li>
                <li>prowadzenia korespondencji biznesowej</li>
                <li>przygotowania i przedstawienia oferty usług</li>
                <li>nawiązania lub realizacji współpracy biznesowej</li>
              </ul>
            </div>

            {/* 4. Podstawa prawna przetwarzania danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">4. Podstawa prawna przetwarzania danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">Dane osobowe przetwarzane są na podstawie:</p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora polegający na prowadzeniu korespondencji oraz kontaktu biznesowego</li>
                <li>art. 6 ust. 1 lit. b RODO - podjęcie działań przed zawarciem umowy</li>
              </ul>
            </div>

            {/* 5. Okres przechowywania danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">5. Okres przechowywania danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">Dane osobowe będą przechowywane przez okres:</p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>prowadzenia korespondencji</li>
                <li>niezbędny do przygotowania oferty</li>
                <li>do czasu zakończenia kontaktu biznesowego</li>
              </ul>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                a następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń.
              </p>
            </div>

            {/* 6. Odbiorcy danych */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">6. Odbiorcy danych</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Dane mogą być przekazywane podmiotom wspierającym funkcjonowanie strony oraz obsługę usług IT, w szczególności:
              </p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>dostawcom hostingu</li>
                <li>dostawcom usług poczty elektronicznej</li>
                <li>dostawcom narzędzi analitycznych</li>
              </ul>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Podmioty te przetwarzają dane wyłącznie na podstawie odpowiednich umów.
              </p>
            </div>

            {/* 7. Prawa uzytkownika */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">7. Prawa użytkownika</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>dostępu do swoich danych</li>
                <li>sprostowania danych</li>
                <li>usunięcia danych</li>
                <li>ograniczenia przetwarzania</li>
                <li>wniesienia sprzeciwu wobec przetwarzania</li>
                <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
              </ul>
            </div>

            {/* 8. Pliki cookies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">8. Pliki cookies</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">Strona internetowa może wykorzystywać pliki cookies w celu:</p>
              <ul className="font-inter text-slate-300 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6 ml-2 md:ml-4 marker:text-blue-500">
                <li>zapewnienia prawidłowego działania serwisu</li>
                <li>analizy ruchu na stronie</li>
                <li>poprawy jakości świadczonych usług</li>
              </ul>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika.
              </p>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.
              </p>
            </div>

            {/* 9. Zmiany polityki prywatnosci */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-blue-400 mb-6">9. Zmiany polityki prywatności</h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4">
                Administrator zastrzega sobie możliwość wprowadzania zmian w niniejszej polityce prywatności w przypadku zmian w przepisach prawa lub funkcjonowaniu strony.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SubpageContactSection
        title={"Masz pytania o dane\nlub technologię?"}
        description="Jeśli potrzebujesz wyjaśnienia kwestii technicznych lub prawnych w Twoim systemie, napisz do nas. Wracamy z konkretami w 24h."
      />
    </div>
  );
}
