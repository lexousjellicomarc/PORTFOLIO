import { motion } from "framer-motion";

import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import SkillTicker from "../components/SkillTicker";
import TerminalWindow from "../components/TerminalWindow";
import { aboutSummary } from "../data/about";
import { siteConfig } from "../data/siteConfig";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary/60 pb-28 xl:h-full xl:pb-0">
      <div className="w-full min-h-screen xl:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col justify-center px-5 pb-10 pt-32 text-center sm:px-6 sm:pt-36 md:pt-40 xl:h-full xl:px-0 xl:py-0 xl:pt-40 xl:text-left">
          <motion.p
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-xs uppercase tracking-[0.3em] text-accent sm:text-sm"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 glitch-text mx-auto max-w-4xl xl:mx-0"
          >
            Hi, I&apos;m {siteConfig.shortOwner}. <br /> I build{" "}
            <span className="text-accent">responsive web systems</span>.
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.28)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative z-10 mx-auto mb-7 flex w-[210px] sm:w-[280px] md:w-[340px] xl:hidden"
          >
            <Avatar priority sizes="(max-width: 768px) 340px, 70vw" />
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 max-w-[620px] px-1 text-sm sm:text-base xl:mx-0 xl:mb-12 xl:px-0"
          >
            {aboutSummary}
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.36)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/55 xl:justify-start"
          >
            <span className="game-chip px-4 py-2">
              Laravel + React
            </span>
            <span className="game-chip px-4 py-2">
              UI/UX Design
            </span>
            <span className="game-chip px-4 py-2">
              RFID / Arduino
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.39)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8"
          >
            <SkillTicker />
          </motion.div>

          <div className="mb-8 xl:max-w-[700px]">
            <TerminalWindow />
          </div>

          <div className="mb-8 grid gap-3 text-left sm:grid-cols-3 xl:max-w-[700px]">
            {[
              { label: "Rank", value: "Full-Stack Rookie+", meter: "0.82" },
              { label: "Mission", value: "Build usable systems", meter: "0.9" },
              { label: "Stack", value: "Laravel · React · UI", meter: "0.86" },
            ].map((item) => (
              <div
                className="cyber-panel rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md"
                key={item.label}
              >
                <p className="mb-1 text-[10px] uppercase tracking-[0.26em] text-white/35">
                  {item.label}
                </p>
                <p className="mb-3 text-sm font-semibold text-white/80">{item.value}</p>
                <div className="stat-meter" style={{ "--meter-value": item.meter }} />
              </div>
            ))}
          </div>

          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none hidden h-full w-[1280px] xl:absolute xl:bottom-0 xl:right-0 xl:block">
        <div
          className="bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden="true"
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 right-[8%] h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0"
        >
          <Avatar priority />

          <motion.span
            className="game-float absolute left-8 top-28 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/55 backdrop-blur-md"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Laravel
          </motion.span>
          <motion.span
            className="game-float absolute right-10 top-40 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            React UI
          </motion.span>
          <motion.span
            className="game-float absolute bottom-32 left-24 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          >
            RFID Systems
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
