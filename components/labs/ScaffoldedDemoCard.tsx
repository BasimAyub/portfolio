import { LabDefinition } from "@/content/labs";

export function ScaffoldedDemoCard({ lab }: { lab: LabDefinition }) {
  return (
    <div className="lab-demo">
      <div className="lab-demo__header">
        <div>
          <p className="eyebrow">{lab.title}</p>
          <h3>Scaffolded for the next pass</h3>
        </div>
        <span className="badge">Scaffolded</span>
      </div>
      <p className="lab-demo__blurb">{lab.summary}</p>
      <p>{lab.proof}</p>
    </div>
  );
}
