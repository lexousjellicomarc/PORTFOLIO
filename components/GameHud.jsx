const hudStats = [
  { label: "Build", value: "200 OK" },
  { label: "Audit", value: "0 Vuln" },
  { label: "Mode", value: "Dev" },
];

const GameHud = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      <div className="hidden xl:block">
        <div className="game-hud-panel left-8 top-[120px]">
          <span className="hud-dot" />
          <span>Portfolio HUD</span>
        </div>

        <div className="game-hud-panel right-8 top-[120px] gap-4">
          {hudStats.map((stat) => (
            <span className="inline-flex items-center gap-2" key={stat.label}>
              <span className="text-white/35">{stat.label}</span>
              <span className="text-accent">{stat.value}</span>
            </span>
          ))}
        </div>

        <div className="radar-widget bottom-24 right-24">
          <span className="radar-sweep" />
          <span className="radar-ping radar-ping-one" />
          <span className="radar-ping radar-ping-two" />
        </div>
      </div>
    </div>
  );
};

export default GameHud;
