"use client";

import { Fragment } from "react";
import type { KeyboardEvent } from "react";
import type { LogisticsRecordMock } from "@/content/types";

type LogisticsRecordsTableProps = {
  records: LogisticsRecordMock[];
  selectedRecordId?: string | null;
  onSelectRecord?: (id: string) => void;
};

export function LogisticsRecordsTable({ records, selectedRecordId, onSelectRecord }: LogisticsRecordsTableProps): JSX.Element {
  const isInteractive = Boolean(onSelectRecord);

  function handleRowKeyDown(e: KeyboardEvent<HTMLTableRowElement>, id: string): void {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectRecord?.(id);
    }
  }

  return (
    <div className="records-wrapper">
      <table className="records-table">
        <caption>Sample logistics records overview — click a row to view full details</caption>
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
          {records.map((record) => {
            const isSelected = selectedRecordId === record.recordId;
            return (
              <Fragment key={record.recordId}>
                <tr
                  className={isSelected ? "selected-row" : undefined}
                  aria-selected={isInteractive ? isSelected : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                  onClick={isInteractive ? () => onSelectRecord?.(record.recordId) : undefined}
                  onKeyDown={isInteractive ? (e) => handleRowKeyDown(e, record.recordId) : undefined}
                  title={isInteractive ? `${isSelected ? "Hide" : "View"} details for ${record.recordId}` : undefined}
                >
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
                {isSelected ? (
                  <tr className="inline-detail-row">
                    <td colSpan={7}>
                      <div className="inline-detail-panel" role="region" aria-label={`Record detail: ${record.recordId}`}>
                        <div className="detail-header">
                          <h3 className="detail-heading">Record Detail - {record.recordId}</h3>
                          <button
                            type="button"
                            className="btn btn-ghost detail-close"
                            onClick={() => onSelectRecord?.(record.recordId)}
                            aria-label="Close record detail"
                          >
                            Close
                          </button>
                        </div>
                        <dl className="detail-grid">
                          <div className="detail-field">
                            <dt>Record ID</dt>
                            <dd>{record.recordId}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Client Name</dt>
                            <dd>{record.clientName}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Shipment Type</dt>
                            <dd>{record.shipmentType}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Route</dt>
                            <dd>{record.route}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Status</dt>
                            <dd>
                              <span className={`status-pill status-${record.status.replace("-", "")}`}>{record.status}</span>
                            </dd>
                          </div>
                          <div className="detail-field">
                            <dt>ETA Date</dt>
                            <dd>{record.etaDate}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Account Tier</dt>
                            <dd>{record.accountTier}</dd>
                          </div>
                          <div className="detail-field">
                            <dt>Data Type</dt>
                            <dd>Sample - not real client data</dd>
                          </div>
                        </dl>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
