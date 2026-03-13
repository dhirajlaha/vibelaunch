# Accessibility Validation Checklist and Runbook

## Checklist
- [ ] Semantic landmarks present: header, nav, main, footer
- [ ] Skip link present and functional
- [ ] Focus-visible indicator present for interactive controls
- [ ] Keyboard-only navigation works across all pages
- [ ] Text contrast meets WCAG 2.1 AA
- [ ] FAQ interactions are keyboard accessible
- [ ] Images with meaning include alt text

## Runbook
1. Run `npm run dev` and inspect each route manually.
2. Use browser accessibility tools (Lighthouse/Axe extension).
3. Validate focus ring by tabbing end-to-end through each page.
4. Document any failures in `tests/e2e/browser-smoke-report.md`.
