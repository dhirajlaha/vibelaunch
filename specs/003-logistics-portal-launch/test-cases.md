# Test Cases: Modern CRM Logistics Website

## Scope
This document derives detailed test cases from acceptance scenarios and edge cases in the feature specification.

Source:
- specs/003-logistics-portal-launch/spec.md

## Test Environment Baseline
- Browser coverage: latest Chrome and Firefox
- Viewports: 360x800, 768x1024, 1280x800
- Data: static mock dataset (target 20 records; fallback scenarios with fewer records)

## Acceptance Scenario Test Cases

### TC-AC-001
- Title: Landing value proposition appears above the fold
- Maps to: User Story 1, Acceptance Scenario 1
- Priority: P1
- Preconditions:
  - Site is deployed or running locally
- Steps:
  1. Open the home page as a first-time visitor.
  2. Observe the first visible viewport without scrolling.
- Expected Results:
  - A clear CRM logistics value proposition is visible above the fold.
  - Messaging communicates core product purpose in plain language.

### TC-AC-002
- Title: Landing highlights identify services and deeper navigation
- Maps to: User Story 1, Acceptance Scenario 2
- Priority: P1
- Preconditions:
  - Home page is accessible
- Steps:
  1. Open the home page.
  2. Review highlighted feature/service sections.
  3. Click visible deep links/CTAs to other pages.
- Expected Results:
  - Core services are identifiable by name and purpose.
  - Navigation links successfully reach deeper pages.

### TC-AC-003
- Title: Services page distinguishes major capabilities
- Maps to: User Story 2, Acceptance Scenario 1
- Priority: P1
- Preconditions:
  - Services page exists
- Steps:
  1. Open the services/features page.
  2. Inspect each service entry.
- Expected Results:
  - Each service is distinct and has its own clear purpose.
  - Entries are readable and structurally separated.

### TC-AC-004
- Title: Services details support capability comparison
- Maps to: User Story 2, Acceptance Scenario 2
- Priority: P1
- Preconditions:
  - Services page populated with multiple entries
- Steps:
  1. Open the services/features page.
  2. Compare at least three entries by description/value.
- Expected Results:
  - User can determine which capability best fits a logistics use case.
  - Business value text is present and understandable.

### TC-AC-005
- Title: About page communicates mission and positioning
- Maps to: User Story 3, Acceptance Scenario 1
- Priority: P1
- Preconditions:
  - About page is accessible
- Steps:
  1. Open the About page directly.
  2. Read mission and positioning content blocks.
- Expected Results:
  - Brand mission, logistics focus, and positioning are clearly conveyed.

### TC-AC-006
- Title: FAQ page answers pre-sales concerns
- Maps to: User Story 3, Acceptance Scenario 2
- Priority: P1
- Preconditions:
  - FAQ page contains common questions/answers
- Steps:
  1. Open the FAQ page.
  2. Locate answers for at least three typical pre-sales questions.
- Expected Results:
  - Clear answers are available and understandable.
  - FAQ structure enables quick scanning.

### TC-AC-007
- Title: Sample records are visible and non-sensitive
- Maps to: User Story 3, Acceptance Scenario 3
- Priority: P1
- Preconditions:
  - Records section/page available
- Steps:
  1. Open records section.
  2. Count displayed records.
  3. Inspect fields for sample-data indicators and sensitive content.
- Expected Results:
  - Around 20 mock records are shown.
  - Records are labeled as sample data.
  - No real personal/customer-sensitive data is shown.

## Edge Case Test Cases

### TC-EC-001
- Title: Fewer-than-20 records fallback behavior
- Maps to: Edge Case 1, FR-011
- Priority: P1
- Preconditions:
  - Dataset reduced to fewer than 20 records (for example, 8)
- Steps:
  1. Load records view with reduced dataset.
- Expected Results:
  - All available records are displayed.
  - A visible sample dataset preview label is shown.
  - No empty placeholder rows are rendered.

### TC-EC-002
- Title: Long services and FAQ content wrapping
- Maps to: Edge Case 2, FR-012
- Priority: P1
- Preconditions:
  - Inject long paragraph text into service and FAQ entries
