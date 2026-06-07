import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Footer, Header } from "./components/layout";
import {  ExperienceTimeline, HeroSection, ProjectsShowroom, SkillsConstellation } from "./components/sections";
import { projects } from "./data/resume";
import type { ProjectId } from "./types/portfolio";

function App() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId>(projects[0].id);
  const reducedMotion = useReducedMotion();

  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} reduceMotion={Boolean(reducedMotion)} />
        <ExperienceTimeline />
        <ProjectsShowroom activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} />
        <SkillsConstellation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
