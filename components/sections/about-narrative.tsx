import type { BrandNarrativeBlock } from "@/content/types";

type AboutNarrativeProps = {
  blocks: BrandNarrativeBlock[];
};

export function AboutNarrative({ blocks }: AboutNarrativeProps): JSX.Element {
  const ordered = [...blocks].sort((a, b) => a.order - b.order);

  return (
    <div className="about-stack">
      {ordered.map((block) => (
        <article className={`about-card tone-${block.tone}`} key={block.id}>
          <h2>{block.heading}</h2>
          <p className="long-content">{block.body}</p>
        </article>
      ))}
    </div>
  );
}
