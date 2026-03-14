# UX QA Checklist: Modern CRM Logistics Website

**Purpose**: Validate UX implementation against logistics portal requirements before release
**Feature**: [spec.md](../spec.md)
**Created**: 2026-03-13

## Keyboard Navigation (UXR-001)

- [ ] Tab key navigates through all interactive elements (nav links, filter inputs, dropdown, record rows, detail close button) in logical DOM order
- [ ] Enter and Space activate selectable record rows
- [ ] Activating a selected row again deselects it and closes the detail panel
- [ ] The "Close" button in the detail panel is reachable by keyboard and closes the panel
- [ ] The "Clear Filters" button is reachable by keyboard and restores all records
- [ ] Skip-to-content link appears on focus for keyboard users

## Focus Indicators (UXR-001)

- [ ] All focused interactive elements show a visible 3px accent-colored outline
- [ ] No interactive element loses its focus ring
- [ ] Selected record row shows both aria-selected and a visible background/outline distinction

## Color Contrast (UXR-002)

- [ ] Body text passes WCAG 2.1 AA (>=4.5:1 contrast ratio)
- [ ] Status badge text on colored background passes >=4.5:1
- [ ] Status state is conveyed by visible text label, not color alone
- [ ] Filter input placeholder text is readable (>=4.5:1)

## Navigation Consistency (UXR-003)

- [ ] Nav bar is visible and identical on /, /services, /about, /faq
- [ ] All four primary pages reachable from any page within two interactions

## Mobile Card Layout (UXR-004)

- [ ] At 375px viewport width, records render as stacked label-value cards
- [ ] No horizontal overflow or truncated content on mobile
- [ ] Detail panel is fully readable on mobile without horizontal scrolling

## Touch Targets (UXR-005)

- [ ] Filter input minimum height >=44px
- [ ] Status dropdown minimum height >=44px
- [ ] "Clear Filters" button minimum 44x44px
- [ ] "Close" button in detail panel minimum 44x44px
- [ ] Record card tap targets (on mobile) >=44px height

## Live Region Announcement (UXR-006 / UXR-008)

- [ ] "Showing X of Y records" text is in an aria-live="polite" region
- [ ] Count updates when search input changes
- [ ] Count updates when status filter changes
- [ ] Count resets to total when "Clear Filters" is activated

## Empty and Error States (UXR-007 / FR-018)

- [ ] Empty state renders when no records match the filter
- [ ] Empty state message clearly indicates "no records match filter" (not "no records exist")
- [ ] "Clear Filters" button is present in the empty state
- [ ] Clicking "Clear Filters" from the empty state restores all records

## Records Filter (FR-014 / FR-017)

- [ ] Search by client name returns only matching records
- [ ] Search by shipment ID (e.g., "REC-1005") returns the correct record
- [ ] Applying "Delayed" status filter shows only delayed records
- [ ] Applying "Delivered" status filter shows only delivered records
- [ ] Both search and status filter active simultaneously: both constraints apply
- [ ] Clearing search while status filter is active: status filter results remain

## Record Detail View (FR-015 / FR-016)

- [ ] Clicking a record row opens the detail panel below the table
- [ ] Detail panel shows: Record ID, Client Name, Shipment Type, Route, Status, ETA Date, Account Tier, Data Type
- [ ] Detail panel status badge matches the row's status badge
- [ ] "Sample - not real client data" label is shown in detail panel
- [ ] Clicking the same row again closes the detail panel
- [ ] Detail panel shows the correct record (not a stale or incorrect one)

## Plain Language (UXR-009)

- [ ] All button labels describe their action in plain language
- [ ] Status values are human-readable ("In Transit" not "in-transit")
- [ ] Record IDs appear alongside client names in the table

## Overall Pass Criteria

All checklist items must pass before marking UX validation complete.
