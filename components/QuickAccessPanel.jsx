import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRight, BsLightningChargeFill } from "react-icons/bs";

const quickLinks = [
  { label: "View Projects", href: "/work", code: "Q1" },
  { label: "Skill Tree", href: "/about", code: "Q2" },
  { label: "Send Message", href: "/contact", code: "Q3" },
];

const QuickAccessPanel = () => {
  const { pathname } = useRouter();

  return (
    <aside
      className="quick-access-panel pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Quick access actions"
    >
      <div className="pointer-events-auto cyber-panel overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-3 shadow-[0_0_50px_rgba(47,132,255,0.08)] backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/45">
          <BsLightningChargeFill className="text-accent" aria-hidden="true" />
          Quick menu
        </div>

        <div className="space-y-2">
          {quickLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex min-w-[168px] items-center justify-between gap-4 rounded-2xl border px-3 py-3 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  isActive
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-white/10 bg-white/[0.025] text-white/50 hover:border-accent/45 hover:bg-white/[0.06] hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="text-white/35">{link.code}</span>
                <span className="flex-1">{link.label}</span>
                <BsArrowRight
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default QuickAccessPanel;
