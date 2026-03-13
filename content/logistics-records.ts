import { assertSampleData, type LogisticsRecordMock } from "@/content/types";

export const logisticsRecords: LogisticsRecordMock[] = [
  { recordId: "REC-1001", clientName: "Northline Freight Group", shipmentType: "road", route: "Kolkata -> Delhi", status: "in-transit", etaDate: "2026-03-18", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1002", clientName: "BlueHarbor Imports", shipmentType: "sea", route: "Mumbai Port -> Chennai Port", status: "planned", etaDate: "2026-03-21", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1003", clientName: "AeroPulse Components", shipmentType: "air", route: "Bengaluru -> Singapore", status: "delivered", etaDate: "2026-03-11", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1004", clientName: "RailSpan Retail Supply", shipmentType: "rail", route: "Nagpur -> Jaipur", status: "delayed", etaDate: "2026-03-19", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1005", clientName: "EverRoute Foods", shipmentType: "road", route: "Pune -> Hyderabad", status: "planned", etaDate: "2026-03-20", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1006", clientName: "OceanCraft Distribution", shipmentType: "sea", route: "Kandla -> Kochi", status: "in-transit", etaDate: "2026-03-22", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1007", clientName: "SwiftAxis Medical", shipmentType: "air", route: "Delhi -> Dubai", status: "planned", etaDate: "2026-03-16", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1008", clientName: "TrackBridge Wholesale", shipmentType: "rail", route: "Ahmedabad -> Lucknow", status: "in-transit", etaDate: "2026-03-23", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1009", clientName: "ClearLane Apparel", shipmentType: "road", route: "Surat -> Noida", status: "delivered", etaDate: "2026-03-09", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1010", clientName: "HarborPeak Electronics", shipmentType: "sea", route: "Chennai Port -> Colombo", status: "delayed", etaDate: "2026-03-24", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1011", clientName: "SkyVector Mobility", shipmentType: "air", route: "Hyderabad -> Frankfurt", status: "in-transit", etaDate: "2026-03-25", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1012", clientName: "IronRoute Materials", shipmentType: "rail", route: "Raipur -> Kanpur", status: "planned", etaDate: "2026-03-27", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1013", clientName: "PrimeNest Home Goods", shipmentType: "road", route: "Indore -> Bhopal", status: "in-transit", etaDate: "2026-03-17", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1014", clientName: "MarinaLine Agro", shipmentType: "sea", route: "Visakhapatnam -> Jakarta", status: "planned", etaDate: "2026-03-29", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1015", clientName: "AirGrid Pharma", shipmentType: "air", route: "Mumbai -> Doha", status: "delivered", etaDate: "2026-03-10", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1016", clientName: "MetroCrate Furnishings", shipmentType: "rail", route: "Patna -> Kolkata", status: "in-transit", etaDate: "2026-03-20", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1017", clientName: "RoadMint Chemicals", shipmentType: "road", route: "Vadodara -> Nashik", status: "delayed", etaDate: "2026-03-18", accountTier: "enterprise", isSampleData: true },
  { recordId: "REC-1018", clientName: "Sealine Consumer Tech", shipmentType: "sea", route: "Tuticorin -> Dubai", status: "in-transit", etaDate: "2026-03-28", accountTier: "premium", isSampleData: true },
  { recordId: "REC-1019", clientName: "CloudTransit Textiles", shipmentType: "air", route: "Kolkata -> Bangkok", status: "planned", etaDate: "2026-03-26", accountTier: "standard", isSampleData: true },
  { recordId: "REC-1020", clientName: "RailBound Industrial", shipmentType: "rail", route: "Bhilai -> Ranchi", status: "delivered", etaDate: "2026-03-12", accountTier: "enterprise", isSampleData: true }
];

assertSampleData(logisticsRecords);
