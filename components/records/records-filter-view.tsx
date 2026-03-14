"use client";

import { useState, useMemo } from "react";
import { logisticsRecords } from "@/content/logistics-records";
import type { RecordStatus } from "@/content/types";
import { LogisticsRecordsTable } from "@/components/records/logistics-records-table";

type StatusFilter = "all" | RecordStatus;

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All Statuses" },
  { value: "planned", label: "Planned" },
  { value: "in-transit", label: "In Transit" },
  { value: "delayed", label: "Delayed" },
  { value: "delivered", label: "Delivered" },
];

export function RecordsFilteredView(): JSX.Element {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const total = logisticsRecords.length;
  const showDatasetLabel = total < 20;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return logisticsRecords.filter((r) => {
      const matchSearch =
        q === "" ||
        r.clientName.toLowerCase().includes(q) ||
        r.recordId.toLowerCase().includes(q);
      const matchStatus = statusFilter === "all" || r.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const isFiltered = search.trim() !== "" || statusFilter !== "all";

  function handleSelectRecord(id: string): void {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function clearFilters(): void {
    setSearch("");
    setStatusFilter("all");
  }

  return (
    <div className="records-filter-view">
      {showDatasetLabel && (
        <p role="status" className="preview-label">
          Sample dataset preview — showing {total} entries
        </p>
      )}

      {/* Filter bar — FR-014, FR-017 */}
      <div className="filter-bar" role="search" aria-label="Filter logistics records">
        <label htmlFor="record-search" className="sr-only">
          Search by client name or record ID
        </label>
        <input
          id="record-search"
          type="search"
          placeholder="Search by client name or shipment ID…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />
        <label htmlFor="status-filter" className="sr-only">
          Filter by status
        </label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          className="filter-select"
          aria-label="Filter by status"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {isFiltered && (
          <button
            type="button"
            className="btn-clear"
            onClick={clearFilters}
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Record count — UXR-008 */}
      <p className="record-count" aria-live="polite" aria-atomic="true">
        Showing {filtered.length} of {total} records
      </p>

      {/* Empty state — FR-018, UXR-007 */}
      {filtered.length === 0 ? (
        <div className="records-empty-state" role="status">
          <p className="empty-state-msg">
            {total === 0
              ? "No records are available in this dataset."
              : "No records match the current filter. Try adjusting your search or status selection."}
          </p>
          {isFiltered && (
            <button type="button" className="btn btn-ghost" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        /* Records table — FR-016 (key attributes visible), FR-014 (filtered list) */
        <LogisticsRecordsTable
          records={filtered}
          selectedRecordId={selectedId}
          onSelectRecord={handleSelectRecord}
        />
      )}
    </div>
  );
}
