const particles = [
  { top: "10%", left: "14%", delay: 0 },
  { top: "18%", left: "82%", delay: 1.1 },
  { top: "32%", left: "8%", delay: 0.6 },
  { top: "44%", left: "76%", delay: 1.8 },
  { top: "58%", left: "18%", delay: 0.3 },
  { top: "70%", left: "88%", delay: 1.2 },
  { top: "82%", left: "40%", delay: 0.9 }
];

export function AmbientBackground() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-scene__mesh ambient-scene__mesh--a" />
      <div className="ambient-scene__mesh ambient-scene__mesh--b" />
      <div className="ambient-scene__ring ambient-scene__ring--a" />
      <div className="ambient-scene__ring ambient-scene__ring--b" />
      <div className="ambient-scene__grid" />
      <div className="ambient-scene__beam" />

      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="ambient-scene__particle"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3.6 + (index % 3)}s`
          }}
        />
      ))}
    </div>
  );
}
