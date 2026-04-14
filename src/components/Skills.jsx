import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Faster stagger for skills
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
  const skillGroups = [
    {
      category: "Web Engineering",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
      ],
    },
    {
      category: "Game & Logic",
      items: ["Unity", "C#", "XR Interaction", "System Architecture"],
    },
    {
      category: "Tools & Design",
      items: ["Git/GitHub", "Vite", "Vercel", "DaVinci Resolve"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-12 text-center"
      >
        Technical Toolkit
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={itemVariants} // The whole column drifts up
            className="text-center md:text-left"
          >
            <h3 className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
              {group.category}
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                    borderColor: "rgb(34, 211, 238)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-xl hover:border-cyan-500/30 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
