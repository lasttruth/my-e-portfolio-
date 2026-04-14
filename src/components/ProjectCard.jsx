import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

function ProjectCard({ title, tech, description }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child waits 0.2s before starting
      },
    },
  };
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <motion.div
        variants={container} // This enables the stagger
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 "
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 text-left hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-4">
              <strong>{project.subtitle}</strong>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-bold bg-slate-800 text-slate-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectCard;
