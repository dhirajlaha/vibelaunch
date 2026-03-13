# Data Model: Modern CRM Logistics Website

## Entity: ServiceFeature
- Purpose: Represents a CRM logistics capability displayed on landing/services pages.
- Fields:
  - id (string, required, unique)
  - title (string, required, 3-80 chars)
  - summary (string, required, 30-240 chars)
  - businessValue (string, required, 20-200 chars)
  - iconKey (string, optional)
  - priority (enum: primary | secondary, required)
- Validation Rules:
  - title must be unique across all service features.
  - summary and businessValue must not be empty.

## Entity: LogisticsRecordMock
- Purpose: Represents a sample logistics or client record shown as demonstration content.
- Fields:
  - recordId (string, required, unique)
  - clientName (string, required, 2-80 chars)
  - shipmentType (enum: air | sea | road | rail, required)
  - route (string, required)
  - status (enum: planned | in-transit | delayed | delivered, required)
  - etaDate (date string, required)
  - accountTier (enum: standard | premium | enterprise, required)
  - isSampleData (boolean, required, must be true)
- Validation Rules:
  - record count target is 20 records (acceptable range: 18-22).
  - all records must include isSampleData=true.
  - no record may include real personal/sensitive information.

## Entity: FaqItem
- Purpose: Represents one FAQ entry for common pre-sales/onboarding concerns.
- Fields:
  - id (string, required, unique)
  - question (string, required, 10-140 chars)
  - answer (string, required, 20-600 chars)
  - category (enum: pricing | onboarding | compliance | operations | support, required)
  - order (number, required)
- Validation Rules:
  - question must be unique.
  - answer must support long-form wrapping without truncation.

## Entity: BrandNarrativeBlock
- Purpose: Represents About page narrative sections.
- Fields:
  - id (string, required, unique)
  - heading (string, required)
  - body (string, required)
  - tone (enum: mission | trust | capability | differentiator, required)
  - order (number, required)
- Validation Rules:
  - order values must be contiguous for deterministic rendering.

## Relationships
- ServiceFeature and LogisticsRecordMock are independently rendered on different sections/pages.
- FaqItem supports FAQ page grouping/filtering by category.
- BrandNarrativeBlock composes About page narrative flow.

## State Transitions
- LogisticsRecordMock.status transitions for sample realism:
  - planned -> in-transit -> delivered
  - planned -> delayed -> in-transit -> delivered
- Content entities are otherwise static at runtime (build-time content updates only).
