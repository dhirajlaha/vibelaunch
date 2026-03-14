# Quickstart Guide — Vibelaunch CRM Logistics Website

**Version**: 0.1.0 | **Stack**: Next.js 15 static export | **Constitution**: v1.0.0

---

## Prerequisites

- **Node.js** 20 LTS or newer (`node --version`)
- **npm** 10+ (`npm --version`)

---

## 1. Install Dependencies

```bash
npm install
```

---

## 2. Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hot-reload is active; changes to `app/`, `components/`, `content/`, and `styles/` reflect immediately.

---

## 3. Required Pages to Validate

| Route | Purpose |
|-------|---------|
| `/` | Landing — value proposition and CTA |
| `/services` | Service and feature capabilities |
| `/about` | About + sample logistics records (with filter/search/detail) |
| `/faq` | FAQ for pre-sales and onboarding |

---

## 4. Static Build

```bash
npm run build
```

Output lands in `out/`. The build must complete without errors. Verify `out/index.html`, `out/services/index.html`, `out/about/index.html`, `out/faq/index.html` all exist.

---

## 5. Preview Static Output

```bash
npm run start
```

Serves `out/` locally on port 3000 using `serve`. Open [http://localhost:3000](http://localhost:3000) and verify all four pages render correctly from the static build.

---

## 6. Automated Validation Script

```bash
npm run verify:static
```

Runs `scripts/verify-static-site.mjs` to check:
- HTML/CSS structure and metadata coverage
- Presence of `robots.txt` and `sitemap.xml`
- Broken link indicators

---

## 7. Manual Validation Checklists

After running the build, complete each checklist:

| Checklist | Path |
|-----------|------|
| Landing page | `tests/e2e/landing-manual-checklist.md` |
| Services page | `tests/e2e/services-manual-checklist.md` |
| About + Records + FAQ | `tests/e2e/trust-content-manual-checklist.md` |
| UX QA (filter / detail / mobile) | `specs/003-logistics-portal-launch/checklists/ux-qa-checklist.md` |
| Accessibility | `tests/accessibility/a11y-checklist.md` |
| Responsive | `tests/e2e/responsive-checklist.md` |
| Browser smoke | `tests/e2e/browser-smoke-report.md` |
| Performance | `tests/e2e/performance-report.md` |

---

## 8. Linting

```bash
npm run lint
```

ESLint must pass with zero errors before merge.

---

## 9. Deployment

Deploy the `out/` directory to any static host:

```text
Azure Static Web Apps  → upload out/
Vercel (static export) → `vercel --prod` with output directory set to out/
Netlify                → drag-and-drop out/ or set publish directory to out/
GitHub Pages           → push out/ to gh-pages branch
```

No backend, database, or runtime server is required.

---

## 10. Constitution Gates

Before every release, confirm:

- [ ] Static-only: `npm run build` produces `out/` with no server-side runtime dependency
- [ ] Accessibility: `a11y-checklist.md` fully passed
- [ ] Performance: Lighthouse LCP ≤ 2.5s, FCP ≤ 1.8s, TBT ≤ 200ms
- [ ] SEO: each page has unique `<title>`, `<meta name="description">`, and canonical link
- [ ] Validation: ESLint zero errors, `verify:static` passes, responsive and browser checklists signed off
