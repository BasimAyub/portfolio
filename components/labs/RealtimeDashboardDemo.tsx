"use client";

import { useEffect, useState } from "react";

import { evolveTelemetry, getTelemetrySeed, type TelemetryItem } from "@/lib/lab-mocks";

export default function RealtimeDashboardDemo() {
  const [items, setItems] = useState<TelemetryItem[]>(() => getTelemetrySeed());
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    let tick = 0;
    const interval = window.setInterval(() => {
      tick += 1;
      setItems((current) => evolveTelemetry(current, tick));
      setConnected(tick % 7 !== 0);
    }, 1500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="lab-demo">
      <div className="lab-demo__header">
        <div>
          <p className="eyebrow">Realtime dashboard</p>
          <h3>Live-feeling operations telemetry with a lightweight simulated feed</h3>
        </div>
        <span className="badge">{connected ? "Connected" : "Syncing"}</span>
      </div>

      <p className="lab-demo__blurb">
        What this proves: I can design a realtime surface that feels alive, prioritises signal over noise, and stays
        readable when multiple services are moving at once.
      </p>

      <div className="metric-grid">
        {items.map((item) => (
          <article key={item.service} className="metric-card">
            <div className="metric-card__top">
              <strong>{item.service}</strong>
              <span className={`status-pill status-pill--${item.status}`}>{item.status}</span>
            </div>
            <dl>
              <div>
                <dt>Latency</dt>
                <dd>{item.latency} ms</dd>
              </div>
              <div>
                <dt>Error rate</dt>
                <dd>{item.errors}%</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
