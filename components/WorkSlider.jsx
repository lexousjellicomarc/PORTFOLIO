import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowRight, BsController, BsMouse } from "react-icons/bs";

import { projectItems } from "../data/projects";

const rankMap = ["S", "A+", "A", "B+", "B", "A", "A+", "B+"];
const statusMap = ["Live-ready", "UI polished", "Logic built", "Mobile tuned"];

const WorkSlider = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="cyber-panel mb-4 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_45px_rgba(241,48,36,0.08)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-accent">
            <BsController className="text-sm" aria-hidden="true" />
            Mission board
          </p>
          <p className="mt-1 text-sm text-white/55">
            {projectItems.length} selected works — scroll inside the game panel to explore each project quest.
          </p>
        </div>
        <div className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/50">
          <BsMouse className="text-accent" aria-hidden="true" />
          Scroll projects
        </div>
      </div>

      <div
        className="portfolio-scrollbar relative max-h-[72vh] snap-y overflow-y-auto overflow-x-hidden rounded-[2rem] border border-white/10 bg-black/15 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm sm:max-h-[68vh] sm:p-4 xl:max-h-[590px]"
        aria-label="Scrollable project mission list"
        tabIndex={0}
      >
        <div className="pointer-events-none sticky top-0 z-20 h-8 bg-gradient-to-b from-[#10101b] to-transparent" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-4 pb-6 sm:gap-5 lg:grid-cols-2">
          {projectItems.map((project, index) => {
            const rank = rankMap[index % rankMap.length];
            const status = statusMap[index % statusMap.length];
            const meter = String(Math.min(0.94, 0.72 + index * 0.025));

            return (
              <motion.article
                className="cyber-panel glow-card group relative flex min-h-[360px] scroll-mt-6 snap-start flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 focus-within:border-accent/70 sm:min-h-[390px]"
                key={`${project.title}-${project.path}-${index}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3), ease: "easeOut" }}
              >
                <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-md">
                  <span className="text-accent">#{String(index + 1).padStart(2, "0")}</span>
                  Quest
                </div>
                <div className="absolute right-5 top-5 z-20 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-blue-100/70 backdrop-blur-md">
                  Rank {rank}
                </div>

                <div className="relative h-48 overflow-hidden sm:h-52">
                  <Image
                    src={project.path}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1200px) 360px, (min-width: 960px) 44vw, 92vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c15] via-[#0c0c15]/35 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-4">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/45">
                      <span>Completion</span>
                      <span>{status}</span>
                    </div>
                    <div className="stat-meter" style={{ "--meter-value": meter }} />
                  </div>
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="game-chip px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent">
                      {project.category}
                    </span>
                    <span className="game-chip px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[11px] font-light uppercase tracking-[0.18em] text-white/45">
                    {project.tech}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} highlights`}>
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50"
                        key={`${project.title}-${tag}`}
                      >
                        + {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex w-max items-center gap-x-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    aria-label={`Open ${project.title} project`}
                  >
                    <span>Start</span>
                    <span>Mission</span>
                    <BsArrowRight className="text-base" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="pointer-events-none sticky bottom-0 z-20 h-10 bg-gradient-to-t from-[#10101b] to-transparent" aria-hidden="true" />
      </div>
    </div>
  );
};

export default WorkSlider;
