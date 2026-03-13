import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { SiteNav } from "@/components/navigation/site-nav";

export const metadata: Metadata = {
  title: "Vibelaunch CRM Logistics",
  description: "Modern CRM logistics website with static delivery and embedded demo content."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="shell">
            <p>Vibelaunch CRM Logistics - Built for static-first operational clarity.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
