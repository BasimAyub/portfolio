export const ledgerFixture = [
  {
    id: "txn_1001",
    merchant: "Northlight Studio",
    amount: 1240,
    currency: "GBP",
    status: "settled",
    date: "2026-03-01"
  },
  {
    id: "txn_1002",
    merchant: "Aster Commerce",
    amount: 860,
    currency: "GBP",
    status: "pending",
    date: "2026-03-02"
  },
  {
    id: "txn_1003",
    merchant: "Helix Labs",
    amount: 2490,
    currency: "GBP",
    status: "flagged",
    date: "2026-03-04"
  }
] as const;
