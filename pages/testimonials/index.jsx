import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-primary/30 py-32 pb-36 xl:pb-28 text-center flex items-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-5 sm:px-6 xl:px-0">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Portfolio <span className="text-accent">highlights.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
