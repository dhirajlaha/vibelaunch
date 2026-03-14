<!--
Sync Impact Report
- Version change: 1.0.0 -> 2.0.0
- Scope change: Static marketing site -> AI-powered SaaS platform (VibeLaunch on ABP.IO)
- Modified principles:
	- I. Static-Only Architecture -> I. ABP.IO-First Architecture
	- II. Accessibility Baseline -> retained and expanded
	- III. Performance Budget -> retained and expanded
	- IV. SEO & Discoverability Essentials -> IV. API Design & Contract Discipline
	- V. Validation & Compatibility -> V. Spec Traceability & Definition of Done
- Added principles:
	- VI. Multi-Tenancy by Default
	- VII. AI Layer as Pluggable Service
	- VIII. Security & Access Control Non-Negotiables
	- IX. Spec-Driven Development Gate
	- X. Observability & Auditability
- Added sections:
	- Role-Based Non-Negotiables (BA / Developer / UX / QA / DevOps)
	- Technical Constraints
	- Delivery Workflow
- Templates requiring updates:
	- ✅ updated .specify/templates/plan-template.md
	- ✅ updated .specify/templates/spec-template.md
	- ✅ updated .specify/templates/tasks-template.md
- Deferred TODOs:
	- None
-->

# VibeLaunch Constitution

## Product North Star

VibeLaunch is an AI-powered, spec-driven application builder that transforms natural
language intent into production-ready ABP.IO solution blueprints. The platform targets
enterprise and mid-market teams who need architectural discipline, security guardrails,
multi-tenancy, and long-term maintainability — not throwaway prototypes.

> "If a non-technical product manager describes a CRM for a logistics company on Monday
> morning, VibeLaunch hands a developer a production-ready ABP.IO solution blueprint by
> Monday afternoon."

---

## Core Principles

### I. ABP.IO-First Architecture
All generated application blueprints MUST conform to ABP.IO Commercial edition
conventions: Domain → Application → Infrastructure → Presentation layering, DDD
aggregates, application services, DTOs, permission definitions, navigation menus,
and tenant configuration.
No spec artefact may describe an entity, service, or module that cannot be cleanly
mapped to an ABP.IO concept.
Rationale: the value proposition is production-ready ABP.IO scaffolding — not
generic code generation.

### II. Accessibility Baseline
Every UI screen in the VibeLaunch platform itself MUST use semantic HTML landmarks,
keyboard-accessible interactions, and text contrast that meets WCAG 2.1 AA.
Generated UI spec artefacts MUST include accessibility annotations (ARIA roles,
focus order, contrast tokens).
Rationale: accessibility is a baseline quality requirement across the platform and
all output it produces.

### III. Performance Budget
The VibeLaunch web application MUST target Core Web Vitals thresholds:
LCP ≤ 2.5 s, FID/INP ≤ 100 ms, CLS ≤ 0.1 on a 4G mobile connection.
Real-time features (spec streaming, diff preview) MUST degrade gracefully under
slow network conditions.
Any measured exception MUST be documented in the feature plan with trade-offs.
Rationale: platform responsiveness directly affects perceived AI quality.

### IV. API Design & Contract Discipline
Every internal and external API surface MUST be defined via an OpenAPI / Swagger
contract before implementation begins.
Breaking changes to public API contracts require a versioned endpoint (`/v2/…`)
and a migration notice documented in the spec.
ABP.IO Dynamic API Controllers MUST be used for application service exposure;
manual controllers are only permitted for auth callbacks and webhook ingestion.
Rationale: strong API contracts enable parallel team development and reliable
third-party integrations.

### V. Spec Traceability & Definition of Done
A feature is NOT considered done until:
1. Every capability area has a functional spec with explicit acceptance criteria.
2. Every functional spec item is linked to at least one QA test scenario.
3. Every QA test scenario traces back to a user story or functional spec item.
4. The system architecture spec includes at least one sequence diagram description
   and one data model description.
5. The UX spec covers the full end-to-end flow for at least 5 core user journeys.
6. The DevOps spec describes the complete path from spec approval to a running
   ABP.IO instance.
7. No task in the breakdown is orphaned — every task links to a spec, story, and
   owner role.
Rationale: a spec good enough for a developer who never attended the design process
to build from requires zero ambiguity.

### VI. Multi-Tenancy by Default
Every data model, permission definition, and generated scaffold MUST treat
multi-tenancy as a first-class concern.
Tenant isolation strategy (database-per-tenant vs. shared-schema) MUST be a
configurable output of the spec — not hardcoded.
No shared mutable state may exist between tenants at any layer.
Rationale: ABP.IO's core value is enterprise multi-tenancy; the platform must model
what it generates.

### VIII. Security & Access Control Non-Negotiables
All authentication MUST use OpenID Connect / OAuth 2.0 via ABP.IO Identity Server.
Role-based access MUST be enforced at the API layer — never only in the UI.
Platform roles (Owner, Contributor, Reviewer, Read-Only) MUST map to ABP.IO
permission definitions; no ad-hoc role checks in application logic.
Secrets (API keys, connection strings, AI provider tokens) MUST be stored in
Azure Key Vault and injected at runtime — never in source or spec artefacts.
All user-supplied inputs (natural language prompts, uploaded documents) MUST be
sanitised and validated before being passed to the AI provider.
Rationale: OWASP Top 10 compliance is non-negotiable for an enterprise SaaS platform.

