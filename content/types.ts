export type ServicePriority = "primary" | "secondary";

export type ServiceFeature = {
  id: string;
  title: string;
  summary: string;
  businessValue: string;
  iconKey?: string;
  priority: ServicePriority;
};

export type ShipmentType = "air" | "sea" | "road" | "rail";
export type RecordStatus = "planned" | "in-transit" | "delayed" | "delivered";
export type AccountTier = "standard" | "premium" | "enterprise";

export type LogisticsRecordMock = {
  recordId: string;
  clientName: string;
  shipmentType: ShipmentType;
  route: string;
  status: RecordStatus;
  etaDate: string;
  accountTier: AccountTier;
  isSampleData: true;
};

export type FaqCategory = "pricing" | "onboarding" | "compliance" | "operations" | "support";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
  order: number;
};

export type NarrativeTone = "mission" | "trust" | "capability" | "differentiator";

export type BrandNarrativeBlock = {
  id: string;
  heading: string;
  body: string;
  tone: NarrativeTone;
  order: number;
};

export function assertSampleData(records: LogisticsRecordMock[]): void {
  if (records.some((record) => record.isSampleData !== true)) {
    throw new Error("All records must be sample data.");
  }
}
