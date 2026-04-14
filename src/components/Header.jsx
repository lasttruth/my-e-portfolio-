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
    </motion.header>
  );
};

export default Header;
