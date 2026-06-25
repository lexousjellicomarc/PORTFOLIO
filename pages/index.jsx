import { motion } from "framer-motion";

import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import ScreenFrame from "../components/ScreenFrame";
import SkillTicker from "../components/SkillTicker";
import TerminalWindow from "../components/TerminalWindow";
import { aboutSummary } from "../data/about";
import { siteConfig } from "../data/siteConfig";
import { fadeIn } from "../variants";

const gameStats = [
  { label: "Rank", value: "Full-Stack Rookie+", meter: "0.82" },
  { label: "Mission", value: "Build usable systems", meter: "0.9" },
  { label: "Stack", value: "Laravel · React · UI", meter: "0.86" },
];

const Home = () => {
  return (
    <ScreenFrame
      className="bg-primary/60"
      frameClassName="screen-home-frame bg-gradient-to-r from-primary/10 via-black/30 to-black/10 text-center xl:text-left"
    >
      <div className="container desktop-safe-container relative z-10 mx-auto grid w-full items-center gap-6 px-5 sm:px-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(390px,0.82fr)] xl:gap-8 xl:px-0">
        <div className="mx-auto flex max-w-[720px] flex-col items-center xl:mx-0 xl:items-start">
          <motion.p
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 text-xs uppercase tracking-[0.3em] text-accent sm:text-sm"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 glitch-text mx-auto mb-4 max-w-4xl xl:mx-0"
          >
            Hi, I&apos;m {siteConfig.shortOwner}. <br /> I build{" "}
            <span className="text-accent">responsive web systems</span>.
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.28)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative z-10 mx-auto mb-4 flex w-[clamp(150px,42vw,280px)] xl:hidden"
          >
            <Avatar priority sizes="(max-width: 768px) 280px, 42vw" />
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-5 max-w-[620px] px-1 text-sm sm:text-base xl:mx-0 xl:px-0"
          >
            {aboutSummary}
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.36)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 flex flex-wrap justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/55 sm:gap-3 xl:justify-start"
          >
            <span className="game-chip px-4 py-2">Laravel + React</span>
            <span className="game-chip px-4 py-2">UI/UX Design</span>
            <span className="game-chip px-4 py-2">RFID / Arduino</span>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.39)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="screen-only-comfort mb-4 w-full"
          >
            <SkillTicker />
          </motion.div>

          <div className="screen-only-tall mb-4 w-full xl:max-w-[700px]">
            <TerminalWindow />
          </div>

          <div className="home-stat-grid mb-5 grid w-full gap-3 text-left sm:grid-cols-3 xl:max-w-[700px]">
            {gameStats.map((item) => (
              <div
                className="cyber-panel rounded-2xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-md sm:p-4"
                key={item.label}
              >
                <p className="mb-1 text-[10px] uppercase tracking-[0.24em] text-white/35">
                  {item.label}
                </p>
                <p className="mb-2 text-sm font-semibold text-white/80">{item.value}</p>
                <div className="stat-meter" style={{ "--meter-value": item.meter }} />
              </div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start"
          >
            <ProjectsBtn />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pointer-events-none relative hidden h-[min(66dvh,590px)] min-h-[420px] xl:block"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-explosion bg-cover bg-center bg-no-repeat opacity-70 mix-blend-color-dodge translate-z-0" />
          <ParticlesContainer />
          <Avatar priority className="absolute bottom-[-4%] right-[-2%] w-[min(42vw,610px)]" />

          <motion.span
            className="game-float absolute left-6 top-[20%] rounded-full border border-white/10 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/55 backdrop-blur-md"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Laravel
          </motion.span>
          <motion.span
            className="game-float absolute right-4 top-[30%] rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            React UI
          </motion.span>
          <motion.span
            className="game-float absolute bottom-[18%] left-[18%] rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          >
            RFID Systems
          </motion.span>
        </motion.div>
      </div>
    </ScreenFrame>
  );
};

export default Home;
