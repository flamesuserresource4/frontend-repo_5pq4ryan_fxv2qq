import React from "react";
import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

const HeroAnimatedBackground = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden flex items-center justify-center bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="https://cdn.coverr.co/videos/coverr-man-lifting-weights-3314/1080p.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Train Hard. <span className="text-cyan-400">Shine Harder.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Welcome to IronPulse Fitness — a next-gen gym experience with
          personalized programs, elite trainers, and a community that drives
          results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <GlowButton>Join Now</GlowButton>
          <GlowButton variant="pink">Explore Programs</GlowButton>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -inset-40 opacity-40">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-80 rounded-full bg-violet-600 blur-[140px]" />
      </div>
    </section>
  );
};

export default HeroAnimatedBackground;
