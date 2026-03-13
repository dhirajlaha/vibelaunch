import type { ServiceFeature } from "@/content/types";

type ServiceCardProps = {
  service: ServiceFeature;
};

export function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  return (
    <article className="service-card">
      <header className="service-header">
        <span className="service-badge">{service.priority}</span>
        <h3>{service.title}</h3>
      </header>
      <p className="long-content">{service.summary}</p>
      <p className="business-value">{service.businessValue}</p>
    </article>
  );
}
