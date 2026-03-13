# Research: Modern CRM Logistics Website

## Decision 1: Use Next.js with static export mode
- Decision: Use Next.js 16+ with static site export configuration to produce deployable static assets.
- Rationale: Supports modern routing and metadata while still honoring the static-only constitution constraints.
- Alternatives considered: Plain HTML/CSS/JS (rejected due to reduced maintainability at multi-page scale), server-rendered Next.js deployment (rejected due to no-server constraint).

## Decision 2: Keep all demo data embedded as local content
- Decision: Store feature/service and mock logistics records in local content modules (static JSON/TS objects).
- Rationale: Meets requirement for no database or real system dependency and keeps deterministic builds.
- Alternatives considered: Headless CMS (rejected due to external runtime dependency), local SQLite (rejected due to non-static deployment model).

## Decision 3: Responsive-first page architecture
- Decision: Build layouts mobile-first and progressively enhance for tablet/desktop.
- Rationale: User explicitly requires mobile readiness and this approach reduces responsive regressions.
- Alternatives considered: Desktop-first adaptation (rejected due to higher risk of degraded mobile UX).

## Decision 4: Accessibility baseline from initial implementation
- Decision: Enforce semantic landmarks, keyboard focus visibility, and contrast-safe palettes in all page sections.
- Rationale: Constitution requires WCAG-aligned baseline and this is cheapest when done from the beginning.
- Alternatives considered: Post-build accessibility patching (rejected due to rework risk).

## Decision 5: SEO and discoverability minimum set
- Decision: Add per-page title/meta, canonical hints, robots guidance, and sitemap generation in static output.
- Rationale: Required by constitution and critical for launch discoverability.
- Alternatives considered: Metadata only on landing page (rejected because multi-page site requires page-level SEO).

## Decision 6: ABP.IO-ready blueprint posture (future integration boundary)
- Decision: Define domain-ready data shapes and route-level integration contracts now, while keeping runtime entirely static.
- Rationale: Enables straightforward migration into a modular enterprise backend later without changing current static deployment.
- Alternatives considered: Designing only visual pages with no domain-ready schema (rejected due to migration friction).

## Decision 7: Validation and compatibility checks
- Decision: Include link checking, responsive viewport checks, and Chrome/Firefox smoke tests in delivery workflow.
- Rationale: Constitution mandates compatibility and verification gates before release.
- Alternatives considered: Browser testing on one engine only (rejected due to cross-browser risk).
