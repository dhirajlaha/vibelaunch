import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { SiteNav } from "@/components/navigation/site-nav";
import { ContactUsTrigger } from "@/components/contact/contact-us-trigger";

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
          <div className="shell footer-grid">
            <div>
              <p className="footer-brand">Vibelaunch CRM Logistics</p>
              <p className="footer-copy">Built for static-first operational clarity.</p>
            </div>
            <nav aria-label="Footer" className="footer-links">
              <a href="/services">Services</a>
              <a href="/about">About</a>
              <a href="/faq">FAQ</a>
            </nav>
            <ContactUsTrigger className="footer-contact" />
          </div>
        </footer>
      </body>
    </html>
  );
}
