import Link from "next/link";

export function LandingHero(): JSX.Element {
  return (
    <section className="landing-hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Modern CRM Logistics Platform</p>
          <h1>Move shipments, accounts, and service decisions with confidence.</h1>
          <p className="lead">
            Vibelaunch gives logistics teams real-time account context, route intelligence, and service workflows built for high-pressure delivery windows.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/services">
              Explore Services
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Why Vibelaunch
            </Link>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Key outcomes">
          <h2>Operational outcomes</h2>
          <ul>
            <li>Clear shipment visibility</li>
            <li>Faster exception handling</li>
            <li>Better client communication</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