### IX. Spec-Driven Development Gate
No implementation task may begin until the corresponding spec is approved in the
Spec Review & Collaboration Workspace.
Spec approval requires sign-off from at least: the spec author role AND one
additional role (e.g., Developer approves UX spec, QA approves functional spec).
Rationale: the platform's core promise is that specs precede code — the team must
practice what the product preaches.

---

## Role-Based Non-Negotiables

### Business Analyst (BA)
- Every feature area MUST have a clearly stated user persona and a "jobs-to-be-done"
  framing before any functional spec is written.
- Success metrics MUST be defined for every capability (e.g., "spec generated in
  under 5 minutes for a 10-entity application").
- Functional specs MUST use Given/When/Then acceptance criteria format.
- Ambiguous requirements MUST be escalated and resolved before spec approval — no
  "TBD" items may remain at gate.
- The Product Vision document MUST answer the North Star Question explicitly.

### Developer
- All application code MUST target ABP.IO Commercial edition conventions; deviations
  require a documented architectural decision record (ADR).
- Domain logic (business rules, invariants) MUST live in the Domain layer — never
  leaked into controllers or UI services.
- Every ABP.IO module boundary MUST be justified in the architecture spec.
- All API contracts MUST be validated against the OpenAPI spec in CI.
- Database migrations MUST be generated via ABP.IO Entity Framework Core migrations;
  manual schema changes are prohibited.
- The scaffolding engine output MUST be deterministic — identical spec input MUST
  produce identical scaffold output.

### UX Designer
- Every user flow MUST be described end-to-end: entry trigger → steps → success/error
  exits — with no gaps.
- Design tokens (colour, typography, spacing, motion) MUST be defined and referenced
  consistently across all screen specs.
- Every interactive component MUST include states: default, hover, focus, active,
  disabled, loading, error.
- The "conversational intake" and "spec review diff" flows are the two highest-priority
  UX surfaces — they MUST be detailed first.
- Mobile-responsive behaviour MUST be specified for every screen, even if desktop is
  the primary target.
- Wireframe descriptions MUST include ARIA role annotations and keyboard navigation
  order for all interactive elements.

### QA Engineer
- Every functional spec acceptance criterion MUST have a corresponding structured test
  scenario (ID, preconditions, steps, expected result, pass/fail).
- Test scenarios MUST cover: happy path, boundary conditions, error conditions, and
  permission enforcement for each feature.
- Non-functional requirements MUST be testable and must specify measurement method
  (e.g., "LCP measured via Lighthouse CI on a throttled 4G profile").
- AI-generated spec output MUST have test scenarios covering: accuracy, hallucination
  detection, graceful degradation when the AI provider is unavailable.
- The QA spec MUST include an explicit traceability matrix linking each test scenario
  to its functional spec item.
- No feature may be marked "done" without all linked QA test scenarios passing.

---

## Technical Constraints

- **Framework**: ABP.IO Commercial edition — all module, permission, and entity
  patterns MUST follow ABP.IO conventions.
- **Database**: SQLite Server (primary); database-per-tenant and shared-schema MUST both
  be configurable output strategies.
- **Export formats**: GitHub repository push, ABP.IO solution ZIP.
- **Integrations**: GitHub Issues (via webhook / REST; not hard-coded).
- **Spec format**: All artefacts authored in Spec-Kit format with cross-linked IDs.

---

## Delivery Workflow

1. **Intake**: BA captures user persona, jobs-to-be-done, and success metrics.
2. **Spec draft**: AI-assisted draft generated via conversational intake; stored as
   Spec-Kit artefact with draft status.
3. **Spec review gate**: Multi-role review in Collaboration Workspace; resolved before
   any task begins.
4. **Architecture alignment**: Developer validates spec against ABP.IO module map;
   raises ADRs for any deviations.
5. **Task breakdown**: Tasks derived from approved spec; every task linked to spec ID,
   story, and owner role.
6. **Implementation**: Code/scaffold generated only after spec gate passes.
7. **QA validation**: Test scenarios executed; traceability matrix updated.
9. **Constitution check**: Every plan, spec, and task list MUST reference the
   applicable constitution principles before submission.

---

## Governance

This constitution supersedes all conflicting local practices for this repository.
Amendments require: (1) documented proposal with rationale, (2) explicit impact
statement on templates and role non-negotiables, and (3) approval by at least one
representative from each role (BA, Developer, UX, QA, DevOps).

Versioning policy uses Semantic Versioning:
- **MAJOR**: incompatible governance changes, principle removals, or scope redefinitions.
- **MINOR**: new principle, section, or role non-negotiable added.
- **PATCH**: wording clarification, typo fix, or non-semantic edit.

Compliance review expectations:
- Every plan MUST complete the Constitution Check before implementation begins.
- Every spec MUST include measurable outcomes mapping to applicable principles.
- Every task list MUST include verification tasks for all applicable constitution gates.

**Version**: 2.0.0 | **Ratified**: 2026-03-14 | **Last Amended**: 2026-03-14
