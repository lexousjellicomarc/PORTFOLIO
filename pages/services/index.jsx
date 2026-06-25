import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <section className="min-h-screen xl:h-full bg-primary/30 py-32 pb-36 xl:py-36 xl:pb-28 flex items-center">
      <Circles />
      <div className="container mx-auto px-5 sm:px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 glitch-text xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I help turn ideas into clean digital products by combining design,
              development, polishing, documentation, and deployment support.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Services;
