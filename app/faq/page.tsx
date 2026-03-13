import type { Metadata } from "next";
import { buildMetadata } from "@/app/metadata";
import { faqItems } from "@/content/faq";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SectionShell } from "@/components/sections/section-shell";

export const metadata: Metadata = buildMetadata({
  title: "FAQ for CRM Logistics Teams",
  description: "Find answers to common pre-sales and onboarding questions about deploying a modern CRM logistics experience.",
  canonical: "/faq"
});

export default function FaqPage(): JSX.Element {
  return (
    <SectionShell heading="Frequently Asked Questions" subheading="Direct answers for teams evaluating CRM logistics capabilities.">
      <p className="intro-copy">If you landed here directly, this FAQ covers pricing, onboarding, compliance, and support expectations.</p>
      <FaqAccordion items={faqItems} />
    </SectionShell>
  );
}
