import { useState } from "react";
import "./App.css";
import ContactModal from "./components/ContactModal";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("Button was clicked!");
    setIsModalOpen(true);
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
      <Header />
      <Skills />
      <ProjectCard />
      <Footer onEmailClick={openModal} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