- Steps:
  1. Open services page at mobile and desktop widths.
  2. Open FAQ page at mobile and desktop widths.
- Expected Results:
  - Text wraps without clipping/overlap.
  - Layout remains readable and stable.

### TC-EC-003
- Title: Direct-entry context on About and FAQ and Services
- Maps to: Edge Case 3, FR-013
- Priority: P1
- Preconditions:
  - None
- Steps:
  1. Open /about in a fresh tab.
  2. Open /faq in a fresh tab.
  3. Open /services in a fresh tab.
- Expected Results:
  - Each page is understandable without visiting home first.
  - Global navigation is available on each page.

### TC-EC-004
- Title: Low-bandwidth and small-screen resilience
- Maps to: Edge Case 4, SC-005
- Priority: P1
- Preconditions:
  - Browser network throttling enabled (slow network profile)
  - Mobile viewport enabled
- Steps:
  1. Load each primary page under throttled conditions.
- Expected Results:
  - Core content and navigation remain available.
  - Non-critical visual effects can degrade gracefully.

## Additional Requirement-Based Test Cases

### TC-FR-014
- Title: Records list search and filter
- Maps to: FR-014
- Priority: P1
- Steps:
  1. Search records by client name.
  2. Search by shipment/record ID.
  3. Apply status filter.
- Expected Results:
  - Results update to matching records only.
  - User can locate target entries quickly.

### TC-FR-015
- Title: Record detail view
- Maps to: FR-015
- Priority: P1
- Steps:
  1. Select a record from the list.
- Expected Results:
  - Detail view opens and shows full record attributes and status.

### TC-FR-016
- Title: Key attributes visible in list glance view
- Maps to: FR-016
- Priority: P1
- Steps:
  1. Open records list.
- Expected Results:
  - Record ID, client name, category, and status are visible without opening detail.

### TC-FR-017
- Title: Status filter applies without full reload
- Maps to: FR-017
- Priority: P1
- Steps:
  1. Apply status filter from records controls.
- Expected Results:
  - Result list updates immediately.
  - No full page reload occurs.

### TC-FR-018
- Title: Empty state semantics for filter/no-data
- Maps to: FR-018, UXR-007
- Priority: P1
- Steps:
  1. Use filter criteria that produce no matches.
  2. Test with an empty dataset.
- Expected Results:
  - Distinct empty messages are shown for no records vs no filter matches.
  - Recovery action is available (for example, clear filters).

## UX and Accessibility Test Cases

### TC-UX-001
- Title: Full keyboard navigation with visible focus
- Maps to: UXR-001
- Priority: P1
- Steps:
  1. Navigate entire site using keyboard only.
- Expected Results:
  - All interactive elements are reachable.
  - Focus indicators are always visible.

### TC-UX-002
- Title: Contrast and non-color status cues
- Maps to: UXR-002
- Priority: P1
- Steps:
  1. Validate color contrast on all pages.
  2. Inspect status badges for text labels.
- Expected Results:
  - WCAG 2.1 AA contrast is met.
  - Status is understandable without relying on color only.

### TC-UX-003
- Title: Mobile records layout and tap targets
- Maps to: UXR-004, UXR-005
- Priority: P1
- Steps:
  1. Open records list below 600px width.
  2. Inspect card layout and touch targets.
- Expected Results:
  - Card-based readable layout is used.
  - Tap targets are at least 44x44px with spacing.

### TC-UX-004
- Title: Skeleton loading and pagination affordances
- Maps to: UXR-006, UXR-008
- Priority: P2
- Steps:
  1. Trigger records list/detail loading states.
  2. Test dataset exceeding one page.
- Expected Results:
  - Skeleton states appear while data loads.
  - Record count and pagination controls are visible and accessible.

## Execution and Reporting Template

For each executed test case, record:
- Test Case ID
- Tester
- Date/Time
- Environment (browser, viewport, network)
- Result: Pass/Fail
- Evidence: screenshot or video link
- Defect ID (if failed)
