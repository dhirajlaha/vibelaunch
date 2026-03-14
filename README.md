# Vibelaunch CRM Logistics Website

A static, mobile-ready CRM logistics website built with Next.js App Router and embedded mock content.

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
```bash
npm install
```

## Development
```bash
npm run dev
```
Open http://localhost:3000.

## Static Build
```bash
npm run build
npm run start
```
`npm run start` serves the static `out/` directory.

## Validation Workflow
```bash
npm run verify:static
```
Then complete checklists:
- `tests/e2e/landing-manual-checklist.md`
- `tests/e2e/services-manual-checklist.md`
- `tests/e2e/trust-content-manual-checklist.md`
- `tests/accessibility/a11y-checklist.md`
- `tests/e2e/responsive-checklist.md`
- `tests/e2e/browser-smoke-report.md`
- `tests/e2e/performance-report.md`

## Deployment
Deploy the static `out/` directory to any static host:
- Azure Static Web Apps
- Vercel static export
- Netlify
- GitHub Pages



## Speckit Commands and Prompts

This repository includes Speckit command prompts and agent files for spec-driven planning and implementation workflows.

### Command Map

| Command | Purpose | Prompt File | Agent File | Typical Output |
|---|---|---|---|---|
| `/speckit.constitution` | Create or update project constitution and governance principles | `.github/prompts/speckit.constitution.prompt.md` | `.github/agents/speckit.constitution.agent.md` | `.specify/memory/constitution.md` and related template sync updates |
| `/speckit.specify` | Create a feature specification from natural language | `.github/prompts/speckit.specify.prompt.md` | `.github/agents/speckit.specify.agent.md` | `specs/<feature>/spec.md`, `specs/<feature>/checklists/requirements.md` |
| `/speckit.clarify` | Ask targeted clarification questions and integrate answers into spec | `.github/prompts/speckit.clarify.prompt.md` | `.github/agents/speckit.clarify.agent.md` | Updated `specs/<feature>/spec.md` with `## Clarifications` |
| `/speckit.plan` | Generate implementation plan artifacts from spec | `.github/prompts/speckit.plan.prompt.md` | `.github/agents/speckit.plan.agent.md` | `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, `contracts/*` |
| `/speckit.tasks` | Generate dependency-ordered implementation tasks | `.github/prompts/speckit.tasks.prompt.md` | `.github/agents/speckit.tasks.agent.md` | `specs/<feature>/tasks.md` |
| `/speckit.taskstoissues` | Convert existing tasks into ordered GitHub issues | `.github/prompts/speckit.taskstoissues.prompt.md` | `.github/agents/speckit.taskstoissues.agent.md` | GitHub issues linked to tasks |
| `/speckit.implement` | Execute tasks and update task status incrementally | `.github/prompts/speckit.implement.prompt.md` | `.github/agents/speckit.implement.agent.md` | Source changes plus updated task checkboxes |
| `/speckit.analyze` | Run non-destructive cross-artifact consistency and quality analysis | `.github/prompts/speckit.analyze.prompt.md` | `.github/agents/speckit.analyze.agent.md` | Findings report with gaps, conflicts, and coverage metrics |
| `/speckit.checklist` | Generate feature-specific quality checklist | `.github/prompts/speckit.checklist.prompt.md` | `.github/agents/speckit.checklist.agent.md` | Checklist markdown under feature checklists |


### Suggested Workflow

1. `/speckit.constitution` (once, or when governance changes)
2. `/speckit.specify`
3. `/speckit.clarify` (optional but recommended)
4. `/speckit.plan`
5. `/speckit.tasks`
6. `/speckit.analyze`
7. `/speckit.implement`
8. `/speckit.taskstoissues` (if tracking execution in GitHub issues)

```

### Notes

- Keep each feature on its own branch and under `specs/<feature-branch>/`.
- Run `/speckit.analyze` after tasks generation and after major implementation updates.
- Use `/speckit.taskstoissues` only after `tasks.md` is finalized.

## Actual Prompts Used In This Session

The following prompts/commands were used in this repository session.

### 1) Constitution prompt

```text
Follow instructions in speckit.constitution.prompt.md.
Fill the constitution with the bare minimum requirement for a static website based on the template.
```

### 2) First feature specification prompt (CRM logistics website)

```text
/speckit.specify
I am building a modern CRM logistics website. I want it to look sleek and professional, something that would stand out. It should have a landing page highlighting the key CRM logistics features and services. There should be a services or features page, an about page, and an FAQ page. The website should include around 20 sample logistics records or client entries, and the data will be mocked. You do not need to pull anything from any real systems or databases. (Create ABP .IO ready solution blueprint)
```

### 3) Plan prompt for the CRM logistics feature

```text
/speckit.plan
I am going to use Next.js with static site configuration, no databases - data is embedded in the content for the mock feature or services. Site is responsive and ready for mobile.
```

### 4) Task generation prompt

```text
/speckit.tasks
break this down into tasks
```

### 5) Task-to-issues prompt

```text
/speckit.taskstoissues
Convert existing tasks into actionable, dependency-ordered GitHub issues for the feature based on available design artifacts.
```

### 6) Analysis prompt

```text
/speckit.analyze
Perform a non-destructive cross-artifact consistency and quality analysis across spec.md, plan.md, and tasks.md after task generation.
```

### 7) Implementation prompt

```text
/speckit.implement
Implement the tasks for this project and update the task list as you go.
```

### 8) Second feature specification prompt (VibeLaunch platform)

```text
/speckit.specify
Build "VibeLaunch", an AI-powered, spec-driven SaaS platform on Azure that helps users generate production-ready ABP.IO Commercial solution blueprints from natural-language prompts, structured inputs, or uploaded requirement documents. The platform must let a user describe an application idea, extract and refine purpose/entities/roles/workflows/business rules into a structured Application Spec, map that spec into ABP.IO concepts (modules, entities/aggregates, application services, DTOs, permissions, navigation, tenant configuration, layered architecture across Domain/Application/Infrastructure/Presentation), and produce a reviewable ABP.IO-ready blueprint rather than final implementation code. Include prioritized independently testable user journeys for: conversational app specification intake; document-based requirement ingestion; collaborative spec editing with version history, diff view, inline comments, and approval workflow; PR-like blueprint preview with file-by-file or module-by-module changes and selective accept/reject/modify; project/version management with fork, branch, and rollback; multi-tenancy and deployment configuration with configurable tenant isolation strategy (shared schema vs database-per-tenant) and support for at least 3 concurrent tenants from day one; platform RBAC for owner, contributor, reviewer, and read-only stakeholder controlling edit, approve, export, and deploy actions; audit trail for approvals, role changes, exports, webhook changes, and deployment triggers; integration and export to GitHub, downloadable ABP.IO solution ZIP, CI/CD pipelines, and Jira/Linear/GitHub Issues via webhooks; and pluggable AI provider support so OpenAI, Claude, or future providers can be swapped behind a stable interface with no hard coupling. The generated spec must emphasize non-negotiables from the project brief: SaaS-first on Azure, ABP.IO Commercial alignment, no implementation code at this stage, complete traceability from user stories to functional requirements to QA scenarios to tasks, approval-gated generation/export, security-by-default, observability, and measurable success criteria such as time-to-first-spec, approval turnaround time, blueprint acceptance rate, export success rate, and reduction in manual setup effort.
```

### 9) Clarification prompts accepted during /speckit.clarify

```text
Accepted recommendation: single reviewer approval + all change requests/comments resolved before export.
Accepted recommendation: shared-schema default, optional database-per-tenant by tenant policy.
Accepted recommendation: tenant SSO via OIDC/Entra ID + platform-managed service accounts.
Accepted recommendation: document ingestion formats in v1 are .docx, .pdf, .md.
Accepted recommendation: observability baseline is logs + metrics + tracing with 30-day default retention.
```


## Recommended Demo Script (6 Members)
 
1. **PM**: Problem framing + governance model + delivery gates
2. **BA**: Spec quality and acceptance criteria mapping
3. **UI/UX**: Figma alignment + accessibility decisions
4. **Developer**: Implemented modules and reusable components
5. **QA**: Checklist outcomes, quality status, known gaps/risks