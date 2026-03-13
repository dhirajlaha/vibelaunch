import type { FaqItem } from "@/content/types";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps): JSX.Element {
  const ordered = [...items].sort((a, b) => a.order - b.order);

  return (
    <div className="faq-stack">
      {ordered.map((item) => (
        <details key={item.id} className="faq-item">
          <summary>{item.question}</summary>
          <p className="long-content">{item.answer}</p>
          <span className="faq-category">Category: {item.category}</span>
        </details>
      ))}
    </div>
  );
}
