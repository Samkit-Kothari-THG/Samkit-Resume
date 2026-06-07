import { motion } from "framer-motion";
import { BadgeCheck, Download, MousePointer2 } from "lucide-react";
import { CommandCenterScene } from "../scene";
import { ProfileLinks } from "../ui/ProfileLinks";
import { profile } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { ActiveProjectBrief } from "./ActiveProjectBrief";
import { ImpactMetrics } from "./ImpactMetrics";

type HeroSectionProps = {
  activeProjectId: ProjectId;
  onSelectProject: (projectId: ProjectId) => void;
  reduceMotion: boolean;
  theme: ThemeMode;
};

export function HeroSection({ activeProjectId, onSelectProject, reduceMotion, theme }: HeroSectionProps) {
  return (
    <section className="hero-section" id="top">
      <div className="scene-layer" aria-hidden="true">
        <CommandCenterScene activeProjectId={activeProjectId} onSelectProject={onSelectProject} reduceMotion={reduceMotion} theme={theme} />
      </div>
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="eyebrow">
            <BadgeCheck size={18} aria-hidden="true" />
            Commerce Experience Command Center
          </div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="hero-summary">{profile.headline}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <MousePointer2 size={18} aria-hidden="true" />
              Explore projects
            </a>
            <a className="secondary-action" href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
          <ProfileLinks />
        </motion.div>

        <ActiveProjectBrief activeProjectId={activeProjectId} />
        <ImpactMetrics />
      </div>
      <a className="scroll-cue" href="#experience">
        Experience timeline
      </a>
    </section>
  );
}
