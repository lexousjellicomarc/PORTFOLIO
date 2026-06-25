import Link from "next/link";
import { motion } from "framer-motion";

import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ScreenFrame from "../components/ScreenFrame";
import SkillTicker from "../components/SkillTicker";
import TerminalWindow from "../components/TerminalWindow";
import { aboutSummary } from "../data/about";
import { siteConfig } from "../data/siteConfig";
import { fadeIn } from "../variants";

const gameStats = [
  { label: "Build", value: "Full-stack systems", meter: "0.92" },
  { label: "Focus", value: "Clean responsive UI", meter: "0.88" },
  { label: "Mode", value: "Production ready", meter: "0.9" },
];

const coreTools = ["Laravel", "React", "Inertia", "Tailwind", "MySQL", "Arduino"];

const Home = () => {
  return (
    <ScreenFrame
      className="bg-primary/60"
      frameClassName="screen-home-frame bg-[radial-gradient(circle_at_78%_42%,rgba(241,48,36,0.14),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(47,132,255,0.12),transparent_30%),linear-gradient(105deg,rgba(5,6,12,0.3),rgba(5,6,12,0.74))] text-center xl:text-left"
    >
      <div className="home-shell desktop-safe-container relative z-10 mx-auto grid w-full items-center gap-5 px-5 sm:px-6 xl:grid-cols-[minmax(0,0.98fr)_minmax(430px,0.9fr)] xl:gap-9 xl:px-0">
        <motion.section
          variants={fadeIn("right", 0.12)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hero-briefing-card mx-auto flex w-full max-w-[760px] flex-col items-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6 xl:mx-0 xl:items-start xl:p-7"
          aria-labelledby="home-title"
        >
          <div className="hero-panel-topline mb-4 flex w-full flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.26em] text-white/50 sm:justify-between xl:justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-2 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(241,48,36,0.9)]" />
              System Online
            </span>
            <span className="hidden text-white/35 sm:inline">Portfolio Interface v2.6</span>
          </div>

          <motion.p
            variants={fadeIn("down", 0.16)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 text-xs uppercase tracking-[0.34em] text-accent sm:text-sm"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            id="home-title"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 hero-title mx-auto mb-4 max-w-[880px] xl:mx-0"
          >
            Hi, I&apos;m {siteConfig.shortOwner}. <br /> I craft <span>game-ready</span> web systems.
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.24)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hero-mobile-avatar relative z-10 mx-auto mb-4 flex w-[clamp(168px,46vw,300px)] xl:hidden"
          >
            <div className="hero-mobile-avatar-shell">
              <Avatar priority sizes="(max-width: 768px) 300px, 46vw" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.28)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-5 max-w-[660px] px-1 text-sm text-white/64 sm:text-base xl:mx-0 xl:px-0"
          >
            {aboutSummary}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.32)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hero-command-row mb-5 flex w-full flex-col justify-center gap-3 sm:flex-row xl:justify-start"
          >
            <Link href="/work" className="hero-action hero-action-primary">
              View missions
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="hero-action hero-action-secondary">
              Start contact
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.36)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-5 grid w-full gap-3 text-left sm:grid-cols-3"
          >
            {gameStats.map((item) => (
              <div className="home-metric-card" key={item.label}>
                <p className="mb-1 text-[10px] uppercase tracking-[0.24em] text-white/35">{item.label}</p>
                <p className="mb-2 text-sm font-semibold text-white/80">{item.value}</p>
                <div className="stat-meter" style={{ "--meter-value": item.meter }} />
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="screen-only-comfort mb-4 w-full"
          >
            <SkillTicker />
          </motion.div>

          <div className="screen-only-tall w-full">
            <TerminalWindow />
          </div>
        </motion.section>

        <motion.aside
          variants={fadeIn("left", 0.36)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="hero-cockpit pointer-events-none relative hidden h-[min(68dvh,610px)] min-h-[430px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 p-6 shadow-[0_0_90px_rgba(47,132,255,0.12)] backdrop-blur-md xl:block"
          aria-hidden="true"
        >
          <div className="hero-cockpit-grid" />
          <div className="hero-holo-lines" />
          <div className="hero-reticle" />
          <div className="hero-cockpit-radar" />
          <ParticlesContainer />

          <div className="hero-avatar-stage absolute inset-x-4 bottom-0 top-10">
            <div className="hero-avatar-orbit hero-avatar-orbit-one" />
            <div className="hero-avatar-orbit hero-avatar-orbit-two" />
            <Avatar priority className="hero-cockpit-avatar absolute bottom-[-2%] left-1/2 w-[min(42vw,560px)] -translate-x-1/2" />
          </div>

          <div className="hero-status-card hero-status-card-top">
            <span>Current stack</span>
            <strong>Laravel + React</strong>
          </div>
          <div className="hero-status-card hero-status-card-bottom">
            <span>Interface mode</span>
            <strong>Responsive HUD</strong>
          </div>

          <div className="hero-code-strip">
            <span>compile()</span>
            <span>route: /home</span>
            <span>ux.level++</span>
          </div>

          <div className="hero-signal-stack">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-tool-grid absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
            {coreTools.map((tool) => (
              <span className="hero-tool-chip" key={tool}>{tool}</span>
            ))}
          </div>
        </motion.aside>
      </div>
    </ScreenFrame>
  );
};

export default Home;
