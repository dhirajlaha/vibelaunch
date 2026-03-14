"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactUsTrigger } from "@/components/contact/contact-us-trigger";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" }
];

export function SiteNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-nav" href="#main-content">
        Skip to main content
      </a>
      <div className="shell nav-shell">
        <div className="brand-block">
          <span className="brand-kicker">CRM Logistics</span>
          <div className="brand-row">
            <span className="brand-logo" aria-hidden="true">
              VL
            </span>
            <strong className="brand-name">Vibelaunch</strong>
          </div>
        </div>
        <div className="nav-actions">
          <nav aria-label="Primary">
            <ul className="nav-list" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${pathname === item.href ? " active" : ""}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ContactUsTrigger className="contact-btn" />
        </div>
      </div>
    </header>
  );
}
