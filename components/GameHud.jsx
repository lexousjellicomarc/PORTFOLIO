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


      <div className="game-hud-mobile left-4 right-4 top-[5.8rem] flex justify-center xl:hidden">
        <div className="inline-flex max-w-full items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/45 backdrop-blur-xl">
          <span className="hud-dot shrink-0" />
          <span className="truncate">Build ready</span>
          <span className="text-accent">Mobile UI tuned</span>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="game-hud-panel right-24 top-[118px] gap-4">
          {hudStats.map((stat) => (
            <span className="inline-flex items-center gap-2" key={stat.label}>
              <span className="text-white/35">{stat.label}</span>
              <span className="text-accent">{stat.value}</span>
            </span>
          ))}
        </div>

        <div className="radar-widget bottom-24 right-28">
          <span className="radar-sweep" />
          <span className="radar-ping radar-ping-one" />
          <span className="radar-ping radar-ping-two" />
        </div>
      </div>
    </div>
  );
};

export default GameHud;
