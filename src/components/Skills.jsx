import React from "react";

const Skills = () => {
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
      <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-12 text-center">
        Technical Toolkit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillGroups.map((group) => (
          <div key={group.category} className="text-center md:text-left">
            <h3 className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
              {group.category}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-xl hover:border-cyan-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
