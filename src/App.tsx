import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Footer, Header } from "./components/layout";
import { ExperienceTimeline, HeroSection, ProjectsShowroom, SkillsConstellation } from "./components/sections";
import { projects } from "./data/resume";
import { useThemePreference } from "./hooks/useThemePreference";
import type { ProjectId } from "./types/portfolio";

function App() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId>(projects[0].id);
  const reducedMotion = useReducedMotion();
  const { theme, toggleTheme } = useThemePreference();

  return (
    <div className="app-shell" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} reduceMotion={Boolean(reducedMotion)} theme={theme} />
        <ExperienceTimeline />
        <ProjectsShowroom activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} />
        <SkillsConstellation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
