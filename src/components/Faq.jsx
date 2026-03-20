import React from 'react';

const Faq = () => {
  return (
    <section className="adroi-faq-wrapper">
      <style>{`
        .adroi-faq-wrapper {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          color: #1a1a1a;
          text-align: left;
        }
        .adroi-faq-wrapper h2 {
          font-family: 'Sora', sans-serif;
          font-size: 2.2rem;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 600;
        }
        .adroi-faq-item {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 16px;
          transition: all 0.2s ease-in-out;
        }
        .adroi-faq-item:hover {
          border-color: #d1d5db;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .adroi-faq-item summary {
          list-style: none;
          padding: 24px;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          font-weight: 500;
          font-size: 1.15rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          outline: none;
        }
        .adroi-faq-item summary::-webkit-details-marker { display: none; }
        .adroi-faq-item summary::after {
          content: '+';
          font-size: 1.8rem;
          color: #9ca3af;
          font-weight: 300;
          transition: transform 0.3s ease;
        }
        .adroi-faq-item[open] summary::after {
          transform: rotate(45deg);
          color: #1a1a1a;
        }
        .adroi-faq-content {
          padding: 0 24px 24px 24px;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
          color: #4b5563;
          font-size: 1.05rem;
        }
        .adroi-faq-content strong { color: #1a1a1a; }
      `}</style>

      <h2>Często zadawane pytania</h2>

      <details className="adroi-faq-item">
        <summary>Jak ADROI MEDIA pomaga uporządkować marketing i technologię?</summary>
        <div className="adroi-faq-content">
          <p><strong>ADROI MEDIA łączy działania marketingowe z technologią</strong>, integrując strony www, CRM, źródła leadów oraz narzędzia analityczne w jeden spójny system. Dzięki temu marketing staje się mierzalny, a sprzedaż ma pełną kontrolę nad procesem pozyskiwania klientów.</p>
        </div>
      </details>

      <details className="adroi-faq-item">
        <summary>Czy pomagacie w integracji CRM i leadów z różnych źródeł?</summary>
        <div className="adroi-faq-content">
          <p>Tak, specjalizujemy się w <strong>integracjach CRM z formularzami, portalami ogłoszeniowymi, kampaniami reklamowymi</strong> oraz systemami marketing automation.</p>
        </div>
      </details>

      <details className="adroi-faq-item">
        <summary>Dla jakich firm pracuje ADROI MEDIA?</summary>
        <div className="adroi-faq-content">
          <p>Wspieramy głównie <strong>firmy sprzedające inwestycje mieszkaniowe i deweloperskie</strong> oraz organizacje zarządzające wieloma serwisami.</p>
        </div>
      </details>

      <details className="adroi-faq-item">
        <summary>Czy zajmujecie się tylko marketingiem?</summary>
        <div className="adroi-faq-content">
          <p>Nie. Naszą przewagą jest połączenie marketingu i technologii. Zajmujemy się również <strong>wdrożeniami stron, integracjami systemów oraz automatyzacją procesów</strong>.</p>
        </div>
      </details>

      <details className="adroi-faq-item">
        <summary>Czy możecie poprawić istniejący system?</summary>
        <div className="adroi-faq-content">
          <p>Tak, analizujemy problemy i poprawiamy integracje, aby <strong>zwiększyć skuteczność bez konieczności budowy wszystkiego od zera</strong>.</p>
        </div>
      </details>
    </section>
  );
};

export default Faq;