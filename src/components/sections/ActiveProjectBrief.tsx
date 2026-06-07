import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import { getPortfolioIcon } from "../ui/portfolioIcons";

type ActiveProjectBriefProps = {
  activeProjectId: ProjectId;
};

export function ActiveProjectBrief({ activeProjectId }: ActiveProjectBriefProps) {
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const ActiveIcon = getPortfolioIcon(activeProject.icon);

  return (
    <div className="active-brief" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.article
          key={activeProject.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28 }}
        >
          <div className="brief-heading">
            <ActiveIcon size={22} aria-hidden="true" />
            <span>Active project pod</span>
          </div>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.short}</p>
          <a href="#projects">
            View case details
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
