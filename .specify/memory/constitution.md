<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
	- Principle 1 -> I. Static-Only Architecture
	- Principle 2 -> II. Accessibility Baseline
	- Principle 3 -> III. Performance Budget
	- Principle 4 -> IV. SEO & Discoverability Essentials
	- Principle 5 -> V. Validation & Compatibility
- Added sections:
	- Technical Constraints
	- Delivery Workflow
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ updated .specify/templates/plan-template.md
	- ✅ updated .specify/templates/spec-template.md
	- ✅ updated .specify/templates/tasks-template.md
	- ⚠ pending .specify/templates/commands/*.md (directory not present)
- Runtime guidance docs:
	- ⚠ pending README.md / docs/quickstart.md (not present)
- Deferred TODOs:
	- None
-->

# Vibelaunch Constitution

## Core Principles

### I. Static-Only Architecture
All deliverables MUST compile to static assets (HTML, CSS, JS, images, fonts) that can
be served from any static host without server-side runtime logic.
No database, server API, or server-rendered dependency is allowed unless the
constitution is amended.
Rationale: keeps hosting simple, cost low, and deployment portable.

### II. Accessibility Baseline
Every page MUST use semantic HTML landmarks, keyboard-accessible interactions,
and text contrast that meets WCAG 2.1 AA.
Images conveying meaning MUST include meaningful alt text.
Rationale: accessibility is a baseline quality requirement, not an enhancement.

### III. Performance Budget
Each page MUST target Core Web Vitals-friendly delivery by default:
no blocking script in initial render path, optimized images, and minimized CSS/JS.
Any exception MUST be documented in the feature plan with measurable trade-offs.
Rationale: static sites must feel instant on common mobile networks.

### IV. SEO & Discoverability Essentials
Each public page MUST define a unique title and meta description and MUST provide
canonical URL metadata when relevant.
The site MUST include crawl guidance (`robots.txt`) and a sitemap when multiple
public pages exist.
Rationale: discoverability is a core requirement for a launch-ready static site.

### V. Validation & Compatibility
Changes MUST pass HTML/CSS validation (or equivalent lint checks), broken-link
checks, and responsive verification for mobile and desktop breakpoints.
Before release, maintainers MUST smoke-test in latest stable Chrome and Firefox.
Rationale: correctness and cross-browser reliability prevent avoidable regressions.

## Technical Constraints

- Primary stack MUST remain static web technologies: HTML, CSS, JavaScript.
- Build tooling is optional; if used, output MUST remain static-host compatible.
- Third-party scripts MUST be minimized and justified in plan complexity notes.
- Secrets MUST NOT be embedded in client-side code.

## Delivery Workflow

1. Define page-level acceptance criteria, including accessibility and performance checks.
2. Implement with progressive enhancement so core content works without JavaScript.
3. Validate markup, links, metadata, and responsive behavior before review.
4. Release only after constitution gate confirmation in plan/spec/tasks artifacts.

## Governance
This constitution supersedes conflicting local practices for this repository.
Amendments require: (1) documented proposal, (2) explicit impact statement on
templates/guides, and (3) approval by repository maintainers.

Versioning policy for this document uses Semantic Versioning:
- MAJOR: incompatible governance or principle removals/redefinitions.
- MINOR: new principle/section or materially expanded rule.
- PATCH: wording clarification, typo fixes, or non-semantic edits.

Compliance review expectations:
- Every plan MUST complete the Constitution Check before implementation begins.
- Every spec MUST include measurable outcomes that map to applicable principles.
- Every task list MUST include verification tasks for applicable constitution gates.

**Version**: 1.0.0 | **Ratified**: 2026-03-13 | **Last Amended**: 2026-03-13
