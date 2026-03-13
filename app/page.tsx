import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/app/metadata";
import { LandingHero } from "@/components/sections/landing-hero";
import { FeatureHighlights } from "@/components/sections/feature-highlights";

export const metadata: Metadata = buildMetadata({
  title: "Modern CRM Logistics Platform",
  description: "Discover a sleek CRM logistics experience with real-time visibility, smart routing, and service-ready account workflows.",
  canonical: "/"
});

export default function HomePage(): JSX.Element {
  return (
    <>
      <LandingHero />
      <FeatureHighlights />
      <section className="cta-band">
        <div className="shell cta-stack">
          <h2>Go deeper into the platform</h2>
          <ul className="cta-links" role="list">
            <li>
              <Link href="/services">Browse Services</Link>
            </li>
            <li>
              <Link href="/about">Read About Us</Link>
            </li>
            <li>
              <Link href="/faq">View FAQ</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
