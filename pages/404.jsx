import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Custom404 = () => {
  return (
    <section className="min-h-screen bg-primary/30 flex items-center justify-center px-6 py-32 text-center">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-xl"
      >
        <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">
          404 error
        </p>
        <h1 className="h1 mb-4">Page not found.</h1>
        <p className="mb-8">
          The page you opened may have been moved, renamed, or removed. Return
          to the homepage to continue exploring the portfolio.
        </p>
        <Link
          href="/"
          className="btn rounded-full border border-white/50 px-8 inline-flex items-center justify-center hover:border-accent transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Back to home
        </Link>
      </motion.div>
    </section>
  );
};

export default Custom404;
