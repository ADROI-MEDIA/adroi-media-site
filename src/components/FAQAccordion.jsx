import { useId, useState } from "react";

function ChevronIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

function normalizeItem(item) {
  if ("question" in item && "answer" in item) {
    return item;
  }

  return {
    question: item.name,
    answer: item.acceptedAnswer.text,
  };
}

export default function FAQAccordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const baseId = useId();
  const normalizedItems = items.map(normalizeItem);

  return (
    <div className={`flex flex-col w-full ${className}`.trim()}>
      {normalizedItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <article key={item.question} className="border-b border-slate-100 last:border-0">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
            >
              <span className={`font-sora text-lg font-bold transition-colors pr-8 ${isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
                {item.question}
              </span>
              <ChevronIcon className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"}`} />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="font-inter text-slate-600 leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
