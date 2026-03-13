# Tasks: Modern CRM Logistics Website

**Input**: Design documents from `/specs/003-logistics-portal-launch/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Automated tests were not explicitly requested in the feature specification. This task list uses implementation and validation tasks focused on independent story verification.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and base static-site scaffolding

- [ ] T001 Initialize Next.js project dependencies and scripts in package.json
- [ ] T002 Configure static export output and image policy in next.config.ts
- [ ] T003 [P] Configure TypeScript compiler options in tsconfig.json
- [ ] T004 [P] Configure linting rules for app and content modules in eslint.config.mjs
- [ ] T005 [P] Create global visual tokens and baseline responsive styles in styles/globals.css
- [ ] T006 Create root layout shell with base metadata defaults in app/layout.tsx

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared content model and platform primitives required by all user stories

**CRITICAL**: No user story implementation should start before this phase completes

- [ ] T007 Create content entity types and validation helpers in content/types.ts
- [ ] T008 [P] Seed service feature content collection in content/services.ts
- [ ] T009 [P] Seed about narrative content collection in content/about.ts
- [ ] T010 [P] Seed FAQ item content collection in content/faq.ts
- [ ] T011 [P] Seed 20 mocked logistics/client records in content/logistics-records.ts
- [ ] T012 Implement global site navigation component in components/navigation/site-nav.tsx
- [ ] T013 [P] Implement shared section layout component in components/sections/section-shell.tsx
- [ ] T014 [P] Implement reusable logistics records table component in components/records/logistics-records-table.tsx
- [ ] T015 Add robots crawl guidance file in public/robots.txt
- [ ] T016 Add sitemap baseline for required routes in public/sitemap.xml
- [ ] T017 Implement shared per-page metadata helper in app/metadata.ts
- [ ] T018 Implement keyboard-focus and accessibility utility styles in styles/globals.css

**Checkpoint**: Foundation ready for independent user story delivery

---

## Phase 3: User Story 1 - Explore Core Value on Landing Page (Priority: P1) MVP

**Goal**: Deliver a sleek, professional landing page that clearly communicates CRM logistics value and guides next actions.

**Independent Test**: Open `/` as a first-time visitor and confirm clear value proposition above the fold, visible feature highlights, and direct navigation to deeper pages.

- [ ] T019 [P] [US1] Build landing hero section component in components/sections/landing-hero.tsx
- [ ] T020 [P] [US1] Build landing feature highlights component in components/sections/feature-highlights.tsx
- [ ] T021 [US1] Compose landing page route with hero and highlights in app/page.tsx
- [ ] T022 [US1] Add landing-specific title, description, and canonical metadata in app/page.tsx
- [ ] T023 [US1] Add primary CTA and deep-link navigation blocks in app/page.tsx
- [ ] T024 [US1] Add landing page independent validation checklist in tests/e2e/landing-manual-checklist.md

**Checkpoint**: User Story 1 is independently functional and demo-ready

---

## Phase 4: User Story 2 - Review Services and Feature Capabilities (Priority: P2)

**Goal**: Deliver a services/features page that explains major capabilities and business outcomes.

**Independent Test**: Open `/services` and verify distinct service entries with clear purpose, business value, and readable long-form content on mobile and desktop.

- [ ] T025 [P] [US2] Build service card component for capability rendering in components/sections/service-card.tsx
- [ ] T026 [US2] Implement services/features page using embedded content in app/services/page.tsx
- [ ] T027 [US2] Add services page title, description, and canonical metadata in app/services/page.tsx
- [ ] T028 [US2] Implement long-content readability and wrapping safeguards in styles/globals.css
- [ ] T029 [US2] Add services page independent validation checklist in tests/e2e/services-manual-checklist.md

**Checkpoint**: User Story 2 is independently functional and verifiable

---

## Phase 5: User Story 3 - Build Trust with About, FAQ, and Sample Records (Priority: P3)

**Goal**: Deliver trust-oriented About and FAQ pages plus a mocked records experience with clear sample-data labeling.

**Independent Test**: Open `/about` and `/faq`, confirm contextual trust messaging, FAQ discoverability, and display of around 20 mocked records with no real customer data.

- [ ] T030 [P] [US3] Build about narrative section component in components/sections/about-narrative.tsx
- [ ] T031 [P] [US3] Build FAQ accordion/list component in components/sections/faq-accordion.tsx
- [ ] T032 [P] [US3] Build mock records showcase component in components/records/mock-records-showcase.tsx
- [ ] T033 [US3] Implement about page with narrative and records preview in app/about/page.tsx
- [ ] T034 [US3] Implement FAQ page with grouped questions and answers in app/faq/page.tsx
- [ ] T035 [US3] Add About page title, description, and canonical tags in app/about/page.tsx
- [ ] T036 [US3] Add FAQ page metadata and canonical tags in app/faq/page.tsx
- [ ] T037 [US3] Implement 18-22 record fallback and sample dataset preview label in components/records/mock-records-showcase.tsx
- [ ] T038 [US3] Add standalone entry-point context copy for direct page landings in app/about/page.tsx
- [ ] T039 [US3] Add standalone entry-point context copy for direct page landings in app/faq/page.tsx
- [ ] T040 [US3] Add user story 3 independent validation checklist in tests/e2e/trust-content-manual-checklist.md

**Checkpoint**: User Story 3 is independently functional and compliant with data-mocking constraints

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality gates and release readiness across all stories

- [ ] T041 [P] Add static-site verification script for HTML/CSS validation, broken links, and metadata coverage in scripts/verify-static-site.mjs
- [ ] T042 [P] Add accessibility validation checklist and runbook in tests/accessibility/a11y-checklist.md
- [ ] T043 [P] Add responsive viewport smoke checklist (360/768/1280) in tests/e2e/responsive-checklist.md
- [ ] T048 Add measurable performance validation (Lighthouse/Web Vitals thresholds and report) in tests/e2e/performance-report.md
- [ ] T044 Add browser smoke report template for Chrome and Firefox in tests/e2e/browser-smoke-report.md
- [ ] T045 [P] Optimize and document production image assets in public/images/README.md
- [ ] T046 Document static export deployment and local validation workflow in README.md
- [ ] T049 Add enterprise modular platform readiness blueprint mapping (routes, content modules, future integration boundaries) in docs/blueprint-readiness.md
- [ ] T047 Run quickstart validation (including performance and HTML/CSS checks) and record final pass notes in specs/003-logistics-portal-launch/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- Phase 1 (Setup): No dependencies; starts immediately.
- Phase 2 (Foundational): Depends on Phase 1 completion; blocks all user stories.
- Phase 3 (US1): Depends on Phase 2 completion.
- Phase 4 (US2): Depends on Phase 2 completion; can run in parallel with US1 after foundation.
- Phase 5 (US3): Depends on Phase 2 completion; can run in parallel with US1/US2 after foundation.
- Phase 6 (Polish): Depends on completion of all targeted user stories.

### User Story Dependencies

- US1 (P1): Independent after foundational tasks.
- US2 (P2): Independent after foundational tasks; reuses shared content/components only.
- US3 (P3): Independent after foundational tasks; reuses shared content/components only.

### Within Each User Story

- Shared reusable components before page composition.
- Page composition before metadata and edge-case refinement.
- Story-specific validation checklist after implementation completion.

---

## Parallel Execution Examples

### User Story 1

- Run T019 and T020 in parallel (different component files).
- After T019/T020 complete, run T021 and T022 sequentially in app/page.tsx.

### User Story 2

- Start T025 and T028 in parallel (component vs global style update).
- Complete T026 after T025, then T027 and T029.

### User Story 3

- Run T030, T031, and T032 in parallel (different files/components).
- Proceed with T033 and T034 independently, then finalize metadata and edge-case tasks.

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phase 1 and Phase 2.
2. Deliver Phase 3 (US1) and validate with T024.
3. Demo landing experience before expanding scope.

### Incremental Delivery

1. US1: landing value proposition and conversion direction.
2. US2: service capability depth and differentiation.
3. US3: trust assets, FAQ, and mocked records proof.
4. Polish: finalize release quality gates.

### Team Parallelization

1. One developer finalizes foundational content/types/navigation.
2. Developer A implements US1, Developer B implements US2, Developer C implements US3.
3. Team converges for Phase 6 quality and release validation.

---

## Notes

- All tasks follow strict checklist format: checkbox, ID, optional [P], optional [USx], action with file path.
- Tasks are intentionally implementation-ready for direct execution by an LLM agent.
- Automated tests are not mandated by spec; validation tasks satisfy independent testability requirements for each story.
