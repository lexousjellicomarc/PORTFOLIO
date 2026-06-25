import { motion } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "react-countup";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { aboutData, aboutSummary, statsData } from "../../data/about";
import { fadeIn } from "../../variants";

const getPreviousIndex = (currentIndex) =>
  currentIndex === 0 ? aboutData.length - 1 : currentIndex - 1;

const getNextIndex = (currentIndex) =>
  currentIndex === aboutData.length - 1 ? 0 : currentIndex + 1;

const getStableTabId = (item, itemIndex) => {
  if (item.id) {
    return item.id;
  }

  const fallbackId = item.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return fallbackId || `tab-${itemIndex}`;
};

const About = () => {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef([]);

  const selectTab = (nextIndex, shouldFocus = false) => {
    setIndex(nextIndex);

    if (shouldFocus) {
      requestAnimationFrame(() => {
        tabRefs.current[nextIndex]?.focus();
      });
    }
  };

  const handleTabKeyDown = (event) => {
    const keyActions = {
      ArrowLeft: () => getPreviousIndex(index),
      ArrowRight: () => getNextIndex(index),
      Home: () => 0,
      End: () => aboutData.length - 1,
    };

    const getNextTabIndex = keyActions[event.key];

    if (!getNextTabIndex) {
      return;
    }

    event.preventDefault();
    selectTab(getNextTabIndex(), true);
  };

  const activeTabId = getStableTabId(aboutData[index], index);

  return (
    <section className="relative min-h-screen bg-primary/30 py-32 pb-36 text-center xl:h-full xl:pb-20 xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pointer-events-none hidden xl:absolute xl:bottom-0 xl:-left-[370px] xl:flex"
      >
        <Avatar className="w-[737px]" />
      </motion.div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-16rem)] flex-col items-center gap-8 px-5 sm:px-6 xl:h-full xl:flex-row xl:gap-x-6 xl:px-0">
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building <span className="text-accent">functional</span> systems
            with clean design.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-6 max-w-[620px] px-2 text-sm sm:text-base xl:mx-0 xl:mb-10 xl:px-0"
          >
            {aboutSummary}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-8 flex w-[210px] sm:w-[260px] xl:hidden"
          >
            <Avatar sizes="260px" />
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-8 grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 xl:mx-0 xl:max-w-none xl:gap-x-6"
          >
            {statsData.map((stat) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center xl:border-0 xl:bg-transparent xl:px-0 xl:py-0 xl:text-left"
                key={stat.label}
              >
                <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
                  <CountUp start={0} end={stat.value} duration={4} />
                  {stat.suffix || ""}
                </div>
                <div className="mx-auto max-w-[120px] text-xs uppercase leading-[1.4] tracking-[1px] text-white/70 xl:mx-0">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex min-h-[460px] w-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm sm:p-6 xl:max-w-[50%] xl:border-0 xl:bg-transparent xl:p-0 xl:backdrop-blur-0"
        >
          <div
            className="mx-auto mb-6 flex flex-wrap justify-center gap-x-4 gap-y-4 xl:mx-0 xl:justify-start xl:gap-x-8"
            role="tablist"
            aria-label="About information tabs"
            onKeyDown={handleTabKeyDown}
          >
            {aboutData.map((item, itemIndex) => {
              const isActive = index === itemIndex;
              const stableTabId = getStableTabId(item, itemIndex);
              const tabId = `about-tab-${stableTabId}`;
              const panelId = `about-panel-${stableTabId}`;

              return (
                <button
                  key={item.title}
                  id={tabId}
                  ref={(element) => {
                    tabRefs.current[itemIndex] = element;
                  }}
                  type="button"
                  className={`${
                    isActive
                      ? "text-accent after:w-full after:bg-accent"
                      : "after:w-8 after:bg-white"
                  } relative cursor-pointer rounded-sm text-sm capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base xl:text-lg`}
                  onClick={() => selectTab(itemIndex)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div
            id={`about-panel-${activeTabId}`}
            className="flex flex-col items-center gap-y-5 py-2 xl:items-start xl:py-6"
            role="tabpanel"
            aria-labelledby={`about-tab-${activeTabId}`}
          >
            {aboutData[index].info.map((item) => (
              <div
                key={`${item.title}-${item.stage || "icons"}`}
                className="flex w-full flex-col items-center gap-2 rounded-2xl border border-white/10 bg-primary/20 p-4 text-center text-white/65 md:flex-row md:items-start md:text-left xl:max-w-none xl:border-0 xl:bg-transparent xl:p-0"
              >
                <div className="min-w-[190px] font-medium text-white/85">
                  {item.title}
                </div>
                {item.stage && <div className="hidden text-white/30 md:flex">-</div>}
                {item.stage && <div className="flex-1 text-sm leading-relaxed">{item.stage}</div>}

                {item.icons && (
                  <div className="flex flex-wrap justify-center gap-3 md:max-w-[220px] md:justify-end xl:max-w-none">
                    {item.icons.map((Icon, iconIndex) => (
                      <div key={iconIndex} className="text-xl text-white sm:text-2xl">
                        <Icon aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
