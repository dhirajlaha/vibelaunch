import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" }
];

export function SiteNav(): JSX.Element {
  return (
    <header className="site-header">
      <a className="skip-nav" href="#main-content">
        Skip to main content
      </a>
      <div className="shell nav-shell">
        <div className="brand-block">
          <span className="brand-kicker">CRM Logistics</span>
          <strong className="brand-name">Vibelaunch</strong>
        </div>
        <nav aria-label="Primary">
          <ul className="nav-list" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
