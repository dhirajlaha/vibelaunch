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

No backend or database is required for this release.
