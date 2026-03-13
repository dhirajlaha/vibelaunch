import type { Metadata } from "next";

const siteName = "Vibelaunch CRM Logistics";

export function buildMetadata(options: { title: string; description: string; canonical: string }): Metadata {
  const title = `${options.title} | ${siteName}`;
  return {
    title,
    description: options.description,
    alternates: {
      canonical: options.canonical
    },
    openGraph: {
      type: "website",
      title,
      description: options.description
    }
  };
}
