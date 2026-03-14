import { RecordsFilteredView } from "@/components/records/records-filter-view";

export function MockRecordsShowcase(): JSX.Element {
  return (
    <section aria-labelledby="sample-records-heading" className="records-showcase">
      <div className="records-headline">
        <h2 id="sample-records-heading">Sample Logistics Records</h2>
        <p role="status" className="sample-banner">
          Sample Data — Not Real Client Records
        </p>
      </div>
      <RecordsFilteredView />
    </section>
  );
}
