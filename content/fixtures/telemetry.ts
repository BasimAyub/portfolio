export const telemetrySeed = [
  { service: "Auth API", latency: 121, errors: 0.2, status: "healthy" },
  { service: "Payments", latency: 214, errors: 0.5, status: "watch" },
  { service: "Notifications", latency: 88, errors: 0.1, status: "healthy" },
  { service: "Search", latency: 166, errors: 0.9, status: "degraded" }
] as const;

export const telemetryEvents = [
  { service: "Auth API", latency: 118, errors: 0.1, status: "healthy" },
  { service: "Payments", latency: 202, errors: 0.4, status: "watch" },
  { service: "Notifications", latency: 93, errors: 0.1, status: "healthy" },
  { service: "Search", latency: 154, errors: 0.6, status: "watch" },
  { service: "Auth API", latency: 129, errors: 0.3, status: "watch" },
  { service: "Payments", latency: 231, errors: 0.7, status: "degraded" },
  { service: "Notifications", latency: 85, errors: 0.1, status: "healthy" },
  { service: "Search", latency: 141, errors: 0.4, status: "healthy" }
] as const;
