import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

function ProjectCard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 text-left hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Image Banner Container */}
              {project.image && (
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-800/80 mb-6 bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-1">
                {project.title}
              </h3>

              <p className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-4">
                <strong>{project.subtitle}</strong>
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold bg-slate-800 text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Added: Action Buttons Container */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900/60 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 backdrop-blur-md transition-all text-xs font-medium shadow-md hover:shadow-cyan-500/5"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}

              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors py-2"
                >
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectCard;
