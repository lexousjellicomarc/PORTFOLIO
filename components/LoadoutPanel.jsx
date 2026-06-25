import { BsCpu, BsShieldCheck, BsStars } from "react-icons/bs";

const loadoutItems = [
  { label: "Build", value: "Verified", Icon: BsShieldCheck },
  { label: "Mode", value: "Screen-fit", Icon: BsStars },
  { label: "Stack", value: "Next + React", Icon: BsCpu },
];

const LoadoutPanel = ({ className = "" }) => {
  return (
    <div
      className={`loadout-panel pointer-events-none hidden xl:grid ${className}`.trim()}
      aria-hidden="true"
    >
      {loadoutItems.map((item) => (
        <div
          key={item.label}
          className="cyber-panel rounded-2xl border border-white/10 bg-black/25 px-4 py-3 shadow-[0_0_45px_rgba(47,132,255,0.08)] backdrop-blur-xl"
        >
          <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-accent">
            <item.Icon aria-hidden="true" />
            {item.label}
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadoutPanel;
