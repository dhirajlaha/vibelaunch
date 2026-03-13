# Contract: Public Routes and Content Interface

## Route Contract
The site MUST expose the following public routes:
- /
- /services
- /about
- /faq

Each route MUST:
- Render static content without server-side runtime dependency.
- Include page-specific title and meta description.
- Include global navigation links to all required routes.

## Content Contract

### ServiceFeature Collection
- Type: array of ServiceFeature
- Minimum entries: 4
- Required fields: id, title, summary, businessValue, priority

### LogisticsRecordMock Collection
- Type: array of LogisticsRecordMock
- Target entries: 20 (acceptable range 18-22)
- Required fields: recordId, clientName, shipmentType, route, status, etaDate, accountTier, isSampleData
- Constraint: isSampleData MUST always be true

### FaqItem Collection
- Type: array of FaqItem
- Minimum entries: 6
- Required fields: id, question, answer, category, order

### BrandNarrativeBlock Collection
- Type: array of BrandNarrativeBlock
- Minimum entries: 3
- Required fields: id, heading, body, tone, order

## Non-Functional Contract Gates
- Accessibility: semantic landmarks, keyboard accessibility, and WCAG 2.1 AA contrast targets.
- Performance: no blocking script on initial render path; optimized assets.
- Compatibility: responsive behavior on mobile and desktop; Chrome/Firefox smoke-tested.
- Discoverability: robots and sitemap included for multi-page static output.
