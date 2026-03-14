# Implementation Plan: Modern CRM Logistics Website

**Branch**: `003-logistics-portal-launch` | **Date**: 2026-03-13 | **Spec**: `/specs/003-logistics-portal-launch/spec.md`
**Input**: Feature specification from `/specs/003-logistics-portal-launch/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Deliver a modern, professional, mobile-ready CRM logistics website with four core pages
(Landing, Services, About, FAQ) and around 20 mocked logistics/client records.
Implementation will use Next.js static export with embedded content only (no database,
no external runtime systems), aligned to accessibility, SEO, performance, and browser
compatibility gates.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (ES2023) + React via Next.js 16 static export  
**Primary Dependencies**: Next.js, React, React DOM, optional testing stack (Playwright + Vitest)  
**Storage**: N/A (embedded static content only)  
**Testing**: Manual UX acceptance + optional automated smoke/e2e checks  
**Target Platform**: Modern desktop and mobile browsers via static hosting  
**Project Type**: Static web application  
**Performance Goals**: Primary pages render usable content within 3s on standard mobile network; avoid blocking scripts on initial render  
**Constraints**: No backend/database/runtime APIs; mock data only; WCAG 2.1 AA contrast baseline; Chrome/Firefox smoke validation  
**Scale/Scope**: 4 public pages, 20 mock logistics records target (acceptable range 18-22), launch-marketing scope

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Phase 0 Gate Review

- Static-only architecture confirmed: PASS (Next.js static export, no server runtime, no database)
- Accessibility baseline defined: PASS (semantic landmarks, keyboard access, contrast requirements captured)
- Performance budget defined: PASS (3s usable-content target with non-blocking render path)
- SEO essentials planned: PASS (per-page title/meta, canonical policy, robots/sitemap)
- Validation and compatibility checks planned: PASS (link checks, responsive checks, Chrome/Firefox smoke tests)

### Post-Phase 1 Gate Re-Check

- Static-only architecture remains compliant in contracts and quickstart: PASS
- Accessibility requirements captured in contracts and validation workflow: PASS
- Performance constraints documented in research and quickstart validation: PASS
- SEO/discoverability requirements captured in contract and quickstart: PASS
- Compatibility gates reflected in quickstart and contract checks: PASS

## Project Structure

### Documentation (this feature)

```text
specs/003-logistics-portal-launch/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── site-content-contract.md
└── tasks.md
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── page.tsx
├── services/page.tsx
├── about/page.tsx
├── faq/page.tsx
└── layout.tsx

components/
├── navigation/
├── sections/
└── records/

content/
├── services.ts
├── logistics-records.ts
├── faq.ts
└── about.ts

public/
├── images/
├── robots.txt
└── sitemap.xml

styles/
└── globals.css

tests/
├── e2e/
└── accessibility/
```

**Structure Decision**: Use a single Next.js static web application with App Router,
build-time embedded content, and static-host deployment output.

## ABP.IO Future Migration Plan (Non-Blocking)

This feature ships as static-only by constitution. ABP.IO support is captured as a
future migration plan and is not implemented in this release.

### Phase A: Foundation

- Amend constitution to permit server runtime for ABP-based modules.
- Scaffold ABP solution with Domain, Application, Infrastructure, and HttpApi layers.
- Recreate current data types as ABP entities, DTOs, and enums.

### Phase B: Contract Alignment

- Implement records list, filter, and detail APIs matching FR-014 to FR-018 behavior.
- Preserve route behavior and SEO metadata expectations defined in this feature.
- Add sample-data seeding to keep non-production demos available.

### Phase C: Progressive Cutover

- Replace `content/*.ts` read models with API-backed data adapters.
- Keep read-only static fallback for marketing pages where possible.
- Validate parity using existing UX and QA checklists before full switch-over.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitution violations identified. Complexity exceptions are not required.
