import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { projectItems } from "../../data/projects";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary/30 px-0 pb-40 pt-32 sm:pt-36 xl:pb-28 xl:pt-36">
      <Circles />
      <div className="container relative z-10 mx-auto px-5 sm:px-6 xl:px-0">
        <div className="flex flex-col gap-x-8 gap-y-8 xl:flex-row">
          <div className="flex flex-col text-center lg:text-left xl:sticky xl:top-32 xl:w-[30vw] xl:self-start">
            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-3 text-xs uppercase tracking-[0.32em] text-accent"
            >
              Selected projects
            </motion.p>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 glitch-text"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-5 max-w-[430px] lg:mx-0"
            >
              A smoother scrollable project experience for web systems,
              interface improvements, documentation outputs, and
              hardware-assisted workflows.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.48)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto grid w-full max-w-[430px] grid-cols-3 gap-3 lg:mx-0"
            >
              <div className="cyber-panel rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm">
                <span className="block text-2xl font-semibold text-white">{projectItems.length}</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/40">Works</span>
              </div>
              <div className="cyber-panel rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm">
                <span className="block text-2xl font-semibold text-white">5+</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/40">Stacks</span>
              </div>
              <div className="cyber-panel rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm">
                <span className="block text-2xl font-semibold text-white">360°</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/40">UX</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[68%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Work;
