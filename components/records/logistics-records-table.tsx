import type { LogisticsRecordMock } from "@/content/types";

type LogisticsRecordsTableProps = {
  records: LogisticsRecordMock[];
};

export function LogisticsRecordsTable({ records }: LogisticsRecordsTableProps): JSX.Element {
  return (
    <div className="records-wrapper">
      <table className="records-table">
        <caption>Sample logistics records overview</caption>
        <thead>
          <tr>
            <th scope="col">Record ID</th>
            <th scope="col">Client</th>
            <th scope="col">Type</th>
            <th scope="col">Route</th>
            <th scope="col">Status</th>
            <th scope="col">ETA</th>
            <th scope="col">Tier</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.recordId}>
              <td data-label="Record ID">{record.recordId}</td>
              <td data-label="Client">{record.clientName}</td>
              <td data-label="Type">{record.shipmentType}</td>
              <td data-label="Route">{record.route}</td>
              <td data-label="Status">
                <span className={`status-pill status-${record.status.replace("-", "")}`}>{record.status}</span>
              </td>
              <td data-label="ETA">{record.etaDate}</td>
              <td data-label="Tier">{record.accountTier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
