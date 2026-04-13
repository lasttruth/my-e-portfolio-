import React from "react";

const Footer = ({ onEmailClick }) => {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
      {/* The Name as the Anchor */}
      <p className="text-slate-200 font-bold text-lg tracking-tight">
        Robin Doirin
      </p>

      {/* Sub-data with subtle pipes */}
      <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mt-2">
        Frontend Engineer <span className="mx-2 text-slate-800">|</span> 2026{" "}
        <span className="mx-2 text-slate-800">|</span> Muncie, IN
      </p>

      {/* Links grouped together */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/lasttruth"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-cyan-400 transition-all text-xs font-medium"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/robin-doirin/"
          className="text-slate-400 hover:text-cyan-400 transition-all text-xs font-medium"
        >
          LinkedIn
        </a>
        <button
          onClick={onEmailClick}
          className="text-slate-400 hover:text-cyan-400 transition-all text-xs font-medium"
        >
          Email
        </button>
      </div>
    </footer>
  );
};

export default Footer;
