export const workflowTemplates = [
  {
    id: "capture",
    label: "Capture request",
    description: "Intake and validate the incoming task or user action."
  },
  {
    id: "review",
    label: "Review",
    description: "Apply guardrails, approvals, or human checks."
  },
  {
    id: "transform",
    label: "Transform data",
    description: "Normalise, enrich, or reshape data before processing."
  },
  {
    id: "notify",
    label: "Notify",
    description: "Trigger outbound updates for internal or external users."
  },
  {
    id: "archive",
    label: "Archive result",
    description: "Persist outcome for reporting, audit, or later retrieval."
  }
] as const;
