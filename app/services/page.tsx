import type { Metadata } from "next";
import { buildMetadata } from "@/app/metadata";
import { services } from "@/content/services";
import { SectionShell } from "@/components/sections/section-shell";
import { ServiceCard } from "@/components/sections/service-card";

export const metadata: Metadata = buildMetadata({
  title: "Services and Feature Capabilities",
  description: "Review CRM logistics services including shipment visibility, route optimization, client workflows, and compliance controls.",
  canonical: "/services"
});

export default function ServicesPage(): JSX.Element {
  return (
    <SectionShell
      id="services"
      heading="Services and Feature Capabilities"
      subheading="Explore the capabilities that keep logistics teams and client operations aligned."
    >
      <p className="intro-copy">This page is designed as a standalone entry point for prospective teams evaluating logistics CRM options.</p>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionShell>
  );
}
