import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child waits 0.2s before starting
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center py-20 px-4"
    >
      {/* 1. Changed to motion.h1 and added variants={item} */}
      <motion.h1
        variants={item}
        className="text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      >
        Robin Doirin
      </motion.h1>
      {/* 2. Changed to motion.p and added variants={item} */}
      <motion.p
        variants={item}
        className="text-xl text-slate-400 max-w-lg mt-6 leading-relaxed"
      >
        Software Engineer specializing in{" "}
        <span className="text-white font-semibold">Frontend</span>,
        <span className="text-white font-semibold"> Game Systems</span>, and
        immersive web experiences.
      </motion.p>
      {/* 3. Added Resume Download Button as an animated child */}
      <motion.div variants={item} className="mt-8">
        <a
          href="/Robin_Doirin.pdf"
          download="Robin_Doirin_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 backdrop-blur-md transition-all text-sm font-medium shadow-lg hover:shadow-cyan-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download Resume
        </a>
      </motion.div>{" "}
    </motion.header>
  );
};

export default Header;
