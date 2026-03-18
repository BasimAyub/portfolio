"use client";

import { useMemo, useState } from "react";

import { workflowTemplates } from "@/content/fixtures/workflow";
import { summariseWorkflow } from "@/lib/lab-mocks";

type Step = (typeof workflowTemplates)[number];

export default function WorkflowBuilderDemo() {
  const [steps, setSteps] = useState<Step[]>(workflowTemplates.slice(0, 3));
  const [exported, setExported] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  function moveStep(fromIndex: number, toIndex: number) {
    setSteps((current) => {
      const next = [...current];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  }

  function addStep(step: Step) {
    setSteps((current) => {
      if (current.find((item) => item.id === step.id)) {
        return current;
      }
      return [...current, step];
    });
  }

  async function exportWorkflow() {
    const payload = {
      name: "Portfolio workflow demo",
      steps
    };

    setExported(JSON.stringify(payload, null, 2));
    setSummary(summariseWorkflow(steps.map((step) => step.label)));
  }

  const availableSteps = useMemo(
    () => workflowTemplates.filter((template) => !steps.some((step) => step.id === template.id)),
    [steps]
  );

  return (
    <div className="lab-demo">
      <div className="lab-demo__header">
        <div>
          <p className="eyebrow">Workflow builder</p>
          <h3>Composable internal tooling with exportable JSON</h3>
        </div>
        <span className="badge">Live</span>
      </div>

      <p className="lab-demo__blurb">
        What this proves: I can design internal-tool interactions, structure business workflows, and expose clean
        export formats that other systems can consume.
      </p>

      <div className="workflow-builder">
        <div className="workflow-builder__palette">
          <strong>Available steps</strong>
          {availableSteps.map((step) => (
            <button key={step.id} type="button" className="pill-button" onClick={() => addStep(step)}>
              + {step.label}
            </button>
          ))}
        </div>

        <div className="workflow-builder__canvas">
          {steps.map((step, index) => (
            <article key={step.id} className="workflow-node">
              <div>
                <strong>{step.label}</strong>
                <p>{step.description}</p>
              </div>
              <div className="workflow-node__actions">
                <button
                  type="button"
                  className="pill-button"
                  disabled={index === 0}
                  onClick={() => moveStep(index, index - 1)}
                >
                  Up
                </button>
                <button
                  type="button"
                  className="pill-button"
                  disabled={index === steps.length - 1}
                  onClick={() => moveStep(index, index + 1)}
                >
                  Down
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="button-row">
        <button type="button" className="button button--primary" onClick={exportWorkflow}>
          Export JSON
        </button>
      </div>

      {summary ? <p className="success-text">{summary}</p> : null}
      {exported ? (
        <pre className="code-block" aria-label="Exported workflow JSON">
          {exported}
        </pre>
      ) : null}
    </div>
  );
}
