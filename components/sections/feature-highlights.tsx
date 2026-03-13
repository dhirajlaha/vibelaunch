import { services } from "@/content/services";
import { SectionShell } from "@/components/sections/section-shell";

export function FeatureHighlights(): JSX.Element {
  const featured = services.filter((item) => item.priority === "primary");

  return (
    <SectionShell
      id="highlights"
      heading="Feature Highlights"
      subheading="Built for logistics teams that need decision-ready customer context."
      variant="accent"
    >
      <div className="feature-grid">
        {featured.map((feature) => (
          <article className="feature-card" key={feature.id}>
            <p className="feature-icon" aria-hidden="true">
              {feature.iconKey?.slice(0, 2).toUpperCase() ?? "FT"}
            </p>
            <h3>{feature.title}</h3>
            <p className="long-content">{feature.summary}</p>
            <p className="business-value">{feature.businessValue}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
