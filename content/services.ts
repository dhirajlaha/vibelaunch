import type { ServiceFeature } from "@/content/types";

export const services: ServiceFeature[] = [
  {
    id: "real-time-shipment-visibility",
    title: "Real-Time Shipment Visibility",
    summary: "Track multi-leg shipments with live status updates across air, sea, road, and rail corridors.",
    businessValue: "Reduce status-call overhead and improve on-time customer communication.",
    iconKey: "visibility",
    priority: "primary"
  },
  {
    id: "smart-route-optimization",
    title: "Smart Route Optimization",
    summary: "Compare route options by transit time, risk profile, and handoff complexity before dispatch.",
    businessValue: "Lower delays and increase delivery predictability for priority accounts.",
    iconKey: "route",
    priority: "primary"
  },
  {
    id: "client-service-workspace",
    title: "Client Service Workspace",
    summary: "Unify account history, SLA expectations, and escalation notes in one operational view.",
    businessValue: "Equip teams to resolve logistics exceptions faster with better context.",
    iconKey: "workspace",
    priority: "secondary"
  },
  {
    id: "compliance-document-control",
    title: "Compliance Document Control",
    summary: "Organize customs and carrier documentation with deadline reminders and exception flags.",
    businessValue: "Reduce compliance risk and avoid preventable border-clearance bottlenecks.",
    iconKey: "compliance",
    priority: "secondary"
  },
  {
    id: "performance-analytics",
    title: "Performance Analytics Dashboard",
    summary: "Surface lane-level KPI trends and account performance snapshots for weekly review cycles.",
    businessValue: "Drive better account planning decisions with measurable operations insights.",
    iconKey: "analytics",
    priority: "secondary"
  }
];
