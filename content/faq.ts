import type { FaqItem } from "@/content/types";

export const faqItems: FaqItem[] = [
  {
    id: "pricing-model",
    question: "How is pricing structured for logistics CRM deployments?",
    answer: "Pricing is typically aligned to account volume, workflow complexity, and reporting depth. Teams can start with essential visibility modules and expand as needs evolve.",
    category: "pricing",
    order: 1
  },
  {
    id: "onboarding-time",
    question: "How long does onboarding usually take?",
    answer: "A baseline rollout usually starts in a few weeks for core routing, tracking, and account workflow setup, with phased expansion for advanced analytics.",
    category: "onboarding",
    order: 2
  },
  {
    id: "compliance-support",
    question: "Can the platform support compliance-heavy logistics processes?",
    answer: "Yes. The workflow model supports structured document checkpoints, exception tracking, and role-based review flows for regulated or cross-border operations.",
    category: "compliance",
    order: 3
  },
  {
    id: "ops-monitoring",
    question: "How do operations teams monitor delays and escalations?",
    answer: "Teams use status dashboards and exception views to prioritize delayed shipments, route risks, and SLA-sensitive client updates in one place.",
    category: "operations",
    order: 4
  },
  {
    id: "support-sla",
    question: "What support model is available after launch?",
    answer: "Support typically includes onboarding assistance, workflow tuning, and periodic optimization reviews based on account and shipment performance trends.",
    category: "support",
    order: 5
  },
  {
    id: "data-readiness",
    question: "Can we start with mock data before integrating live systems?",
    answer: "Absolutely. Teams commonly begin with controlled sample data to validate UX and operational flows before connecting live sources in later phases.",
    category: "onboarding",
    order: 6
  }
];
