import { logisticsRecords } from "@/content/logistics-records";
import { LogisticsRecordsTable } from "@/components/records/logistics-records-table";

export function MockRecordsShowcase(): JSX.Element {
  const count = logisticsRecords.length;
  const showPreviewLabel = count < 20;

  return (
    <section aria-labelledby="sample-records-heading" className="records-showcase">
      <div className="records-headline">
        <h2 id="sample-records-heading">Sample Logistics Records</h2>
        <p role="status" className="sample-banner">
          Sample Data - Not Real Client Records
        </p>
        {showPreviewLabel ? (
          <p role="status" className="preview-label">
            Sample dataset preview - showing {count} entries
          </p>
        ) : null}
        <p className="record-summary">Showing {count} sample records.</p>
      </div>
      <LogisticsRecordsTable records={logisticsRecords} />
    </section>
  );
}
