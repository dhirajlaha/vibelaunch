# Quickstart: Modern CRM Logistics Website (Static Next.js)

## Prerequisites
- Node.js 20 LTS or newer
- npm 10+ (or pnpm/yarn equivalent)

## 1. Install dependencies
```bash
npm install
```

## 2. Run local development server
```bash
npm run dev
```
- Open http://localhost:3000

## 3. Required pages to validate
- Landing page: /
- Services/Features page: /services
- About page: /about
- FAQ page: /faq

## 4. Build static output
```bash
npm run build
```
- Build must complete with static export enabled.

## 5. Preview static output
```bash
npm run start
```
or serve the exported static assets with any static host/server.

## 6. Validation checklist
- Verify navigation works across all required pages.
- Verify around 20 mocked logistics/client records render with sample-data labeling.
- Verify mobile breakpoints (360px, 768px, 1280px) for layout integrity.
- Verify keyboard navigation and visible focus states.
- Verify unique title/meta per page and presence of robots/sitemap outputs.
- Smoke test latest Chrome and Firefox.

## 7. Deployment target
- Any static hosting platform (for example: Azure Static Web Apps, Vercel static export, Netlify, GitHub Pages).
- No database or backend runtime required.

## 8. ABP.IO Future Migration Note

- Current state: static-only release with no ABP runtime in this feature.
- Future state: ABP migration blueprint is documented in this feature artifacts.
- Reference sections:
	- `spec.md` -> "ABP.IO Future Migration Blueprint"
	- `plan.md` -> "ABP.IO Future Migration Plan (Non-Blocking)"
	- `research.md` -> "Decision 6: ABP.IO-ready blueprint posture"

## 9. Final Validation Pass Notes
- Validation date: 2026-03-13
- Environment: Node.js 20+, npm 10+, Windows
- Executed checks:
	- `npm install` completed without vulnerabilities
	- `npm run lint` passed with no ESLint errors
	- `npm run build` passed and exported static routes (`/`, `/services`, `/about`, `/faq`)
	- `npm run verify:static` passed HTML/CSS presence, broken output checks, and metadata coverage checks
	- `npm run dev` startup validated (auto-shifted from port 3000 because port already in use)
	- `npm run start` static preview startup validated
- Manual checklist artifacts created for browser smoke, responsive, accessibility, and performance reports under `tests/` for release sign-off.
