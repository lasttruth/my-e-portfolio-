import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "FFXIV Mount Database",
    subtitle: "Real-time Data Dashboard",
    description:
      "An interactive tracker using XIVAPI to aggregate collectible data. Features dynamic filtering and state-managed search functionality.",
    tech: ["React", "REST API", "JavaScript"],
    link: "https://github.com/lasttruth/ff14-project", // Update with your actual link later
  },
  {
    id: 2,
    title: "Focuscision Newsletter",
    subtitle: "Client Marketing Solution",
    description:
      "A high-performance landing page integrated with Mailchimp API to automate lead generation for an eBay retail brand.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/lasttruth/newsletter-project",
  },
  {
    id: 3,
    title: "Treact Clone",
    subtitle: "UI/UX Fidelity Project",
    description:
      "A pixel-perfect recreation of a modern SaaS landing page, focusing on responsive design and advanced CSS layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/lasttruth/treact-clone",
  },
];

function App() {
  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
      <header className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          Robin Doirin
        </h1>
        <p className="text-xl text-slate-400 max-w-lg mt-6 leading-relaxed">
          Frontend Software Engineer specializing in{" "}
          <span className="text-white font-semibold">React</span>,
          <span className="text-white font-semibold"> TypeScript</span>, and
          immersive web experiences.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {projects.map((project) => (
            <div
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
