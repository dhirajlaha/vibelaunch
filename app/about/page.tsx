import type { Metadata } from "next";
import { buildMetadata } from "@/app/metadata";
import { aboutNarrative } from "@/content/about";
import { AboutNarrative } from "@/components/sections/about-narrative";
import { MockRecordsShowcase } from "@/components/records/mock-records-showcase";
import { SectionShell } from "@/components/sections/section-shell";

export const metadata: Metadata = buildMetadata({
  title: "About Vibelaunch",
  description: "Learn how Vibelaunch helps logistics teams improve service reliability with clear workflows, trust-first operations, and modern CRM UX.",
  canonical: "/about"
});

export default function AboutPage(): JSX.Element {
  return (
    <>
      <SectionShell heading="About Vibelaunch" subheading="Who we are and why logistics teams choose this platform.">
        <p className="intro-copy">If you arrived here directly, this page provides mission, capability, and trust context for our CRM logistics approach.</p>
        <AboutNarrative blocks={aboutNarrative} />
      </SectionShell>
      <SectionShell heading="Records Preview" subheading="A sample dataset to demonstrate how record visibility looks in practice." variant="accent">
        <MockRecordsShowcase />
      </SectionShell>
    </>
  );
}
